import './MainTitle.scss';
import arrowLogo from './down_arrow_black.svg';
import ellipseLogo from './available_ellipse.svg';
import fireSymbol from './fire_symbol_big.svg';

export function MainTitle() {
  return (
    <div className='title-container'>
      <div className='title-text-container'>
      <div className='main-text-container'>
          <span className='t1'>PRODUCT</span>
          <span className='t1'>DESIGNER</span>
        </div>
      </div>
      <img src={}
      <div className='buttons-container'>
        <button className='btn'>
          <div className="button-content-container">
            <img src={arrowLogo} alt='A small arrow poiting down' />
          </div>
        </button>
        <button className='btn'>
          <div className="button-content-container">
            <img src={ellipseLogo} alt='A small green circle' />
            <h3 className='available-text'>Available</h3>
          </div>
        </button>
      </div>
    </div>
  );
}

export default MainTitle;