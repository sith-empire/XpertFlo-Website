import Button from "../Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar-nav">
      <div className="left-div">
        <a href="https://xpertflo.io" className="logo">
          Xpert<span>Flo</span>
        </a>

        <a className="link">Features</a>
        <a className="link">How it works</a>
        <a className="link">FAQ</a>
      </div>
      <div className="right-div">
        <Button primary={false}>Sign in</Button>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
