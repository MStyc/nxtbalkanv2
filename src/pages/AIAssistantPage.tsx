
import { useState } from 'react';
import { Bot, MessageCircle, Zap, Search, Upload, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIAssistantPage = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const features = [
    {
      icon: <Search size={40} />,
      title: 'Artist Discovery',
      description: 'Find Balkan artists by genre, location, or style using natural language queries.',
      demo: 'artist-discovery'
    },
    {
      icon: <Upload size={40} />,
      title: 'Demo Submission Help',
      description: 'Get guidance on preparing and submitting your music demos to NXT Balkan.',
      demo: 'demo-help'
    },
    {
      icon: <Headphones size={40} />,
      title: 'Music Recommendations',
      description: 'Discover new Balkan music based on your preferences and listening history.',
      demo: 'recommendations'
    },
    {
      icon: <Zap size={40} />,
      title: 'Industry Insights',
      description: 'Get real-time information about music trends, opportunities, and industry news.',
      demo: 'insights'
    }
  ];

  const demoConversations = {
    'artist-discovery': [
      { type: 'user', message: 'Show me electronic artists from Serbia' },
      { type: 'bot', message: 'I found 3 electronic artists from Serbia in our roster: Dragan Electric, known for atmospheric soundscapes, Nena Elektro who mixes folk samples with electronic beats, and Stefan Synthesizer who creates ambient electronic music. Would you like detailed profiles of any of these artists?' }
    ],
    'demo-help': [
      { type: 'user', message: 'What should I include in my demo submission?' },
      { type: 'bot', message: 'For the best demo submission, include: 2-5 of your strongest original tracks (MP3/WAV), a compelling artist bio highlighting your Balkan connections, social media links, and clear goals for your music career. Make sure each track showcases different aspects of your artistry!' }
    ],
    'recommendations': [
      { type: 'user', message: 'I like folk fusion, recommend something new' },
      { type: 'bot', message: 'Based on your interest in folk fusion, I recommend checking out Tamburica Collective - they beautifully blend traditional tamburica with modern production. Also try Milica Pavlović\'s latest single "Balkan Dreams" which perfectly merges folk melodies with pop sensibilities.' }
    ],
    'insights': [
      { type: 'user', message: 'What are the current trends in Balkan music?' },
      { type: 'bot', message: 'Current Balkan music trends include: Traditional instruments in electronic music (growing 45%), Balkan rap/hip-hop fusion (especially in urban areas), Cross-cultural collaborations with Western artists, and AI-assisted music production. The streaming numbers for Balkan fusion genres have increased 67% this year!' }
    ]
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Bot size={80} className="mx-auto mb-6 text-white animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            AI <span className="text-gray-400">Assistant</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Meet your intelligent music companion. Our AI assistant helps you discover artists, 
            submit demos, get recommendations, and navigate the Balkan music scene with ease.
          </p>

          <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105">
            <MessageCircle className="mr-2" size={20} />
            Start Conversation
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our AI Can Do</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                onClick={() => setActiveDemo(activeDemo === feature.demo ? null : feature.demo)}
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  {activeDemo === feature.demo ? 'Hide Demo' : 'Try Demo'}
                </Button>

                {/* Demo Conversation */}
                {activeDemo === feature.demo && (
                  <div className="mt-6 p-4 bg-black/50 rounded-lg border border-gray-700">
                    <div className="space-y-3">
                      {demoConversations[feature.demo as keyof typeof demoConversations]?.map((msg, msgIndex) => (
                        <div
                          key={msgIndex}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                              msg.type === 'user'
                                ? 'bg-white text-black'
                                : 'bg-gray-800 text-white'
                            }`}
                          >
                            {msg.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Ask Anything',
                description: 'Type your question or request in natural language - no special commands needed.'
              },
              {
                step: '02',
                title: 'AI Processing',
                description: 'Our advanced AI understands context and searches our database for relevant information.'
              },
              {
                step: '03',
                title: 'Get Results',
                description: 'Receive personalized responses with actionable insights and recommendations.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">AI Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Artist database search and filtering',
              'Music genre and style analysis',
              'Demo submission guidance',
              'Industry trend analysis',
              'Personalized music recommendations',
              'Event and news updates',
              'Social media integration tips',
              'Career development advice',
              'Collaboration opportunities',
              'Market insights and analytics',
              'Technical production questions',
              '24/7 availability and support'
            ].map((capability, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-200" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of music discovery and industry navigation. 
            Our AI assistant is ready to help you achieve your musical goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <MessageCircle className="mr-2" size={20} />
              Start Chatting Now
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Learn More Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAssistantPage;
