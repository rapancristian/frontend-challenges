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
        Cell: ({value}) => {
            let newVal = parseFloat(value).toFixed(2)
            let esgScoreColor = `rgba(0, 27, 66, ${newVal/100})`
            return (<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
            {newVal} | <Chart style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }} heat={newVal} width={'150'} background={esgScoreColor} />
        </div>)}
    },
        ]
    },
]