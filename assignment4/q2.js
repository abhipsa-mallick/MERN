const form=document.getElementsByTagName('form')[0];
form.addEventListener('submit',(event)=>{
    let valid=1;
    let error_text='';
    const full_name=document.querySelector("#full-name").value;
    if(full_name=='' && valid==1){
       error_text='please enter your name';
       valid=0;
    }
    
    const adress=document.querySelector("#adress").value;
    if(adress=='' && valid==1){
        error_text='please give your adress';
        valid=0;
     }
     const phone=document.querySelector("#Phone").value;
    if(phone=='' && valid==1){
        error_text='please give your phone number';
        valid=0;
     }
     const pin=document.querySelector("#Pin").value;
     if(pin=='' && valid==1){
         error_text='please enter your pincode';
         valid=0;
      }
    const email=document.querySelector('#email').value;
    if(email=='' && valid==1){
        error_text='please give your Email adress';
        valid=0;
     }
     const gender=document.querySelector('#Gender').value;
    if(gender=='' && valid==1){
        error_text='please select your gender';
        valid=0;
     }
     const pass=document.querySelector('#Password').value;
    if(pass=='' && valid==1){
        error_text='please enter your password';
        valid=0;
     }
     const pass1=document.querySelector('#Password1').value;
    if(pass1=='' && valid==1){
        error_text='please confirm your password';
        valid=0;
     }
    const check=document.querySelector("#i-agree").checked ? document.querySelector("#i-agree").value:'';
    if(check=='' && valid==1){
        error_text='please agree terms and cond';
        valid=0;
     }
     if(valid==0 && error_text!=''){
        document.querySelector('.error_message').style.display='block';
        document.querySelector('.error_message').innerHTML=error_text;
        document.querySelector('.error_message').style.color='red';
     }

     if(valid==1){
        document.querySelector('#show_name').innerHTML=full_name;
        document.querySelector('#show_adress').innerHTML=adress;
        document.querySelector('#show_phone').innerHTML=pin;
        document.querySelector('#show_pin').innerHTML=phone;
        document.querySelector('#show_email').innerHTML=email;
        document.querySelector('#show_gender').innerHTML=gender;
        document.querySelector('#show_password').innerHTML=pass;
        document.querySelector('#show_password1').innerHTML=pass1;
     }
    event.preventDefault();
})