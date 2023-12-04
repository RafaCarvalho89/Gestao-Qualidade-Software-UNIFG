// cadastro.js
// Função para validar os dados do usuário
function validarDados(nome, email, telefone, data, senha, confirm, cpf, terms) {
  // Verificar se todos os campos estão preenchidos
  if (!nome || !email || !telefone || !data || !senha || !confirm || !cpf || !terms) {
    return "Por favor, preencha todos os campos";
  }
  // Verificar se o nome tem pelo menos duas palavras
  if (nome.split(" ").length < 2) {
    return "Por favor, digite seu nome completo";
  }
  // Verificar se o email tem o formato válido
  if (!email.includes("@") || !email.includes(".")) {
    return "Por favor, digite um email válido";
  }
  // Verificar se o telefone tem o formato válido
  if (telefone.length < 10 || telefone.length > 11) {
    return "Por favor, digite um telefone válido";
  }
  // Verificar se a data de nascimento é anterior à data atual
  let hoje = new Date();
  let nasc = new Date(data);
  if (nasc >= hoje) {
    return "Por favor, digite uma data de nascimento válida";
  }
  // Verificar se a senha tem pelo menos 8 caracteres
  if (senha.length < 8) {
    return "Por favor, digite uma senha com pelo menos 8 caracteres";
  }
  // Verificar se a senha tem pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número
  let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/;
  if (!regex.test(senha)) {
    return "Por favor, digite uma senha que contenha pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número";
  }
  // Verificar se a senha e a confirmação são iguais
  if (senha !== confirm) {
    return "Por favor, digite a mesma senha nos dois campos";
  }
  // Verificar se o cpf tem o formato válido
  if (cpf.length !== 11) {
    return "Por favor, digite um cpf válido";
  }
  // Verificar se o usuário concordou com os termos e condições
  if (!terms) {
    return "Por favor, concorde com os termos e condições";
  }
  // Se tudo estiver ok, retornar null
  return null;
}

// Função para criar um objeto com as informações do cadastro
function criarCadastro(nome, email, telefone, data, senha, cpf) {
  // Retornar um objeto com os dados do usuário
  return {
    nome: nome,
    email: email,
    telefone: telefone,
    data: data,
    senha: senha,
    cpf: cpf
  };
}

// Array para armazenar os cadastros
let cadastros = [];

// Função para salvar um cadastro no array
function salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms) {
  // Validar os dados do usuário
  let erro = validarDados(nome, email, telefone, data, senha, confirm, cpf, terms);
  // Se houver algum erro, retornar o erro
  if (erro) {
    return erro;
  }
  // Se não houver erro, cria um objeto com as informações do cadastro
  let cadastro = criarCadastro(nome, email, telefone, data, senha, cpf);
  // Adicionar o objeto no array de cadastros
  cadastros.push(cadastro);
  // Retornar mensagem de sucesso
  if (!erro){
    mensagem = "Cadastro realizado com sucesso!";
    return mensagem;
  }
}

// Função para obter um cadastro pelo email
function obterCadastro(email) {
  // Percorrer o array de cadastros
  for (let i = 0; i < cadastros.length; i++) {
    // Se o email do cadastro for igual ao email informado, retornar o cadastro
    if (cadastros[i].email === email) {
      return cadastros[i];
    }
  }
  // Se não encontrar nenhum cadastro com o email informado, retornar null
  return null;
}

// Função para mostrar uma mensagem na tela
function mostrarMensagem(mensagem) {
  // Selecionar o elemento com id "mensagem"
  let elemento = document.getElementById("mensagem");
  // Alterar o texto do elemento com a mensagem
  elemento.textContent = mensagem;
}

// Evento de clique no botão com id "cadastrar"
document.getElementById("cadastrar") && document.getElementById("cadastrar").addEventListener("click", function() {
  // Obter os valores dos campos do formulário
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("phone").value;
  let data = document.getElementById("date").value;
  let senha = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let cpf = document.getElementById("cpf").value;
  let terms = document.getElementById("terms").checked;
  // Chamar a função salvarCadastro com os valores dos campos
  let resultado = salvarCadastro(nome, email, telefone, data, senha, confirm, cpf, terms);
  // Mostrar a mensagem retornada pela função na tela
  mostrarMensagem(resultado);
});

// Exportar a função salvarCadastro para ser usada em outros arquivos
module.exports = salvarCadastro;