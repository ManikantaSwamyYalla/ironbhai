import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Pricing from './components/pricing';
import SteamIron from './OurServicesPages/Steam-Iron';
import WashIron from './OurServicesPages/Wash-Iron';
import DryCleaning from './OurServicesPages/Dry-Cleaning';
import Cart from './Pages/Cart'; // Fixed import
import Login from './Pages/Login';
import WashFold from './OurServicesPages/Wash-Fold';
import SareeDrapping from './OurServicesPages/Saree-Drapping';
import SareeRolling from './OurServicesPages/Saree-Rolling';
import Home from './components/Home';
import PrivacyPolicy from './Policies/PrivacyPolicy';
import TermsConditions from './Policies/TermsConditions';
import RefundPolicy from './Policies/RefundPolicy';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
               <Routes>
          <Route path="/" element={
            <>
              <HeroBanner />
              <Services />
              <Features />
              <Testimonials />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/steam-iron" element={<SteamIron />} />
          <Route path="/wash-iron" element={<WashIron />} />
          <Route path="/dry-cleaning" element={<DryCleaning />} />
          <Route path="/wash-fold" element={<WashFold />}/>
          <Route path="/saree-drapping" element={<SareeDrapping />} />
          <Route path="/saree-rolling" element={<SareeRolling />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;