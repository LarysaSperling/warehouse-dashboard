import { useEffect, useMemo, useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import InventoryList from "./components/inventoryList";
import AddItemForm from "./components/addItemForm";
import "./App.css";

const initialItems = [
  {
    id: crypto.randomUUID(),
    name: "Ноутбук Lenovo",
    category: "Электроника",
    quantity: 8,
    price: 45000,
  },
  {
    id: crypto.randomUUID(),
    name: "Офисный стул",
    category: "Мебель",
    quantity: 3,
    price: 12000,
  },
  {
    id: crypto.randomUUID(),
    name: "Наушники",
    category: "Электроника",
    quantity: 2,
    price: 5000,
  },
];

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("warehouse-items");
    return savedItems ? JSON.parse(savedItems) : initialItems;
  });

  const [searchValue, setSearchValue] = useState("");
  const [showLowStockOnly, setShowLowStockOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem("warehouse-items", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    const itemToAdd = {
      ...newItem,
      id: crypto.randomUUID(),
      quantity: Number(newItem.quantity),
      price: Number(newItem.price),
    };

    setItems((prev) => [...prev, itemToAdd]);
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
    );
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesLowStock = showLowStockOnly ? item.quantity < 5 : true;

      return matchesSearch && matchesLowStock;
    });
  }, [items, searchValue, showLowStockOnly]);

  return (
    <div className="app">
      <div className="container">
        <Header items={items} />

        <SearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          showLowStockOnly={showLowStockOnly}
          onToggleLowStock={() => setShowLowStockOnly((prev) => !prev)}
        />

        <InventoryList
          items={filteredItems}
          onDeleteItem={deleteItem}
          onUpdateQuantity={updateQuantity}
        />

        <AddItemForm onAddItem={addItem} />
      </div>
    </div>
  );
}

export default App;