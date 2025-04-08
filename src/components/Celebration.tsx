
import { useState, useEffect } from 'react';
import { Egg, Heart, Sparkles } from 'lucide-react';

interface FallingItem {
  id: number;
  type: 'heart' | 'egg' | 'sparkle';
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const Celebration = () => {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    const generateItems = () => {
      const newItems: FallingItem[] = [];
      const types = ['heart', 'egg', 'sparkle'];
      
      // Generate 50 falling items
      for (let i = 0; i < 50; i++) {
        newItems.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)] as 'heart' | 'egg' | 'sparkle',
          x: Math.random() * 100, // percentage
          delay: Math.random() * 5, // seconds
          duration: Math.random() * 6 + 4, // seconds
          size: Math.random() * 20 + 10, // pixels
        });
      }
      
      return newItems;
    };
    
    setItems(generateItems());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/70 to-purple-100/70 z-10" />
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 
            className="text-3xl md:text-5xl font-bold text-pink-500 mb-4 animate-scale-in"
            style={{ animationDelay: '0.5s' }}
          >
            Yay! You're my Easter Bunny! 
          </h2>
          <p 
            className="text-xl md:text-2xl text-purple-700 animate-scale-in"
            style={{ animationDelay: '1s' }}
          >
            🐰🌸💗
          </p>
        </div>
      </div>
      
      {items.map((item) => {
        let Icon;
        let color = '';
        
        switch (item.type) {
          case 'heart':
            Icon = Heart;
            color = '#FFDEE2';
            break;
          case 'egg':
            Icon = Egg;
            color = [
              '#FFDEE2', // pink
              '#E5DEFF', // lavender
              '#FFF4BD', // yellow
              '#D8F5E8', // mint
            ][Math.floor(Math.random() * 4)];
            break;
          case 'sparkle':
            Icon = Sparkles;
            color = '#FFFDF0';
            break;
          default:
            return null;
        }
        
        return (
          <div
            key={item.id}
            className="absolute top-0"
            style={{
              left: `${item.x}%`,
              animation: `fall ${item.duration}s linear forwards`,
              animationDelay: `${item.delay}s`,
            }}
          >
            <Icon 
              size={item.size} 
              color={color} 
              fill={item.type === 'heart' ? color : ''}
              className="drop-shadow-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Celebration;
