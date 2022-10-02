import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const StyledTh = styled.th`
  border: 2px solid #d6d8da;
  border-top: 0;
  padding: 20px 10px;
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundColor};
  &:first-child {
    border-left: 0;
  }
  &:last-child {
    border-right: 0;
  }
`;
