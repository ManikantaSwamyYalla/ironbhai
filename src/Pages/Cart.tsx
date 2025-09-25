import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../Utils/jwtUtils";
import { authorizedFetch } from "../Utils/authorizedFetch";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShoppingCart, 
  Truck,
  Shield,
  CreditCard,
  Sparkles,
} from 'lucide-react';

// Type definitions for API data
type Category = {
  id: number;
  name: string;
  service_id: number;
  priority: number;
  image: string | null;
};

type Service = {
  id: number;
  name: string;
  status: number;
  coming_soon: number;
  priority: number;
  image_url: string;
};

type Slot = {
  slot_id: number;
  start_time: string;
  end_time: string;
};

type SlotDay = {
  date: string;
  weekday: string;
  day: string;
  slots: Slot[];
};

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart, addToCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [pickupSlots, setPickupSlots] = useState<Record<string, SlotDay>>({});
  const [selectedSlot, setSelectedSlot] = useState<{ dayDate: string; slotId: number } | null>(null);

  // Map service IDs to service names
  const serviceNames: Record<number, string> = {
    1: "Steam Iron",
    2: "Wash & Iron",
    3: "Dry Cleaning",
    6: "Wash & Fold"
  };

  // Service icons mapping
  const serviceIcons: Record<string, string> = {
    "Steam Iron": "👔",
    "Wash & Iron": "🧺",
    "Dry Cleaning": "✨",
    "Wash & Fold": "👕"
  };

  // Fetch categories and services data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Generate a temporary token for API access
        const tempToken = await generateToken({
          version_name: "1.0.0",
          version_code: "1",
          device_id: "web-" + Date.now(),
          device_type: "web",
          device_model: navigator.userAgent.substring(0, 50)
        });

        // Fetch all services
        const servicesResponse = await authorizedFetch("https://api-dev.ironbhai.com/v1/app/services", {
          headers: {
            "Authorization": `Bearer ${tempToken}`,
          },
        });

        const servicesData = await servicesResponse.json();
        if (servicesResponse.ok && servicesData.ok) {
          setServices(servicesData.data);
        }

        // For each service in the cart, fetch its categories
        const allCategories: Category[] = [];

        // We need to fetch categories for each service
        for (const serviceId of [1, 2, 3, 6]) {
          try {
            const response = await authorizedFetch(`https://api-dev.ironbhai.com/v1/app/services/${serviceId}`, {
              headers: {
                "Authorization": `Bearer ${tempToken}`,
              },
            });

            const data = await response.json();
            if (response.ok && data.ok && data.data.categories) {
              allCategories.push(...data.data.categories);
            }
          } catch (err) {
            console.error(`Error fetching categories for service ${serviceId}:`, err);
          }
        }

        setCategories(allCategories);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchPickupSlots = async () => {
      try {
        const tempToken = await generateToken({
          version_name: "1.0.0",
          version_code: "1",
          device_id: "web-" + Date.now(),
          device_type: "web",
          device_model: navigator.userAgent.substring(0, 50)
        });

        const slotsResponse = await authorizedFetch(
          "https://api-dev.ironbhai.com/v1/app/orders/pickup-available-slots",
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${tempToken}`,
              "Content-Type": "application/json",
              "authToken": "U2FsdGVkX18QUgxbBC7FGmxnYaSe1MN6QFMeb7Urz0BmBM7q8a0GYwAGFwq7daws6o4048gm5dwp0KxaMqYGcL3+JZCZI8QBlKNhg6e+yNYJT6ox8fza1lIEO1pRdR8EXDqvsjG3y8k0PZ1bWE6WmxdrLN5ZMxy3JXBcq43ITWyZ3x65Udn+GFkKfUoUGsu0+95rT/6YgDmrhtMrQN9MWF1MJzLcu6rEjuk5wr9keQxlaXqRUof+JH4U+UdHdl3/E7FvbNHWZFTYp+R+Xg8LcPZHgMqW9/MMO+kus1sWnxI=",
            },
            body: JSON.stringify({ token: "Asia/Kolkata" }),
          }
        );

        const slotsData = await slotsResponse.json();
        if (slotsResponse.ok && slotsData.ok) {
          setPickupSlots(slotsData.data);
        }
      } catch (err) {
        console.error("Error fetching pickup slots:", err);
      }
    };

    if (cart.length > 0) {
      fetchData();
      fetchPickupSlots();
    } else {
      setLoading(false);
    }
  }, [cart]);

  // Get category name by ID
  const getCategoryName = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : `Category ${categoryId}`;
  };

  // Get service name by category ID
  const getServiceName = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      const serviceId = category.service_id;
      const service = services.find(svc => svc.id === serviceId);
      return service ? service.name : serviceNames[serviceId] || `Service ${serviceId}`;
    }
    return "Unknown Service";
  };

  // Calculate total for all items
  const total = cart.reduce((sum, item) => sum + Number(item.sale) * item.quantity, 0);
  const deliveryFee = total > 500 ? 0 : 30;
  const finalTotal = total + deliveryFee;

  // Function to increase quantity
  const increaseQuantity = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      mrp: item.mrp,
      sale: item.sale,
      category_id: item.category_id,
    });
  };

  // Function to decrease quantity
  const decreaseQuantity = (id: number) => {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const handleContinueShopping = () => {
    navigate("/services");
  };

  const handleSlotSelection = (dayDate: string, slotId: number) => {
    setSelectedSlot({ dayDate, slotId });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Your Cart</h2>
          <p className="text-gray-600">Please wait while we fetch your items...</p>
          <div className="mt-6 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Your Laundry Cart</h1>
                <p className="text-blue-100 text-lg">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} ready for professional care
                </p>
              </div>
            </div>
            {cart.length > 0 && (
              <div className="text-right bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-blue-100 text-sm mb-1">Total Amount</p>
                <p className="text-3xl font-bold">₹{finalTotal}</p>
                <p className="text-blue-200 text-sm mt-1">Including delivery</p>
              </div>
            )}
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 transform rotate-1 origin-bottom-left"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {cart.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-20">
            <div className="bg-white rounded-3xl shadow-2xl p-16 max-w-lg mx-auto transform hover:scale-105 transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingCart className="w-16 h-16 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Ready to give your clothes the professional care they deserve? 
                <br />Start by exploring our premium laundry services!
              </p>
              <button
                onClick={handleContinueShopping}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3 mx-auto shadow-xl"
              >
                <Sparkles className="w-6 h-6" />
                Explore Services
              </button>
            </div>
          </div>
        ) : (
          // Cart with Items
          <div className="grid xl:grid-cols-12 gap-8">
            {/* Cart Items */}
            <div className="xl:col-span-8 space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    Your Items ({cart.length})
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {cart.map((item) => {
                    const serviceName = getServiceName(item.category_id);
                    return (
                      <div key={item.id} className="p-8 hover:bg-gray-50 transition-all duration-300 group">
                        <div className="flex items-center gap-8">
                          {/* Service Icon */}
                          <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            {serviceIcons[serviceName] || "👔"}
                          </div>

                          {/* Item Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{item.name}</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                <span>Category: <span className="font-medium text-gray-800">{getCategoryName(item.category_id)}</span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                                <span>Service: <span className="font-medium text-indigo-600">{serviceName}</span></span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 mt-4">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-indigo-600">₹{Number(item.sale).toFixed(0)}</span>
                                {Number(item.mrp) > Number(item.sale) && (
                                  <>
                                    <span className="text-lg text-gray-400 line-through">₹{Number(item.mrp).toFixed(0)}</span>
                                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
                                      SAVE ₹{(Number(item.mrp) - Number(item.sale)).toFixed(0)}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-6">
                            <div className="flex items-center bg-gray-100 rounded-2xl shadow-lg">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="p-4 hover:bg-gray-200 rounded-l-2xl transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-5 h-5 text-gray-600" />
                              </button>
                              <span className="px-6 py-4 font-bold text-gray-800 min-w-[4rem] text-center text-lg">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => increaseQuantity(item)}
                                className="p-4 hover:bg-gray-200 rounded-r-2xl transition-colors"
                              >
                                <Plus className="w-5 h-5 text-gray-600" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-4 text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-300 hover:scale-110 group"
                            >
                              <Trash2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </button>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                          <span className="text-gray-600 text-lg">Item Total:</span>
                          <span className="text-2xl font-bold text-gray-800">₹{(Number(item.sale) * item.quantity).toFixed(0)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Continue Shopping Button */}
              <button
                onClick={handleContinueShopping}
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 py-5 rounded-3xl transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
                Continue Shopping
              </button>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-4 space-y-8">
              {/* Pickup Slots */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Select a Pickup Slot</h3>
                  <p className="text-gray-600">Choose a convenient time for your pickup</p>
                </div>
                
                {/* Day Selection */}
                {/* <div className="flex overflow-x-auto pb-2 gap-3 mb-6">
                  {Object.values(pickupSlots).map((day) => {
                    const today = new Date().toISOString().split('T')[0];
                    return (
                      <button
                        key={day.date}
                        onClick={() => setSelectedSlot({ dayDate: day.date, slotId: -1 })}
                        className={`flex-shrink-0 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          day.date === today 
                            ? 'bg-purple-600 text-white shadow-lg' 
                            : 'bg-white text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-bold">{day.day}</div>
                        <div className="text-sm">{day.date}</div>
                      </button>
                    );
                  })}
                </div> */}
                  <div className="flex overflow-x-auto pb-2 gap-3 mb-6">
                  {Object.values(pickupSlots).map((day) => {
                     // Create abbreviated day names
                    const abbreviateDay = (fullDay: string) => {
                      const abbreviations: Record<string, string> = {
                        'Sunday': 'Sun',
                        'Monday': 'Mon',
                        'Tuesday': 'Tue',
                        'Wednesday': 'Wed',
                        'Thursday': 'Thu',
                        'Friday': 'Fri',
                        'Saturday': 'Sat'
                      };
                      return abbreviations[fullDay] || fullDay.substring(0, 3);
                    };
                    return (
                      <button
                        key={day.date}
                        onClick={() => setSelectedSlot({ dayDate: day.date, slotId: -1 })}
                        className={`flex-shrink-0 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          selectedSlot?.dayDate === day.date 
                            ? 'bg-purple-600 text-white shadow-lg' 
                            : 'bg-white text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {/* <div className="font-bold">{day.weekday}</div> */}
                        <div className="font-bold">{abbreviateDay(day.weekday)}</div>
                        <div className="text-sm">{day.date}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                {selectedSlot?.dayDate && (
                  <div className="grid grid-cols-2 gap-3">
                    {pickupSlots[selectedSlot.dayDate]?.slots.map((slot) => (
                      <button
                        key={slot.slot_id}
                        onClick={() => handleSlotSelection(selectedSlot.dayDate, slot.slot_id)}
                        className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          selectedSlot?.slotId === slot.slot_id
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {slot.start_time} - {slot.end_time}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden sticky top-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    Order Summary
                  </h2>
                </div>

                <div className="p-6">
                  {/* Order Details */}
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600 flex-1">{item.name} × {item.quantity}</span>
                        <span className="font-semibold text-gray-800">₹{(Number(item.sale) * item.quantity).toFixed(0)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cart.length} items)</span>
                      <span className="font-medium">₹{total.toFixed(0)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span className="font-medium">
                        {deliveryFee === 0 ? (
                          <span className="text-green-600 font-semibold">FREE</span>
                        ) : (
                          `₹${deliveryFee}`
                        )}
                      </span>
                    </div>
                    
                    {deliveryFee > 0 && (
                      <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-xl flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        <span>Add ₹{500 - total} more for free delivery!</span>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="border-t-2 border-gray-100 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">Total Amount:</span>
                      <span className="text-3xl font-bold text-indigo-600">₹{finalTotal}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-4 ${
                      selectedSlot 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!selectedSlot}
                  >
                    <CreditCard className="w-5 h-5" />
                    {selectedSlot ? 'Proceed to Checkout' : 'Select Pickup Time First'}
                  </button>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleContinueShopping}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-2xl transition-all duration-300 font-medium"
                    >
                      Continue Shopping
                    </button>
                    
                    <button
                      onClick={clearCart}
                      className="w-full text-red-500 hover:text-red-700 font-medium py-3 rounded-2xl hover:bg-red-50 transition-all duration-300"
                    >
                      Clear Cart
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 space-y-4">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Secure & encrypted payment</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { icon: <Truck className="w-4 h-4" />, text: "Free pickup & delivery" },
                        { icon: <Sparkles className="w-4 h-4" />, text: "Professional care guaranteed" },
                        { icon: <Shield className="w-4 h-4" />, text: "100% satisfaction promise" }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl">
                          <div className="text-blue-500">{benefit.icon}</div>
                          <span>{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;