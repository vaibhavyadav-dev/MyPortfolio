import "./HamburgerMenu.css"
import VaibhavYadav_Resume from "./Components/Documents/VaibhavYadav_Resume.pdf"
export default function Hamburger() {




  return (
    <section class="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li><a href="#Home">Home</a></li>
        <li><a href="#AboutME">About Me</a></li>
        <li><a href="#Projects">My Projects</a></li>
        <li><a href="#Blogs">My Blogs</a></li>
        <li><a href={VaibhavYadav_Resume} download="VaibhavYadav_Resume">Download My Resume</a></li>
        <li><a href="#Contact">Contact Me</a></li>
      </ul>
    </section>
  );
}
