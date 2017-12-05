// using express framework
var  bodyParser = require("body-parser"),
     mongoose   = require("mongoose"),
     express    = require("express"),
     app        = express() ,
     path       = require("path");

// // ----------------- server
var port     = process.env.PORT;
var passport = require('passport');
var flash    = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// app.use(express.static(__dirname + '/config'));

// var configDB = require('./config/database.js');



// // configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database
// mongoose.connect("mongodb://localhost/auth");

// require('./config/passport')(passport); // pass passport for configuration

// //app.configure(function() {

// 	// set up our express application
// 	app.use(logger('dev')); // log every request to the console
// 	app.use(cookieParser()); // read cookies (needed for auth)
// // 	app.use(bodyParser()); // get information from html forms

// // routes ======================================================================
// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//----------------------

var router =express.Router();

module.exports=router;

// view engine setup
app.set('view engine', 'ejs');

// view engine setup
var cons = require('consolidate');
app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//App use ..
app.use(express.static(__dirname + '/img/'));
app.use(express.static(__dirname + '/style/'));
app.use(express.static(__dirname + '/js/'));
app.use(express.static(__dirname + '/views'));

//app.use(require('./js/chat'))

//app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



 // App confi  & connect
mongoose.connect("mongodb://localhost/tools_db");


// DB Schema config
var toolSchema = new mongoose.Schema({
    name:String,
    category: String,
    image:String,
    price: Number,
    description:String,
    company_name: String,
    company_logo:String,
    company_url:String,
    company_description: String,
    company_country:String,
    company_profile:String
});

var Tool= mongoose.model("Tool",toolSchema);
//var ToolMachine= mongoose.model("ToolMachine",toolSchema);

//create scema for company

// DB Schema config
// var companySchema = new mongoose.Schema({
//     company_name: String,
//     company_logo:String,
//     company_url:String,
//     company_description: String,
//     company_country:String,
//     company_profile:String,
//     tools:[toolSchema]
// });

//var Company= mongoose.model("Company",companySchema);


// Tool.create({
//      name:"Baker Style 6 ft. x 6 ft. x 2 ft. Utility Scaffold 1100 lb. Load Capacity",
//         image: "Scaf1a.jpg",
//         category:"Scaffolding Tools",
//         price: 169.00,
//         description:"This MetalTech multipurpose maxi square baker-style rolling scaffold features an anti-slip plywood deck with steel reinforcement. Highest capacity in this category of 1,100 lbs. It adjusts from as low as 27 in. to as high as 76 in. in 2 in. increments. Constructed with rugged 1-1/2 in. square steel tubes with a baked-on yellow poly powder coat finish, 5 in. double locking caster wheels and a full hand grip spring-loaded double pronged locking mechanism. The 6 ft. baker style is the most popular scaffold in the industry and preferred by most professionals and homeowners."
// });



// Restful Routes
// Home Route & new featured (Hand tools)
app.get("/",function(req,res){
  // res.render("home.ejs");

       Tool.find({category:"Hand Tools"},function (err,tools){
        if (err){
          console.log("ERROR!");
        } else{
         res.render("home.ejs",{tools:tools});
        }
    }).sort({$natural : -1}).limit(4)
});

// Home Route &new featured (Hand tools)
app.get("/MachineFeatured",function(req,res){
  // res.render("home.ejs");
       Tool.find({category:"Machine Tools"},function (err,tools){
        if (err){
          console.log("ERROR!");
        } else{
         res.render("home.ejs",{tools:tools});
        }
    }).sort({$natural : -1}).limit(4)
});

// Home Route &new featured (Scaffolding tools)
app.get("/ScaffoldingFeatured",function(req,res){
  // res.render("home.ejs");
       Tool.find({category:"Scaffolding Tools"},function (err,tools){
        if (err){
          console.log("ERROR!");
        } else{
         res.render("home.ejs",{tools:tools});
        }
    }).sort({$natural : -1}).limit(4)
});

// products Route (default Hand Tool)
app.get("/products",function(req,res){
     Tool.find({"name":{$ne:null},category:"Hand Tools"},function (err,tools){
        if (err){
          console.log("ERROR!");
        } else{
         res.render("products.ejs",{tools:tools});
        }
    });
});


// Machine products Route
app.get("/machineTools",function(req,res){
     Tool.find({"name":{$ne:null},category:"Machine Tools"},function (err,tools){
        if (err){
          console.log("ERROR!");
        } else{
         res.render("products.ejs",{tools:tools});
        }
    });
});

// Scaffolding Tools products Route
app.get("/scaffoldingTools",function(req,res){
     Tool.find({"name":{$ne:null},category:"Scaffolding Tools"},function (err,tools){
        if (err){
          console.log("ERROR!");
        } else{
         res.render("products.ejs",{tools:tools});
        }
    });
});


// app.get("/featuredHand",function(req,res){
//      Tool.find.limit(2)({"name":{$ne:null},category:"Hand Tools"},function (err,tools){
//         if (err){
//           console.log("ERROR!");
//         } else{
//          res.render("home.ejs",{tools:tools});
//         }
//     });
// });


// // products #MachineTools Route
// app.get("/products#MachineTools",function(req,res){
//      Tool.find({category:"Machine Tools"},function (err,tools){
//         if (err){
//           console.log("ERROR!");
//         } else{
//          res.render("products.ejs",{tools:tools});
//         }
//     });
// });


 //Chat Route
app.get("/chat",function(req,res){
 res.render("chat.ejs");
});

///Forex_chart Route
app.get("/Forex_chart",function(req,res){
res.sendFile(path.join(__dirname + '/views/Forex_chart.html'));
// res.render("Forex_chart.ejs");
});



app.get("/forex_calculated",function(req,res){
res.sendFile(path.join(__dirname + '/views/forex_calculated.html'));
// res.render("Forex_chart.ejs");
});

// show specific product route
app.get("/products/:id", function(req,res){
   Tool.findById(req.params.id, function (err,foundTool){
    if(err){
       res.redirect("/products");
   }else{
       res.render("specificP.ejs",{tool:foundTool});
       }
   })
});

app.get("/shoppingCart/:id", function(req,res){
   Tool.findById(req.params.id, function (err,foundTool){
    if(err){
       res.redirect("/products");
   }else{
       res.render("shoppingCart.ejs",{tool:foundTool});
       }
   })
});


// company Route
app.get("/company",function(req,res){
     Tool.find({"company_name":{$ne:null}},function (err,tools){
        if (err){
          console.log("ERROR!");
        } else{
         res.render("company.ejs",{tools:tools});
        }
    });
});

// show specific company Route
app.get("/company/:id",function(req,res){
   Tool.findById(req.params.id, function (err,foundTool){
    if(err){
       res.redirect("/company");
   }else{
       res.render("specificC.ejs",{tool:foundTool});
       }
   })
});

// Create Route
app.post("/companySubmitting",function(req,res){
    //add company
    Tool.create(req.body.tool, function(err,newTool){
        if(err){
            res.render("company.ejs")
        } else {
            // redirect to products
            res.render("companySubmitting.ejs")
        }
    });
    });


// if requesting undefiend route
app.get("*",function(req,res){
        res.send("Page Not Found !!");

});


// Server is listening
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Tools Project Server has started !! ")
});
