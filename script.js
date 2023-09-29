document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const errorDiv = document.getElementById('error');
  
    postForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const content = postContent.value.trim();
  
      if (!content) {
        showError('Por favor, digite uma mensagem.');
        return;
      }
  
      if (content.length > 200) {
        showError('A mensagem não pode ter mais de 200 caracteres.');
        return;
      }
  
      // Aqui você pode enviar a mensagem para o backend (usando fetch, por exemplo)
      // e lidar com a resposta conforme necessário.
  
      // Limpar o formulário
      postContent.value = '';
      showError(''); // Limpar mensagens de erro
    });
  
    function showError(message) {
      errorDiv.textContent = message;
    }
  });
  