// import statData from './statistical-data.json'
import PropTypes from 'prop-types'
import s from './Statistical.module.scss'

export default function Statistical({ title, stats }) {
    return (
<section className={`section ${s.statistics}`}>
        {title && <h2 className={s.title}>{title}</h2>}
  <ul className={s.stat__list}>

  {stats.map(statsItem => {
    return (
      <li
        key={statsItem.id}
        className={s.item}
        style={{ backgroundColor: generatorRandomColor()}}>
        <span className={s.label}>{statsItem.label} </span>
        <span className={s.percentage}>{statsItem.percentage}%</span>
    </li>)
      
    }
    )}
          
  </ul>
</section>
    )
}


function generatorRandomColor() {
  return "#"+Math.round(Math.random()*10)+Math.round(Math.random()*10)+Math.round(Math.random()*10)+Math.round(Math.random()*10)+Math.round(Math.random()*10)+Math.round(Math.random()*10)
  
}

Statistical.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}