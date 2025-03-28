import React from 'react';

const AnimatedBubbles: React.FC = () => {
  const bubbles = Array.from({ length: 10 });

  return (
    // Fixed container covering the whole screen with a high z-index and no pointer events
    <div className="fixed inset-0 pointer-events-none z-50">
      {bubbles.map((_, i) => {
        const size = Math.random() * 50 + 50; // size between 50px and 100px
        const left = Math.random() * 100; // horizontal position between 0% and 100%
        const duration = Math.random() * 10 + 5; // duration between 5s and 15s
        const delay = Math.random() * -20; // negative delay for staggered start

        return (
          <div
            key={i}
            className="absolute bg-blue-600 rounded-full opacity-70 animate-bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default AnimatedBubbles;
