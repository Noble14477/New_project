// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");
// const main = document.getElementById("main");
// const welcome = document.getElementById("welcome");
// const usersname = document.getElementById("usersname");
// const btn = document.getElementById("btn");

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     checkInputs();
    
// });
// let checkInputs = () =>{
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();
    
    
//     // username
//     if(usernameValue === ""){
//         setErrorFor(username, "Username can not be empty");
//     }
//     else{
//         setSuccessFor(username)
//     }


//     // email
//     if(emailValue === ""){
//         setErrorFor(email, "Email can not be empty");
//     }else if(!isEmail(emailValue)){
//         setErrorFor(email, "Email not valid");
//     }else{
//         setSuccessFor(email)

//     };


//     // // Password
//     if(passwordValue === ""){
//         setErrorFor(password, "Password can not be empty");
//     }else{
//         setSuccessFor(password)
//     }

//     if(password2Value === ""){
//         setErrorFor(password2, "Retype Password can not be empty");
//     }else if (passwordValue !== password2Value){
//         setErrorFor(password2, "Password dose not match");
        
//     }else{
//         setSuccessFor(password2)
//     }


// };
// let setErrorFor = (input, message) =>{
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     small.textContent = message
//     formControl.className = "form-control error"
// }
// let setSuccessFor = (input) =>{
//     const formControl = input.parentElement;
//     formControl.className = "form-control success"
// }

// let isEmail = (email) => {
//     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }


