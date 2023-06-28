import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export interface Column<T> {
  label: string;
  accessor: keyof T;
  render?: (data: T) => React.ReactNode;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
}

const TableComponent = <T extends Record<string, any>>({ columns, data }: Props<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.accessor.toString()}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.accessor.toString()}>
                  {column.render ? (
                    column.render(row)
                  ) : (
                    row[column.accessor]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
