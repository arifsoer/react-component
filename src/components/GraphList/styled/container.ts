import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const ListContainer = styled.div`
  width: 200px;
  height: 500px;
  background-color: #ffffff;
  margin-right: 15px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const ListItemTitle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 6px 13px;
  margin-bottom: 15px;
  &:hover {
    cursor: pointer;
  }
  span {
    padding: 0 6px;
    text-align: left;
    flex: 1;
    font-size: 16px;
  }
  svg {
    transition: transform 0.5s;
  }
  svg.rotated {
    transform: rotate(180deg);
  }
`;

export const ListItemExpanded = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  text-align: left;
  margin-left: 49px;

  border-left: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  line-height: 0;
  padding: 0 1em;
  color: transparent;
  &.collapsed {
    line-height: 1.5;
    padding-top: 1em;
    padding-bottom: 1em;
    color: black;
    border-left: 2px solid #d6d8da;
  }
  h3 {
    font-weight: normal;
    margin: 0 0 10px 0;
  }
`;

export const DotItem = styled.div`
  background-color: #ce425c;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const GraphContainer = styled.div`
  flex: 1;
  height: 500px;
  width: 100px;
  background-color: grey;
`;
