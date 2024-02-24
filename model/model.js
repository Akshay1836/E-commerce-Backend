const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
        name:{
                type:String,
                required:[true,'Product name must be provided'],
        },
        price:{
                type:Number,
                required:[true,'product price must be provided']
        },
        featured:{
                type:Boolean,
                deafult:false
        },
        rating:{
                type:Number,
                default:4.5
        },
        createdAt:{
                type:Date
        },
        company:{
                // values:['ikea','liddy','caressa','marcos'],
                // message:"value not supported"
                type:String,
                enum:{
                        values:['ikea','liddy','caressa','marcos'],
                        message:"{VALUE} value not supported"
                }
        }

})

module.exports=mongoose.model('product',ProductSchema);