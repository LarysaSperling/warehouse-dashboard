import styles from "./styles.module.css";

export default function InventoryItem({ item, onDeleteItem, onUpdateQuantity }) {
  const isLowStock = item.quantity < 5;

  return (
    <tr className={isLowStock ? styles.lowStockRow : ""}>
      <td>{item.name}</td>
      <td>{item.category}</td>

      <td>
        <div className={styles.quantityBox}>
          <button
            className={styles.qtyButton}
            onClick={() => onUpdateQuantity(item.id, -1)}
          >
            -
          </button>

          <span className={styles.quantity}>{item.quantity}</span>

          <button
            className={styles.qtyButton}
            onClick={() => onUpdateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>
      </td>

      <td>
        {item.price.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        })}
      </td>

      <td>
        {isLowStock ? (
          <span className={styles.warning}>Мало!</span>
        ) : (
          <span className={styles.ok}>В наличии</span>
        )}
      </td>

      <td>
        <button
          className={styles.deleteButton}
          onClick={() => onDeleteItem(item.id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}