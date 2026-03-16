import InventoryItem from "../inventoryItem";
import styles from "./styles.module.css";

export default function InventoryList({ items, onDeleteItem, onUpdateQuantity }) {
  if (items.length === 0) {
    return (
      <section className={styles.empty}>
        <p>На складе пусто. Добавьте товар!</p>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Категория</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <InventoryItem
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}