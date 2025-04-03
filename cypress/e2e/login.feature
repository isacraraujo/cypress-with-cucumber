Feature: Login

Scenario: Realizar Login
Given que o eDoc seja acessado
When digitar o usuário
When digitar a senha
When clicar no botão Entrar
Then valido que o login no eDoc