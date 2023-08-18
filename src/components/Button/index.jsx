import './styles.scss';

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export const RoundedButton = ({ children }) => {
  return <button className="rounded-button">{children}</button>;
};

export default Button;
