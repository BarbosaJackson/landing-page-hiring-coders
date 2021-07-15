function create_warning(warning_message) {
    let email_warning = document.getElementById('emailWarning');
    email_warning.innerHTML = warning_message;
    email_warning.style.visibility='visible';
}

function validate_email(email) {
    let regex_mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(regex_mail_format);
}

function clear_page() {
    document.getElementById('emailWarning').style.visibility = 'hidden';
    document.getElementById('email').value = "";
    document.getElementById('name').value = "";
}

function send() {
    let email = document.getElementById('email').value;
    if(email == undefined || email.length == 0) {
        create_warning("Você deve inserir o seu email!");
        return;
    } else if(!validate_email(email)) {
        create_warning("Por favor, insira um email válido!")
    }
    else {
        let user = new User(document.getElementById('name').value, email);
        let api = new LocalStorageAPI();
        api.create(user);
        clear_page();
    }
}