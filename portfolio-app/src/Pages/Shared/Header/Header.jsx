import "./Header.scss";
import fireLogo from './fire_symbol_icon_small.png';
import arrowLogo from './right_arrow_black.svg';
import { Menu } from '../Menu/Menu'

export function Header() {
  return (
    <header className='site-header'>
      <div className="icon-wrapper">
        <img className='icon-image' src={fireLogo} alt='Red slavic fire symbol' />
      </div>
      <div className='header-container'>
        <div className='header-menu-container'>
          <Menu></Menu>
        </div> 
        <button className='btn get-in-touch-btn'>
          <div className="button-content-container">
            <h3 className='get-in-touch-text'>Get in touch</h3>
            <div className='arrow-container'>
              <img src={arrowLogo} alt='A small arrow poiting right' />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;