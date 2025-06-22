import { useState } from 'react';
import { Upload, Music, User, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SocialMedia {
  spotify: string;
  instagram: string;
  youtube: string;
  soundcloud: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  artistName: string;
  genre: string;
  experience: string;
  influences: string;
  demoFiles: File[];
  socialMedia: SocialMedia;
  bio: string;
  goals: string;
}

const JoinUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    location: '',
    
    // Artist Info
    artistName: '',
    genre: '',
    experience: '',
    influences: '',
    
    // Music Info
    demoFiles: [],
    socialMedia: {
      spotify: '',
      instagram: '',
      youtube: '',
      soundcloud: ''
    },
    bio: '',
    goals: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Demo Submitted Successfully!",
      description: "We'll review your submission and get back to you within 5-7 business days.",
    });
    
    setStep(4); // Success step
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      if (parent === 'socialMedia') {
        setFormData(prev => ({
          ...prev,
          socialMedia: {
            ...prev.socialMedia,
            [child]: value
          }
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  placeholder="+381 64 123 4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  placeholder="City, Country"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Artist Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Artist/Stage Name *</label>
                <input
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  placeholder="Your artist name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Primary Genre *</label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:border-white"
                >
                  <option value="">Select genre</option>
                  <option value="folk-fusion">Folk Fusion</option>
                  <option value="electronic">Electronic</option>
                  <option value="pop">Pop</option>
                  <option value="traditional">Traditional</option>
                  <option value="hip-hop">Hip-Hop</option>
                  <option value="rock">Rock</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Experience Level *</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:border-white"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="experienced">Experienced (5+ years)</option>
                <option value="professional">Professional (10+ years)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Musical Influences</label>
              <textarea
                name="influences"
                value={formData.influences}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none"
                placeholder="Tell us about your musical influences and inspirations..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Music & Social Media</h3>
            
            <div>
              <label className="block text-sm font-medium mb-2">Demo Files *</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-white/50 transition-colors duration-200">
                <Upload size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400 mb-2">Drop your demo files here or click to upload</p>
                <p className="text-sm text-gray-500">MP3, WAV files up to 50MB each (max 5 files)</p>
                <Button className="mt-4 bg-white text-black hover:bg-gray-200">
                  Choose Files
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Social Media Links</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Spotify</label>
                  <input
                    type="url"
                    name="socialMedia.spotify"
                    value={formData.socialMedia.spotify}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    placeholder="https://open.spotify.com/artist/..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Instagram</label>
                  <input
                    type="url"
                    name="socialMedia.instagram"
                    value={formData.socialMedia.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    placeholder="https://instagram.com/..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">YouTube</label>
                  <input
                    type="url"
                    name="socialMedia.youtube"
                    value={formData.socialMedia.youtube}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    placeholder="https://youtube.com/..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">SoundCloud</label>
                  <input
                    type="url"
                    name="socialMedia.soundcloud"
                    value={formData.socialMedia.soundcloud}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    placeholder="https://soundcloud.com/..."
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Artist Bio *</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none"
                placeholder="Tell us your story, your musical journey, and what makes you unique..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Goals & Expectations *</label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none"
                placeholder="What are your goals? What do you hope to achieve with NXT Balkan?"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-12">
            <CheckCircle size={80} className="mx-auto mb-6 text-green-500" />
            <h3 className="text-3xl font-bold mb-4">Submission Successful!</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Thank you for submitting your demo to NXT Balkan. Our A&R team will carefully 
              review your submission and get back to you within 5-7 business days.
            </p>
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800 max-w-md mx-auto">
              <h4 className="font-bold mb-2">What happens next?</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• A&R team reviews your demo</li>
                <li>• We assess fit with our roster</li>
                <li>• You'll receive feedback via email</li>
                <li>• If selected, we'll schedule a meeting</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (step === 4) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4">
          {renderStep()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Join <span className="text-gray-400">NXT Balkan</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to take your music career to the next level? Submit your demo and 
            become part of the future of Balkan music.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= stepNum ? 'bg-white text-black' : 'bg-gray-800 text-gray-400'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    step > stepNum ? 'bg-white' : 'bg-gray-800'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-2">
              Step {step} of 3
            </div>
            <div className="text-lg font-medium">
              {step === 1 && 'Personal Information'}
              {step === 2 && 'Artist Information'}
              {step === 3 && 'Music & Social Media'}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800">
            <form onSubmit={handleSubmit}>
              {renderStep()}
              
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-800">
                {step > 1 ? (
                  <Button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    Previous
                  </Button>
                ) : (
                  <div />
                )}
                
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="bg-white text-black hover:bg-gray-200"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-white text-black hover:bg-gray-200"
                  >
                    <Send className="mr-2" size={20} />
                    Submit Demo
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Submission Requirements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Music size={30} />,
                title: 'Quality Demos',
                description: '2-5 of your best original tracks in MP3 or WAV format'
              },
              {
                icon: <User size={30} />,
                title: 'Complete Profile',
                description: 'Professional bio, social media links, and contact information'
              },
              {
                icon: <CheckCircle size={30} />,
                title: 'Original Music',
                description: 'All submitted tracks must be your original compositions'
              },
              {
                icon: <Upload size={30} />,
                title: 'File Limits',
                description: 'Each file should be under 50MB, total submission under 200MB'
              }
            ].map((req, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-xl border border-gray-800 text-center group hover:border-white/20 transition-all duration-300">
                <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {req.icon}
                </div>
                <h3 className="font-bold mb-2">{req.title}</h3>
                <p className="text-gray-400 text-sm">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How long does the review process take?",
                a: "We typically review all submissions within 5-7 business days. Due to high volume, we may take longer during busy periods."
              },
              {
                q: "What genres do you accept?",
                a: "We accept all genres with Balkan influences or artists from the Balkan region. We're particularly interested in innovative fusions of traditional and modern sounds."
              },
              {
                q: "Do I need to be from the Balkans to apply?",
                a: "While we focus on Balkan music, we welcome artists from anywhere who create music inspired by or connected to Balkan culture."
              },
              {
                q: "What happens if my demo is accepted?",
                a: "If we're interested, we'll contact you to schedule a meeting where we'll discuss potential collaboration, services, and next steps."
              },
              {
                q: "Can I submit again if rejected?",
                a: "Yes! We encourage you to reapply after developing your sound further. Many successful artists were accepted on their second or third submission."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
