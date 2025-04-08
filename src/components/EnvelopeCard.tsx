
import { useState } from 'react';
import { Heart, Mail, MailOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const EnvelopeCard = ({ onOpen }: { onOpen: () => void }) => {
  const [isOpening, setIsOpening] = useState(false);
  
  const handleOpen = () => {
    setIsOpening(true);
    // Add a delay to allow the animation to complete before showing the letter
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div 
      className={cn(
        "envelope-card w-full max-w-sm aspect-[4/3] bg-gradient-to-br from-pink-200 to-purple-100 rounded-lg shadow-xl relative overflow-hidden transition-all duration-500",
        isOpening && "scale-150 opacity-0"
      )}
      onClick={handleOpen}
    >
      {/* Envelope flap (top) */}
      <div className={cn(
        "absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-300 to-pink-200 origin-top transition-all duration-500 z-20",
        isOpening ? "rotate-x-180" : ""
      )}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <Heart className="text-pink-500" size={30} fill="#FFDEE2" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Envelope body */}
      <div className="absolute inset-0 flex items-center justify-center p-8 bg-pink-50 z-10">
        <div className="text-center">
          {isOpening ? (
            <MailOpen 
              className="text-pink-600 animate-bounce mx-auto mb-2" 
              size={48} 
              strokeWidth={1.5} 
            />
          ) : (
            <Mail 
              className="text-pink-600 animate-heart-beat mx-auto mb-2" 
              size={48} 
              strokeWidth={1.5} 
            />
          )}
          <p className="text-purple-700 text-lg font-medium">
            {isOpening ? "Opening..." : "Tap to open"}
          </p>
        </div>
      </div>
      
      {/* Decorations */}
      <div className="absolute bottom-4 left-4 opacity-20">
        <Heart size={20} fill="#FFDEE2" strokeWidth={1} className="text-pink-400" />
      </div>
      <div className="absolute top-4 right-4 opacity-20">
        <Heart size={20} fill="#FFDEE2" strokeWidth={1} className="text-pink-400" />
      </div>
    </div>
  );
};

export default EnvelopeCard;
