import { Chart } from "./Chart"


export const GROUPED_COLUMNS = [
    {
        Header: " ",
        columns: [
            {
                Header: "Company Name",
                accessor: "Company Name"
            },
            {
                Header: "Total Company Revenue",
                accessor: "Total Revenue"
            },
            {
                Header: "Market Capitalization",
                accessor: "Company Market Cap"
            }
        ]
    },
    {
        Header: "Women (Per 100)",
        columns: [
            {
                Header: "Managers",
                accessor: "Women Managers"
            },
            {
                Header: "Employees",
                accessor: "Women Employees"
            },
        ]
    },
    {
        Header: "Co2 Scope 1 & 2",
        columns: [
            {
                Header: "Total",
                accessor: "CO2 Scope 1 & 2 Adjusted"
            },
            {
                Header: "Rev Adj",
                accessor: "CO2 Scope 1 & 2 Revenue Adjusted"
            },
        ]
    },
    {
        Header: "Co2 Scope 3",
        columns: [
        {   
            Header: "Total",
            accessor: "CO2 Scope 3 Adjusted"
        },
        {
            Header: "Rev Adj",
            accessor: "CO2 Scope 3 Revenue Adjusted"
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
                    return (<Chart heat={value} width={'150'}/>)
                }},
        ]
    },
]