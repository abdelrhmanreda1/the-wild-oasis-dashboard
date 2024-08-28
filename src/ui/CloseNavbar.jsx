import styled from "styled-components";

const Button = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 90px;
    right: 30px;
    background: none;
    border-radius: 3px;
    padding: 5px 7px;
    font-size: 20px;
    border: none;
    color: black;
  }
`;

function CloseNavbar({ onToggle }) {
  return <Button onClick={onToggle}>X</Button>;
}

export default CloseNavbar;
