
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
    <div className="min-h-screen relative flex items-center justify-center px-4 py-10">
      {showFloatingElements && <FloatingElements />}
      <EasterInvitation />
    </div>
  );
};

export default Index;
