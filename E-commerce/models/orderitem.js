const mongoose = require('mongoose');
const Product = require('./product');
const OrderItemSchema = mongoose.Schema({
    quantity:{
        type:Number,
        required:true
    },
    Product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Product
    }
})
orderItem = mongoose.model('orderItem',OrderItemSchema);
module.exports = orderItem;