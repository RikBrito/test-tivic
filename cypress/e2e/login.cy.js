describe('testando login', () => {
  
  it('login com sucesso', () => {
    //acessa a pagina
    cy.visit('qa-interview-project.vercel.app')
    //checagem da pagina, visando a pagina correta
    cy.title().should('eq','Login | Devias Kit')

    //acessa o input e digita apenas senha, sem usuario
    cy.get("[name = 'email']").type('test@tivic.com.br')
    cy.get("[name = 'password']").type('156#@dq5w1')
   

    //Clica no botão de login
    cy.get('button[type=submit]').click()

    //checagem da pagina, visando a pagina correta
    cy.title().should('eq','Overview | Devias Kit')
  })
  
  it('login sem email', () => {
    //acessa a pagina
    cy.visit('qa-interview-project.vercel.app')
    //checagem da pagina, visando a pagina correta
    cy.title().should('eq','Login | Devias Kit')

    //acessa o input e digita apenas senha, sem usuario
    cy.get("[name = 'email']").click()
    cy.get("[name = 'password']").type('156#@dq5w1')
    //confere se apareceu mensagem de email obrigatorio
    cy.contains('O e-mail é obrigatório').should('be.visible')
      
  })

  it('login com email errado', () => {
    //acessa a pagina
    cy.visit('qa-interview-project.vercel.app')
    //checagem da pagina, visando a pagina correta
    cy.title().should('eq','Login | Devias Kit')

    //acessa o input e digita apenas senha, sem usuario
    cy.get("[name = 'email']").type('riksbrito@gmail.com')
    cy.get("[name = 'password']").type('156#@dq5w1')

    //Clica no botão de login
    cy.get('button[type=submit]').click()

    //Checa por mensagem de falha
    cy.contains('Verifique o seu login ou senha.').should('be.visible')
 
  })

  it('login sem senha', () => {
    //acessa a pagina
    cy.visit('qa-interview-project.vercel.app')
    //checagem da pagina, visando a pagina correta
    cy.title().should('eq','Login | Devias Kit')

    //acessa o input para digitar dados de usuario e senha
    cy.get("[name = 'email']").type('test@tivic.com.br')
    cy.get("[name = 'password']").click()

    //confere se aparece mensagem de erro de falta de senha
    cy.contains('A senha é obrigatória').should('be.visible')
    

    //Clica no botão de login
    cy.get('button[type=submit]').click()        
  })

  it('login com senha errada', () => {
    //acessa a pagina
    cy.visit('qa-interview-project.vercel.app')
    //checagem da pagina, visando a pagina correta
    cy.title().should('eq','Login | Devias Kit')

    //acessa o input para digitar dados de usuario e senha
    cy.get("[name = 'email']").type('test@tivic.com.br')
    cy.get("[name = 'password']").type('abcd')
    
    //Clica no botão de login
    cy.get('button[type=submit]').click()       

    //Checa por mensagem de falha
    cy.contains('Verifique o seu login ou senha.').should('be.visible')
  })
})