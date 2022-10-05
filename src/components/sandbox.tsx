import { useState } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  border: 1px solid black;
  padding: 5px;
  font-weight: bold;
`;

const SyledTd = styled.td`
  border: 1px solid black;
  padding: 5px;
`;

const StyledTBody = styled.tbody`
  transition: display 0.5s;
  &.collapsed {
    display: none;
  }
`;

const Sanbox = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Column 1</StyledTh>
          <StyledTh>Column 2</StyledTh>
          <StyledTh>
            <button onClick={() => setIsCollapse((old) => !old)}>click me</button>
          </StyledTh>
        </tr>
      </thead>
      <StyledTBody className={isCollapse ? "collapsed" : ""}>
        <tr>
          <SyledTd colSpan={3}>Category</SyledTd>
        </tr>
        <tr>
          <SyledTd>value11</SyledTd>
          <SyledTd>value12</SyledTd>
          <SyledTd>value13</SyledTd>
        </tr>
        <tr>
          <SyledTd>value21</SyledTd>
          <SyledTd>value22</SyledTd>
          <SyledTd>value23</SyledTd>
        </tr>
        <tr>
          <SyledTd>value31</SyledTd>
          <SyledTd>value32</SyledTd>
          <SyledTd>value33</SyledTd>
        </tr>
      </StyledTBody>
      <StyledTBody>
        <tr>
          <SyledTd colSpan={3}>Category</SyledTd>
        </tr>
        <tr>
          <SyledTd>value11</SyledTd>
          <SyledTd>value12</SyledTd>
          <SyledTd>value13</SyledTd>
        </tr>
        <tr>
          <SyledTd>value21</SyledTd>
          <SyledTd>value22</SyledTd>
          <SyledTd>value23</SyledTd>
        </tr>
        <tr>
          <SyledTd>value31</SyledTd>
          <SyledTd>value32</SyledTd>
          <SyledTd>value33</SyledTd>
        </tr>
      </StyledTBody>
    </StyledTable>
  );
};

export default Sanbox;
