import styled from "styled-components";

type ButtonProps = {
  children?: string;
  variant?: string;
};

type Props = {
  variant: string;
};

// here we are getting back an HTML <button> tag with styles applied
const StyledButton = styled.button`
  color: ${(p: Props) => (p.variant === "secondary" ? "black" : "white")};
  background-color: #00e8af;
  height: 40px;
  min-width: 100px;
  border-radius: 6px;
  border: none;
`;

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    // and pass it down to the styled component
    //@ts-ignore
    <StyledButton {...props} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
