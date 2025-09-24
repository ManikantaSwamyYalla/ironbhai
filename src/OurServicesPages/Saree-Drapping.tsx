
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { generateToken } from "../Utils/jwtUtils";
// import { useCart } from "../context/CartContext";

// // Type for category data
// type Category = {
//   id: number;
//   name: string;
//   service_id: number;
//   priority: number;
//   image: string | null;
// };

// // Type for product data
// type Product = {
//   id: number;
//   name: string;
//   short_desc: string;
//   mrp: string;
//   sale: string;
//   category_id: number;
//   priority: number;
// };

// const SareeDrapping: React.FC = () => {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//   const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const { addToCart } = useCart();

 
//   useEffect(() => {
//     const fetchSareeDrappingDetails = async () => {
//       try {
//         // Generate a temporary token for API access
//         const tempToken = await generateToken({
//           version_name: "1.0.0",
//           version_code: "1",
//           device_id: "web-" + Date.now(),
//           device_type: "web",
//           device_model: navigator.userAgent.substring(0, 50)
//         });

        
//         const response = await fetch("https://api-dev.ironbhai.com/v1/app/services/5", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${tempToken}`,
//           },
//         });

//         const data = await response.json();

//         if (response.ok && data.ok) {
//           setCategories(data.data.categories || []);
//           setProducts(data.data.products || []);
//         } else {
//           setError(data.message || "Failed to fetch Saree & Drapping service details");
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Network error while fetching Saree & Drapping service details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSareeDrappingDetails();
//   }, []);

//   // Handle category selection
//   const handleCategorySelect = (categoryId: number) => {
//     // If the same category is clicked again, deselect it
//     if (selectedCategory === categoryId) {
//       setSelectedCategory(null);
//     } else {
//       setSelectedCategory(categoryId);
//     }
//   };

//   // Filter products by selected category
//   const filteredProducts = selectedCategory 
//     ? products.filter(product => product.category_id === selectedCategory)
//     : [];

//   const handleProductToggle = (product: Product) => {
//     setSelectedProducts(prev => {
//       if (prev.some(p => p.id === product.id)) {
//         return prev.filter(p => p.id !== product.id);
//       } else {
//         return [...prev, product];
//       }
//     });
//   };

//   const handleAddToCart = () => {
//     selectedProducts.forEach(product => {
//       addToCart(product);
//     });
//     setSelectedProducts([]);
//     // Navigate to cart page
//     navigate("/cart");
//   };

//   // Go back to services
//   const goBack = () => {
//     navigate("/services");
//   };

//   if (loading) return <p className="text-center py-8 text-xl">Loading Saree & Drapping service...</p>;

//   return (
//     <div className="wash-iron-page max-w-7xl mx-auto px-4 py-8">
//       {/* Header with gradient */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 p-6 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-xl shadow-lg">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold text-white">Saree & Drapping Service</h1>
//           <p className="text-blue-100 mt-2">Complete washing and ironing service for fresh, clean clothes</p>
//         </div>
//         <button 
//           onClick={goBack}
//           className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//         >
//           ← Back to Services
//         </button>
//       </div>

//       {error && (
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-fade-in">
//           <p className="font-bold">Error</p>
//           <p>{error}</p>
//         </div>
//       )}

//       {/* Categories Section with enhanced design */}
//       <div className="mb-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
//         <div className="flex items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
//           <div className="ml-4 h-1 flex-grow bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
//         </div>
        
//         {categories.length > 0 ? (
//           <div className="flex flex-wrap gap-3 mb-4">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
//                   selectedCategory === category.id
//                     ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:border-blue-300 border border-gray-200'
//                 }`}
//                 onClick={() => handleCategorySelect(category.id)}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-8">
//             <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//             </div>
//             <p className="text-gray-500">No categories available</p>
//           </div>
//         )}
//       </div>

//       {/* Products Section with enhanced design */}
//       <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
//         <div className="flex items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">
//             Products
//           </h2>
//           <div className="ml-4 h-1 flex-grow bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
//         </div>
        
//         {!selectedCategory ? (
//           <div className="text-center py-8">
//             <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//               </svg>
//             </div>
//             <p className="text-gray-500">Please select a category to view products</p>
//           </div>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//             {filteredProducts.map((product) => {
//               const isSelected = selectedProducts.some(p => p.id === product.id);
//               return (
//                 <div 
//                   key={product.id} 
//                   className={`border rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
//                     isSelected 
//                       ? 'border-blue-500 bg-blue-50' 
//                       : 'border-gray-100 bg-gradient-to-br from-white to-gray-50'
//                   }`}
//                 >
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Popular</span>
//                   </div>
//                   {/* <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.short_desc}</p> */}
//                   <div className="flex justify-between items-center pt-3 border-t border-gray-100">
//                     <div className="flex flex-col">
//                       <span className="text-gray-400 line-through text-sm">MRP: ₹{product.mrp}</span>
//                       <span className="text-lg font-bold text-indigo-600">Sale: ₹{product.sale}</span>
//                     </div>
//                     <button 
//                       onClick={() => handleProductToggle(product)}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                         isSelected
//                           ? 'bg-green-500 text-white'
//                           : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90'
//                       }`}
//                     >
//                       {isSelected ? 'Selected' : 'Select'}
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
//             <p className="text-gray-500">There are no products available in the selected category.</p>
//           </div>
//         )}
//       </div>

