const btn = document.getElementById('btn');
const txtPassword = document.getElementById('activation');

txtPassword.addEventListener('keyup', (e) => {
    btn.disabled = e.target.value !== '189456';
});

function alert01(){
    alert("Ativado!")
}

btn.onclick = () => {
    alert01();
    window.open("https://app7k.me/appautomoneybot/app", "_blank");
}

