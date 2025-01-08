describe("Login", () => {
  beforeEach(() => {
    cy.acessarHome();
  });

  it("login realizado com sucesso", () => {
    const usuario = {
      email: "teste.qa@gmail.com",
      password: "Teste@123!",
    };
    cy.preencherFormLogin(usuario.email, usuario.password);
    cy.submitBtn("Acessar");
    cy.verificarMsgToast("Login realizado com sucesso!");
  });

  it("não deve logar quando senha inválida", () => {
    const usuario = {
      email: "teste.qa@gmail.com",
      password: "Teste123!",
    };
    cy.preencherFormLogin(usuario.email, usuario.password);
    cy.submitBtn("Acessar");
    cy.verificarMsgToast(
      "Erro ao acessar, verifique suas credenciais de acesso!"
    );
  });

  it("não deve logar quando dados em branco", () => {
    cy.submitBtn("Acessar");
    cy.verificarMsgToast("Preencha os campos corretamente!");
    cy.verificarMsgErro("O campo de e-mail é obrigatório.");
    cy.verificarMsgErro("O campo de senha é obrigatório.");
  });
});
