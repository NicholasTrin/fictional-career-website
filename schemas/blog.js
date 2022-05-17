const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = Schema({
    title: String,
    body: String,
    dateSubmitted: Date,
    lastUpdated: Date,
    like: {type: Number, default:0},
    dislike: {type:Number, default:0},
    _user:{type:Schema.Types.ObjectId, ref:'users'},
    comments: [String]
})

mongoose.model("blog", blogSchema);
