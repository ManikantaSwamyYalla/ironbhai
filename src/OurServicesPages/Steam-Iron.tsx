import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../Utils/jwtUtils";
import { useCart } from "../context/CartContext";
import { 
  Zap, 
  CheckCircle, 
  Clock, 
  Shield, 
  Star, 
  Truck, 
  Award,
  ArrowLeft,
  ShoppingCart,
  Sparkles
} from "lucide-react";

// Type for category data
type Category = {
  id: number;
  name: string;
  service_id: number;
  priority: number;
  image: string | null;
};

// Type for product data
type Product = {
  id: number;
  name: string;
  short_desc: string;
  mrp: string;
  sale: string;
  category_id: number;
  priority: number;
};
// Type for selected product with quantity
type SelectedProduct = Product & { quantity: number | ''};

const SteamIron: React.FC = () => {
   const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  // Fetch Steam Iron service details
  useEffect(() => {
    const fetchSteamIronDetails = async () => {
      try {
        const tempToken = await generateToken({
          version_name: "1.0.0",
          version_code: "1",
          device_id: "web-" + Date.now(),
          device_type: "web",
          device_model: navigator.userAgent.substring(0, 50)
        });

        const response = await fetch("https://api-dev.ironbhai.com/v1/app/services/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tempToken}`,
          },
        });

        const data = await response.json();

        if (response.ok && data.ok) {
          setCategories(data.data.categories || []);
          setProducts(data.data.products || []);
        } else {
          setError(data.message || "Failed to fetch Steam Iron service details");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Network error while fetching Steam Iron service details");
      } finally {
        setLoading(false);
      }
    };

    fetchSteamIronDetails();
  }, []);

  const handleCategorySelect = (categoryId: number) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category_id === selectedCategory)
    : [];

  const handleProductToggle = (product: Product) => {
    setSelectedProducts(prev => {
      const existingProduct = prev.find(p => p.id === product.id);
      if (existingProduct) {
        // If product is already selected, remove it
        return prev.filter(p => p.id !== product.id);
      } else {
        // If product is not selected, add it with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (productId: number) => {
    setSelectedProducts(prev => 
      prev.map(p => {
        if (p.id === productId) {
          const currentQuantity = p.quantity === '' ? 1 : p.quantity;
          return { ...p, quantity: currentQuantity + 1 };
        }
        return p;
      })
    );
  };

  const decrementQuantity = (productId: number) => {
    setSelectedProducts(prev => 
      prev.map(p => {
        if (p.id === productId) {
          const currentQuantity = p.quantity === '' ? 1 : p.quantity;
          return { 
            ...p, 
            quantity: currentQuantity > 1 ? currentQuantity - 1 : 1 
          };
        }
        return p;
      })
    );
  };

  const handleAddToCart = () => {
    selectedProducts.forEach(selectedProduct => {
      // Add the product multiple times based on quantity
      const quantity = selectedProduct.quantity === '' ? 1 : selectedProduct.quantity;
      for (let i = 0; i < quantity; i++) {
        // Create a product object without the quantity property
        const { quantity, ...productWithoutQuantity } = selectedProduct;
        addToCart(productWithoutQuantity);
      }
    });
    setSelectedProducts([]);
    navigate("/cart");
  };

  const goBack = () => {
    navigate("/services");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Loading Steam Iron service...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Steam Iron Service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-white space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <span className="text-orange-300 font-medium text-lg">Premium Steam Iron</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                  Professional
                  <span className="text-orange-400"> Steam Iron</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  Experience crisp, wrinkle-free clothes with our professional steaming and ironing service. Perfect finish guaranteed.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">24hrs</div>
                  <div className="text-blue-200 text-sm">Express Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">100%</div>
                  <div className="text-blue-200 text-sm">Wrinkle-Free</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Safe</div>
                  <div className="text-blue-200 text-sm">Fabric Care</div>
                </div>
              </div>
            </div>

            <button 
              onClick={goBack}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 px-6 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold shadow-lg flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-6 rounded-lg mb-8 shadow-sm">
            <div className="flex items-center">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-bold">Service Error</p>
                <p>{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">Professional steaming with 100% satisfaction guarantee</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Express Service</h3>
            <p className="text-gray-600">Same-day and 24-hour turnaround options available</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
              <Truck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Pickup</h3>
            <p className="text-gray-600">Convenient doorstep pickup and delivery service</p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full mr-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Select Category</h2>
              <p className="text-gray-600">Choose from our specialized steam iron categories</p>
            </div>
          </div>
          
          {categories.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <div className="font-bold text-lg mb-2">{category.name}</div>
                  <div className="text-sm opacity-80">Professional care</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Categories Available</h3>
              <p className="text-gray-500">Categories will be loaded shortly</p>
            </div>
          )}
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full mr-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Available Products</h2>
              <p className="text-gray-600">Select items for professional steam iron service</p>
            </div>
          </div>
          
          {!selectedCategory ? (
            <div className="text-center py-16">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose a Category First</h3>
              <p className="text-gray-600 text-lg">Please select a category above to view available products</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredProducts.map((product) => {
                const selectedProduct = selectedProducts.find(p => p.id === product.id);
                const isSelected = !!selectedProduct;
                const quantity = selectedProduct ? selectedProduct.quantity : 0;
                const savings = parseFloat(product.mrp) - parseFloat(product.sale);
                
                return (
                  <div 
                    key={product.id} 
                    className={`border-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      isSelected 
                        ? 'border-green-500 bg-green-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">Premium Quality</span>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="bg-green-500 text-white p-2 rounded-full">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 line-through text-sm">₹{product.mrp}</span>
                        <span className="text-2xl font-bold text-indigo-600">₹{product.sale}</span>
                      </div>
                      <div className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full w-fit">
                        Save ₹{savings.toFixed(0)}
                      </div>
                    </div>
                    
                 {isSelected ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-200">
                        <button 
                          onClick={() => decrementQuantity(product.id)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                          disabled={quantity === ''}
                        >
                          <span className="text-xl font-bold">-</span>
                        </button>
                        
                        <input
                          type="number"
                          min="1"
                          value={quantity || ''}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value === '') {
                              // Allow empty input
                              setSelectedProducts(prev => 
                                prev.map(p => 
                                  p.id === product.id ? { ...p, quantity: '' as any } : p
                                )
                              );
                            } else {
                              const newQuantity = parseInt(value);
                              if (!isNaN(newQuantity) && newQuantity >= 1) {
                                setSelectedProducts(prev => 
                                  prev.map(p => 
                                    p.id === product.id ? { ...p, quantity: newQuantity } : p
                                  )
                                );
                              }
                            }
                          }}
                          onBlur={(e) => {
                            // If input is empty or invalid, set to 1
                            const value = e.target.value;
                            if (value === '' || parseInt(value) < 1 || isNaN(parseInt(value))) {
                              setSelectedProducts(prev => 
                                prev.map(p => 
                                  p.id === product.id ? { ...p, quantity: 1 } : p
                                )
                              );
                            }
                          }}
                          className="w-16 text-center border-none outline-none font-bold text-gray-900"
                        />
                        
                        <button 
                          onClick={() => incrementQuantity(product.id)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <span className="text-xl font-bold">+</span>
                        </button>
                      </div>
                      <button 
                        onClick={() => handleProductToggle(product)}
                        className="w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 bg-red-500 text-white hover:shadow-lg"
                      >
                        Unselect Item
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleProductToggle(product)}
                      className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                        isSelected
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg'
                      }`}
                    >
                      {isSelected ? 'Selected ✓' : 'Select Item'}
                    </button>
                  )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Products Found</h3>
              <p className="text-gray-600 text-lg">No products available in the selected category</p>
            </div>
          )}
        </div>

        {/* Selected Products Summary */}
        {selectedProducts.length > 0 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl shadow-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Selected Items</h2>
                <p className="text-green-100">Ready for professional steam iron service</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {selectedProducts.map((product) => (
                <div key={`selected-${product.id}`} className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                  <div>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-green-100">₹{product.sale}</p>
                  </div>
                  <button
                    onClick={() => handleProductToggle(product)}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold mb-1">
                  ₹{selectedProducts.reduce((sum, product) => sum + Number(product.sale), 0)}
                </div>
                <div className="text-green-100">Total Amount</div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center space-x-2"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart & Checkout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SteamIron;