import './styles.scss';

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export const RoundedButton = ({ children, ...props }) => {
  return (
    <button className="rounded-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
