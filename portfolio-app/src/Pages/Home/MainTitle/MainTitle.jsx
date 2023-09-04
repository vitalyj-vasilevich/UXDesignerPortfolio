import './MainTitle.scss';
import arrowLogo from './down_arrow_black.svg';
import ellipseLogo from './available_ellipse.svg';
import fireSymbol from './fire_symbol_big.svg';
import nameLine from './name_line.svg';

export function MainTitle() {
  return (
    <div className='title-container'>
      <div className='horizontal-container'>
        <div className='title-text-container'>
          <span className='t1'>PRODUCT</span>
          <span className='t1'>DESIGNER</span>
        </div>
        <img className='fire-symbol-image' src={fireSymbol} alt='Big slavic fire symbol' />
        <div className='name-text-container'>
          <span className='line-and-text-container'>
            <img src={nameLine} alt='Black horizontal line' />
            <h2>Natallia Miliukova</h2>
          </span>
          <span className='line-and-text-container'>
            <img src={nameLine} alt='Black horizontal line' />
            <h2>Tbilisi, Georgia</h2>
          </span>
        </div>
      </div>
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