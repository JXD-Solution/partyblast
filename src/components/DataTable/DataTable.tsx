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
  Fab,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import SearchToolbar from "./SearchToolbar";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { mockRow, mockColumns } from "@/mock/eventList";

// Column Configuration (from mockColumns)
const columns = mockColumns;

const initialRows = mockRow;

const DataTable = () => {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]); // Change to string[] to match `id` type
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuRowId, setMenuRowId] = React.useState<string | null>(null);

  // Handle checkbox change
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

  const handleMenuClick = (
    event: React.MouseEvent<HTMLElement>,
    rowId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setMenuRowId(rowId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRowId(null);
  };

  const handleAction = (action: string) => {
    console.log(`${action} action for row ${menuRowId}`);
    handleMenuClose();
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
                        setSelectedRows(currentRows.map((row) => row.id)); // row.id is a string
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
                  .filter((col) => !col.hidden && col.label !== "Actions") // Exclude the "Actions" column from dynamic rendering
                  .map((col) => (
                    <TableCell key={col.key}>{col.label}</TableCell>
                  ))}
                <TableCell>Actions</TableCell>{" "}
                {/* Only render the Actions column once */}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((row) => (
                <TableRow key={row.id} sx={{ height: 48 }}>
                  <TableCell sx={{ paddingTop: 0, paddingBottom: 0 }}>
                    <Checkbox
                      checked={selectedRows.includes(row.id)} // row.id is a string
                      onChange={(e) => handleCheckboxChange(e, row.id)} // Pass string id
                    />
                  </TableCell>
                  {columns
                    .filter((col) => !col?.hidden && col.label !== "Actions") // Exclude the "Actions" column from dynamic rendering
                    .map((col) => (
                      <TableCell
                        key={col.key}
                        align={col.label === "Actions" ? "right" : "left"}
                        sx={{ paddingTop: 0, paddingBottom: 0 }}
                      >
                        {col.key === "dateTime"
                          ? new Date(row.dateTime).toLocaleString()
                          : row[col.key]}{" "}
                        {/* Use col.key to access row data */}
                      </TableCell>
                    ))}
                  <TableCell
                    align="right"
                    sx={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <IconButton onClick={(e) => handleMenuClick(e, row.id)}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && menuRowId === row.id}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => handleAction("Edit")}>
                        Edit
                      </MenuItem>
                      <MenuItem onClick={() => handleAction("Delete")}>
                        Delete
                      </MenuItem>
                    </Menu>
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
            sx={{ display: "flex", justifyContent: "flex-end" }}
          />
        </Box>
      </Box>

      <Fab
        color="primary"
        aria-label="add"
        size="small"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default DataTable;
