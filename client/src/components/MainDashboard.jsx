import { Link } from 'react-router-dom';


const MainDashboard = () => {
  
  return (
    <section className="categorySection">
      <h2>Category</h2>
      <section className="categoryButtons">
        <Link to=""> 
          <button className='filterButtons'>Cookies</button>
        </Link>
        <Link to="">
          <button className='filterButtons'>Cakes</button>
        </Link>
        <Link to="">
          <button className='filterButtons'>Cupcakes</button>
        </Link>
      </section>
    </section>

  );
};

export default MainDashboard;
