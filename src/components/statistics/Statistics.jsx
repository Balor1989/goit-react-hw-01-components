import statistics from '../JSON/statistics-data.json'


function Statistics() {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {statistics.map(item => (
                    <li className="item" key={item.id}>
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}</span>
                    </li>
            ))}
            </ul>
        </section>
    )
}
export default Statistics
