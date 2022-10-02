import { StyledTable, StyledTh } from "./styled/styledComponent";

interface Props {
  headers: IHeader[];
}

const Table = ({ headers }: Props) => {
  let level = 1;
  const findChild = headers.some((x) => x.childs);
  if (findChild) {
    level = 2;
  }

  const mainRow: JSX.Element[] = [];
  const childRow: JSX.Element[] = [];
  headers.forEach((header) => {
    if (header.childs && header.childs.length > 0) {
      mainRow.push(
        <StyledTh key={header.key} colSpan={header.childs.length}>
          {header.name}
        </StyledTh>,
      );
      header.childs.forEach((child) => {
        childRow.push(
          <StyledTh key={child.key} theme={{ backgroundColor: child.backgroundColor }}>
            {child.name}
          </StyledTh>,
        );
      });
    } else {
      mainRow.push(
        <StyledTh key={header.key} rowSpan={level}>
          {header.name}
        </StyledTh>,
      );
    }
  });

  return (
    <StyledTable>
      <thead>
        <tr>{mainRow}</tr>
        <tr>{childRow}</tr>
      </thead>
    </StyledTable>
  );
};

export default Table;
