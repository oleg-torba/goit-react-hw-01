import PropTypes from 'prop-types';
import statsCss from './stats.module.css'

export function Statistic ({title, stats}){
return (
   <section className={statsCss.statistic}>
        {title&&(
            <h2>{title}</h2>
        )}

        <ul className={statsCss.item}>
            {stats.map(({ id, label, percentage }) => {
                return (
                    <li className={statsCss.list} key={id}>
                        <span className={statsCss.itemTitle}>{label}</span>
                        <span className={statsCss.itemValue}>{percentage}</span>
                    </li>);

            })}
        </ul>


    </section>)
}

Statistic.propTypes = {
    stats: PropTypes.arrayOf (PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })),
    title: PropTypes.string,


}