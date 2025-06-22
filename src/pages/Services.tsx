import { Music, Users, Zap, Radio, Headphones, Camera, Mic, Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: <Music size={50} />,
      title: 'Music Production',
      description: 'Professional studio production with state-of-the-art equipment and experienced producers who have worked with international artists.',
      features: ['Professional Recording', 'Mixing & Mastering', 'Beat Production', 'Live Instrumentation', 'Vocal Processing']
    },
    {
      icon: <Users size={50} />,
      title: 'Artist Management',
      description: 'Comprehensive career development and management services for emerging and established artists looking to break into global markets.',
      features: ['Career Strategy', 'Brand Development', 'Tour Management', 'Contract Negotiation', 'PR & Media Relations']
    },
    {
      icon: <Zap size={50} />,
      title: 'Music Promotion',
      description: 'Strategic promotion across all major platforms to maximize reach and engagement using data-driven marketing techniques.',
      features: ['Spotify Promotion', 'YouTube Marketing', 'TikTok Campaigns', 'Radio Plugging', 'Playlist Placement']
    },
    {
      icon: <Globe size={50} />,
      title: 'Balkan Music Portal',
      description: 'Exclusive platform showcasing the best of Balkan music to a global audience with curated content and artist spotlights.',
      features: ['Artist Spotlights', 'Music Reviews', 'Cultural Stories', 'Live Sessions', 'Industry News']
    }
  ];

  const additionalServices = [
    { icon: <Headphones size={30} />, title: 'Audio Mastering', description: 'Professional mastering for streaming platforms' },
    { icon: <Camera size={30} />, title: 'Music Videos', description: 'Creative video production and direction' },
    { icon: <Mic size={30} />, title: 'Podcast Production', description: 'Full podcast production and distribution' },
    { icon: <Radio size={30} />, title: 'Radio Campaigns', description: 'Targeted radio promotion strategies' }
  ];

  const pricingPlans = [
    {
      name: 'Starter Package',
      price: '$299',
      description: 'Perfect for emerging artists',
      features: [
        'Single Track Production',
        'Basic Mixing & Mastering',
        'Spotify Upload',
        'Social Media Kit',
        '1 Month Promotion'
      ]
    },
    {
      name: 'Professional Package',
      price: '$899',
      description: 'For serious artists ready to grow',
      features: [
        'Full EP Production (4-6 tracks)',
        'Premium Mixing & Mastering',
        'Multi-Platform Distribution',
        'Music Video Concept',
        'Press Release',
        '3 Month Promotion Campaign'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '$1,999',
      description: 'Complete artist development',
      features: [
        'Full Album Production',
        'Artist Branding Package',
        'Professional Music Video',
        'Radio Campaign',
        'Playlist Pitching',
        '6 Month Management',
        'Tour Booking Support'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
            From conception to global distribution, we provide comprehensive music industry 
            services tailored for the modern Balkan artist. Our team of experts combines 
            traditional musical knowledge with cutting-edge technology to deliver exceptional results.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Whether you're an emerging artist looking to make your first professional recording, 
            or an established musician ready to expand internationally, we have the expertise 
            and resources to elevate your career to the next level.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-black via-gray-900 to-black p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="text-blue-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-white mb-3 text-sm md:text-base">What's Included:</h4>
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-400 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              <DollarSign className="inline-block mr-2" size={40} />
              Pricing Plans
            </h2>
            <p className="text-lg md:text-xl text-gray-300">Choose the perfect package for your musical journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-black/50 p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-400 relative' 
                    : 'border-gray-800 hover:border-blue-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-black px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm md:text-base">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-400 text-black hover:bg-blue-500' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-400">Our Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your vision, goals, and musical style to create a personalized strategy' },
              { step: '02', title: 'Strategy', description: 'Custom plan tailored to your needs, timeline, and budget requirements' },
              { step: '03', title: 'Production', description: 'Professional execution of your project with regular updates and feedback' },
              { step: '04', title: 'Launch', description: 'Strategic release and comprehensive promotion across all platforms' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-400 text-black w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {phase.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-blue-400">Additional Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-black/50 p-4 md:p-6 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="text-blue-400 mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold mb-2 text-sm md:text-base">{service.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-400">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Let's discuss how we can help elevate your music career to the next level. 
            Our team is ready to bring your vision to life with professional quality and industry expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-400 text-black hover:bg-blue-500">
                Get a Quote
              </Button>
            </Link>
            <Link to="/join">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                Submit Your Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;