var fs = require('fs');
var http = require('http');
var multer = require('multer');


var storage = multer.diskStorage({destination: function(req,file,callBack){
    callBack(null,'./uploads')
},


filename: function(req,file,callBack){
    callBack(null,file.originalname)

}

})
var upload= multer({storage:storage}).single("file")








var server = http.createServer(function(req,res){


    if (req.url=='/'){
        res.write("This is Home Page")
        res.end();

    }

    else if (req.url=='/about'){
        res.write("This is About Page")
        res.end();

    }
    else if (req.url=='/contact'){
        res.write("This is Contact Page")
        res.end();

    }

    else if (req.url=='/file-write'){
        fs.writeFile('demo.txt', 'Hello World', function(error){
               
         if(error){
 
             res.write("File Write Failed")
             res.end();
         }
 
         else{
 
             res.write("File Write Success")
             res.end();
 
         }
        });
 
     }





    else if (req.url=='/upload'){
        upload(req,res,function(error){
            if(error){
                res.write(" upload failed ")
                res.end();
            }
            else{
                res.write(" upload Successed ")
                res.end();
            }
         })
    
    


    }


})

    



server.listen(5500,function(){
    console.log("Server Run Success");
})
