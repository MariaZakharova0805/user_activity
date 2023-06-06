import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { FC } from "react";

const SortingHeader: FC<{ column: any }> = ({column}) => {
  return (
    <div>
      {column.isSorted ? (
        column.isSortedDesc ? (
          <ArrowDownwardOutlinedIcon />
        ) : (
          <ArrowUpwardOutlinedIcon />
        )
      ) : (
        <SortOutlinedIcon />
      )}
    </div>
  );
};

export default SortingHeader;
