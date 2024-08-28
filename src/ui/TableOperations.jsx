import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media (max-width: 768px) {
    margin-right: 1rem;
    flex-direction: column;
    gap: 15px;
  }
`;

export default TableOperations;
