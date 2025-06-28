import { useState } from "react";
import { InvoiceItem, InvoiceStatus } from "../../models/invoice";
import styles from "./addInvoice.module.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddInvoice = () => {
    const axios = useAxiosPrivate();

    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [items, setItems] = useState<InvoiceItem[]>([
        { name: "", quantity: 1, unitPrice: 0, total: 0 },
    ]);
    const [tax, setTax] = useState(0);
    const [status, setStatus] = useState<InvoiceStatus>("издадена");

    const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
        const updated = [...items];
        if (field === "name") {
            updated[index] = {
                ...updated[index],
                name: value as string,
            };
        } else {
            updated[index] = {
                ...updated[index],
                [field]: value,
                total:
                    field === "quantity" || field === "unitPrice"
                        ? (field === "quantity" ? Number(value) : updated[index].quantity) *
                          (field === "unitPrice" ? Number(value) : updated[index].unitPrice)
                        : updated[index].total,
            };
        }
        setItems(updated);
    };

    const addItem = () => {
        setItems([...items, { name: "", quantity: 1, unitPrice: 0, total: 0 }]);
    };

    const removeItem = (index: number) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const subtotal = items.reduce((sum, item) => sum + item.total, 0);

        const total = (subtotal + subtotal*(tax/100));

        const newInvoice = {
            customerName,
            customerEmail,
            customerPhone,
            customerAddress,
            items,
            subtotal,
            tax,
            total,
            status,
        };

        try {
            await axios.post("http://localhost:8080/admin/invoice", newInvoice);
            alert("Фактурата е създадена успешно.");
            setCustomerName("");
            setCustomerEmail("");
            setCustomerPhone("");
            setCustomerAddress("");
            setItems([{ name: "", quantity: 1, unitPrice: 0, total: 0 }]);
            setTax(0);
            setStatus("издадена");
        } catch (error) {
            console.error("Грешка при създаване на фактура:", error);
            alert("Възникна грешка при добавяне на фактура.");
        }
    };

    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <h2>Нова фактура</h2>

            <input
                className={styles["input"]}
                type="text"
                placeholder="Име на клиент"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
            />
            <input
                className={styles["input"]}
                type="email"
                placeholder="Имейл"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
            />
            <input
                className={styles["input"]}
                type="text"
                placeholder="Телефон"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
            />
            <input
                className={styles["input"]}
                type="text"
                placeholder="Адрес"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
            />

            <div className={styles["items-section"]}>
                <h3>Артикули</h3>
                {items.map((item, idx) => (
                    <div key={idx} className={styles["item-row"]}>
                        <input
                            type="text"
                            placeholder="Име на артикул"
                            value={item.name}
                            onChange={(e) => handleItemChange(idx, "name", e.target.value)}
                            className={styles["input-name"]}
                            required
                        />
                        <div>брой:</div>
                        <input
                            type="number"
                            placeholder="Брой"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(idx, "quantity", +e.target.value)}
                            className={styles["input-small"]}
                            required
                        />
                        <div>единична цена:</div>
                        <input
                            type="number"
                            placeholder="Единична цена"
                            value={item.unitPrice}
                            onChange={(e) => handleItemChange(idx, "unitPrice", +e.target.value)}
                            className={styles["input-small"]}
                            required
                        />
                        <span className={styles["total-label"]}>{item.total.toFixed(2)} лв</span>
                        <button
                            type="button"
                            onClick={() => removeItem(idx)}
                            className={styles["remove-btn"]}
                        >
                            X
                        </button>
                    </div>
                ))}
                <button type="button" onClick={addItem} className={styles["add-btn"]}>
                    + Добави артикул
                </button>
            </div>
                <div>такса ддс</div>
            <input
                className={styles["input"]}
                type="number"
                placeholder="ДДС"
                value={tax}
                onChange={(e) => setTax(+e.target.value)}
                required
            />
            <br></br>
            <select
                className={styles["input"]}
                value={status}
                onChange={(e) => setStatus(e.target.value as InvoiceStatus)}
            >
                <option value="издадена">Издадена</option>
                <option value="платена">Платена</option>
                <option value="неплатена">Неплатена</option>
            </select>
            <br></br>
            <button type="submit" className={styles["submit-btn"]}>
                Създай фактура
            </button>
        </form>
    );
};

export default AddInvoice;
