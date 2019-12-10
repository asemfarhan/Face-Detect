const handelReister=( req , res , db , bcrypt )=>{
const {name , email, password}= req.body;
console.log('------handelReister' );

if ( !name || !email || !password){
    return res.status(400).json('Error - Enter the required fields. ')
    
}
db.transaction(trx =>{
    trx('users')
    .insert({
        name: name ,
        email: email ,
        password: bcrypt.hashSync(password) , 
        joined: new Date()
    })
    .returning('*')
    .then(user=>{ 
                return   trx.insert({'id' : user[0].id})
                            .into('enteries')
                            .returning('*')
                            .then (enter=> {
                                const merg =[{ ... user[0] , ... enter[0] }];
                                console.log('merg------------', merg) 
                                res.json(  merg) ;
                            }) 
                            .catch(err  => {
                            console.log('errrrrrrrrrr --- enteries ',err);
                            res.status(400).json(err)})
    })
    .then(trx.commit)
    .catch(err=>{
        console.log('errrrrrrrrrrrrrrrrrrrrrrrrrr ',err);
        res.status(400).json(err);
        trx.rollback}
    )
    })
}

module.exports={handelReister: handelReister}