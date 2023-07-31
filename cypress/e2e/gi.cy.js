/// <reference types="cypress" />
/// <reference types="../support" />

describe('For the GI making', () =>{

	beforeEach('go to the page', () => {
		cy.visit("/")
	});

	it('adding 3 sample tasks', () => {
		cy.get('.new-todo')
		.type('Make every second count{enter}')

		cy.get('.new-todo')
		.type('Invest in yourself{enter}')

		cy.get('.new-todo')
		.type('Learn Cypress{enter}')

		cy.get('.todo-list li').should('have.length', 3)

	});

	it('test to see if the proper text matches', () => {
		cy.get('.new-todo')
		.type('Make every second count{enter}')

		cy.get('.new-todo')
		.type('Invest in yourself{enter}')

		cy.get('.new-todo')
		.type('Learn Cypress{enter}')


		cy.get('.todo-list li')
		.eq(0)
		.find('label')
		.should('contain', 'Make every second count')

		cy.get('.todo-list li')
		.eq(1)
		.find('label')
		.should('contain', 'Invest in yourself')

		cy.get('.todo-list li')
		.eq(2)
		.find('label')
		.should('contain', 'Learn Cypress')
	});

	it('mark task complete', () => {
		cy.get('.new-todo')
		.type('Make every second count{enter}')

		cy.get('.new-todo')
		.type('Invest in yourself{enter}')

		cy.get('.new-todo')
		.type('Learn Cypress{enter}')

		cy.get('.todo-list li')
		.eq(2)
		.find('.toggle')
		.click()

		cy.get('.todo-list li').should('have.length', 3)

	});

	it('check if marked task has completed class', () => {
		cy.get('.new-todo')
		.type('Make every second count{enter}')

		cy.get('.new-todo')
		.type('Invest in yourself{enter}')

		cy.get('.new-todo')
		.type('Learn Cypress{enter}')

		cy.get('.todo-list li')
		.eq(2)
		.find('.toggle')
		.click()

		cy.get('.todo-list li')
		.eq(2)
		.should('have.class', 'completed')

		cy.get('.todo-list li').should('have.length', 3)

	})
	
})