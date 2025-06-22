
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: ['Belgrade, Serbia', 'Knez Mihailova 42', '11000 Belgrade']
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+381 11 123 4567', '+381 64 123 4567']
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['info@nxtbalkan.com', 'artists@nxtbalkan.com', 'press@nxtbalkan.com']
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 - 18:00', 'Sat: 10:00 - 16:00', 'Sun: Closed']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Get in <span className="text-gray-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to take your music to the next level? Let's discuss how NXT Balkan 
            can help you achieve your artistic and commercial goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:outline-none focus:border-white transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="music-production">Music Production</option>
                    <option value="artist-management">Artist Management</option>
                    <option value="promotion">Music Promotion</option>
                    <option value="demo-submission">Demo Submission</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="press">Press Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project, goals, or questions..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help! Reach out to us through any of the channels below, 
                  and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        {item.details.map((detail, dIndex) => (
                          <p key={dIndex} className="text-gray-400 mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Instagram', url: '#' },
                    { name: 'Facebook', url: '#' },
                    { name: 'Twitter', url: '#' },
                    { name: 'YouTube', url: '#' },
                    { name: 'Spotify', url: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          
          {/* Placeholder for map - in a real app, you'd integrate with Google Maps or similar */}
          <div className="bg-gray-800 rounded-2xl p-8 text-center h-64 flex items-center justify-center border border-gray-700">
            <div>
              <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400">Interactive map would be integrated here</p>
              <p className="text-sm text-gray-500 mt-2">Belgrade, Serbia - Knez Mihailova 42</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How long does it take to hear back from you?",
                a: "We typically respond to all inquiries within 24 hours during business days."
              },
              {
                q: "Do you accept demo submissions through this contact form?",
                a: "For demo submissions, we recommend using our dedicated Join Us page for the best experience."
              },
              {
                q: "What information should I include in my message?",
                a: "Please include details about your project, goals, timeline, and any specific services you're interested in."
              },
              {
                q: "Do you offer consultations?",
                a: "Yes, we offer free initial consultations to discuss your needs and how we can help."
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

export default Contact;
