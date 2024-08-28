import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { IoMdClose } from "react-icons/io";
// import Uploader from "../data/Uploader.jsx";
const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: sticky;
  top: 0;
  z-index: 20;

  @media (max-width: 768px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1000;
    background-color: var(--color-grey-0);
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  margin-right: -18px;
  margin-top: -16px;
  cursor: pointer;
  align-self: flex-end;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledCloseIcon = styled(IoMdClose)`
  color: var(--color-brand-600);
  font-size: 24px;
`;

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <StyledSidebar isOpen={isOpen}>
        <CloseButton onClick={onClose}>
          <StyledCloseIcon />
        </CloseButton>
        <Logo />
        <MainNav />
        {/* <Uploader /> */}
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
