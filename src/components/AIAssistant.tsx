
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm your NXT Balkan AI Assistant. I can help you discover Balkan artists, learn about our services, or submit your demo. How can I assist you today?",
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: getBotResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('artist') || msg.includes('musician')) {
      return "I can help you discover amazing Balkan artists! We represent talented musicians across various genres. Would you like to explore our Artists page or submit your own demo?";
    } else if (msg.includes('demo') || msg.includes('submit')) {
      return "Great! You can submit your demo through our Join Us page. We accept music in various Balkan genres. Make sure to include your best tracks and a brief bio!";
    } else if (msg.includes('service') || msg.includes('production')) {
      return "NXT Balkan offers Music Production, Artist Management, Music Promotion, and serves as a Portal for Balkan Music. Which service interests you most?";
    } else {
      return "Thanks for your message! I'm here to help with anything related to NXT Balkan - from finding artists to submitting demos or learning about our services. What would you like to know?";
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-white text-black hover:bg-gray-200 shadow-2xl transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Widget */}
      <div className={`fixed bottom-0 right-0 w-full max-w-md h-96 bg-black/95 backdrop-blur-md border border-white/20 z-50 transition-all duration-300 ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } md:bottom-6 md:right-6 md:rounded-lg md:shadow-2xl`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">NXT Balkan AI Assistant</span>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
          >
            <X size={16} />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto h-64">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg.type === 'user'
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/20">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-white text-sm"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="bg-white text-black hover:bg-gray-200"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
