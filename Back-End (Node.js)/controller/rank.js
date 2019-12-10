const handelRank=( req , res , db )=>{
    const {id}= req.body;
    console.log('rank for id:', id);
    db('enteries')
        .where('id', '=', id)
        .increment('enteries' , 1 )
        .returning('*')    
        .then (data=>{  
            if(data[0]){
                console.log(data,'okkkkkkkkkkkk');
            res.json(data)
            }
            else  res.status(404).json('User not exist.');
        })
        .catch(err=> res.status(404).json(err))
}

module.exports={handelRank}