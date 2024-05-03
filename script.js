function register() {
    let nameInput = document.getElementById('name');
    let name = nameInput.value.trim(); 

    if (name.length > 0) {
        alert(`Cadastro de ${name} realizado com sucesso!`);
    } else {
        alert('Por favor, preencha seu nome.');
    }
}