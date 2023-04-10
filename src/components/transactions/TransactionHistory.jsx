import PropTypes from 'prop-types';
import css from './transactions.module.css'

export function Transaction({ items }) {
  return (
  <table className={css.table}>
          <thead className={css.head}>
              <tr className={css.tableTitle}>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
              </tr>
          </thead>

          <tbody>
              {items.map(({ id, type, amount, currency }) => (
                  <tr className={css.item} key={id}>
                      <td>{type}</td>
                      <td>{amount}</td>
                      <td>{currency}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
