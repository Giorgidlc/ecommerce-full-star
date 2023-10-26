

export const NavbarDashboard = () => {
  return (
    <nav className="admin-navbar">
      <section className="admin-navbar-button">
        <button
          type="button" 
          id="home-button">
          <img src="../src/assets/Home-Button.svg" alt="Home" />
        </button>
      </section>
      <h2 className="titleDashboard">Cookies & Dreams Dashboard</h2>
      <section className="admin-navbar-logo">
        <img src="../src/assets/icon-logo.svg" alt="Logo" />
      </section>
    </nav>
  );
};
