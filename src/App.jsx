import DentalCare from './DentalCare';
import './App.css';
import Services from './Services';
import WhyDentalCare from './WhyDentalCare';
import HowItWorks from './HowItWorks';
import Dentists from './Dentists';
import Stars from './Stars'
import CTASection from './CTABanner';
import Footer from './Footer';
import CTABanner from './CTABanner';

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <DentalCare />
        <Services />
        <WhyDentalCare />
        <HowItWorks />
        <Dentists />
        <Stars />
        <CTABanner />
        <Footer />
      </main>
    </div>
  );
}

export default App;