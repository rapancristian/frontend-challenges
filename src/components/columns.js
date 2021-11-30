import { Chart } from "./Chart"


export const GROUPED_COLUMNS = [
    {
        Header: " ",
        columns: [
            {
                Header: "Company Name",
                accessor: "Company Name",
                width: 200,
            },
            {
                Header: "Total Company Revenue",
                accessor: "Total Revenue",
                width: 200,
            },
            {
                Header: "Market Capitalization",
                accessor: "Company Market Cap",
                width: 200,
            }
        ]
    },
    {
        Header: "Women (Per 100)",
        width: 0,
        columns: [
            {
                Header: "Managers",
                accessor: "Women Managers",
                width: 100
            },
            {
                Header: "Employees",
                accessor: "Women Employees",
                width: 100
            },
        ]
    },
    {
        Header: "Co2 Scope 1 & 2",
        width: 0,
        columns: [
            {
                Header: "Total",
                accessor: "CO2 Scope 1 & 2 Adjusted",
                width: 100
            },
            {
                Header: "Rev Adj",
                accessor: "CO2 Scope 1 & 2 Revenue Adjusted",
                width: 100
            },
        ]
    },
    {
        Header: "Co2 Scope 3",
        width: 0,
        columns: [
            {
                Header: "Total",
                accessor: "CO2 Scope 3 Adjusted",
                width: 100
            },
            {
                Header: "Rev Adj",
                accessor: "CO2 Scope 3 Revenue Adjusted",
                width: 100
            },
        ]
    },
    {
        Header: " ",
        columns: [
            {
                Header: "ESG Score",
                accessor: "ESG Score",
                Cell: ({ value }) => {
                    return (<Chart heat={value} width={'150'} />)
                },
                width: 200,
            },
        ]
    },
]