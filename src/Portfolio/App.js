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
function App() {






  return (
    <div className="App">
      <Navigation />
      <Banner />
      <AboutMe />
      <MyProjects />
    </div>
  );
}

export default App;
