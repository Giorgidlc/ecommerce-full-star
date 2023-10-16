
export const Footer = () => {
  return (
    
    <footer className='footer'>
        <button className="buttonCategory" onClick={() => {/*Page 1*/}}>
          <img  src="./src/assets/cookieIcon.svg" alt="cookie-Icon" />
            {console.log(document.querySelector(".cookieIcon"))}
        </button>
        <button className="buttonCategory" onClick={() => { /*  page 2 */ }}>
          <img  src="./src/assets/cakeIcon.svg" alt="cake-Icon" />
        </button>
        <button className="buttonCategory" onClick={() => { /* page 3 */ }}>
          <img  src="./src/assets/mufinIcon.svg" alt="cupcakes-Icon" />
        </button>
      </footer>
  );
};