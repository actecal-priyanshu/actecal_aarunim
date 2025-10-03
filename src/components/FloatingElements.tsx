import React, { useEffect, useRef } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'rotate';
  intensity?: 'low' | 'medium' | 'high';
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 3,
  direction = 'up',
  intensity = 'medium'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getAnimationProperties = () => {
      const intensityValue = intensity === 'high' ? 20 : intensity === 'medium' ? 15 : 10;
      
      switch (direction) {
        case 'up':
          return {
            transform: `translateY(-${intensityValue}px)`,
            animation: `floatUp ${duration}s ease-in-out infinite`
          };
        case 'down':
          return {
            transform: `translateY(${intensityValue}px)`,
            animation: `floatDown ${duration}s ease-in-out infinite`
          };
        case 'left':
          return {
            transform: `translateX(-${intensityValue}px)`,
            animation: `floatLeft ${duration}s ease-in-out infinite`
          };
        case 'right':
          return {
            transform: `translateX(${intensityValue}px)`,
            animation: `floatRight ${duration}s ease-in-out infinite`
          };
        case 'rotate':
          return {
            transform: `rotate(${intensityValue}deg)`,
            animation: `floatRotate ${duration}s ease-in-out infinite`
          };
        default:
          return {};
      }
    };

    const animationDelay = delay * 1000;
    const animationProps = getAnimationProperties();

    element.style.animationDelay = `${animationDelay}ms`;
    Object.assign(element.style, animationProps);

    return () => {
      if (element) {
        element.style.animation = 'none';
      }
    };
  }, [delay, duration, direction, intensity]);

  return (
    <div ref={elementRef} style={{ display: 'inline-block' }}>
      {children}
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-${intensity === 'high' ? 20 : intensity === 'medium' ? 15 : 10}px); }
        }
        
        @keyframes floatDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(${intensity === 'high' ? 20 : intensity === 'medium' ? 15 : 10}px); }
        }
        
        @keyframes floatLeft {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-${intensity === 'high' ? 20 : intensity === 'medium' ? 15 : 10}px); }
        }
        
        @keyframes floatRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(${intensity === 'high' ? 20 : intensity === 'medium' ? 15 : 10}px); }
        }
        
        @keyframes floatRotate {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(${intensity === 'high' ? 20 : intensity === 'medium' ? 15 : 10}deg); }
        }
      `}</style>
    </div>
  );
};

interface FloatingElementsProps {
  children: React.ReactNode;
  count?: number;
  elements?: Array<{
    emoji: string;
    size: number;
    position: { x: number; y: number };
    delay: number;
    duration: number;
    direction: 'up' | 'down' | 'left' | 'right' | 'rotate';
  }>;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  children,
  count = 8,
  elements
}) => {
  const defaultElements = elements || Array.from({ length: count }, (_, i) => ({
    emoji: ['✨', '⭐', '💫', '🌟', '🎯', '🚀', '💎', '🎨'][i % 8],
    size: Math.random() * 20 + 15,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100
    },
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 2,
    direction: ['up', 'down', 'left', 'right', 'rotate'][Math.floor(Math.random() * 5)] as any
  }));

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {children}
      {defaultElements.map((element, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${element.position.x}%`,
            top: `${element.position.y}%`,
            fontSize: `${element.size}px`,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.6
          }}
        >
          <FloatingElement
            delay={element.delay}
            duration={element.duration}
            direction={element.direction}
            intensity="medium"
          >
            {element.emoji}
          </FloatingElement>
        </div>
      ))}
    </div>
  );
};
