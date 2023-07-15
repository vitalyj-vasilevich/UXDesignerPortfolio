import './Footer.scss';
import { Menu } from '../Menu/Menu';
import arrowLogo from './up_arrow_black.svg';

export function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <button className='btn up-btn'>
          <div className="button-content-container">
            <div className='arrow-container'>
              <img src={arrowLogo} alt='A small arrow poiting right' />
            </div>
          </div>
        </button>
        <div className='footer-menu-container'>        
          <Menu />
        </div>
      </div>
      <div class="copyright-container">© Natallia Miliukova 2023 | Product Designer | natasha.milyukova@gmail.com</div>
    </footer>
  );
}

export default Footer;