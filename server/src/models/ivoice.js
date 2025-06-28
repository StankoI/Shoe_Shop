const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String
    },
    customerPhone: {
        type: String
    },
    customerAddress: {
        type: String
    },
    items: [
        {
            name:{
                type:String,
                default:''
            },
            quantity: {
                type: Number,
                required: true
            },
            unitPrice: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            }
        }
    ],
    subtotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ['издадена', 'платена', 'неплатена'],
        default: 'издадена'
    }
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Invoice', InvoiceSchema, 'Invoice');
