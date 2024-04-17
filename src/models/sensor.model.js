import { Schema,model } from "mongoose";
const sensorSchema= new Schema({
    name: String, 
    unit: String,
    value: String  
},{
    versionKey: false,
    timestamps: true
});

export default model('sensor',sensorSchema);