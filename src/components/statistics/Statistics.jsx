import s from './Statistics.module.css'
import StatisticsItem from "./StatisticsItem"


function Statistics({ prop, title }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
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
