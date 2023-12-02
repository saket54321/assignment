import mongoose from "mongoose";
const foodschema=new mongoose.Schema({
    items:{
        type:[String],
        required:true,
    },
    status:{
        type:String,
        

    }},
    
    {
        timestamps:true,
    
})

const Food=mongoose.model('Food',foodschema);
export default Food;