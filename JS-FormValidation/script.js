const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = Cpassword.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is Required');
    }else{
        setSuccess(username);
    }
}

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}