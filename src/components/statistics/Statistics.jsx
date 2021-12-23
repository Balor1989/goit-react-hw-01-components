// import statistics from '../JSON/statistics-data.json'

import StatisticsItem from "./StatisticsItem"


function Statistics({ prop, title }) {
    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
            {prop.map(item => (
                <StatisticsItem
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}               
                />
            ))}
            </ul>
        </section>
    )
}
export default Statistics
