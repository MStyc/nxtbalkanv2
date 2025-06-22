import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Music, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)] animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.03),transparent_60%)] animate-float" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Content */}
        <div className={`relative text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-6 md:space-y-8 mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white">
              NXT BALKAN
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              The premier destination for revolutionary Balkan music production, artist development, and global promotion. 
              We're transforming traditional sounds into contemporary masterpieces that resonate across continents.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
              Our cutting-edge approach combines authentic cultural heritage with modern digital innovation, 
              creating a unique platform where emerging artists can flourish and established musicians can reach new heights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-4">
            <Link to="/artists">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                <Music className="mr-2" size={20} />
                Discover Artists
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <Link to="/join">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 hover:scale-105">
                <Play className="mr-2" size={20} />
                Submit Demo
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto text-gray-400 px-4">
            <p className="mb-4 text-sm md:text-base">
              Join thousands of artists who have already transformed their careers with NXT Balkan. 
              From studio production to international distribution, we handle every aspect of your musical journey.
            </p>
            <p className="text-sm md:text-base">
              Experience the future of Balkan music with our AI-enhanced production techniques, 
              data-driven marketing strategies, and industry-leading artist support services.
            </p>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
                Our Mission
              </h2>
              <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
                <p>
                  NXT Balkan represents a revolutionary approach to music production and artist development 
                  in the digital age. We bridge the gap between traditional Balkan musical heritage and 
                  contemporary global sounds, creating a unique fusion that captivates audiences worldwide.
                </p>
                <p>
                  Our comprehensive ecosystem includes state-of-the-art recording facilities, expert 
                  production teams, strategic marketing partnerships, and innovative distribution networks. 
                  We don't just produce music – we craft cultural experiences that transcend borders.
                </p>
                <p className="hidden md:block">
                  Through our advanced AI-assisted production processes, data-driven promotion strategies, 
                  and artist-first approach, we're pioneering the next generation of Balkan music industry standards.
                </p>
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            
            <div className="relative order-1 md:order-2">
              <img 
                src="/lovable-uploads/ce630b15-a89f-4ea5-b55f-2270e0b38c88.png" 
                alt="NXT Balkan Character" 
                className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative z-10 py-16 md:py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            What We <span className="text-blue-400">Offer</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Music size={40} />,
                title: 'Music Production',
                description: 'Professional studio production with cutting-edge technology, experienced producers, and world-class equipment. From recording to mastering, we ensure every track meets international standards.'
              },
              {
                icon: <Users size={40} />,
                title: 'Artist Management',
                description: 'Comprehensive artist development including career strategy, brand building, tour management, and industry connections. We guide artists from emerging talent to global recognition.'
              },
              {
                icon: <Zap size={40} />,
                title: 'Global Promotion',
                description: 'Strategic marketing across Spotify, YouTube, TikTok, Apple Music, and international platforms. Our data-driven approach ensures maximum reach and engagement for every release.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-black/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600">
                Explore All Services <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;