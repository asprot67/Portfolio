import "./Navbar.css";

type NavbarProps = {
  activeComponent: string;
  setActiveComponent: (page: string) => void;
};

export default function Navbar({ activeComponent, setActiveComponent }: NavbarProps) {
  return (
    <header className="nav-header">
      <nav className="nav">
        <h1 className="nav-logo"  onClick={() => setActiveComponent("Home")}>Diebolt Maxime</h1>
        <ul className="nav-links">
          <li
            className={activeComponent === "Home" ? "active" : ""}
            onClick={() => setActiveComponent("Home")}
          >
            Accueil
          </li>

          <li
            className={activeComponent === "Me" ? "active" : ""}
            onClick={() => setActiveComponent("Me")}
          >
            À propos
          </li>

          <li
            className={activeComponent === "Stage" ? "active" : ""}
            onClick={() => setActiveComponent("Stage")}
          >
            Stage
          </li>

          <li
            className={activeComponent === "Projet" ? "active" : ""}
            onClick={() => setActiveComponent("Projet")}
          >
            Projet
          </li>

          <li
            className={activeComponent === "Veille" ? "active" : ""}
            onClick={() => setActiveComponent("Veille")}
          >
            Veille Techno
          </li>

          <li
            className={activeComponent === "Contact" ? "active" : ""}
            onClick={() => setActiveComponent("Contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
