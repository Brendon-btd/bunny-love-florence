
import { useEffect, useState } from 'react';
import { Egg, Flower, Sparkles } from 'lucide-react';

interface FloatingElement {
  id: number;
  type: 'egg' | 'flower' | 'sparkle';
  x: number;
  y: number;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = [];
      
      // Generate eggs (5-8)
      const eggCount = Math.floor(Math.random() * 4) + 5;
      for (let i = 0; i < eggCount; i++) {
        newElements.push({
          id: newElements.length,
          type: 'egg',
          x: Math.random() * 90 + 5, // percentage of viewport width
          y: Math.random() * 80 + 10, // percentage of viewport height
          size: Math.random() * 20 + 10, // size in pixels
          rotation: Math.random() * 360, // degrees
          delay: Math.random() * 5, // animation delay in seconds
          duration: Math.random() * 5 + 5, // animation duration in seconds
        });
      }
      
      // Generate flowers (8-12)
      const flowerCount = Math.floor(Math.random() * 5) + 8;
      for (let i = 0; i < flowerCount; i++) {
        newElements.push({
          id: newElements.length,
          type: 'flower',
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          size: Math.random() * 15 + 8,
          rotation: Math.random() * 360,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
        });
      }
      
      // Generate sparkles (10-15)
      const sparkleCount = Math.floor(Math.random() * 6) + 10;
      for (let i = 0; i < sparkleCount; i++) {
        newElements.push({
          id: newElements.length,
          type: 'sparkle',
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          size: Math.random() * 12 + 5,
          rotation: Math.random() * 360,
          delay: Math.random() * 3,
          duration: Math.random() * 8 + 4,
        });
      }
      
      return newElements;
    };
    
    setElements(generateElements());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => {
        let Icon;
        let color = '';
        
        switch (element.type) {
          case 'egg':
            Icon = Egg;
            color = [
              '#FFDEE2', // pink
              '#E5DEFF', // lavender
              '#FFF4BD', // yellow
              '#D8F5E8', // mint
              '#FFFDF0', // cream
            ][Math.floor(Math.random() * 5)];
            break;
          case 'flower':
            Icon = Flower;
            color = [
              '#FFDEE2', // pink
              '#E5DEFF', // lavender
              '#FFF4BD', // yellow
              '#D8F5E8', // mint
            ][Math.floor(Math.random() * 4)];
            break;
          case 'sparkle':
            Icon = Sparkles;
            color = 'rgba(255, 255, 255, 0.7)';
            break;
          default:
            return null;
        }
        
        return (
          <div
            key={element.id}
            className="absolute opacity-70"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <Icon 
              size={element.size} 
              color={color}
              className="animate-spin-slow drop-shadow-md"
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
