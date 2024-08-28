import styled from "styled-components";

export const ToastStyle = styled.div`
  font-size: 16px;
  max-width: 500px;
  padding: 16px 24px;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  @media (max-width: 768px) {
    max-width: 200px;
    background-color: red;
  }
`;
