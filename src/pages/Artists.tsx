
import { useState } from 'react';
import { Play, ExternalLink, Instagram, Music, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Artists = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = ['All', 'Folk Fusion', 'Electronic', 'Pop', 'Traditional', 'Hip-Hop'];

  const artists = [
    {
      id: 1,
      name: 'Milica Pavlović',
      genre: 'Pop',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      bio: 'Rising pop sensation blending traditional Balkan melodies with modern production.',
      streams: '2.5M',
      social: {
        spotify: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      id: 2,
      name: 'Dragan Electric',
      genre: 'Electronic',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      bio: 'Electronic music producer creating atmospheric soundscapes with Balkan influences.',
      streams: '1.8M',
      social: {
        spotify: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      id: 3,
      name: 'Tamburica Collective',
      genre: 'Folk Fusion',
      image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop',
      bio: 'Traditional folk group reinventing classic Balkan songs for the modern era.',
      streams: '890K',
      social: {
        spotify: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      id: 4,
      name: 'Stefan Urban',
      genre: 'Hip-Hop',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      bio: 'Hip-hop artist rapping in multiple Balkan languages with conscious lyrics.',
      streams: '1.2M',
      social: {
        spotify: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      id: 5,
      name: 'Balkan Beats Orchestra',
      genre: 'Traditional',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      bio: 'Large ensemble preserving and modernizing traditional Balkan orchestral music.',
      streams: '650K',
      social: {
        spotify: '#',
        instagram: '#',
        youtube: '#'
      }
    },
    {
      id: 6,
      name: 'Nena Elektro',
      genre: 'Electronic',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c047d5d9?w=400&h=400&fit=crop',
      bio: 'DJ and producer mixing traditional folk samples with cutting-edge electronic beats.',
      streams: '1.9M',
      social: {
        spotify: '#',
        instagram: '#',
        youtube: '#'
      }
    }
  ];

  const filteredArtists = selectedGenre === 'All' 
    ? artists 
    : artists.filter(artist => artist.genre === selectedGenre);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Our <span className="text-gray-400">Artists</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the talented musicians who are shaping the future of Balkan music 
            through innovation, authenticity, and global appeal.
          </p>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {genres.map((genre) => (
              <Button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                variant={selectedGenre === genre ? "default" : "outline"}
                className={`${
                  selectedGenre === genre 
                    ? 'bg-white text-black' 
                    : 'border-white text-white hover:bg-white hover:text-black'
                } transition-all duration-300`}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist) => (
              <div 
                key={artist.id}
                className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Artist Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white/90 text-black hover:bg-white rounded-full w-16 h-16 p-0">
                      <Play size={24} />
                    </Button>
                  </div>
                  
                  {/* Genre Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {artist.genre}
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{artist.bio}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Monthly Streams</div>
                      <div className="text-lg font-bold">{artist.streams}</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a 
                        href={artist.social.spotify}
                        className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                      >
                        <Music size={20} />
                      </a>
                      <a 
                        href={artist.social.instagram}
                        className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href={artist.social.youtube}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <Youtube size={20} />
                      </a>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:text-black">
                      View Profile <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Roster</h2>
          <p className="text-xl text-gray-300 mb-8">
            Think you have what it takes to be the next NXT Balkan artist? 
            Submit your demo and let's create something extraordinary together.
          </p>
          
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Submit Your Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Artists;
