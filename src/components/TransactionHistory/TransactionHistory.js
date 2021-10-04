import PropTypes from 'prop-types'
import s from './TransactionHistory.module.scss'


export default function TransactionHistory({ items }) {
    return (
<table className={`section ${s.transaction__history}`}>
  <thead className={s.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
          {items.map(item => (
            
          
          <tr 
              key={item.id}
              className={s.tableRow}
              style={items.indexOf(item) % 2 !==0 ? {backgroundColor: 'rgb(240, 240, 240)'} : {backgroundColor: 'white'} }
              >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        
        ))}            
    
  </tbody>
</table>
    )
  }
  

  
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}