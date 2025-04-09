
import { useState, useEffect } from 'react';
import { Heart, Music, ArrowRight } from 'lucide-react';

const Celebration = () => {
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    // Show the message after a short delay
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="animate-enter flex flex-col items-center">
        {/* Hearts floating up animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-400 animate-float"
              size={20 + Math.random() * 20}
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 7}s`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
                opacity: 0.7 + Math.random() * 0.3,
              }}
              fill="#FFDEE2"
              strokeWidth={1.5}
            />
          ))}
        </div>
        
        <div 
          className={`transition-opacity duration-1000 card-container rounded-3xl p-8 md:p-10 max-w-md mx-auto text-center relative ${
            showMessage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex justify-center mb-4">
            <Heart 
              className="text-pink-400 animate-heart-beat" 
              size={60} 
              fill="#FFDEE2" 
              strokeWidth={1.5} 
            />
          </div>
          
          <h2 className="text-3xl font-bold text-pink-600 mb-6 font-serif">
            You've made me the happiest!
          </h2>
          
          <div className="space-y-4 text-purple-700 leading-relaxed">
            <p>
              My dearest Florence, your "yes" brings joy to my heart like nothing else.
              Just like Solomon's words in the Bible, our love is unquenchable.
            </p>
            
            <p className="italic font-serif text-sm text-pink-600">
              "Many waters cannot quench love; rivers cannot sweep it away."
              — Song of Solomon 8:7
            </p>
            
            <p>
              Every moment with you feels like a blessing. Your smile brightens my days,
              and your kindness inspires me to be better. I can't wait to spend this Easter with you,
              creating memories that will last a lifetime.
            </p>
            
            <div className="pt-4">
              <a
                href="https://youtu.be/p1tNOKo7OOc?si=2H6prHyt0Oz-WPlj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 
                       text-white py-3 px-6 rounded-full text-lg font-bold shadow-lg
                       border-2 border-white transition-all duration-300
                       hover:scale-105 inline-flex items-center gap-2"
              >
                <Music size={20} />
                <span>Play Me</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebration;
