document.addEventListener('DOMContentLoaded', function() {
  // Adicionar nota fiscal
  const formAdd = document.getElementById('form-add-nf');
  const lista = document.getElementById('notas-lista');

  if (formAdd) {
    formAdd.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(formAdd);
      
      // Verifica se uma obra foi selecionada
      const idObra = formData.get('id_obra');
      if (!idObra) {
        alert('Por favor, selecione uma obra');
        return;
      }

      try {
        const res = await fetch('/nota/add', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        
        if (res.ok) {
          location.reload(); // Simples: recarrega para ver a nova nota
        } else {
          const error = await res.json();
          alert(error.error || 'Erro ao adicionar nota');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao adicionar nota');
      }
    });
  }

  // Editar nota fiscal
  document.querySelectorAll('.form-edit-nf').forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const id = form.dataset.id;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const res = await fetch(`/nota/edit/${id}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (res.ok) {
        location.reload(); // Simples: recarrega para ver a alteração
      } else {
        alert('Erro ao editar nota');
      }
    });
  });

  // Apagar nota fiscal
  document.querySelectorAll('.form-delete-nf').forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const id = form.dataset.id;
      const res = await fetch(`/nota/delete/${id}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.closest('li').remove();
      } else {
        alert('Erro ao apagar nota');
      }
    });
  });
}); 