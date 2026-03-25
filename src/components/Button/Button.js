import "./Button.scss";

const Button = ({ primary = true, children }) => {
  return (
    <button
      className={`button medium-text ${primary ? "primary" : "secondary"}`}
    >
      {children}
    </button>
  );
};

export default Button;
