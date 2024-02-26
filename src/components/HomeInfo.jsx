import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.png";

const HomeInfo = ({ currentStage }) => {
  // Function to check if screen width is less than 768px
  const isSmallScreen = window.innerWidth < 768;

  if (currentStage === 1) {
    return (
      <h1 className='sm:text-l sm:leading-snug text-center' style={{
        backgroundColor: '#b1372f',
        padding: isSmallScreen ? '0.5rem 1rem' : '1rem 1.5rem', // Adjust padding based on screen size
        color: '#ffffff',
        margin: isSmallScreen ? '2rem 0' : '1.3rem 0', // Adjust margin based on screen size
        borderRadius: '8px',
        fontSize: isSmallScreen ? '1rem' : '1.2rem', // Adjust font size based on screen size
      }}>
        My name is  
        <span className='font-semibold mx-2 text-white'>Guneet Singh. </span>
        <br />
        Web Developer, UI Designer & Spine Animator.
      </h1>
    );
  }

  if (currentStage === 2 || currentStage === 3 || currentStage === 4) {
    return (
      <div style={{ 
        backgroundColor: '#b1372f', 
        color: '#ffffff', 
        border: '2px solid #b1372f', 
        padding: isSmallScreen ? '1rem' : '1.5rem', // Adjust padding based on screen size
        marginTop: isSmallScreen ? '2rem' : '1.3rem', // Adjust margin top based on screen size
        width: isSmallScreen ? '80%' : 'auto',
         // Adjust width based on screen size
        marginLeft: isSmallScreen ? '1%' : '0', // Adjust margin left based on screen size
        borderRadius: '8px',
      }} className='box py-4 px-6 sm:px-8 sm:py-6 rounded-lg shadow-lg'>
        {currentStage === 2 && (
          <p className='font-medium sm:text-l text-center'>
            Need a project done or looking for a dev? <br/> I'm just a few keystrokes away.
          </p>
        )}

        {currentStage === 3 && (
          <p className='font-medium text-center sm:text-l'>
            Led multiple projects to success. <br /> Curious about the impact?
          </p>
        )}

        {currentStage === 4 && (
          <p className='font-medium sm:text-l text-center'>
            Worked on many freelances <br /> and picked up great skills along the way.
          </p>
        )}

        <Link to={currentStage === 4 ? '/about' : currentStage === 3 ? '/projects' : '/contact'} className='inline-block mt-4 bg-white text-red-500 px-6 py-2 rounded-full hover:bg-opacity-80 transition duration-300'>
          {currentStage === 4 ? 'Learn more' : currentStage === 3 ? 'Visit my portfolio' : 'Let\'s talk'}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain inline-block ml-2' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
