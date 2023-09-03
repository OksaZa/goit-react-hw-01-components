import { Table, Tbody, Thead } from './TransactionHistory.styled';
import { createColor } from '../create-color';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <Tbody key={id}>
            <tr style={{ backgroundColor: createColor() }}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </Tbody>
        );
      })}
    </Table>
  );
};
