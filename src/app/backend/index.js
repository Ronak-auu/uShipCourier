var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var Customer = require('./models/Customer');
var Transpoter = require('./models/Transpoter'); 
var BidingList = require('./models/Biding');
var mail = require('nodemailer');
var app = express();
var cors = require('cors');
var jwt = require('jsonwebtoken');

var db = mongoose.connect('mongodb://localhost:27017/Courierz', function(err,responce){
    if(err) console.log(err)
    console.log("Connection has been added")
})


app.use(cors());
app.set('port', process.env.port || 3000);
app.use(bodyparser.json());
app.get('/',(req,res) => {
    res.send("hello");
})

app.post('/cuRegister',(req,res) => {
    
    var customer1 = new Customer(req.body);
    
    Customer.findOne({email : req.body.email}).exec(function(err,customer){
        if(err){
            console.log("Error");
        }
        else if(!customer)
        {
            customer1.save((err,result) => {
                if(err){
                    console.log("There is an error to adding user in Database");
                    res.send({success: "fail to add user", status: 500});
                }

                res.json({customer1,result});
            })
        }
        else
        {
            res.json({customer});
        }
    });  
});


app.post('/trRegister',(req,res) => {
       
    var transpoter1 = new Transpoter(req.body);
    
    Transpoter.findOne({email : req.body.email}).exec(function(err,transpoter){
        if(err){
            console.log("Error");
        }
        else if(!transpoter)
        {
            transpoter1.save((err,result) => {
                if(err){
                    console.log("There is an error to adding user in Database");
                    res.send({success: "fail to add user", status: 500});
                }
                console.log("new user");
                res.json
                ({transpoter1,result});
            });
        }
        else
        {
            console.log("userexist");
            res.json
            ({transpoter});
        }
    });    
});


app.post('/login',(req,res) => {
    var email = req.body.email;
    var password = req.body.password;

    console.log(email);

    Customer.findOne({email : email}).exec(function(err,customer){
        if(err){
            console.log("Error");
        }
        else if(!customer){
            console.log("welcome");
            Transpoter.findOne({email : email}).exec(function(err,transpoter){
                if(err){
                    console.log("Error");
                }
                else if(!transpoter){
                    console.log("Client doesn't exist");
                    res.json({
                        "user":"user"
                    });
                }
                else{
                    if(transpoter.password == password){
                        jwt.sign({transpoter},'secretkey',{expiresIn:'1h'},(err,token)=>{
                            res.json({
                                token,transpoter
                            });
                            console.log("Password Matched");
                        });
                    }
                    else{
                        res.json({
                            "transpotar":"transpotar"
                        });
                    }
                }
            })
        }
        else{
            if(customer.password == password){
                jwt.sign({customer},'secretkey',{expiresIn:'1h'},(err,token)=>{
                    res.json({
                        token,customer
                    });
                    console.log("Password Matched");
                });
            }
            else{
                res.json({
                    password
                });
            }
        }
    })
})

app.post('/BidingList',(req,res) => {
    var Biding = new BidingList(req.body.Biding);
    //console.log(Biding.token);
    var result = jwt.verify(Biding.tokencus,'secretkey');
    console.log(Biding);
    console.log(result);
    if(result.transpoter != undefined){
        Biding.mobile = result.transpoter.mobile;
        Biding.Customer_id = result.transpoter.email;}
    else if(result.customer != undefined){
        Biding.mobile = result.customer.mobile;
        Biding.Customer_id = result.customer.email;}
    Biding.Transformer_id = "";
    Biding.Parcel_id = Biding._id;
    //Biding.token = undefined;
    console.log(Biding);
    Biding.save((err,result) => {
        if(err){
            console.log("There is an error adding bid in Bidding List");
            res.sendStatus(500);
        }
        res.sendStatus(200);
        //res.json({json});
    })
})

app.post('/FindOrder',(req,res) => {
    var result = jwt.verify(req.body.finddelivery.tokenfind,'secretkey');
    var tr1;
    if(result.transpoter != undefined)
        tr1 = result.transpoter.email;
    else if(result.customer != undefined)
        tr1 = result.customer.email;
    //console.log(tr1);
    var trans='';
    BidingList.find({
        $and: [{Pickup_Address:req.body.finddelivery.Pickup_Address},{Delivery_Address:req.body.finddelivery.Delivery_Address},{Transformer_id:trans},{Customer_id:{$ne:tr1}}]}).exec(function(err,result){
        if(err){
            console.log("find error");
        }
        //console.log("find success");
        //console.log(result);
        res.send({ result });
    });
})

