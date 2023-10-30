import { Link } from 'react-router-dom';


const CategoryDashboard = () => {
  
  return (
    <section className="categorySection">
      <h2 className='title__Category'>Category</h2>
      <section className="categoryButtons">
        <Link to=""> 
          <button className='filterButtons'>COOKIES</button>
        </Link>
        <Link to="">
          <button className='filterButtons'>CAKES</button>
        </Link>
        <Link to="">
          <button className='filterButtons'>CUPCAKES</button>
        </Link>
      </section>
    </section>

  );
};

export default CategoryDashboard;
