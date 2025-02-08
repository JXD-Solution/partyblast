import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
  Box,
} from "@mui/material";
import SearchToolbar from "./SearchToolbar";
import { mockRow, mockColumns } from "@/mock/page";
import DataTableRowAction from "./DataTableRowAction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

const columns = mockColumns;
const initialRows = mockRow;

const menuItems = (rowId: string) => [
  {
    label: "Edit",
    icon: <EditIcon color="primary" />,
    onClick: () => console.log(`Edit clicked for row ${rowId}`),
  },
  {
    label: "Delete",
    icon: <DeleteIcon color="error" />,
    onClick: () => console.log(`Delete clicked for row ${rowId}`),
    isDisabled: false,
  },
  {
    label: "More Info",
    icon: <InfoIcon color="primary" />,
    onClick: () => console.log(`More Info clicked for row ${rowId}`),
  },
];

const DataTable = () => {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowId: string
  ) => {
    if (event.target.checked) {
      setSelectedRows((prevSelected) => [...prevSelected, rowId]);
    } else {
      setSelectedRows((prevSelected) =>
        prevSelected.filter((id) => id !== rowId)
      );
    }
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const currentRows = initialRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <SearchToolbar />
      <Box sx={{ width: "100%", padding: 2 }}>
        <TableContainer component={Paper} sx={{ maxHeight: 555 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(currentRows.map((row) => row.id));
                      } else {
                        setSelectedRows([]);
                      }
                    }}
                    checked={selectedRows.length === currentRows.length}
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < currentRows.length
                    }
                  />
                </TableCell>
                {columns
                  .filter((col) => !col.hidden && col.label !== "Actions")
                  .map((col) => (
                    <TableCell key={col.key}>{col.label}</TableCell>
                  ))}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((row) => (
                <TableRow key={row.id} sx={{ height: 48 }}>
                  <TableCell sx={{ paddingTop: 0, paddingBottom: 0 }}>
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onChange={(e) => handleCheckboxChange(e, row.id)}
                    />
                  </TableCell>
                  {columns
                    .filter((col) => !col?.hidden && col.label !== "Actions")
                    .map((col) => (
                      <TableCell
                        key={col.key}
                        align={col.label === "Actions" ? "right" : "left"}
                        sx={{ paddingTop: 0, paddingBottom: 0 }}
                      >
                        {col.key === "dateTime"
                          ? new Date(row.dateTime || "").toLocaleString()
                          : row[col.key]}
                      </TableCell>
                    ))}
                  <TableCell
                    align="left"
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <DataTableRowAction menuItems={menuItems(row.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ marginTop: 2, display: "flex", justifyContent: "flex-end" }}>
          <TablePagination
            rowsPerPageOptions={[10, 25]}
            component="div"
            count={initialRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </>
  );
};

export default DataTable;
