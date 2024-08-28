import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { TfiViewList } from "react-icons/tfi";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 20;
  @media (max-width: 768px) {
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.2rem 2.8rem;
  }
`;
const StyledTfiViewList = styled(TfiViewList)`
  color: var(--color-brand-600);
  font-size: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 14px;
`;
const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right: auto;
  }
`;

function Header({ onToggleSidebar }) {
  return (
    <StyledHeader>
      <ToggleButton onClick={onToggleSidebar}>
        <StyledTfiViewList />
      </ToggleButton>
      <HeaderContent>
        <UserAvatar />
        <HeaderMenu />
      </HeaderContent>
    </StyledHeader>
  );
}

export default Header;
