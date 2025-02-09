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
  Typography,
} from "@mui/material";
import { DataTableRowAction } from "../DataTableRowAction";
import { SearchToolbar } from "../SearchToolBar";

type Column = {
  label: string;
  key: string;
  hidden: boolean;
};

type DataTableProps = {
  data: any[];
  columns: Column[];
  rowSelection: string[];
  setRowSelection: React.Dispatch<React.SetStateAction<string[]>>;
  menuActions: (
    rowId: string
  ) => { label: string; icon: JSX.Element; onClick: () => void }[];
  totalCount: number;
  filterValue: string;
  title: string;
  handleSearch: (query: string) => void;
  handleRefresh: () => void;
  showAddAction: boolean;
};

const DataTable = ({
  data,
  columns,
  rowSelection,
  setRowSelection,
  menuActions,
  totalCount,
  filterValue,
  title,
  handleSearch,
  handleRefresh,
  showAddAction,
}: DataTableProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowId: string
  ) => {
    if (event.target.checked) {
      setRowSelection((prevSelected) => [...prevSelected, rowId]);
    } else {
      setRowSelection((prevSelected) =>
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

  const currentRows = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px" }}
        variant="h6"
      >
        {title}
      </Typography>
      <SearchToolbar
        filterValue={filterValue}
        onSearch={handleSearch}
        onRefresh={handleRefresh}
        showAddAction={showAddAction}
      />
      <Box sx={{ width: "100%" }}>
        <TableContainer component={Paper} sx={{ maxHeight: 530 }}>
          <Table sx={{ minWidth: 670 }} aria-label="data-table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRowSelection(currentRows.map((row) => row.id));
                      } else {
                        setRowSelection([]);
                      }
                    }}
                    checked={rowSelection.length === currentRows.length}
                    indeterminate={
                      rowSelection.length > 0 &&
                      rowSelection.length < currentRows.length
                    }
                  />
                </TableCell>
                {columns
                  .filter((col) => !col.hidden && col.label !== "Actions")
                  .map((col) => (
                    <TableCell sx={{ fontWeight: "bold" }} key={col.key}>
                      {col.label}
                    </TableCell>
                  ))}
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((row) => (
                <TableRow key={row.id} sx={{ height: 30 }}>
                  <TableCell sx={{ paddingTop: 0, paddingBottom: 0 }}>
                    <Checkbox
                      checked={rowSelection.includes(row.id)}
                      onChange={(e) => handleCheckboxChange(e, row.id)}
                    />
                  </TableCell>
                  {columns
                    .filter((col) => !col.hidden && col.label !== "Actions")
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
                    <DataTableRowAction menuItems={menuActions(row.id)} />
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
            count={totalCount}
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
