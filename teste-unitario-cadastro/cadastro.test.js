/**
 * @jest-environment jsdom
 */

// cadastro.test.js
// Importar a função salvarCadastro do arquivo cadastro.js
const salvarCadastro = require("./cadastro");

// Testar se a função salvarCadastro funciona corretamente para diferentes casos
describe("Testar a função salvarCadastro", () => {
  // Testar se a função retorna um erro se algum campo estiver vazio
  test("Deve retornar um erro se algum campo estiver vazio", () => {
    // Definir os dados do usuário com um campo vazio
    let nome = "João Silva";
    let email = "joao@gmail.com";
    let telefone = "81999999999";
    let data = "1990-01-01";
    let senha = "123456";
    let confirm = "123456";
    let cpf = ""; // Campo vazio
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, preencha todos os campos";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });

  // Testar se a função retorna um erro se o nome não tiver pelo menos duas palavras
  test("Deve retornar um erro se o nome não tiver pelo menos duas palavras", () => {
    // Definir os dados do usuário com um nome inválido
    let nome = "João"; // Nome inválido
    let email = "joao@gmail.com";
    let telefone = "81999999999";
    let data = "1990-01-01";
    let senha = "123456";
    let confirm = "123456";
    let cpf = "11111111111";
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, digite seu nome completo";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });

  // Testar se a função retorna um erro se o email não tiver o formato válido
  test("Deve retornar um erro se o email não tiver o formato válido", () => {
    // Definir os dados do usuário com um email inválido
    let nome = "João Silva";
    let email = "joao@com"; // Email inválido
    let telefone = "81999999999";
    let data = "1990-01-01";
    let senha = "123456";
    let confirm = "123456";
    let cpf = "11111111111";
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, digite um email válido";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });

  // Testar se a função retorna um erro se o telefone não tiver o formato válido
  test("Deve retornar um erro se o telefone não tiver o formato válido", () => {
    // Definir os dados do usuário com um telefone inválido
    let nome = "João Silva";
    let email = "joao@gmail.com";
    let telefone = "8199999"; // Telefone inválido
    let data = "1990-01-01";
    let senha = "123456";
    let confirm = "123456";
    let cpf = "11111111111";
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, digite um telefone válido";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });

  // Testar se a função retorna um erro se a data de nascimento for posterior à data atual
  test("Deve retornar um erro se a data de nascimento for posterior à data atual", () => {
    // Definir os dados do usuário com uma data de nascimento inválida
    let nome = "João Silva";
    let email = "joao@gmail.com";
    let telefone = "81999999999";
    let data = "2024-12-12"; // Data de nascimento inválida
    let senha = "123456";
    let confirm = "123456";
    let cpf = "11111111111";
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, digite uma data de nascimento válida";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });

  // Testar se a função retorna um erro se a senha tiver menos de 8 caracteres
  test("Deve retornar um erro se a senha tiver menos de 8 caracteres", () => {
    // Definir os dados do usuário com uma senha inválida
    let nome = "João Silva";
    let email = "joao@gmail.com";
    let telefone = "81999999999";
    let data = "1990-01-01";
    let senha = "12345"; // Senha inválida
    let confirm = "12345";
    let cpf = "11111111111";
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, digite uma senha com pelo menos 8 caracteres";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });

  // Testar se a função retorna um erro se a senha não tiver pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número
  test("Deve retornar um erro se a senha não tiver pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número", () => {
    // Definir os dados do usuário com uma senha inválida
    let nome = "João Silva";
    let email = "joao@gmail.com";
    let telefone = "81999999999";
    let data = "1990-01-01";
    let senha = "abcdefg"; // Senha inválida
    let confirm = "abcdefg";
    let cpf = "11111111111";
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, digite uma senha que contenha pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });

  // Testar se a função retorna um erro se a senha e a confirmação não forem iguais
  test("Deve retornar um erro se a senha e a confirmação não forem iguais", () => {
    // Definir os dados do usuário com uma confirmação inválida
    let nome = "João Silva";
    let email = "joao@gmail.com";
    let telefone = "81999999999";
    let data = "1990-01-01";
    let senha = "Abc12345";
    let confirm = "Xyz98765"; // Confirmação inválida
    let cpf = "11111111111";
    let terms = true;
    // Chamar a função salvarCadastro com os dados do usuário
    let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
    // Definir o resultado esperado
    let esperado = "Por favor, digite a mesma senha nos dois campos";
    // Verificar se o resultado obtido é igual ao resultado esperado
    expect(resultado).toBe(esperado);
  });
});