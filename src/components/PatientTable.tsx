import { useEffect, useMemo, useState } from 'react';
import { useSortBy, useTable } from 'react-table';
import { COLUMNS } from '../columns';
import { getData } from '../data';
import './patient-table.css';

export const PatientsTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data: any) => {
      setData(data);
    });
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  if (!data) return null;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, key) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={key}>
            {headerGroup.headers.map((column, key) => (
              <th
                {...column.getHeaderGroupProps(column.getSortByToggleProps())}
                key={key}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, key) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={key}>
              {row.cells.map((cell, key) => {
                return (
                  <td {...cell.getCellProps()} key={key}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
