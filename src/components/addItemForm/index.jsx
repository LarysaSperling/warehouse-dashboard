import { useState } from "react";
import styles from "./styles.module.css";

const initialForm = {
  name: "",
  category: "Электроника",
  quantity: "",
  price: "",
};

export default function AddItemForm({ onAddItem }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.quantity || !form.price) return;

    onAddItem({
      name: form.name.trim(),
      category: form.category,
      quantity: Number(form.quantity),
      price: parseFloat(form.price),
    });

    setForm(initialForm);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Добавить товар</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name">Название товара</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="category">Категория</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="Электроника">Электроника</option>
            <option value="Мебель">Мебель</option>
            <option value="Продукты">Продукты</option>
            <option value="Одежда">Одежда</option>
            <option value="Другое">Другое</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity">Количество</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min="0"
            step="1"
            autoComplete="off"
            value={form.quantity}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="price">Цена (€)</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder=""
            autoComplete="off"
            value={form.price}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>
          Добавить товар
        </button>
      </form>
    </section>
  );
}