const estados = document.querySelector('#estados');
const btnSubmit = document.querySelector('#btnSubmit');

const nomesEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo',
  'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná',
  'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonônia',
  'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

for (let i = 0; i < nomesEstados.length; i += 1) {
  let estado = document.createElement('option');
  estado.innerText = nomesEstados[i];

  estados.appendChild(estado);
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
});
