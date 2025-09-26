// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { generateToken } from "../Utils/jwtUtils";
// // import { authorizedFetch } from "../Utils/authorizedFetch";

// // Type for API service data
// type ApiService = {
//   id: number;
//   name: string;
//   status: number;
//   coming_soon: number;
//   priority: number;
//   image_url: string;
// };

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

// // Component
// const Services: React.FC = () => {
//   const navigate = useNavigate();
//   const [services, setServices] = useState<ApiService[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedService, setSelectedService] = useState<ApiService | null>(null);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
//   const [dataLoading, setDataLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Fetch services from API
//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         // First, generate a temporary token for API access
//         const tempToken = await generateToken({
//           version_name: "1.0.0",
//           version_code: "1",
//           device_id: "web-" + Date.now(),
//           device_type: "web",
//           device_model: navigator.userAgent.substring(0, 50)
//         });

//         // Use authorizedFetch which automatically handles the authToken
//         const response = await fetch("https://api-dev.ironbhai.com/v1/app/services", {
//           headers: {
//             "Authorization": `Bearer ${tempToken}`,
//             "Content-Type": "application/json"
//           },
//         });

//         // Log the response for debugging
//         console.log("Response status:", response.status);
        
//         const data = await response.json();
//         console.log("Response data:", data);

//         if (response.ok && data.ok) {
//           // Sort services by priority
//           const sortedServices = data.data.sort(
//             (a: ApiService, b: ApiService) => a.priority - b.priority
//           );
//           setServices(sortedServices);
//         } else if (response.status === 498 || data.status === 498) {
//           // Handle invalid token error
//           setError("Authentication token has expired. Please refresh the page or contact support.");
//         } else {
//           const errorMessage = data.message || `Failed to fetch services. Status: ${response.status}`;
//           setError(errorMessage);
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Network error. Please check your connection and try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   // Fetch categories and products for a specific service
//   const fetchServiceDetails = async (serviceId: number) => {
//     setDataLoading(true);
//     try {
//       // Generate a temporary token for API access
//       const tempToken = await generateToken({
//         version_name: "1.0.0",
//         version_code: "1",
//         device_id: "web-" + Date.now(),
//         device_type: "web",
//         device_model: navigator.userAgent.substring(0, 50)
//       });

//       const response = await fetch(`https://api-dev.ironbhai.com/v1/app/services/${serviceId}`, {
//         headers: {
//           "Authorization": `Bearer ${tempToken}`,
//            "Content-Type": "application/json"
//         },
//       });
//       const data = await response.json();

//       if (response.ok && data.ok) {
//         setCategories(data.data.categories || []);
//         setProducts(data.data.products || []);
//         // Set the first category as selected by default
//         if (data.data.categories && data.data.categories.length > 0) {
//           // setSelectedCategory(data.data.categories[0]);
//            setSelectedCategory(null);
//         }
//       } else {
//         setError(data.message || "Failed to fetch service details");
//       }
//     } catch (err) {
//       console.error("Fetch service details error:", err);
//       setError("Network error while fetching service details");
//     } finally {
//       setDataLoading(false);
//     }
//   };

//   // Handle service card click
//   const handleServiceClick = async (service: ApiService) => {
//       if (service.id === 1) {
//       navigate("/steam-iron");
//       return;
//     }
//     if (service.id === 2){
//       navigate("/wash-iron");
//       return;
//     }
//     if (service.id === 3){
//       navigate("/dry-cleaning");
//       return;
//     }
//     if (service.id === 6){
//       navigate("/wash-fold");
//       return;
//     }
//     if (service.id === 4){
//       navigate("/saree-rolling");
//       return;
//     }
//     if (service.id === 5){
//       navigate("/saree-drapping");
//       return;
//     }
//     setSelectedService(service);
//     setShowModal(true);
//     setSelectedCategory(null);
//     setCategories([]);
//     setProducts([]);
//     await fetchServiceDetails(service.id);
//   };

//   // Handle category selection
//   const handleCategorySelect = (category: Category) => {
//     setSelectedCategory(category);
//   };

//   // Close modal
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedService(null);
//     setSelectedCategory(null);
//     setCategories([]);
//     setProducts([]);
//   };

