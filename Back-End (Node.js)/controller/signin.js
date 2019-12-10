const handelSignin=( db , bcrypt )=>( req , res )=>{
    const {email , password} =req.body;
    if ( !email || !password){
        return res.status(404).json('Error - Enter the required fields. ')
    }
    console.log('Signin email', req.body.email);
    console.log('Signin password', req.body.password);
    db.select('*').from('users').where('email',email    ).join('enteries','users.id','=','enteries.id'  )
    .then(user => {
        if(  bcrypt.compareSync( req.body.password, user[0].password) ){
            res.json( user) ;
        }
        else     res.status(404).json('Invalid entered data ');
    })
    .catch( err=> res.status(404).json('Invalid user information -login error '))
    }
    
    module.exports={handelSignin: handelSignin}