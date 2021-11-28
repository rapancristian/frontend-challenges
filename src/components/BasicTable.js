import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { GROUPED_COLUMNS } from './columns'
import './table.css'
export const BasicTable = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,
    }, useSortBy, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage, state, gotoPage } = tableInstance

    const { pageIndex } = state

    return (
        <>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (

                    <tr {...headerGroup.getHeaderGroupProps()}>

                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}> {column.render('Header')}
                            <span>
                                {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                            </span>
                            </th>
                        ))}
                    </tr>

                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button> {' '}
        <span>
        PAGE {' '}
          <input
            defaultValue={pageIndex + 1}
            value={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px', border: 'none', outline: 'none', borderBottom: "1px solid #303030", textAlign: 'center' }}
          />
        </span>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        </div>
        </>
    )
}