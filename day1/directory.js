const fs = require('fs');
// console.log(fs);

//to create and delete directory directory
const file = fs.existsSync('./docs');
if(!file){
fs.mkdir('./docs',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('Files created sucessfully');
    }
})
}else{
    fs.rmdir('./docs',(error)=>{   
    if(error){
        console.log(error);
    }else{
        console.log('Files Deleted sucessfully');
    }
    })
}