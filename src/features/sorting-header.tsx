import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { Typography } from "@mui/material";
import { FC } from "react";

const SortingHeader: FC<{ column: any }> = ({column}) => {
  return (
    <Typography>
      {column.isSorted ? (
        column.isSortedDesc ? (
          <ArrowDownwardOutlinedIcon />
        ) : (
          <ArrowUpwardOutlinedIcon />
        )
      ) : (
        <SortOutlinedIcon />
      )}
    </Typography>
  );
};

export default SortingHeader;
