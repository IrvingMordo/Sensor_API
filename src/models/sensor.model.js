import { Schema,model } from "mongoose";
const sensorSchema= new Schema({
    temperature: {
        type: Number,
        required: true
    }, 
    humidity: {
        type: Number,
        required: true
    }, 
    distance: {
        type: Number
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('sensor',sensorSchema);
