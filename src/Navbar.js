const navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="">Blog</a>
      </div>
      <ul>
        <li>
          <a href="accueil" className="lien">
            Accueil
          </a>
        </li>
        <li>
          <a href="accueil" className="lien">
            Blog
          </a>
        </li>
        <li>
          <a href="accueil" className="lien">
            Creer articla
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
