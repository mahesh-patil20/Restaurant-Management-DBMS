let book=document.querySelector('.btn');
book.addEventListener("click",function(){
    document.querySelector('.section4').classList.add("active");
    document.querySelector(".section4").scrollIntoView({behavior:"smooth"});
})

// function displaying(){
// let time=document.getElementsByName("durationfor");
// console.log(time);
//         console.log("inside function");
//         for(i=0; i<time.length; i++){
//             if(time[i] == true){
//                 if(time[i].value=="2hr"){
//                     console.log("hello");
//                     document.getElementById("#finalcost").innerHTML="300rs";
//                 }
        
//                 if(time[i].value=="3hr"){
//                     console.log("hello");
//                     document.getElementById("#finalcost").innerHTML="600rs";
//                 }
//             }
//         }
// }

