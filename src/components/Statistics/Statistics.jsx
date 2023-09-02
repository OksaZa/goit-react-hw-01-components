import css from './Statistics.module.css'
import {createColor} from '../create-color'

export const Statistics = ({ title, stats }) => {
    return (
<section className={css.statistics}>
  <h2 className={css.title}>{title && <h2>{title}</h2>}</h2>

  <ul className={css.statlist}>
    {stats.map(({ id, label, percentage }) => {
        return (
            <li className={css.item} key={id} style={{ backgroundColor: createColor() }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
        )
    })}
  </ul>
</section>
    )
}