const mongoose = require('mongoose');
const DetailsSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : [true, "Enter the name"]
        },
        age :{
            type : Number,
            required : true,
            default : 0
        },
        sex : {
            type : String,
            required : true
        },
        dept : {
            type : String,
            required : true 
        },
        year_of_study : {
            type : String,
            required : true
        }
    },
        {
            timestamps : true
        }
)
    const Detail= mongoose.model("Details", DetailsSchema);
    module.exports=Detail;