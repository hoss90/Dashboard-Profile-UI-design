import menu from '../Photo/menu.png'
import search from '../Photo/search.png'
import dark from '../Photo/dark.png'
import avatar from '../Photo/avatar.jpg'
import '../Style/Banner.css';
function Banner() {
  function mode(e) {
    e.preventDefault();
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
   }
   function mode2(e) {
    e.preventDefault();
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
   }
    return (
      <div className="banner" >
          <img src={menu} className="menuPic" />
        <span className="portfolio">Portfolio</span>
        <input type="search" placeholder="Search..." className="searchBar"/>
        <img src={search} className="searchPic" />
        <h2 className="job">Front-end Developer</h2>
        <img src={dark} className="darkMode" onClick={mode} onDoubleClick={mode2}/>
        <h4 className="name">Hoss Janfaoui</h4>
        <img src={avatar} className="avatar" />
      </div>
    );
  }
  
  export default Banner;