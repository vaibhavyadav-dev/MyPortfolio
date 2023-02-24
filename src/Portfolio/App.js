import logo from '../logo.svg';
import './App.css';
// this one for Navigation Bar
import Navigation from './Components/NavigationBar';
// This one for Main Banner
import Banner from './Components/Banner';
// This one for Main body Content
import AboutMe from './Components/AboutMe';
// This one for MyProject Section 
import MyProjects from './Components/MyProjects';
// This one for Blogs
import Blogs from './Components/Blogs';
// This one for Contact Me section 
import ContactMe from './Components/ContactMe';
// This one For Thanking Animation
import Thanking from './Components/Thanking';
// This one For Footer Section
import Footer from './Footer';









function App() {



  return (
    <div className="App">
      <Navigation />
      <Banner />
      <AboutMe />
      <MyProjects />
      <Blogs/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
