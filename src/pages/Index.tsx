
import { useState, useEffect } from "react";
import EasterInvitation from "@/components/EasterInvitation";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  
  useEffect(() => {
    // Show floating elements after a short delay
    const timer = setTimeout(() => {
      setShowFloatingElements(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 animate-gradient-slow"></div>
      
      {/* Background decorative elements */}
      <div className="absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-pink-100 to-transparent opacity-60"></div>
      <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-purple-100 to-transparent opacity-60"></div>
      
      {showFloatingElements && <FloatingElements />}
      <EasterInvitation />
    </div>
  );
};

export default Index;
