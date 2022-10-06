import lodash from "lodash";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  MainContainer,
  GraphContainer,
  ListContainer,
  ListItemTitle,
  DotItem,
  ListItemExpanded,
  ListItem,
} from "./styled/container";
import { useEffect, useState } from "react";

interface Props {
  data: IGraphListData[];
}

const GraphList = ({ data }: Props) => {
  const [isCollapsed, setIsCollapse] = useState<boolean[]>([]);

  useEffect(() => {
    setIsCollapse([true]);
  }, []);

  const collapsedHandler = (index: number) => {
    setIsCollapse((old) => {
      const newVal = [...old];
      newVal[index] = !newVal[index];
      return newVal;
    });
  };

  const groupedData = lodash.groupBy(data, (dt) => dt.category);

  return (
    <MainContainer>
      <ListContainer>
        <ListItem>
          <ListItemTitle onClick={() => collapsedHandler(0)}>
            <DotItem />
            <span>Hopitalization</span>
            <ExpandMoreIcon className={isCollapsed[0] ? "rotated" : ""} />
          </ListItemTitle>
          <ListItemExpanded className={isCollapsed[0] ? "collapsed" : ""}>
            <h3>AIA Guaranted</h3>
            <h3>AIA Guaranted</h3>
          </ListItemExpanded>
        </ListItem>
      </ListContainer>
      <GraphContainer />
    </MainContainer>
  );
};

export default GraphList;
