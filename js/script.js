const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log(nome, email);
    alert("Cadastro feito com sucesso! ;)")
})