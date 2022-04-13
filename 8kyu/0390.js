// Invalid Login - Bug Fixing #11

function validate(username, password){
    var database = new Database();
    return /\|{2}/.test(password) || /\/{2}/.test(password) ? 'Wrong username or password!' : database.login(username, password);
}