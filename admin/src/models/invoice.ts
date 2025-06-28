export type InvoiceStatus = 'издадена' | 'платена' | 'неплатена';

export class InvoiceItem {
    name: string;
    quantity: number;
    unitPrice: number;
    total: number;

    constructor(name:string, quantity: number, unitPrice: number) {
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.total = quantity * unitPrice;
        this.name = name;
    }
}

export class Invoice {
    _id: string;
    customerName: string;
    customerEmail?: string;
    customerPhone?: string;
    customerAddress?: string;
    items: InvoiceItem[];
    subtotal: number;
    tax: number;
    total: number;
    status: InvoiceStatus;
    created_at: string;
    updated_at: string;

    constructor(data: {
        _id: string;
        customerName: string;
        customerEmail?: string;
        customerPhone?: string;
        customerAddress?: string;
        items: { name:string; quantity: number; unitPrice: number; total?: number }[];
        tax: number;
        status: InvoiceStatus;
        created_at: string;
        updated_at: string;
    }) {
        this._id = data._id;
        this.customerName = data.customerName;
        this.customerEmail = data.customerEmail;
        this.customerPhone = data.customerPhone;
        this.customerAddress = data.customerAddress;

        this.items = data.items.map(
            item =>
                new InvoiceItem(
                    item.name,
                    item.quantity,
                    item.unitPrice
                )
        );

        this.subtotal = this.items.reduce((acc, item) => acc + item.total, 0);
        this.tax = data.tax;
        this.total = this.subtotal + this.tax;
        this.status = data.status;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}
