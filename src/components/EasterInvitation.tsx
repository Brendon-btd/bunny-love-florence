
import { useState } from 'react';
import MovingButton from './MovingButton';
import Celebration from './Celebration';
import { Heart } from 'lucide-react';

const EasterInvitation = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYes = () => {
    setShowCelebration(true);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="card-container rounded-3xl p-8 md:p-12 max-w-md mx-auto text-center relative z-10 animate-scale-in">
        <div className="flex justify-center mb-4">
          <Heart 
            className="text-pink-400 animate-heart-beat" 
            size={50} 
            fill="#FFDEE2" 
            strokeWidth={1.5} 
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
          Florence, will you be my Easter Bunny this holiday?
        </h1>
        
        <p className="text-lg text-purple-700 mb-10">
          Hoping for a sweet holiday together 💕
        </p>
        
        <div className="flex flex-col gap-6">
          <button
            onClick={handleYes}
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 
                     text-white py-3 px-10 rounded-full text-xl font-bold shadow-lg
                     border-2 border-white transition-all duration-300
                     hover:scale-105 mx-auto"
          >
            Yes! 💖
          </button>
          
          <MovingButton className="text-lg">
            No, thanks
          </MovingButton>
        </div>
      </div>

      {showCelebration && <Celebration />}
    </div>
  );
};

export default EasterInvitation;
