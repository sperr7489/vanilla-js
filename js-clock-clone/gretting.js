const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
    SHOWING_ON = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS, text);

}

function askForName() {

    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);

}

function handleSubmit(event) {
    event.preventDefault();//기존 브라우저에 설정되어 있는 서브밋 이벤트를 막아주는것이다. 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();

}
init();