
import { useState } from 'react';
import { Calendar, Clock, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Releases', 'Events', 'Industry News', 'Artist Spotlights'];

  const newsItems = [
    {
      id: 1,
      title: 'Milica Pavlović Drops Stunning New Single "Balkan Dreams"',
      category: 'Releases',
      date: '2024-01-15',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      excerpt: 'The rising pop sensation delivers another hit that perfectly blends traditional Balkan melodies with contemporary production.',
      tags: ['New Release', 'Pop', 'Streaming']
    },
    {
      id: 2,
      title: 'NXT Balkan Partners with Major European Festivals',
      category: 'Industry News',
      date: '2024-01-12',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      excerpt: 'Our agency announces strategic partnerships with EXIT Festival, Sea Dance, and other major European music events.',
      tags: ['Partnership', 'Festivals', 'Europe']
    },
    {
      id: 3,
      title: 'Dragan Electric\'s "Cyber Folklore" Reaches 1M Streams',
      category: 'Artist Spotlights',
      date: '2024-01-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      excerpt: 'The electronic music producer\'s innovative album combining traditional folk samples with modern beats hits major milestone.',
      tags: ['Milestone', 'Electronic', 'Streaming']
    },
    {
      id: 4,
      title: 'Upcoming: Balkan Music Summit 2024',
      category: 'Events',
      date: '2024-01-08',
      readTime: '2 min read',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=600&h=400&fit=crop',
      excerpt: 'Join industry leaders, artists, and fans for the biggest Balkan music conference of the year.',
      tags: ['Event', 'Conference', 'Networking']
    },
    {
      id: 5,
      title: 'New AI Tools Revolutionize Music Production at NXT Balkan',
      category: 'Industry News',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      excerpt: 'Discover how we\'re using cutting-edge AI technology to enhance creativity while preserving authentic Balkan sounds.',
      tags: ['AI', 'Technology', 'Production']
    },
    {
      id: 6,
      title: 'Stefan Urban\'s "Balkan Cipher" Video Goes Viral',
      category: 'Releases',
      date: '2024-01-03',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
      excerpt: 'Hip-hop artist\'s powerful music video addressing social issues gains international attention and critical acclaim.',
      tags: ['Music Video', 'Hip-Hop', 'Viral']
    }
  ];

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            News & <span className="text-gray-400">Portal</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay updated with the latest news, releases, and developments 
            in the Balkan music scene and at NXT Balkan.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category 
                    ? 'bg-white text-black' 
                    : 'border-white text-white hover:bg-white hover:text-black'
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredNews.length > 0 && (
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-white/20 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={filteredNews[0].image} 
                    alt={filteredNews[0].title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="bg-gray-800 px-2 py-1 rounded">{filteredNews[0].category}</span>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(filteredNews[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {filteredNews[0].readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">{filteredNews[0].title}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{filteredNews[0].excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {filteredNews[0].tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded flex items-center">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="ghost" className="text-white hover:bg-white hover:text-black">
                      Read More <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((item) => (
              <article 
                key={item.id}
                className="bg-gradient-to-br from-black via-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 text-black px-2 py-1 rounded text-xs font-medium">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-black">
                      Read <ExternalLink size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news, exclusive content, and early access to new releases 
            directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <Button className="bg-white text-black hover:bg-gray-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
