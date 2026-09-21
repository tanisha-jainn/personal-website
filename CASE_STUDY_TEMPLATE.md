# Turning a side project into a case study

Keep the public story concise and link to the supporting artifacts. Mark proposed work as proposed. Never present a prototype, simulated result, or target metric as a shipped outcome.

## 1. Snapshot
Name, one-sentence problem, target user, role, collaborators, dates, status (concept / prototype / built / tested / shipped), and working links.

## 2. The initial issue
What happened that made you notice this? Who encounters it, how often, and what workaround do they use? Record observations, interviews, or sources; separate evidence from assumptions.

## 3. Brainstorm & decisions
Show a photo or diagram of the actual brainstorm. Compare 2–3 approaches, explain tradeoffs, and record why you chose one. Include a discarded idea when it helps explain the decision.

## 4. PRD
- Problem and target user
- Job to be done and core user journey
- Goal and measurable success criteria (targets, not results)
- MVP requirements with acceptance criteria
- Explicit non-goals
- Dependencies, risks, privacy considerations when relevant
- Launch and evaluation plan

## 5. Design
Initial flow → wireframes → prototype. Annotate decisions and include loading, empty, error, and accessibility states. Document feedback and revisions.

## 6. Build
Link the repository and a working demo. Explain the actual stack, architecture, data flow, one hard technical decision, and what you personally implemented. Include screenshots or a short recording. Never expose credentials or private data.

## 7. Test & learn
Who tested it? What task did they attempt? What failed? What changed? Separate measured outcomes from proposed metrics. Small honest evidence is better than invented impact.

## 8. Next steps
What remains unbuilt or untested, and what would you prioritize next?

# Adding a project to this site

Project content lives in `src/app/data/projects.ts`. Each entry powers its card and `/portfolio/[slug]` page. Category filters update automatically. Add a corresponding visual in `src/app/components/ProjectVisual.tsx` for a new project; replace concept art with your own screenshots when available.

The existing case studies use the earlier website's descriptions. Their notebook sections identify missing evidence. Verify dates, role descriptions, and technical details before publication. For side projects with richer artifacts, extend the shared case-study page with dedicated PRD, brainstorm, design, and demo sections using the outline above.
