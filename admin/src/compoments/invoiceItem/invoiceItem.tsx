import { Invoice } from "../../models/invoice";
import styles from "./invoiceItem.module.css";

type Props = {
    invoice: Invoice;
    onDelete: (id:string) => void;
};

const InvoiceItem = ({ invoice, onDelete }: Props) => {
    return (
        <div className={styles["invoice-container"]}>
            <div className={styles["header"]}>
                <div className={styles["customer-name"]}>{invoice.customerName}</div>
                <div className={styles["status"]}>{invoice.status}</div>
            </div>
            <div className={styles["details"]}>
                <div>Email: {invoice.customerEmail || "—"}</div>
                <div>Телефон: {invoice.customerPhone || "—"}</div>
                <div>Адрес: {invoice.customerAddress || "—"}</div>
                <div>Дата: {new Date(invoice.created_at).toLocaleDateString()}</div>
            </div>

            <div className={styles["item-table"]}>
                <div>
                    {invoice.items.map((item, index) => (
                        <div key={index}>
                            <div> Име: {item.name}</div>
                            <div> Количество: {item.quantity}</div>
                            <div> Цена: {item.unitPrice.toFixed(2)} лв</div>
                            <div> Общо: {item.total.toFixed(2)} лв</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles["totals"]}>
                <div>Междинна сума: {invoice.subtotal.toFixed(2)} лв</div>
                <div>ДДС:{invoice.tax.toFixed(2)}%</div>
                <div className={styles["grand-total"]}>Обща сума:{((invoice.tax/100)*invoice.subtotal + invoice.subtotal).toFixed(2)} лв</div>
            </div>
            <div onClick={() => onDelete(invoice._id)}>delete</div>
        </div>
    );
};

export default InvoiceItem;
