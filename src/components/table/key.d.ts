interface IHeader {
  key: string;
  name: string;
  theme?: ICustomStyle;
  childs?: IHeader[];
}

interface ICustomStyle {
  backgroundColor?: string;
  fontColor?: string;
  width?: string;
}

interface ITableData {
  category?: string;
  [key: string]: string | number;
}
