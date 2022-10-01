import "./table.css";

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
        <th key={header.key} colSpan={header.childs.length} className='table-header'>
          {header.name}
        </th>,
      );
      header.childs.forEach((child) => {
        childRow.push(
          <th key={child.key} className='table-header'>
            {child.name}
          </th>,
        );
      });
    } else {
      mainRow.push(
        <th key={header.key} rowSpan={level} className='table-header'>
          {header.name}
        </th>,
      );
    }
  });

  return (
    <table className='main-table'>
      <thead>
        <tr>{mainRow}</tr>
        <tr>{childRow}</tr>
      </thead>
    </table>
  );
};

export default Table;
