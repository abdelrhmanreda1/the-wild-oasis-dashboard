import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 48rem;
    padding: 0;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <StyledHeading as="h4">Log in to your account</StyledHeading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
