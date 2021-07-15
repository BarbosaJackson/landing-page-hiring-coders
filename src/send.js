function send() {
    let user = new User(document.getElementById('name').value, document.getElementById('email').value);
    let api = new LocalStorageAPI();
    api.create(user);
}