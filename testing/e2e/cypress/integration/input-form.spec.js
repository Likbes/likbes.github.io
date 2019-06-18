describe('Input form', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('focus input on load', () => {
    cy.focused()
      .should('have.class', 'new-todo');
  });

  it('accepts input', () => {
    cy.get('.new-todo')
      .type('Learn Cypress')
      .should('have.value', 'Learn Cypress')
  });

  context('Form submission', () => {
    beforeEach(() => {
      cy.server();
    });

    it('Adds a new todo on submit', () => {
      const todoText = 'Go to cafe';

      cy.route('POST', '/api/todos', {
        name: todoText,
        id: 1,
        isComplete: false,
      });

      cy.get('.new-todo')
        .type(todoText)
        .type('{enter}')
        .should('have.value', '');

      cy.get('.todo-list li')
        .should('have.length', 1)
        .and('contain', todoText);
    });

    it('show an error on a failed submission', () => {
      cy.route({
        url: '/api/todos',
        method: 'POST',
        status: 500,
        response: {}
      });

      cy.get('.new-todo')
        .type('test{enter}');

      cy.get('.todo-list li')
        .should('not.exist');

      cy.get('.error')
        .should('be.visible');
    });
  });
});
