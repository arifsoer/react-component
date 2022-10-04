import { useEffect, useState } from "react";
import lodash from "lodash";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { StyledTable, StyledTh, StyledTd } from "./styled/styledComponent";

interface Props {
  headers: IHeader[];
  datas: ITableData[];
}

interface ICategoryCollapse {
  category: string;
  isCollapse: boolean;
}

interface IFilledData {
  type: "category" | "value";
  value: string | ITableData;
}

const Table = ({ headers, datas }: Props) => {
  const [categoryCollapse, setCategoryCollapse] = useState<ICategoryCollapse[]>([]);
  const [filledDatas, setFilledDatas] = useState<IFilledData[]>([]);

  const onClickHandler = (category: string) => {
    const changedIndex = categoryCollapse.findIndex((cc) => cc.category === category);
    if (changedIndex >= 0) {
      const newArr = [...categoryCollapse];
      newArr[changedIndex].isCollapse = !newArr[changedIndex].isCollapse;
      setCategoryCollapse(newArr);
    }
  };

  const inialCalculation = () => {
    const grouped = lodash.groupBy(datas, (dt: ITableData) => dt.category);
    // TODO : may be can't use lodash
    const tempFilledDatas: IFilledData[] = [];
    const initCategoryCollapse: ICategoryCollapse[] = [];
    for (const key in grouped) {
      if (Object.prototype.hasOwnProperty.call(grouped, key)) {
        const els = grouped[key];
        tempFilledDatas.push({
          type: "category",
          value: key,
        });
        initCategoryCollapse.push({
          category: key,
          isCollapse: false,
        });
        els.forEach((el) => {
          tempFilledDatas.push({
            type: "value",
            value: el,
          });
        });
      }
    }
    setFilledDatas(tempFilledDatas);
    setCategoryCollapse(initCategoryCollapse);
  };

  useEffect(() => {
    inialCalculation();
  }, []);

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
  const columnLength = datas.length > 0 ? Object.keys(datas[0]).length : 0;
  const bodyTable: JSX.Element[] = [];
  filledDatas.forEach((fd, ind) => {
    if (fd.type === "category") {
      const catState = categoryCollapse.find((cc) => cc.category === fd.value);
      let iconClass = "";
      if (catState) {
        iconClass = catState.isCollapse ? "rotated" : "";
      }
      bodyTable.push(
        <tr key={fd.type + ind}>
          <StyledTd
            className='category'
            onClick={() => onClickHandler(catState !== undefined ? catState.category : "")}
          >
            {fd.value as string} {<ArrowDropDownIcon className={iconClass} />}
          </StyledTd>
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
