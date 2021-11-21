const { model, Schema } = require("mongoose");

const tableSchema = new Schema({
    tableNumber: Number,
    Order: [String],
});

module.exports = model("Table", tableSchema);
