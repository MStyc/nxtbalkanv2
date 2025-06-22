
import { useEffect, useState } from 'react';

export const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.closest('button') || 
                           target.closest('a') ||
                           target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block">
      {/* Smooth blue glow effect */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ease-out ${
          isHovering ? 'opacity-100 scale-150' : 'opacity-60 scale-100'
        }`}
        style={{
          left: position.x - 25,
          top: position.y - 25,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-12 h-12 bg-blue-500/30 rounded-full blur-lg" />
      </div>

      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
          isClicking ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
          isHovering ? 'bg-blue-400' : 'bg-white'
        }`} />
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-400 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-8 h-8 border rounded-full transition-all duration-400 ${
          isHovering 
            ? 'border-blue-400/80 scale-150' 
            : 'border-white/40 scale-100'
        } ${isClicking ? 'scale-75' : ''}`} />
      </div>
    </div>
  );
};