//       {/* Selected Products Summary */}
//       {selectedProducts.length > 0 && (
//         <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
//           <div className="flex items-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Selected Products</h2>
//             <div className="ml-4 h-1 flex-grow bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
//           </div>
          
//           <div className="space-y-4">
//             {selectedProducts.map((product) => (
//               <div key={`selected-${product.id}`} className="flex justify-between items-center border-b pb-3">
//                 <div>
//                   <h3 className="font-semibold">{product.name}</h3>
//                   <p className="text-indigo-600 font-bold">Sale: ₹{product.sale}</p>
//                 </div>
//                 <button
//                   onClick={() => handleProductToggle(product)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
            
//             <div className="mt-6 text-right">
//               <p className="text-lg font-bold">
//                 Total: ₹{selectedProducts.reduce((sum, product) => sum + Number(product.sale), 0)}
//               </p>
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold mt-4 hover:opacity-90 transition-opacity"
//               >
//                 Add All to Cart and View Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SareeDrapping;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../Utils/jwtUtils";
import { useCart } from "../context/CartContext";
import { 
  Flower, 
  CheckCircle, 
  Shield, 
  Star,  
  Award,
  ArrowLeft,
  ShoppingCart,
  Sparkles,
  Crown,
  Heart
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

const SareeDrapping: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchSareeDrappingDetails = async () => {
      try {
        const tempToken = await generateToken({
          version_name: "1.0.0",
          version_code: "1",
          device_id: "web-" + Date.now(),
          device_type: "web",
          device_model: navigator.userAgent.substring(0, 50)
        });

        const response = await fetch("https://api-dev.ironbhai.com/v1/app/services/5", {
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
          setError(data.message || "Failed to fetch Saree Drapping service details");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Network error while fetching Saree Drapping service details");
      } finally {
        setLoading(false);
      }
    };

    fetchSareeDrappingDetails();
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
      if (prev.some(p => p.id === product.id)) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleAddToCart = () => {
    selectedProducts.forEach(product => {
      addToCart(product);
    });
    setSelectedProducts([]);
    navigate("/cart");
  };

  const goBack = () => {
    navigate("/services");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Loading Saree Drapping service...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-700 to-purple-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Saree Drapping Service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-white space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Flower className="w-8 h-8 text-white" />
                </div>
                <span className="text-orange-300 font-medium text-lg">Elegant Saree Drapping</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                  Beautiful
                  <span className="text-orange-400"> Saree Drapping</span>
                </h1>
                <p className="text-xl text-pink-100 leading-relaxed max-w-2xl">
                  Professional saree drapping service for special occasions. Expert styling with traditional and modern techniques.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Expert</div>
                  <div className="text-pink-200 text-sm">Styling</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Perfect</div>
                  <div className="text-pink-200 text-sm">Draping</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Elegant</div>
                  <div className="text-pink-200 text-sm">Look</div>
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
            <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
              <Crown className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Styling</h3>
            <p className="text-gray-600">Professional saree drapping by experienced stylists</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-rose-100 p-3 rounded-full w-fit mb-4">
              <Heart className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Occasion</h3>
            <p className="text-gray-600">Ideal for weddings, parties, and special events</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
              <Flower className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional & Modern</h3>
            <p className="text-gray-600">Various drapping styles to suit your preference</p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-full mr-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Select Category</h2>
              <p className="text-gray-600">Choose from our saree drapping categories</p>
            </div>
          </div>
          
          {categories.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-xl' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-pink-300'
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <div className="font-bold text-lg mb-2">{category.name}</div>
                  <div className="text-sm opacity-80">Expert styling</div>
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
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full mr-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Available Services</h2>
              <p className="text-gray-600">Select saree drapping services</p>
            </div>
          </div>
          
          {!selectedCategory ? (
            <div className="text-center py-16">
              <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose a Category First</h3>
              <p className="text-gray-600 text-lg">Please select a category above to view available services</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isSelected = selectedProducts.some(p => p.id === product.id);
                const savings = parseFloat(product.mrp) - parseFloat(product.sale);
                
                return (
                  <div 
                    key={product.id} 
                    className={`border-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      isSelected 
                        ? 'border-green-500 bg-green-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-pink-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <Flower className="w-4 h-4 text-pink-400" />
                          <span className="text-sm text-gray-600">Expert Styling</span>
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
                        <span className="text-2xl font-bold text-pink-600">₹{product.sale}</span>
                      </div>
                      <div className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full w-fit">
                        Save ₹{savings.toFixed(0)}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleProductToggle(product)}
                      className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                        isSelected
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:shadow-lg'
                      }`}
                    >
                      {isSelected ? 'Selected ✓' : 'Select Service'}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Services Found</h3>
              <p className="text-gray-600 text-lg">No services available in the selected category</p>
            </div>
          )}
        </div>

        {/* Selected Products Summary */}
        {selectedProducts.length > 0 && (
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl shadow-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Selected Services</h2>
                <p className="text-pink-100">Ready for professional saree drapping</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {selectedProducts.map((product) => (
                <div key={`selected-${product.id}`} className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                  <div>
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-pink-100">₹{product.sale}</p>
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
                <div className="text-pink-100">Total Amount</div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center space-x-2"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Book Service & Checkout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SareeDrapping;