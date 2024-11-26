function toggleForm(formType) {
    // Ocultar todos os formulários
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.forgot-password-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'none';

    // Adicionar a animação de transição para o formulário ativo
    setTimeout(function() {
        // Exibir o formulário desejado
        if (formType === 'login') {
            document.querySelector('.login-box').style.display = 'block';
        } else if (formType === 'forgot-password') {
            document.querySelector('.forgot-password-form').style.display = 'block';
        } else if (formType === 'register') {
            document.querySelector('.register-form').style.display = 'block';
        }
    }, 200);

    // Adicionando animação de mesclagem para os formulários
    document.querySelector('.' + formType + '-form').style.opacity = 1;
    document.querySelector('.' + formType + '-form').style.transform = 'translateY(0)';
}
