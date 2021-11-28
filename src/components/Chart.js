import './table.css'

export const Chart = (props) => {
    return (
        <span style={{width: props.width + 'px'}}>
        <span style={{display: 'inline-block', width: props.heat + '%', height: '100%', background: props.background }}>
        </span>
        </span>
    )
}