
import { useState } from 'react';
import { Eye, X, MessageCircle, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: 'NXT Balkan Hoodie',
      price: '$45',
      image: '/lovable-uploads/10cfefa5-977f-443a-ab90-a0f08137cdf0.png',
      description: 'Premium quality black hoodie with the iconic NXT Balkan logo featuring headphones and sound waves design. Perfect for music lovers and fans of the Balkan scene. Made with high-quality materials for maximum comfort and durability.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      material: '80% Cotton, 20% Polyester',
      features: ['Soft fleece interior', 'Adjustable drawstring hood', 'Kangaroo pocket', 'Ribbed cuffs and hem', 'Pre-shrunk fabric']
    },
    {
      id: 2,
      name: 'NXT Balkan Classic Tee',
      price: '$25',
      image: '/lovable-uploads/eeac3377-f9a5-45ba-a7ba-0b38169460c4.png',
      description: 'Classic black t-shirt with the signature NXT Balkan logo. Comfortable fit and high-quality print that won\'t fade. Essential for any music enthusiast who wants to represent the culture.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      material: '100% Premium Cotton',
      features: ['Pre-shrunk fabric', 'High-quality screen print', 'Comfortable crew neck', 'Durable construction', 'Fade-resistant colors']
    },
    {
      id: 3,
      name: 'NXT Balkan Arrow Tee',
      price: '$28',
      image: '/lovable-uploads/c4fc083b-cb2d-46d7-b403-7f8750438f87.png',
      description: 'Unique design featuring crossed arrows with the NXT Balkan branding. Modern streetwear style with a bold statement for the music community. Perfect for concerts and casual wear.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      material: '100% Premium Cotton',
      features: ['Unique arrow design', 'High-quality print', 'Comfortable fit', 'Modern streetwear style', 'Reinforced seams']
    }
  ];

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product);
    setSelectedSize('');
  };

  const handleBuyClick = () => {
    if (!selectedSize) {
      alert('Please select a size first!');
      return;
    }
    setShowBuyModal(true);
  };

  const handleContactMethod = (method: string) => {
    const product = selectedProduct;
    const message = `Hi! I'm interested in buying the ${product.name} (${product.price}) in size ${selectedSize}. Please let me know about availability and shipping.`;
    
    switch(method) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'gmail':
        window.open(`mailto:?subject=Product Inquiry - ${product.name}&body=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'instagram':
        window.open('https://instagram.com/', '_blank');
        break;
    }
    setShowBuyModal(false);
    setSelectedProduct(null);
    setSelectedSize('');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            NXT <span className="text-blue-400">Shop</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Wear the sound. Represent the culture. 
            Exclusive NXT Balkan merchandise for music lovers.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Each piece is carefully designed to represent the essence of Balkan music culture 
            while maintaining modern style and premium quality. Express your passion for music 
            with our exclusive collection.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-gradient-to-br from-black via-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-contain bg-gray-800 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-400 mb-4">{product.price}</p>
                  
                  <Button 
                    onClick={() => handleViewProduct(product)}
                    className="w-full bg-blue-400 text-black hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Eye size={16} className="mr-2" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => { setSelectedProduct(null); setSelectedSize(''); }}>
        <DialogContent className="max-w-4xl bg-black/95 backdrop-blur-md border border-blue-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-64 object-contain bg-gray-800 rounded-lg"
                />
                <div className="text-3xl font-bold text-blue-400">{selectedProduct.price}</div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-300">{selectedProduct.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Select Size *</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {selectedProduct.sizes.map((size: string) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 rounded text-sm font-medium transition-all duration-200 ${
                          selectedSize === size
                            ? 'bg-blue-400 text-black'
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {selectedSize && (
                    <p className="text-blue-400 text-sm mt-2">Selected: {selectedSize}</p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Material</h3>
                  <p className="text-gray-300">{selectedProduct.material}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Features</h3>
                  <ul className="text-gray-300 space-y-1">
                    {selectedProduct.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={handleBuyClick}
                  className="w-full bg-blue-400 text-black hover:bg-blue-500 text-lg py-3"
                >
                  Buy Now {selectedSize && `(Size: ${selectedSize})`}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Buy Modal */}
      <Dialog open={showBuyModal} onOpenChange={setShowBuyModal}>
        <DialogContent className="max-w-md bg-black/90 backdrop-blur-xl border border-blue-400/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Buy via</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-6">
            <Button 
              onClick={() => handleContactMethod('whatsapp')}
              className="w-full bg-green-600/20 backdrop-blur-sm border border-green-500/30 text-white hover:bg-green-600/30 transition-all duration-300 py-4 text-lg"
            >
              <MessageCircle size={20} className="mr-3" />
              WhatsApp
            </Button>
            
            <Button 
              onClick={() => handleContactMethod('gmail')}
              className="w-full bg-red-600/20 backdrop-blur-sm border border-red-500/30 text-white hover:bg-red-600/30 transition-all duration-300 py-4 text-lg"
            >
              <Mail size={20} className="mr-3" />
              Gmail
            </Button>
            
            <Button 
              onClick={() => handleContactMethod('instagram')}
              className="w-full bg-pink-600/20 backdrop-blur-sm border border-pink-500/30 text-white hover:bg-pink-600/30 transition-all duration-300 py-4 text-lg"
            >
              <Instagram size={20} className="mr-3" />
              Instagram
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;
