import './table.css'



export const Chart = (props) => {

    const heatValue = parseFloat(props.heat).toFixed(2)
    const esgScoreColor = `rgba(0, 27, 66, ${heatValue / 100})`
    const map = (heatValue, x1, y1, x2, y2) => (heatValue - x1) * (y2 - x2) / (y1 - x1) + x2;
    return (
        <div className="chartContainer" style={{ width: props.width + 'px' }}>
            <div className="chartText"> {heatValue} </div>
            <div className="chartScore" style={{ width: map(heatValue, 0, 1, 0, 0.80) + '%', background: esgScoreColor }} />
        </div>
    )
}