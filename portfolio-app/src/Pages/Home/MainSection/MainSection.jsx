import './MainSection.scss';
import { Grid } from '@mui/material';
import whiteArrowLogo from './right_arrow_white.svg';
import blackArrowLogo from './right_arrow_black.svg';

export function MainSection() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={8}>
        <div className='vertical-container primary-background'>
          <h1 className='background-color-text'>HEY, I'M NATALLIA</h1>
          <h2 className='background-color-text'>A Product Designer experienced in working for a variety of digital products.</h2>
          <div className='projects-links-container'>
            <button className='inv-btn'>
              <div className='button-content-container'>
                <h3 className='background-color-text'>FINTECH</h3>
              </div>
            </button>
            <button className='inv-btn'>
              <div className='button-content-container'>
                <h3 className='background-color-text'>CRYPTO</h3>
              </div>
            </button>
            <button className='inv-btn'>
              <div className='button-content-container'>
                <h3 className='background-color-text'>ADMIN PANEL</h3>
              </div>
            </button>
          </div>
          <h1 className='background-color-text'>SKILLS AND INTERESTS</h1>
          <div className='projects-links-container'>
            <button className='inv-btn'>
              <div className='button-content-container'>
                <h3 className='background-color-text'>UX DESIGN</h3>
              </div>
            </button>
            <button className='inv-btn'>
              <div className='button-content-container'>
                <h3 className='background-color-text'>UI DESIGN</h3>
              </div>
            </button>
            <button className='inv-btn'>
              <div className='button-content-container'>
                <h3 className='background-color-text'>DESIGN SYSTEM</h3>
              </div>
            </button>
            <button className='inv-btn'>
              <div className='button-content-container'>
                <img src={whiteArrowLogo} alt='A small arrow poiting right' />
              </div>
            </button>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='vertical-container foreground-background latest-project-container'>
          <h1 className='background-color-text'>LATEST PROJECT</h1>
          <button className='inv-btn'>
            <div className='button-content-container'>
              <img src={whiteArrowLogo} alt='A small arrow poiting right' />
            </div>
          </button>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className='vertical-container latest-project-container'>
          <h1>PORTFOLIO</h1>
          <button className='btn'>
            <div className='button-content-container'>
              <img src={blackArrowLogo} alt='A small arrow poiting right' />
            </div>
          </button>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className='vertical-container foreground-background latest-project-container'>
          <h1 className='background-color-text'>RESUME</h1>
          <button className='inv-btn'>
            <div className='button-content-container'>
              <img src={whiteArrowLogo} alt='A small arrow poiting right' />
            </div>
          </button>
        </div>
      </Grid>
      <Grid item xs={7}>
        <div className='vertical-container latest-project-container'>
          <h1>LET'S DISCUSS YOUR NEXT PROJECT</h1>
          <div className='projects-links-container'>
            <button className='btn'>
              <div className='button-content-container'>
                <h3>EMAIL</h3>
              </div>
            </button>
            <button className='btn'>
              <div className='button-content-container'>
                <h3>LINKEDIN</h3>
              </div>
            </button>
            <button className='btn'>
              <div className='button-content-container'>
                <h3>BEHANCE</h3>
              </div>
            </button>
            <button className='btn'>
              <div className='button-content-container'>
                <h3>DRIBBLE</h3>
              </div>
            </button>
            <button className='btn'>
              <div className='button-content-container'>
                <img src={blackArrowLogo} alt='A small arrow poiting right' />
              </div>
            </button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default MainSection;