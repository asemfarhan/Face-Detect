const handelPofile=( req , res , db )=>{
    const {id}= req.params;
    console.log('profile for id:', id);
    db.select('*').from('users').where ('id', id)
    .then (data=> {
        if(data[0]){
            console.log('okkkkkkkkkkkk');
        res.json(data)
        }
        else  res.status(404).json('User not exist.');
    })
    .catch(err=> res.status(404).json(err))
}
module.exports={handelPofile: handelPofile}