//   // Fallback service data in case API fails
//   const fallbackServices: ApiService[] = [
//     {
//       id: 1,
//       name: "Steam Iron (API FAILED)",
//       status: 1,
//       coming_soon: 0,
//       priority: 1,
//       image_url: "/services/iron_only.png"
//     },
//     {
//       id: 2,
//       name: "Wash & Iron",
//       status: 1,
//       coming_soon: 0,
//       priority: 2,
//       image_url: "/services/washing.png"
//     },
//     {
//       id: 6,
//       name: "Wash & Fold",
//       status: 1,
//       coming_soon: 0,
//       priority: 3,
//       image_url: "/services/wash_and_fold.png"
//     },
//     {
//       id: 3,
//       name: "Dry Cleaning",
//       status: 1,
//       coming_soon: 0,
//       priority: 4,
//       image_url: "/services/dry_cleaning.png"
//     },
//     {
//       id: 4,
//       name: "Saree Rolling",
//       status: 1,
//       coming_soon: 1,
//       priority: 5,
//       image_url: "/services/saree_rolling.png"
//     },
//     {
//       id: 5,
//       name: "Saree Drapping",
//       status: 1,
//       coming_soon: 0,
//       priority: 6,
//       image_url: "/services/saree_droping.png"
//     }
//   ];

//   // If we have an error, show fallback data
//   if (error && services.length === 0) {
//     console.log("Using fallback services data");
//     setServices(fallbackServices);
//     // Don't show error if we have fallback data
//     setError(null);
//   }

//   // Filter products by selected category
//   const filteredProducts = selectedCategory 
//     ? products.filter(product => product.category_id === selectedCategory.id)
//     : [];

//   if (loading) return <p className="text-center py-8 text-xl">Loading services...</p>;

//    return (
//     <div className="services-page">
//       {/* Banner */}
//       <div className="relative w-full h-96 md:h-[400px] overflow-hidden mb-8 mt-4">
//         <img
//           src="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
//           alt="Laundry Services"
//           className="w-full h-full object-cover block image-rendering-auto"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/85 to-blue-500/70 flex flex-col justify-center items-center text-white text-center p-5 box-border">
//           <h1 className="text-4xl md:text-5xl mb-4 text-shadow-lg font-bold animate-fade-in-down">Our Premium Services</h1>
//           <p className="text-xl md:text-2xl max-w-2xl text-shadow font-medium animate-fade-in-up">Professional laundry care for all your clothing needs</p>
//         </div>
//       </div>

//       {/* Services */}
//       <div className="max-w-7xl mx-auto px-4 pb-8">
//         <h2 className="text-3xl md:text-4xl text-center my-8 relative pb-4 text-gray-800 font-bold animate-fade-in">
//           Available Services
//           <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-gray-800 rounded"></span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
//           {services.map((service) => (
//             <div 
//               key={service.id} 
//               className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 cursor-pointer border border-gray-100 relative overflow-hidden hover:-translate-y-2.5 hover:shadow-xl"
//               onClick={() => handleServiceClick(service)}
//             >
//               {/* Gradient accent bar */}
//               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-gray-800"></div>
              
//               {/* Service icon */}
//               <div className="text-5xl mb-6 text-blue-500 flex justify-center">
//                 {service.image_url ? (
//                   <img
//                     src={`https://api-dev.ironbhai.com${service.image_url}`}
//                     alt={service.name}
//                     className="w-15 h-15 object-contain"
//                     onError={(e) => {
//                       // Handle image loading errors
//                       const target = e.target as HTMLImageElement;
//                       target.style.display = "none";
//                     }}
//                   />
//                 ) : (
//                   <div className="w-15 h-15 bg-gray-100 rounded-full" />
//                 )}
//               </div>
              
//               <h4 className="text-2xl text-gray-800 mb-4 font-semibold">{service.name}</h4>

//               {/* Coming soon check */}
//               {service.coming_soon === 1 ? (
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">🚧 Coming Soon</p>
//               ) : (
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">
//                   Available for booking
//                 </p>
//               )}

//               <button 
//                 className="bg-gradient-to-r from-blue-500 to-gray-800 text-white border-none py-3 px-6 text-base rounded-full cursor-pointer transition-all duration-300 font-medium shadow-lg hover:-translate-y-1 hover:shadow-xl"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleServiceClick(service);
//                 }}
//               >
//                 View Categories
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Enhanced Modal for displaying categories and products */}
//       {showModal && selectedService && (
//         <div 
//           className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[1000] p-4 animate-fade-in"
//           onClick={closeModal}
//         >
//           <div 
//             className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform transition-transform duration-300 scale-100 animate-scale-in"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl flex justify-between items-center shadow-lg">
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold">{selectedService.name}</h2>
//                 <p className="text-blue-100 mt-1">Professional service details</p>
//               </div>
//               <button 
//                 className="bg-white/20 hover:bg-white/30 border-none text-white text-3xl w-12 h-12 flex justify-center items-center rounded-full transition-all duration-300 hover:rotate-90"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
            
