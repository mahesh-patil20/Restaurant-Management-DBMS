

document.querySelector("#loginbtn").addEventListener("click" , function(){
    document.querySelector(".head").scrollIntoView({behavior:"smooth"});
    document.querySelector(".formbox").classList.add("active");

})
document.querySelector("#closebtn").addEventListener("click",function(){
    console.log("Hello");
    document.querySelector(".formbox").classList.remove("active");
   
})
// ===============================================================================================================
document.querySelector("#signinbtn").addEventListener("click",function(){
    document.querySelector(".head").scrollIntoView({behavior:"smooth"});
    document.querySelector(".formbox1").classList.add("active");
    
})
document.querySelector("#closebtn1").addEventListener("click",function(){
    console.log("Hello")
    document.querySelector(".formbox1").classList.remove("active")
   
})
// =========================================================================================================
document.querySelector(".name").addEventListener("click",function(){
    document.querySelector(".head").scrollIntoView({behavior:"smooth"});
})

document.getElementById("login-btn-2").addEventListener("click" , function(){
    console.log("IN req")
    const req = new Request("http://localhost:3000/signUp" , {method : "POST" , body : new FormData(document.getElementById("login-form"))})
    fetch(req).then(res => console.log(res))
})


