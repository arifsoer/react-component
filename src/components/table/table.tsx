import lodash from "lodash";

import { StyledTable, StyledTh, StyledTd } from "./styled/styledComponent";

interface Props {
  headers: IHeader[];
  datas: ITableData[];
}

const Table = ({ headers, datas }: Props) => {
  // Header Handle
  const orderedKey: string[] = [];
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
        <StyledTh key={header.key} colSpan={header.childs.length} theme={header.theme}>
          {header.name}
        </StyledTh>,
      );
      header.childs.forEach((child) => {
        orderedKey.push(child.key);
        childRow.push(
          <StyledTh key={child.key} theme={child.theme}>
            {child.name}
          </StyledTh>,
        );
      });
    } else {
      orderedKey.push(header.key);
      mainRow.push(
        <StyledTh key={header.key} rowSpan={level} theme={header.theme}>
          {header.name}
        </StyledTh>,
      );
    }
  });

  // Data Handle
  const grouped = lodash.groupBy(datas, (dt: ITableData) => dt.category);
  const filledDatas: { type: "category" | "value"; value: string | ITableData }[] = [];
  for (const key in grouped) {
    if (Object.prototype.hasOwnProperty.call(grouped, key)) {
      const els = grouped[key];
      filledDatas.push({
        type: "category",
        value: key,
      });
      els.forEach((el) => {
        filledDatas.push({
          type: "value",
          value: el,
        });
      });
    }
  }
  const columnLength = datas.length > 0 ? Object.keys(datas[0]).length : 0;
  const bodyTable: JSX.Element[] = [];
  filledDatas.forEach((fd, ind) => {
    if (fd.type === "category") {
      bodyTable.push(
        <tr key={fd.type + ind}>
          <StyledTd className='category'>{fd.value as string}</StyledTd>
          <StyledTd className='category-extend' colSpan={columnLength - 1}></StyledTd>
        </tr>,
      );
    } else {
      const dataVal = fd.value as ITableData;
      const cels: JSX.Element[] = [];
      orderedKey.forEach((ok) => {
        cels.push(<StyledTd key={ok}>{dataVal[ok] || ""}</StyledTd>);
      });
      bodyTable.push(<tr key={fd.type + ind}>{cels}</tr>);
    }
  });
  console.log(bodyTable);

  return (
    <StyledTable>
      <thead>
        <tr>{mainRow}</tr>
        <tr>{childRow}</tr>
      </thead>
      <tbody>{bodyTable}</tbody>
    </StyledTable>
  );
};

export default Table;
