const fs = require('fs');
// console.log(fs);

//to create and read and remove files

//to read files 
// fs.readFile('./docs/file1.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })

//to write files
// fs.writeFile('./docs/file.txt','HI i am rudal kunwar the absolute dev',(error)=>{
//   if(error){
//     console.log(error);
//   }  else{
//     console.log('file written sucessfully');
//   }
// })

//to delete the files
if(fs.existsSync('./docs/file.txt')){
 fs.unlink('./docs/file.txt',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("File deleted Sucessfully");
    }
 })   
}