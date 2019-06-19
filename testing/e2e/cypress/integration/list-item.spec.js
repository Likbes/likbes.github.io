describe('List items', () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it('properly displays completed items', () => {
    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Eggs')
      .find('.toggle')
      .should('be.checked');
  });

  it('shows correct items left value', () => {
    cy.get('.todo-count')
      .should('contain', 3);
  });

  it.only('removes a todo', () => {
    cy.route({
      url: '/api/todos/1',
      method: 'DELETE',
      status: 200,
      response: {}
    });

    cy.get('.todo-list li')
      .as('list');

    cy.get('@list')
      .first()
      .find('.destroy')
      .invoke('show')
      .click({ force: true });

    cy.get('@list')
      .should('have.length', 3)
      .and('not.contain', 'Milk');
  });
});
