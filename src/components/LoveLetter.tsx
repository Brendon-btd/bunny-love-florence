
import { useEffect, useState } from 'react';
import { Heart, Flower, Sparkles } from 'lucide-react';
import { toast } from "sonner";
import MovingButton from './MovingButton';

const LoveLetter = ({ onBackToEnvelope }: { onBackToEnvelope: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay before showing the letter for a nice transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleNoClick = () => {
    toast("I knew you'd say yes anyway! My heart is all yours! 💝", {
      position: "top-center",
      duration: 5000,
      icon: "💌"
    });
    
    // After showing the message, trigger the yes action anyway
    setTimeout(() => {
      onBackToEnvelope();
    }, 2000);
  };

  return (
    <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <div className="letter bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-lg mx-auto relative overflow-hidden">
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
        <div className="absolute top-1/3 -right-2 opacity-50">
          <Flower 
            className="text-pink-300" 
            size={28}
            strokeWidth={1.5} 
          />
        </div>
        <div className="absolute bottom-1/4 -left-1 opacity-50">
          <Flower 
            className="text-purple-300" 
            size={24}
            strokeWidth={1.5} 
          />
        </div>
        
        {/* Letter content with decorative border */}
        <div className="relative z-10 p-4 border-4 rounded-lg" style={{
          borderImage: 'linear-gradient(to right, #FFDEE2, #E5DEFF, #D8F5E8, #FFDEE2) 1'
        }}>
          <div className="text-center space-y-6">
            <div className="font-script text-lg text-purple-600 mb-4">My Dearest</div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-2 font-serif relative inline-block">
              Florence
              <Sparkles className="absolute -top-4 -right-8 text-amber-400" size={20} />
              <Sparkles className="absolute -top-2 -left-8 text-amber-400" size={16} />
            </h1>
            
            <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-pink-300 to-transparent my-4"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 font-serif">
              Will you be my Easter Bunny this holiday?
            </h2>
            
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
                        hover:scale-105 mx-auto flex items-center gap-2"
              >
                <span>Yes! 💖</span>
                <Heart className="animate-heart-beat" size={20} fill="white" />
              </button>
              
              {/* Moving button for "No" that shows a sweet message when clicked */}
              <MovingButton 
                className="text-lg bg-red-400" 
                onClick={handleNoClick}
              >
                No, thanks
              </MovingButton>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b95' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "24px 24px"
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
