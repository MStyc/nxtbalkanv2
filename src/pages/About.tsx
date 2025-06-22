import { Clock, Users, Award, Globe, Music, Headphones, Mic } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2020', title: 'Foundation', description: 'NXT Balkan was born from a vision to modernize Balkan music and bridge cultural gaps' },
    { year: '2021', title: 'First Artists', description: 'Signed breakthrough artists and released debut albums that gained international recognition' },
    { year: '2022', title: 'Global Reach', description: 'Expanded internationally with strategic partnerships across Europe and North America' },
    { year: '2023', title: 'AI Integration', description: 'Pioneered AI-assisted music production and data-driven promotion strategies' },
    { year: '2024', title: 'Industry Leader', description: 'Became the leading Balkan music agency with 50+ artists and global distribution' }
  ];

  const stats = [
    { icon: <Users size={30} />, value: '50+', label: 'Artists Managed' },
    { icon: <Clock size={30} />, value: '1000+', label: 'Hours Produced' },
    { icon: <Award size={30} />, value: '25+', label: 'Awards Won' },
    { icon: <Globe size={30} />, value: '30+', label: 'Countries Reached' }
  ];

  const team = [
    {
      name: 'Marko Petrovic',
      role: 'Founder & CEO',
      icon: <Music size={40} />,
      bio: 'Visionary leader with 15+ years in music production and artist development. Former A&R executive who discovered multiple platinum artists.',
      expertise: ['Strategic Planning', 'Artist Development', 'Industry Relations']
    },
    {
      name: 'Ana Stojanovic',
      role: 'Head of Production',
      icon: <Headphones size={40} />,
      bio: 'Award-winning producer and sound engineer with expertise in both traditional Balkan instruments and modern production techniques.',
      expertise: ['Music Production', 'Sound Engineering', 'Traditional Instruments']
    },
    {
      name: 'Stefan Nikolic',
      role: 'Marketing Director',
      icon: <Globe size={40} />,
      bio: 'Digital marketing specialist focused on music promotion across streaming platforms and social media with proven track records.',
      expertise: ['Digital Marketing', 'Social Media', 'Brand Strategy']
    },
    {
      name: 'Milica Jovanovic',
      role: 'Artist Relations Manager',
      icon: <Mic size={40} />,
      bio: 'Experienced artist manager who has guided careers from local stages to international festivals and major label deals.',
      expertise: ['Artist Management', 'Tour Booking', 'Industry Networking']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            About <span className="text-blue-400">NXT Balkan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
            We're not just preserving Balkan music traditions – we're revolutionizing them. 
            Through innovative technology, strategic partnerships, and a deep understanding 
            of both local culture and global markets, we're creating the future of Balkan music.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Our mission extends beyond music production to cultural preservation and global 
            recognition of Balkan artistic heritage. We believe that authentic cultural 
            expression combined with modern production techniques creates the most compelling artistic experiences.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-blue-400 mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-400">Our Story</h2>
          
          <div className="prose prose-invert prose-lg mx-auto">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base md:text-lg">
                Founded in 2020, NXT Balkan emerged from a simple yet powerful vision: to bridge 
                the gap between traditional Balkan music and the digital age. Our founders, 
                passionate music industry veterans with deep roots in the Balkans, recognize 
                the untapped potential of the region's rich musical heritage and its ability 
                to captivate global audiences.
              </p>
              
              <p className="text-base md:text-lg">
                What started as a small collective of producers and artists has evolved into 
                a comprehensive music agency that combines cutting-edge technology with cultural 
                authenticity. We don't just produce music – we craft experiences that resonate 
                with both local audiences and international listeners, creating bridges between 
                traditional sounds and contemporary musical landscapes.
              </p>
              
              <p className="text-base md:text-lg">
                Our approach integrates traditional Balkan instruments with modern production 
                techniques, creating a unique sound that honors cultural heritage while appealing 
                to global markets. We work with both emerging and established artists, providing 
                comprehensive support from initial concept to international distribution.
              </p>
              
              <p className="text-base md:text-lg">
                Today, NXT Balkan stands as a testament to innovation in the music industry. 
                Our AI-enhanced production processes, data-driven promotion strategies, and 
                artist-first approach have revolutionized how Balkan music is created, 
                distributed, and consumed worldwide, setting new standards for cultural music agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-blue-400">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-black/50 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {member.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-3 text-sm md:text-base">{member.role}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">{member.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 md:px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs md:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-blue-400">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-gray-400 to-blue-400 opacity-30 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-black/50 p-4 md:p-6 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300">
                      <div className="text-xl md:text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-blue-400">Our Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We embrace cutting-edge technology while respecting musical traditions, creating a perfect balance between heritage and modernity.'
              },
              {
                title: 'Artist-Centric',
                description: 'Every decision we make prioritizes the growth and success of our artists, ensuring their creative vision is realized to its fullest potential.'
              },
              {
                title: 'Global Vision',
                description: 'We think locally but act globally, connecting authentic Balkan music with international audiences through strategic partnerships.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-black/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;