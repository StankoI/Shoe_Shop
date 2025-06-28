import { Invoice } from "../../models/invoice";
import InvoiceItem from "../invoiceItem/invoiceItem";
import styles from "./invoice.module.css";

type Props = {
    invoices: Invoice[];
    onDelete: (id:string) => void;
};

const InvoiceList = ({ invoices, onDelete }: Props) => {
    return (
        <div className={styles["list-container"]}>
            {invoices.length === 0 ? (
                <div className={styles["empty-message"]}>Няма налични фактури.</div>
            ) : (
                invoices.map((invo) => (
                    <InvoiceItem key={invo._id} invoice={invo} onDelete={onDelete}/>
                ))
            )}
        </div>
    );
};

export default InvoiceList;
