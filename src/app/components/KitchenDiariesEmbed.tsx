import React from 'react';

const KitchenDiariesEmbed: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align iframe to the top
        height: '100vh', // Use full viewport height to avoid extra space
        margin: 0,
        padding: 0,
        position: 'relative',
      }}
    >
      <iframe
        style={{
          transform: 'scale(0.9)', // Adjust zoom level
          transformOrigin: 'center center', // Ensure proper scaling from top-center
          width: '100%', // Adjust to account for scaling
          height: '100vh', // Match parent container height
          border: 'none',
        }}
        src="https://tanishajain1113.wixsite.com/thekitchendiaries"
        allowFullScreen
      />
    </div>
  );
};

export default KitchenDiariesEmbed;
