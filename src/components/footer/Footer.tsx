import Button from "../button/Button";
import StyledFooter from "./Footer.styles";

const Footer = (): JSX.Element => {
  const openDevTools = (): void => {
    window.api.showDevTools();
  };

  return (
    <StyledFooter
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <Button onClick={openDevTools}>Open dev tools</Button>
    </StyledFooter>
  );
};

export default Footer;
