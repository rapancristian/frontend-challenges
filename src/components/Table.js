import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination, useFlexLayout } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { GROUPED_COLUMNS } from './columns'
import './table.css'

export const Table = () => {
    let columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({
        columns,
        data,
    }, useSortBy, usePagination, useFlexLayout)

    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage, state, gotoPage } = tableInstance

    const { pageIndex } = state

    return (
        <>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (

                        <tr {...headerGroup.getHeaderGroupProps()}>

                            {headerGroup.headers.map(column => (
                                <th className={column.Header !== " " ? 'underlined' : ''} {...column.getHeaderProps(column.getSortByToggleProps({
                                    style: { minWidth: column.minWidth, width: column.width },
                                }))}> {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '  ▼' : '  ▲') : ''}
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
                                    return <td {...cell.getCellProps({
                                        style: {
                                            minWidth: cell.column.minWidth,
                                            width: cell.column.width,
                                        },
                                    })}> {cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <div className="paginationContainer">
                    <button className="paginationButtons" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Prev
                    </button> {' '}
                    <span className="defaultTextSettings">
                        PAGE {' '}
                        <input
                            defaultValue={pageIndex + 1}
                            className="defaultTextSettings"
                            value={pageIndex + 1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }}
                            style={{ width: '50px', border: 'none', outline: 'none', borderBottom: "1px solid #303030", textAlign: 'center' }}
                        />
                    </span>{' '}
                    <button className="paginationButtons" onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </button>
                </div>
            </table>
        </>
    )
}