app.post('/confirm',(req,res) => {
    var transporter = mail.createTransport({
        service: 'gmail',
        auth: {
          user: 'courierzonline@gmail.com',
          pass: 'chIr@gk@tro4Iy@'
        }
      });
    //console.log(req.body.Biding);
    var Biding = new BidingList(req.body.Biding);
    //console.log(Biding.token);
    var result = jwt.verify(req.body.Biding.tokentrans,'secretkey');
    console.log(result);
    var tr1;
    var mobile;
    if(result.transpoter != undefined){
        tr1 = result.transpoter.email;
        mobile = result.transpoter.mobile}
    else if(result.customer != undefined){
        tr1 = result.customer.email;
        mobile = result.customer.mobile}
        var mailOptions = {
            from: 'courierzonline@gmail.com',
            to: tr1,
            subject: 'conformation mail',
            html: '<h4>You can change your order in Your Order page</h4><p>Customer id = ' +Biding.Customer_id+"</p><p>Customer Mobile = "+Biding.mobile+"</p><p>item = "+Biding.item+"</p><p>Pickup Address = "+Biding.Pickup_Address+"</p><p>Delivery Address = "+Biding.Delivery_Address+"</p><p>Delivery Duration = "+Biding.Delivery_Duration+"</p><p>Price = "+Biding.Price+"</p>"
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          var mailOptions = {
            from: 'courierzonline@gmail.com',
            to: Biding.Customer_id,
            subject: 'conformation mail',
            html: '<h4>You can change your order in Your Order page</h4><p>Transformer id = ' +tr1+"</p><p>Transformer Mobile = "+mobile+"</p><p>item = "+Biding.item+"</p><p>Pickup Address = "+Biding.Pickup_Address+"</p><p>Delivery Address = "+Biding.Delivery_Address+"</p><p>Delivery Duration = "+Biding.Delivery_Duration+"</p><p>Price = "+Biding.Price+"</p>"
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    //console.log(tr1);
    BidingList.updateOne({'Parcel_id':Biding.Parcel_id},{$set:{'Transformer_id':tr1}}).exec(function(err,result){
        if(err){
            console.log("update error");
        }
        //console.log("update");
    });
})

app.post('/removetrans',(req,res) => {
    var Biding = new BidingList(req.body.Biding);
    var tr1 = "";
    BidingList.updateOne({'Parcel_id':Biding.Parcel_id},{$set:{'Transformer_id':tr1}}).exec(function(err,result){
        if(err){
            console.log("update error");
        }
        //console.log("update");
    });
})

app.post('/removecus',(req,res) => {
    var Biding = new BidingList(req.body.Biding);
    console.log(Biding);
    BidingList.deleteOne({'Parcel_id':Biding.Parcel_id}).exec(function(err,result){
        if(err){
            console.log("update error");
        }
        //console.log("update");
    });
})

app.post('/profile',(req,res) => {
    var result = jwt.verify(req.body.token,'secretkey');
    if(result.transpoter != undefined){
        email = result.transpoter.email;
        Transpoter.find({email:email}).exec(function(err,result){
            if(err){
                console.log(err);
            }
            console.log(result);
            res.send({ result });
        });
    }
    else if(result.customer != undefined){
        email = result.customer.email;
        Customer.find({email:email}).exec(function(err,result){
            if(err){
                console.log(err);
            }
            console.log(result);
            res.send({ result });
        });
    }
})

app.post('/order',(req,res) => {
    var result = jwt.verify(req.body.token,'secretkey');
    if(result.transpoter != undefined){
        email = result.transpoter.email
        BidingList.find({$or: [{Customer_id:email},{Transformer_id:email}]}).exec(function(err,result){
            if(err){
                console.log("find error");
            }
           // console.log(result);
            res.send({ result });
        });
    }
    else if(result.customer != undefined){
        email = result.customer.email
        BidingList.find({$or: [{Customer_id:email},{Transformer_id:email}]}).exec(function(err,result){
            if(err){
                console.log("find error");
            }
            //console.log(result);
            res.send({ result });
        });
    }
})

app.listen(app.get('port'),function(err,responce){
    console.log("Server is running on port", app.get('port'));
});