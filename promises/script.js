// let p =new Promise(function(resolve, reject){
//     console.log("starting async code");
// // async operation 
// setTimeout(function(){
//     document.getElementById("name").style.visibility = "visible";
//     console.log("calling reject");
//     reject("error with async code");
// },1000);
// });
// isSuccess = true;
// if(isSuccess){
//     console.log("calling resolve"); 
//     resolve();

// } 
// else{
//     console.log("calling reject");
//     reject();
// }
// })
// console.log("after promise creation");
// p.then(function(){
//     console.log("success");
// })
// p.catch(function(errorMessage){
//     console.log("error: "+errorMessage); 
// })
// console.log("after then and catch creation");



let p = new Promise((resolve, reject)=> {
    setTimeout(()=>{ 
        document.getElementById("name1").style.visibility = "visible";
        resolve();
},1000)
}).then(()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{        
        document.getElementById("name2").style.visibility = "visible";
        resolve();
    },1000)
})
}).then(()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{        
        document.getElementById("name3").style.visibility = "visible";
        resolve();
    },1000)
}) 
}).then(()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{        
        document.getElementById("name4").style.visibility = "visible";
        resolve();
    },1000)
})
})