//             {/* Modal Content */}
//             <div className="overflow-y-auto max-h-[70vh] p-6">
//               {dataLoading ? (
//                 <div className="flex justify-center items-center h-64">
//                   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//                   <span className="ml-3 text-lg text-gray-600">Loading service details...</span>
//                 </div>
//               ) : (
//                 <div className="modal-content">
//                   {/* Categories Section */}
//                   <div className="mb-8">
//                     <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
//                       <span className="w-1 h-6 bg-blue-500 mr-2 rounded"></span>
//                       Select Category
//                     </h3>
//                     {categories.length > 0 ? (
//                       <div className="flex flex-wrap gap-3 mb-6">
//                         {categories.map((category) => (
//                           <button
//                             key={category.id}
//                             className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
//                               selectedCategory && selectedCategory.id === category.id 
//                                 ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
//                                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
//                             }`}
//                             onClick={() => handleCategorySelect(category)}
//                           >
//                             {category.name}
//                           </button>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
//                         <p className="text-yellow-700">No categories available for this service.</p>
//                       </div>
//                     )}
//                   </div>

//                   {/* Products Section */}
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
//                       <span className="w-1 h-6 bg-blue-500 mr-2 rounded"></span>
//                       {selectedCategory ? `Products - ${selectedCategory.name}` : 'All Products'}
//                     </h3>
                    
