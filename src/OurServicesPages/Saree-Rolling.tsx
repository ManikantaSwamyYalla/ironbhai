import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../Utils/jwtUtils";
import { useCart } from "../context/CartContext";

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

const SareeRolling: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  // Fetch Saree-Rolling Cleaning service details
  useEffect(() => {
    const fetchSareeRollingDetails = async () => {
      try {
        // Generate a temporary token for API access
        const tempToken = await generateToken({
          version_name: "1.0.0",
          version_code: "1",
          device_id: "web-" + Date.now(),
          device_type: "web",
          device_model: navigator.userAgent.substring(0, 50)
        });

        // Fetch Saree Rolling service (ID 3 based on API)
        const response = await fetch("https://api-dev.ironbhai.com/v1/app/services/4", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tempToken}`,
          },
        });

        const data = await response.json();
        console.log("Api Response:", data)

        if (response.ok && data.ok) {
          setCategories(data.data.categories || []);
          setProducts(data.data.products || []);
          console.log("Categories:", data.data.categories);
          console.log("Products:", data.data.products);
        } else {
          setError(data.message || "Failed to fetch Dry Cleaning service details");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Network error while fetching Dry Cleaning service details");
      } finally {
        setLoading(false);
      }
    };

    fetchSareeRollingDetails();
  }, []);

  // Handle category selection
  const handleCategorySelect = (categoryId: number) => {
    // If the same category is clicked again, deselect it
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  // Filter products by selected category
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
    // Navigate to cart page
    navigate("/cart");
  };

  // Go back to services
  const goBack = () => {
    navigate("/services");
  };

  if (loading) return <p className="text-center py-8 text-xl">Loading Saree Rolling service...</p>;

  return (
    <div className="dry-cleaning-page max-w-7xl mx-auto px-4 py-8">
      {/* Header with gradient */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 p-6 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-xl shadow-lg">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Saree Rolling Service</h1>
          <p className="text-blue-100 mt-2">Premium saree rolling for delicate and special fabrics</p>
        </div>
        <button 
          onClick={goBack}
          className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          ← Back to Services
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-fade-in">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {/* Categories Section with enhanced design */}
      <div className="mb-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <div className="ml-4 h-1 flex-grow bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
        </div>
        
        {categories.length > 0 ? (
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:border-blue-300 border border-gray-200'
                }`}
                onClick={() => handleCategorySelect(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-gray-500">No categories available</p>
          </div>
        )}
      </div>

      {/* Products Section with enhanced design */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Products
          </h2>
          <div className="ml-4 h-1 flex-grow bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
        </div>
        
        {!selectedCategory ? (
          <div className="text-center py-8">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-gray-500">Please select a category to view products</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {filteredProducts.map((product) => {
              const isSelected = selectedProducts.some(p => p.id === product.id);
              return (
                <div 
                  key={product.id} 
                  className={`border rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-100 bg-gradient-to-br from-white to-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Popular</span>
                  </div>
                  {/* <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.short_desc}</p> */}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-gray-400 line-through text-sm">MRP: ₹{product.mrp}</span>
                      <span className="text-lg font-bold text-indigo-600">Sale: ₹{product.sale}</span>
                    </div>
                    <button 
                      onClick={() => handleProductToggle(product)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isSelected
                          ? 'bg-green-500 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
            <p className="text-gray-500">There are no products available in the selected category.</p>
          </div>
        )}
      </div>

      {/* Selected Products Summary */}
      {selectedProducts.length > 0 && (
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Selected Products</h2>
            <div className="ml-4 h-1 flex-grow bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {selectedProducts.map((product) => (
              <div key={`selected-${product.id}`} className="flex justify-between items-center border-b pb-3">
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-indigo-600 font-bold">Sale: ₹{product.sale}</p>
                </div>
                <button
                  onClick={() => handleProductToggle(product)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            
            <div className="mt-6 text-right">
              <p className="text-lg font-bold">
                Total: ₹{selectedProducts.reduce((sum, product) => sum + Number(product.sale), 0)}
              </p>
              <button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold mt-4 hover:opacity-90 transition-opacity"
              >
                Add All to Cart and View Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SareeRolling;
