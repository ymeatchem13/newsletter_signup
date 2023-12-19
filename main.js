(function(window, document, undefined) {

    window.onload = init;

    function init() {
        document.getElementById("success-form").style.display = 'none';
        document.getElementById("validation").style.display = 'none';
    };
})(window, document, undefined);

function onSubmitNewsLetter(event) {
    event.preventDefault();
    var email = document.getElementById("email");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if ((email.value !== null && email !== "") && email.value.match(validRegex)) {
        document.getElementById("form").style.display = 'none';
        document.getElementById("success-form").style.display = 'flex';
        document.getElementById("user-email").innerHTML = email.value;
    } else {
        document.getElementById("email").style.borderColor = '#FF6155';
        document.getElementById("email").style.color = '#FF6155';
        document.getElementById("email").style.backgroundColor = '#FFAD9D';
        document.getElementById("email").style.outline = 'solid 4px #FF6155';
        document.getElementById("validation").style.display = 'flex';
        return false;
    }
}