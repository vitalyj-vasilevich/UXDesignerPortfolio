import { ButtonGroup } from "@mui/material";
import "./Header.scss";
import fireLogo from './fire_symbol_icon_small.png';

export function Header() {
  return (
    <header className='site-header'>
      <div className="icon-wrapper">
        <img className="icon-image" src={fireLogo} />
      </div>
      <div className='header-container'>
        <div className='header-menu-container'>
          <nav>
            <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </div> 
        <div className='get-in-touch-btn'>
          <button>
            <div className="button-content-container">
              <h3>Get in touch</h3>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;