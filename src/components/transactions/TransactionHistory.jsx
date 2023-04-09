import propTypes from 'prop-types';
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
  items: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
};
