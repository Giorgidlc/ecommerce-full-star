import { Link } from "react-router-dom";

const icons = ['../src/assets/cookieIcon.svg', '../src/assets/cakeIcon.svg', '../src/assets/mufinIcon.svg']

const Footer = () => {
  
  return (
    
    <footer className='footer'>
      <Link to='/product/1'>
        <button className="buttonCategory" >
          <img  src={icons.at(0)} alt="cookie-Icon" className="icon-embed" />
        </button>
      </Link>
      <Link to='/product/2'> 
        <button className="buttonCategory">
          <img  src={icons.at(1)} alt="cake-Icon" className="icon-embed" />
        </button>
      </Link>  
        
      <Link to='/product/3'>
        <button className="buttonCategory">
          <img  src={icons.at(2)} alt="cupcakes-Icon" className="icon-embed" />
        </button>
      </Link>  
      </footer>
  );
};

export default Footer