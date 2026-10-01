"""Build shared 40x40 EB Garamond glyphs and hero contour stitches. Requires Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import json
root=Path(__file__).resolve().parents[1]
# Forty cells preserve Garamond's stroke contrast and small bracketed serifs.
font=ImageFont.truetype(str(root/'public/fonts/EBGaramond.ttf'),380)
glyphs={}
for ch in sorted(set('tanisha jainportfolio the studio little joys')):
    im=Image.new('L',(400,400))
    ImageDraw.Draw(im).text((10,290),ch,font=font,fill=255,anchor='ls')
    small=im.resize((40,40),Image.Resampling.BOX)
    cells=[[x,y] for y in range(40) for x in range(40) if small.getpixel((x,y))>=100]
    left=min((x for x,y in cells),default=0)
    right=max((x for x,y in cells),default=7)
    glyphs[ch]={'cells':[[x-left,y] for x,y in cells],'advance':right-left+3 if ch!=' ' else 9}

# Preserve the font's original proportions, side bearings, and pair kerning.
# No erosion, stretched ascenders, or individually resized characters.
name_grid=36
name_glyphs={}
for ch in set('tanishj'):
    im=Image.new('L',(400,400))
    ImageDraw.Draw(im).text((10,290),ch,font=font,fill=255,anchor='ls')
    small=im.resize((name_grid,name_grid),Image.Resampling.BOX)
    cells=[[x,y] for y in range(name_grid) for x in range(name_grid) if small.getpixel((x,y))>=110]
    name_glyphs[ch]={'cells':cells}

def outline(cells,ox,oy):
    mask=Image.new('L',(440,440)); draw=ImageDraw.Draw(mask)
    for x,y in cells: draw.rectangle((x*10+10,y*10+10,x*10+19,y*10+19),fill=255)
    mask=mask.filter(ImageFilter.MaxFilter(7)); px=mask.load(); edges={}
    def ink(x,y):return 0<=x<440 and 0<=y<440 and px[x,y]>0
    for y in range(440):
        for x in range(440):
            if not ink(x,y):continue
            for q,a,b in [((x,y-1),(x,y),(x+1,y)),((x+1,y),(x+1,y),(x+1,y+1)),((x,y+1),(x+1,y+1),(x,y+1)),((x-1,y),(x,y+1),(x,y))]:
                if not ink(*q):edges[a]=b
    paths=[]
    while edges:
        start=next(iter(edges)); p=start; loop=[]
        while p in edges:
            loop.append(p);p=edges.pop(p)
            if p==start:break
        area=sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(loop,loop[1:]+loop[:1]))
        if area<=0:continue
        count=round(len(loop)/10)
        for i in range(count):
            pts=[loop[int((i+.15+t*.52)*len(loop)/count)%len(loop)] for t in [0,.5,1]]
            paths.append('M%.1f %.1fL%.1f %.1fL%.1f %.1f'%tuple(v for x,y in pts for v in (x+ox-10,y+oy-10)))
    return paths
rows=['tanisha','jain']
scale=name_grid/400*10
widths=[font.getlength(row)*scale for row in rows]
width=round(max(widths))+40
letters=[];blocks=[]
for row_i,row in enumerate(rows):
    origin=(width-widths[row_i])/2
    y=row_i*290
    for i,c in enumerate(row):
        # A prefix plus the current pair retains the font's pair positioning.
        prefix=font.getlength(row[:i+1])-font.getlength(c)
        x=round((origin+prefix*scale)/10)*10
        cells=name_glyphs[c]['cells']
        blocks.extend([[x+cx*10,y+cy*10] for cx,cy in cells])
        letters.append(outline(cells,x,y))
# Crop unused canvas margins, preserving shared baselines and line spacing.
left=min(x for x,y in blocks)-10; top=min(y for x,y in blocks)-10
right=max(x for x,y in blocks)+20; bottom=max(y for x,y in blocks)+20
# Keep paths and pixels in the same original coordinate system via the viewBox.
out={'grid':40,'glyphs':glyphs,'name':{'width':right-left,'height':bottom-top,'viewBox':f'{left} {top} {right-left} {bottom-top}','blocks':blocks,'letters':letters}}
(root/'src/app/components/pixel-type.json').write_text(json.dumps(out,separators=(',',':'))+'\n')
print('Generated natural Garamond geometry:',out['name']['viewBox'])
