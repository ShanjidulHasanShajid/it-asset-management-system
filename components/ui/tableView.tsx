"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Trash2 } from "lucide-react";

const TableView = ({ data, columns, onDelete }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 z-10">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="bg-gray-100 px-4 py-3 whitespace-nowrap"
                >
                  {column.label}
                </TableHead>
              ))}
              {/* Narrow action column header */}
              <TableHead className="bg-gray-100 w-12 px-2 py-3 whitespace-nowrap">
                {/* Empty header for actions column */}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <TableCell
                    key={`${rowIndex}-${column.key}`}
                    className="px-4 py-3 whitespace-nowrap"
                  >
                    {row[column.key] || "-"}
                  </TableCell>
                ))}
                {/* Narrow delete button cell */}
                <TableCell className="w-12 px-2 py-3 whitespace-nowrap">
                  <button
                    onClick={() => onDelete?.(row)}
                    className="p-1.5 hover:bg-red-50 text-red-600 rounded-full transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  className="text-center py-4 text-gray-500"
                >
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableView;
