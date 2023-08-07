describe('testando cadastro', () => {
    it('cadastro com sucesso', () => {
        //acessa a pagina
        cy.visit('qa-interview-project.vercel.app')
        //checagem da pagina, visando a pagina correta
        cy.title().should('eq','Login | Devias Kit')

        //muda para a pagina correta
        cy.contains('Registre-se').click()

        //faz o registro do novo usuario
        cy.get("[name = 'name']").type('Henrique Brito')
        cy.get("[name = 'email']").type('riksbrito@gmail.com')
        cy.get("[name = 'password']").type('testando')

        //efetivamente clica no botão de registro
        cy.get('button[type=submit]').click()

        //checa se o cadastro foi feito corretamente
        cy.contains('O recurso de cadastro ainda não foi finalizado, sinta-se cadastrado! 😁')
    })

    it('cadastro sem nome', () => {
        //acessa a pagina
        cy.visit('qa-interview-project.vercel.app')
        //checagem da pagina, visando a pagina correta
        cy.title().should('eq','Login | Devias Kit')

        //muda para a pagina correta
        cy.contains('Registre-se').click()

        //faz o registro do novo usuario
        cy.get("[name = 'name']").click()
        cy.get("[name = 'email']").type('riksbrito@gmail.com')
        cy.get("[name = 'password']").type('testando')

        //efetivamente clica no botão de registro
        cy.get('button[type=submit]').click()

        //checa se o cadastro foi finalizado com falha requisitando nome
        cy.contains('O nome é obrigatório').should('be.visible')
    })

    it('cadastro sem email', () => {
        //acessa a pagina
        cy.visit('qa-interview-project.vercel.app')
        //checagem da pagina, visando a pagina correta
        cy.title().should('eq','Login | Devias Kit')

        //muda para a pagina correta
        cy.contains('Registre-se').click()

        //faz o registro do novo usuario
        cy.get("[name = 'name']").type('Henrique')
        cy.get("[name = 'email']").click()
        cy.get("[name = 'password']").type('testando')

        //efetivamente clica no botão de registro
        cy.get('button[type=submit]').click()

        //checa se o cadastro foi finalizado com falha requisitando nome
        cy.contains('O e-mail é obrigatório').should('be.visible')
    })

    it('cadastro sem senha', () => {
        //acessa a pagina
        cy.visit('qa-interview-project.vercel.app')
        //checagem da pagina, visando a pagina correta
        cy.title().should('eq','Login | Devias Kit')

        //muda para a pagina correta
        cy.contains('Registre-se').click()

        //faz o registro do novo usuario
        cy.get("[name = 'name']").type('Henrique')
        cy.get("[name = 'email']").type('riksbrito@gmail.com')
        cy.get("[name = 'password']").click()

        //efetivamente clica no botão de registro
        cy.get('button[type=submit]').click()

        //checa se o cadastro foi finalizado com falha requisitando nome
        cy.contains('A senha é obrigatória').should('be.visible')
    })

    it('cadastro em branco', () => {
        //acessa a pagina
        cy.visit('qa-interview-project.vercel.app')
        //checagem da pagina, visando a pagina correta
        cy.title().should('eq','Login | Devias Kit')

        //muda para a pagina correta
        cy.contains('Registre-se').click()

         //acessa o campo, porem deixa em branco
         cy.get("[name = 'name']").click()
         cy.get("[name = 'email']").click()
         cy.get("[name = 'password']").click()

        //efetivamente clica no botão de registro
        cy.get('button[type=submit]').click()

        //checa se o cadastro foi finalizado com falha requisitando nome
        cy.contains('O nome é obrigatório').should('be.visible')
        cy.contains('O e-mail é obrigatório').should('be.visible')
        cy.contains('A senha é obrigatória').should('be.visible')
    })
  })