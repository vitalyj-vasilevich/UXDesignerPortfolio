import './Home.scss';
import arrowLogo from './down_arrow_black.svg';
import ellipseLogo from './available_ellipse.svg';

export function Home() {
  return (
    <div className='title-container'>
      <div className='title-text-container'>

      </div>
      <div className='buttons-container'>
        <button className='btn'>
          <div className="button-content-container">
            <div className='arrow-container'>
              <img src={arrowLogo} alt='A small arrow poiting down' />
            </div>
          </div>
        </button>
        <button className='btn'>
          <div className="button-content-container">
            <div className='ellipse-container'>
              <img src={ellipseLogo} alt='A small green circle' />
            </div>
            <h3 className='available-text'>Available</h3>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Home;