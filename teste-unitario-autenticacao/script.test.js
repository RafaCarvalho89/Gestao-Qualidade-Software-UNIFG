const users = {
  'usuario1': 'senha1',
  'usuario2': 'senha2',
};

function authenticate(username, password) {
  if (users[username] && users[username] === password) {
    return true;
  } else {
    return false;
  }
}

// Testes usando Jest
test('autentica o usuário com credenciais válidas', () => {
  expect(authenticate('usuario1', 'senha1')).toBe(true);
});

test('não autentica o usuário com senha incorreta', () => {
  expect(authenticate('usuario1', 'senha_incorreta')).toBe(false);
});

test('não autentica o usuário inexistente', () => {
  expect(authenticate('usuario_inexistente', 'senha1')).toBe(false);
});

test('não autentica quando nem o usuário nem a senha são fornecidos', () => {
  expect(authenticate('', '')).toBe(false);
});
