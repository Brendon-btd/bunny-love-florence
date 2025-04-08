import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const LoveLetter = ({ onBackToEnvelope }: { onBackToEnvelope: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay before showing the letter for a nice transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <div className="letter bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-lg mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4">
          <Heart 
            className="text-pink-400" 
            size={40} 
            fill="#FFDEE2" 
            strokeWidth={1.5} 
          />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Heart 
            className="text-pink-400" 
            size={30} 
            fill="#FFDEE2" 
            strokeWidth={1.5} 
          />
        </div>
        
        {/* Letter content */}
        <div className="text-center space-y-6">
          <div className="font-script text-lg text-purple-600 mb-4">My Dearest Florence,</div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 font-serif">
            Will you be my Easter Bunny this holiday?
          </h1>
          
          <p className="text-purple-700 leading-relaxed">
            They say Easter is about new beginnings and sweet surprises.
            Nothing would make this holiday more special than spending it with you.
            Let's create sweet memories together!
          </p>
          
          <div className="pt-4 flex flex-col gap-6">
            <button
              onClick={onBackToEnvelope}
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 
                       text-white py-3 px-10 rounded-full text-xl font-bold shadow-lg
                       border-2 border-white transition-all duration-300
                       hover:scale-105 mx-auto"
            >
              Yes! 💖
            </button>
            
            {/* We'll keep the moving button for the "No" option */}
            <div className="relative">
              <button
                className="invisible"
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>
        
        {/* Fancy border */}
        <div className="absolute inset-0 border-4 border-pink-100 rounded-xl pointer-events-none" style={{
          borderImage: 'linear-gradient(to right, #FFDEE2, #E5DEFF, #D8F5E8, #FFDEE2) 1'
        }}></div>
      </div>
    </div>
  );
};

export default LoveLetter;
