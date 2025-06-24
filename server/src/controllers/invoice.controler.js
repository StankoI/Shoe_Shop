const Invoice = require('../models/ivoice');

async function createInvoice(req, res) {
    try {
        const data = req.body;

        data.items = data.items.map(item => ({
            ...item,
            total: item.quantity * item.unitPrice
        }));

        const subtotal = data.items.reduce((acc, item) => acc + item.total, 0);
        const tax = data.tax || 0;
        const total = subtotal + tax;

        const invoice = new Invoice({
            customerName: data.customerName,
            customerEmail: data.customerEmail,
            customerPhone: data.customerPhone,
            customerAddress: data.customerAddress,
            items: data.items,
            subtotal: subtotal,
            tax: tax,
            total: total,
            status: data.status || 'издадена'
        });

        const savedInvoice = await invoice.save();
        res.status(201).json(savedInvoice);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find().select('-__v').sort({ created_at: -1 });
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ error: 'Грешка при взимане на фактурите: ' + err.message });
    }
};

const deleteInvoice = async (req, res) => {
    try {
        const id = req.params.id;
        await Invoice.findByIdAndDelete(id);

        res.sendStatus(200);

    }
    catch (err) {
        res.status(500).json({eror: err.message})
    }

}

module.exports = { createInvoice, getAllInvoices, deleteInvoice }