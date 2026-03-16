import styles from "./styles.module.css";

export default function Header({ items }) {
  const totalUniqueItems = items.length;
  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Панель управления складом</h1>
        <p className={styles.subtitle}>Контроль запасов, поиск и обновление товаров</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.card}>
          <span className={styles.label}>Уникальных товаров</span>
          <strong className={styles.value}>{totalUniqueItems}</strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>Всего единиц</span>
          <strong className={styles.value}>{totalUnits}</strong>
        </div>
      </div>
    </header>
  );
}