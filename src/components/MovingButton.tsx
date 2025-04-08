import { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface MovingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MovingButton = ({ children, className, onClick }: MovingButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [clickCount, setClickCount] = useState(0);

  const moveButton = () => {
    if (!buttonRef.current || !containerRef.current) return;
    
    const buttonWidth = buttonRef.current.offsetWidth;
    const buttonHeight = buttonRef.current.offsetHeight;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    
    // Calculate boundaries to keep button visible
    const maxX = containerWidth - buttonWidth - 20;
    const maxY = containerHeight - buttonHeight - 20;
    
    // Generate new random position
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    // Ensure minimum movement distance
    if (Math.abs(newX - position.x) < 100) {
      newX = (position.x + 150) % maxX;
    }
    if (Math.abs(newY - position.y) < 50) {
      newY = (position.y + 100) % maxY;
    }
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // If mouse gets close to the button, move it away
    if (
      mouseX > rect.left - 100 &&
      mouseX < rect.right + 100 &&
      mouseY > rect.top - 100 &&
      mouseY < rect.bottom + 100
    ) {
      moveButton();
    }
  };

  const handleTouchStart = () => {
    moveButton();
  };

  const handleClick = () => {
    // Increment click count
    setClickCount(clickCount + 1);
    
    // If they've tried to click 3 or more times, or if there's a provided onClick handler
    if (clickCount >= 2 || onClick) {
      // Call the provided onClick handler if it exists
      if (onClick) onClick();
    } else {
      // Otherwise just move the button
      moveButton();
    }
  };

  useEffect(() => {
    // Start with a random position
    setTimeout(() => {
      moveButton();
    }, 500);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-32 md:h-40 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
    >
      <button
        ref={buttonRef}
        className={cn(
          "absolute transition-transform duration-300 bg-red-400 hover:bg-red-500 text-white py-2 px-8 rounded-full shadow-lg transform hover:scale-105",
          "outline-none border-2 border-white",
          className
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: 10
        }}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

export default MovingButton;
