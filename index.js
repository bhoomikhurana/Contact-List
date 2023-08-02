const express=require('express');
const port=8000;
const path=require('path');
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());//middleware
app.use(express.static('assets'));
//middleware1
// app.use(function(req,res,next){
//     req.myName='bhoomi';
//     console.log('middleware 1 called');
//     next();
// })
//middleware2
// app.use(function(req,res,next){
//     console.log('my name from mw2',req.myName);
// console.log('middleware 2 called');
// next();
// })
const contactList=[
    {
        name:'Bhoomi',
        phone:1234567890
    },
    {
        name:'Aakash',
        phone:43546435664
    },
    {
        name:'Kritika',
        phone:1111111111
    }
]
app.get('/',function(req,res){
    // console.log(__dirname);
     return res.render('home',{
        title:'Contacts List',
        contact_list:contactList
    
    });
    // res.send('<h1>yayy it is running</h1>');
})
app.post('/create-contact',function(req,res){
    // return res.redirect('/practice');
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
    contactList.push(req.body);
    return res.redirect('back');
})
app.get('/practice',function(req,res){
    return res.render('practice',{title:'Let us practise'})
})
//for deleting a contact
app.get('/delete-contact',function(req,res){
    //get the query from the url
    // console.log(req.query);
    let phone=req.query.phone;
    let contactIndex=contactList.findIndex(contact=>contact.phone == phone);
    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
});
app.listen(port,function(err){
    if(err){
        console.log("ERROR CAUGHT",err);
    }
    console.log('Yep,Server is running on port',port);
})