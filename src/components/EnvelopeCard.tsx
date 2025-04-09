
import { useState } from 'react';
import { Heart, Flower } from 'lucide-react';

const EnvelopeCard = ({ onOpen }: { onOpen: () => void }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="envelope-card rounded-3xl p-8 md:p-12 max-w-md mx-auto text-center bg-white bg-opacity-90 shadow-xl relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onOpen}
    >
      {/* Bible verse at the top */}
      <div className="absolute top-0 left-0 right-0 px-6 pt-4">
        <p className="text-sm italic text-pink-600 font-serif">
          "Many waters cannot quench love; rivers cannot sweep it away. If one were to give all the wealth of one's house for love, it would be utterly scorned."
        </p>
        <p className="text-xs text-pink-500 font-serif mt-1">— Song of Solomon 8:7</p>
      </div>
      
      <div className="mt-28 mb-2">
        <p className="text-2xl font-script text-purple-600 mb-2">To</p>
        <h2 className="text-4xl font-bold text-pink-600 mb-4 font-serif tracking-wide">Florence</h2>
      </div>
      
      <div className="envelope-flap relative mt-4 flex justify-center">
        <Heart
          className={`text-pink-400 transition-transform duration-300 z-10 cursor-pointer ${
            isHovering ? 'scale-110' : ''
          }`}
          size={60}
          fill="#FFDEE2"
          strokeWidth={1.5}
        />
      </div>
      
      <div className="mt-6 flex justify-center items-center">
        <Flower className="text-pink-300 mr-2" size={20} />
        <p className="text-purple-600 text-sm">Click to open</p>
        <Flower className="text-pink-300 ml-2" size={20} />
      </div>
    </div>
  );
};

export default EnvelopeCard;
