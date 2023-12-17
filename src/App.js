import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Header from './Components/Header';
import WorkShow from './Components/WorkShow';
import Testimonial from './Components/Testimonial';
import Faqs from './Components/Faqs';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Working from './Components/Working';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <WorkShow/>
    <Working/>
    <Testimonial/>
    <Pricing/>
    <Faqs/>
    <Footer/>
    </>
  );
}

export default App;
