import styles from "./styles.module.css";

export default function SearchBar({
  searchValue,
  onSearchChange,
  showLowStockOnly,
  onToggleLowStock,
}) {
  return (
    <section className={styles.controls}>
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Поиск по названию..."
        autoComplete="search"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.input}
      />

      <button
        type="button"
        onClick={onToggleLowStock}
        className={styles.button}
      >
        {showLowStockOnly
          ? "Показать все товары"
          : "Показать только заканчивающиеся"}
      </button>
    </section>
  );
}