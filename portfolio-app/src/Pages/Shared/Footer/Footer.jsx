import * as React from 'react'
import "./Footer.scss";

export function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-menu-container'>
        <nav>
          <ul>
            <li><a href='#'>Work</a></li>
            <li><a href='#'>Resume</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </nav>
      </div>
    <div class="copyright-container">© Natallia Miliukova 2023 | Product Designer | natasha.milyukova@gmail.com</div>
    </footer>
  );
}

export default Footer;