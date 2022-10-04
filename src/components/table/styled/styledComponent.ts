import styled from "styled-components";

// interface TDProps {}

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const StyledTh = styled.th`
  text-align: left;
  vertical-align: top;
  width: ${(props) => props.theme.width};
  border: 2px solid #d6d8da;
  border-top: 0;
  padding: 8px;
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundColor || "#F7F7F8"};
  color: ${(props) => props.theme.fontColor || "black"};
  &:first-child {
    border-left: 0;
  }
  &:last-child {
    border-right: 0;
  }
`;

export const StyledTd = styled.td`
  text-align: start;
  vertical-align: top;
  padding: 8px;
  border: 2px solid #d6d8da;
  background-color: #ffffff;
  &:first-child {
    border-left: 0;
    background-color: #f7f7f8;
  }
  &:last-child {
    border-right: 0;
  }
  &.category {
    border-right: 0;
    background-color: #d6d8da;
    font-weight: 600;
  }
  &.category-extend {
    border-left: 0;
    background-color: #d6d8da;
  }
`;
