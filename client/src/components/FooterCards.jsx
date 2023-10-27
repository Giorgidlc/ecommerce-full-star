import { Link } from "react-router-dom";

const icons = ['../src/assets/cookieIcon.svg', '../src/assets/cakeIcon.svg', '../src/assets/mufinIcon.svg']

const FooterCards = () => {
  
  return (
    
    <footer className='footerCards'>
      <Link to='/products/1'>
        <button className="buttonCategoryCards" >
          <img  src={icons.at(0)} alt="cookie-Icon" className="icon-embed" />
        </button>
      </Link>
      <Link to='/products/2'> 
        <button className="buttonCategoryCards">
          <img  src={icons.at(1)} alt="cake-Icon" className="icon-embed" />
        </button>
      </Link>  
        
      <Link to='/products/3'>
        <button className="buttonCategoryCards" >
          <img  src={icons.at(2)} alt="cupcakes-Icon" className="icon-embed" />
        </button>
      </Link>  
      </footer>
  );
};

export default FooterCards