function handleSubmitSupport(event) {
    event.preventDefault();
    showSnackBar();
    document.getElementById('support-form').reset();
}

function handleSubmitSignUpBot(event) {
    event.preventDefault();
    showSnackBar();
    document.getElementById('sign-up-bot-form').reset();
}

function showSnackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}



