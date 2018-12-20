const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/houses', {} , (err)=>{
    if(err){
        console.log(err)
    }
})

let repoSchema = mongoose.Schema({
    _id : {type:Number, unique: true, index:true},
    postTitle: Text,
    cost: Number,
    image: Text,
    roomtype:{type: Text , beds: Number, Premium: Boolean},
    rating : {StarNum : Number, Votes : Numbers},
    description: Text
})

let repo = mongoose.model("Similar", repoSchema);

