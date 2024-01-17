// console.log(global);
global.setTimeout(()=>{
    console.log("Rudal");
    clearInterval(inter);
},4000)
const inter = setInterval(()=>{
    console.log("Hii i am set interval hahahah");
},1000)