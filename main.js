
let my_email=document.getElementById("Email");
let my_name=document.getElementById("fullName");
let my_input_name=document.querySelector(".input_name");
let my_input_email=document.querySelector(".input_email");
let my_password=document.getElementById("Password");
let my_input_password=document.querySelector(".input_password");
let my_button=document.querySelector(".createAcoount");



my_button.addEventListener("click",()=>{
    //***************fullName******************
    let oldNameError = my_input_name.querySelector("p");
    if (oldNameError) oldNameError.remove();
    if (my_name.value.trim() === '') {
        let p = document.createElement("p");
        p.innerText = "Name is required";
        p.style.color = "red";
        my_input_name.appendChild(p);
    } 
    else {
        let parts = my_name.value.trim().split(" ");
        parts = parts.filter(w => w !== "");

        if (parts.length < 2) {
                    let p = document.createElement("p");

            p.innerText = "Write Full Name";
            p.style.color = "red";
            my_input_name.appendChild(p);
        }
    }

    // ******************Email*****************
    let oldEmailError = my_input_email.querySelector("p");
    if (oldEmailError) oldEmailError.remove();
    let pattern = /[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (my_email.value.trim() === '') {
       let p = document.createElement("p");
        p.innerText = "Email is required";
        p.style.color = "red";
        my_input_email.appendChild(p);
    } 
    else if (!pattern.test(my_email.value.trim())) {
        let p = document.createElement("p");
        p.innerText = "Enter Valid Email";
        p.style.color = "red";
        my_input_email.appendChild(p);
    }
 //*****************password******************* */
  let  oldpassworderror=my_input_password.querySelector("p");
  if(oldpassworderror){
    oldpassworderror.remove();
  }
  if(my_password.value.trim()===""){
    let p=document.createElement("p");
    p.innerText="password is required";
    p.style.color="red";
    my_input_password.appendChild(p);
  }
else if(my_password.value.trim().length!=8){
    let p=document.createElement("p");
    p.innerText="password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
    p.style.color="red";
    p.style.width="350px";
    my_input_password.appendChild(p);}
});