//                     {filteredProducts.length > 0 || (products.length > 0 && !selectedCategory) ? (
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                         {(selectedCategory ? filteredProducts : products).map((product) => (
//                           <div 
//                             key={product.id} 
//                             className="border border-gray-200 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:border-blue-300 bg-gradient-to-br from-white to-gray-50"
//                           >
//                             <div className="flex justify-between items-start">
//                               <div>
//                                 <h4 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h4>
//                                 <p className="text-sm text-gray-600 mb-3 leading-relaxed">{product.short_desc}</p>
//                               </div>
//                               <div className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
//                                 #{product.id}
//                               </div>
//                             </div>
                            
//                             <div className="flex justify-between items-center mt-4">
//                               <div className="flex items-center">
//                                 <span className="text-gray-400 line-through text-sm mr-2">₹{product.mrp}</span>
//                                 <span className="text-lg font-bold text-green-600">₹{product.sale}</span>
//                               </div>
//                               <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
//                                 Add to Cart
//                               </button>
//                             </div>
                            
//                             <div className="mt-3 flex items-center">
//                               <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
//                                 Save ₹{parseFloat(product.mrp) - parseFloat(product.sale)}
//                               </span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
//                         <div className="text-blue-500 text-5xl mb-4">📦</div>
//                         <h4 className="text-lg font-medium text-gray-800 mb-2">No Products Available</h4>
//                         <p className="text-gray-600">
//                           {selectedCategory 
//                             ? `No products found in the ${selectedCategory.name} category.` 
//                             : 'No products available for this service.'}
//                         </p>
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Service Info Footer */}
//                   <div className="mt-8 pt-6 border-t border-gray-200">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <div className="bg-green-100 p-2 rounded-lg mr-3">
//                           <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="font-medium text-gray-800">Quality Guaranteed</p>
//                           <p className="text-sm text-gray-600">Professional service with best quality</p>
//                         </div>
//                       </div>
//                       <button 
//                         className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//                         onClick={() => {
//                           closeModal();
//                           navigate('/cart');
//                         }}
//                       >
//                         Proceed to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../Utils/jwtUtils";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Star, 
  Truck,
  Award,
  Phone,
  MapPin
} from "lucide-react";

// Type for API service data
type ApiService = {
  id: number;
  name: string;
  status: number;
  coming_soon: number;
  priority: number;
  image_url: string;
};

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

// Component
const Services: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<ApiService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<ApiService | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const tempToken = await generateToken({
          version_name: "1.0.0",
          version_code: "1",
          device_id: "web-" + Date.now(),
          device_type: "web",
          device_model: navigator.userAgent.substring(0, 50)
        });

        const response = await fetch("https://api-dev.ironbhai.com/v1/app/services", {
          headers: {
            "Authorization": `Bearer ${tempToken}`,
            "Content-Type": "application/json"
          },
        });

        console.log("Response status:", response.status);
        
        const data = await response.json();
        console.log("Response data:", data);

        if (response.ok && data.ok) {
          const sortedServices = data.data.sort(
            (a: ApiService, b: ApiService) => a.priority - b.priority
          );
          setServices(sortedServices);
        } else if (response.status === 498 || data.status === 498) {
          setError("Authentication token has expired. Please refresh the page or contact support.");
        } else {
          const errorMessage = data.message || `Failed to fetch services. Status: ${response.status}`;
          setError(errorMessage);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Network error. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Fetch categories and products for a specific service
  const fetchServiceDetails = async (serviceId: number) => {
    setDataLoading(true);
    try {
      const tempToken = await generateToken({
        version_name: "1.0.0",
        version_code: "1",
        device_id: "web-" + Date.now(),
        device_type: "web",
        device_model: navigator.userAgent.substring(0, 50)
      });

      const response = await fetch(`https://api-dev.ironbhai.com/v1/app/services/${serviceId}`, {
        headers: {
          "Authorization": `Bearer ${tempToken}`,
           "Content-Type": "application/json"
        },
      });
      const data = await response.json();

      if (response.ok && data.ok) {
        setCategories(data.data.categories || []);
        setProducts(data.data.products || []);
        if (data.data.categories && data.data.categories.length > 0) {
          setSelectedCategory(null);
        }
      } else {
        setError(data.message || "Failed to fetch service details");
      }
    } catch (err) {
      console.error("Fetch service details error:", err);
      setError("Network error while fetching service details");
    } finally {
      setDataLoading(false);
    }
  };

  // Handle service card click
  const handleServiceClick = async (service: ApiService) => {
    if (service.id === 1) {
      navigate("/steam-iron");
      return;
    }
    if (service.id === 2){
      navigate("/wash-iron");
      return;
    }
    if (service.id === 3){
      navigate("/dry-cleaning");
      return;
    }
    if (service.id === 6){
      navigate("/wash-fold");
      return;
    }
    if (service.id === 4){
      navigate("/saree-rolling");
      return;
    }
    if (service.id === 5){
      navigate("/saree-drapping");
      return;
    }
    setSelectedService(service);
    setShowModal(true);
    setSelectedCategory(null);
    setCategories([]);
    setProducts([]);
    await fetchServiceDetails(service.id);
  };

  // Handle category selection
  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setSelectedCategory(null);
    setCategories([]);
    setProducts([]);
  };

  // Fallback service data in case API fails
  const fallbackServices: ApiService[] = [
    {
      id: 1,
      name: "Steam Iron",
      status: 1,
      coming_soon: 0,
      priority: 1,
      image_url: "/services/iron_only.png"
    },
    {
      id: 2,
      name: "Wash & Iron",
      status: 1,
      coming_soon: 0,
      priority: 2,
      image_url: "/services/washing.png"
    },
    {
      id: 6,
      name: "Wash & Fold",
      status: 1,
      coming_soon: 0,
      priority: 3,
      image_url: "/services/wash_and_fold.png"
    },
    {
      id: 3,
      name: "Dry Cleaning",
      status: 1,
      coming_soon: 0,
      priority: 4,
      image_url: "/services/dry_cleaning.png"
    },
    {
      id: 4,
      name: "Saree Rolling",
      status: 1,
      coming_soon: 1,
      priority: 5,
      image_url: "/services/saree_rolling.png"
    },
    {
      id: 5,
      name: "Saree Drapping",
      status: 1,
      coming_soon: 0,
      priority: 6,
      image_url: "/services/saree_droping.png"
    }
  ];

  // If we have an error, show fallback data
  if (error && services.length === 0) {
    console.log("Using fallback services data");
    setServices(fallbackServices);
    setError(null);
  }

  // Filter products by selected category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category_id === selectedCategory.id)
    : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Loading premium services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Professional Laundry Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-500 p-2 rounded-full">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-orange-300 font-medium text-lg">Premium Laundry Care</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Fresh, Clean & 
                    <span className="text-orange-400"> Professional</span>
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                    Experience the finest laundry care with our expert services. We handle your clothes with precision, care, and attention to detail.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Book Now - Save 20%
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Us</span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">5000+</div>
                    <div className="text-blue-200 text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">24hrs</div>
                    <div className="text-blue-200 text-sm">Express Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">100%</div>
                    <div className="text-blue-200 text-sm">Quality Promise</div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Pickup & Delivery</h3>
                      <p className="text-blue-200">Convenient doorstep service</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">100% Safe & Hygienic</h3>
                      <p className="text-blue-200">Advanced cleaning technology</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500 p-3 rounded-full">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Express Service</h3>
                      <p className="text-blue-200">Same day & 24-hour options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded-full mb-4">
            <Star className="w-5 h-5" />
            <span>Our Premium Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Care for Every Fabric
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From everyday essentials to delicate garments, we provide specialized care that keeps your clothes looking their absolute best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden transform hover:-translate-y-2"
              onClick={() => handleServiceClick(service)}
            >
              {/* Service Image/Icon */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 text-center">
                <div className="absolute top-4 right-4">
                  {service.coming_soon === 1 ? (
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold py-1 px-3 rounded-full">
                      Coming Soon
                    </span>
                  ) : (
                    <span className="bg-green-400 text-green-900 text-xs font-bold py-1 px-3 rounded-full">
                      Available
                    </span>
                  )}
                </div>
                
                {service.image_url ? (
                  <img
                    src={`https://api-dev.ironbhai.com${service.image_url}`}
                    alt={service.name}
                    className="w-20 h-20 mx-auto mb-4 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-20 h-20 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center">
                    <Truck className="w-10 h-10 text-blue-600" />
                  </div>
                )}
              </div>
              
              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                
                {service.coming_soon === 1 ? (
                  <p className="text-gray-600 mb-6">🚧 Launching soon with exciting features</p>
                ) : (
                  <p className="text-gray-600 mb-6">
                    Professional service with quality assurance and timely delivery
                  </p>
                )}

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Quality guaranteed</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck className="w-4 h-4 text-blue-500 mr-2" />
                    <span>Pickup & Delivery</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-purple-500 mr-2" />
                    <span>Express options available</span>
                  </div>
                </div>

                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  Explore Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Premium Laundry Care?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust us with their precious garments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                Book Order
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Find Nearest Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && selectedService && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[1000] p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden transform transition-transform duration-300 scale-100 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-t-3xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2">{selectedService.name}</h2>
                  <p className="text-blue-100 text-lg">Professional laundry service with premium care</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-blue-100 ml-2">4.9/5 (2,500+ reviews)</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="bg-white/20 hover:bg-white/30 border-none text-white text-3xl w-12 h-12 flex justify-center items-center rounded-full transition-all duration-300 hover:rotate-90"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[70vh] p-8">
              {dataLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  <span className="ml-3 text-lg text-gray-600">Loading service details...</span>
                </div>
              ) : (
                <div className="modal-content">
                  {/* Categories Section */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-1 h-8 bg-blue-500 mr-3 rounded"></div>
                      Service Categories
                    </h3>
                    {categories.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            className={`p-4 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                              selectedCategory && selectedCategory.id === category.id 
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                            onClick={() => handleCategorySelect(category)}
                          >
                            <div className="font-medium">{category.name}</div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                        <p className="text-yellow-800 font-medium">No categories available for this service.</p>
                      </div>
                    )}
                  </div>

                  {/* Products Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <div className="w-1 h-8 bg-blue-500 mr-3 rounded"></div>
                      {selectedCategory ? `${selectedCategory.name} Items` : 'Available Items'}
                    </h3>
                    
                    {filteredProducts.length > 0 || (products.length > 0 && !selectedCategory) ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(selectedCategory ? filteredProducts : products).map((product) => (
                          <div 
                            key={product.id} 
                            className="border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 bg-gradient-to-br from-white to-gray-50"
                          >
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h4>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{product.short_desc}</p>
                              </div>
                              <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                                #{product.id}
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-3">
                                <span className="text-gray-400 line-through text-sm">₹{product.mrp}</span>
                                <span className="text-2xl font-bold text-green-600">₹{product.sale}</span>
                                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                                  Save ₹{parseFloat(product.mrp) - parseFloat(product.sale)}
                                </span>
                              </div>
                              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-12 text-center">
                        <div className="text-blue-500 text-6xl mb-4">📦</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">No Items Available</h4>
                        <p className="text-gray-600 text-lg">
                          {selectedCategory 
                            ? `No items found in the ${selectedCategory.name} category.` 
                            : 'No items available for this service at the moment.'}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Service Features Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h4>
                        <p className="text-gray-600 text-sm">100% satisfaction or money back</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Truck className="w-8 h-8 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Pickup & Delivery</h4>
                        <p className="text-gray-600 text-sm">Convenient doorstep service</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Clock className="w-8 h-8 text-purple-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Express Service</h4>
                        <p className="text-gray-600 text-sm">24-hour turnaround available</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <button 
                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                        onClick={() => {
                          closeModal();
                          navigate('/cart');
                        }}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;