const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : [true, "Enter the product"]
        },
        quantity :{
            type : Number,
            required : true,
            default : 0
        },
        price : {
            type : Number,
            required :true,
            default : 0
        }
    },
        {
            timestamps : true
        }
)
    const Product= mongoose.model("Products", ProductSchema);
    module.exports=Product;