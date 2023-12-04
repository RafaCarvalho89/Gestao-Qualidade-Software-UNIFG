document.querySelector('.loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  res = document.querySelector('.res');

  var users = {
      'usuario1': 'senha1',
      'usuario2': 'senha2',
  };

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (users[username] && users[username] === password) {
      res.querySelector('#message').innerText = 'Usuário autenticado com sucesso!';
      res.style.color = 'green';

  } else {
      res.querySelector('#message').innerText = 'Falha na autenticação!';
      res.style.color = 'red';
  }
});
