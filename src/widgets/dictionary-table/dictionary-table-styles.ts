import { styled } from '@mui/material/styles';
import { TableCell, tableCellClasses, TableRow } from '@mui/material';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.info.main,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 900,
    cursor: "pointer",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




  