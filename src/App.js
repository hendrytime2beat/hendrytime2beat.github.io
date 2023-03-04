// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import { Facts } from './components/Facts';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Portofolio } from './components/Portofolio';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <Header/>
      <Profile/>
      <main id="main">
        <About/>
        <Facts/>
        <Skills/>
        <Resume/>
        <Portofolio/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
