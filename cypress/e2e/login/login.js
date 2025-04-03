import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const usuario = 'edoc1'
const senha = '123'

Given("que o eDoc seja acessado", () => {
    cy.visit("https://edoc-teste.camara.gov.br/nuxeo/site");
});

When("digitar o usuário", () => {
    cy.get('#username').type(usuario)
});
When("digitar a senha", () => {
    cy.get('#password').type(senha)
});
When("clicar no botão Entrar", () => {
    cy.get('button[class="button pequeno azul"]').click()
});

Then("valido que o login no eDoc", () => {
    cy.get('h1').contains('Minhas tarefas');
});