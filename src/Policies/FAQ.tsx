import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle, X } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalContent, setModalContent] = useState<{ question: string; answer: string | JSX.Element } | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = (faq: { question: string; answer: string | JSX.Element }) => {
    setModalContent(faq);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order through the IronBhai mobile app or website. Select your service, choose a pickup slot, and confirm your booking."
    },
    {
      question: "What services do you offer?",
      answer: "We provide laundry, ironing, dry cleaning, saree rolling, and special garment care services."
    },
    {
      question: "What are your service hours?",
      answer: "We operate 7 days a week, from 8:00 AM to 9:00 PM. Timings may vary on public holidays."
    },
    {
      question: "How much do your services cost?",
      answer: "Prices are listed in the app and vary depending on the garment type and service chosen."
    },
    {
      question: "Do you offer home pickup and delivery?",
      answer: "Yes, we provide doorstep pickup and delivery for all orders."
    },
    {
      question: "How long does it take to process my order?",
      answer: "Most orders are completed within 24–48 hours. Delicate or special items may take longer."
    },
    {
      question: "What if I miss my pickup or delivery?",
      answer: "You can reschedule through the app or contact customer support to arrange a new time."
    },
    {
      question: "Do you guarantee stain removal?",
      answer: "We do our best to remove stains, but 100% removal cannot be guaranteed, especially for old or set-in stains."
    },
    {
      question: "How can I pay?",
      answer: "We accept online payments (UPI, cards, net banking) and Cash on Delivery (COD) where available."
    },
    {
      question: "What if my garment is damaged or lost?",
      answer: "If damage or loss occurs due to our negligence, compensation will be provided as per our Terms & Conditions."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes! Check the app's \"Offers\" section or our social media pages for the latest deals."
    },
    {
      question: "How can I contact customer support?",
      answer: (
        <div>
          <p className="mb-4 text-lg">You can reach our customer support through any of the following channels:</p>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center bg-blue-50 p-3 rounded-lg">
              <Mail className="w-6 h-6 mr-3 text-blue-600" />
              <span className="text-lg"><strong>Email:</strong> support@ironbhai.com</span>
            </div>
            <div className="flex items-center bg-green-50 p-3 rounded-lg">
              <Phone className="w-6 h-6 mr-3 text-green-600" />
              <span className="text-lg"><strong>Contact:</strong> +91 8688206969</span>
            </div>
            <div className="flex items-center bg-purple-50 p-3 rounded-lg">
              <MessageCircle className="w-6 h-6 mr-3 text-purple-600" />
              <span className="text-lg"><strong>WhatsApp:</strong> Chat With Us</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and more.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="transition-all duration-200 hover:bg-gray-50">
                <button
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    <div className="border-l-4 border-blue-500 pl-4">
                      {typeof faq.answer === 'string' ? (
                        <p className="text-lg mb-4">{faq.answer}</p>
                      ) : (
                        <div className="mb-4">{faq.answer}</div>
                      )}
                      <button 
                        onClick={() => openModal(faq)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center"
                      >
                        View Details
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Our support team is ready to help you with any inquiries you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:support@ironbhai.com?subject=Question%20About%20IronBhai%20Services&body=Hello%20IronBhai%20Team,%0A%0AI%20have%20a%20question%20regarding%20your%20services:%0A%0A%0AThank%20you."
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </a>
            <a 
              href="tel:+918688206969" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
            <a 
              href="https://wa.me/918688206969" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{modalContent.question}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="text-gray-700 text-lg">
                {typeof modalContent.answer === 'string' ? (
                  <p className="text-lg leading-relaxed">{modalContent.answer}</p>
                ) : (
                  <div className="text-lg">{modalContent.answer}</div>
                )}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;