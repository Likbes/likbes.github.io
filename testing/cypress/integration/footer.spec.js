describe('Footer', () => {
  context('with a single todo', () => {
    it('displays a singular todo in count', () => {
      cy.seedAndVisit([{ id: 1, name: 'Eat breakfast', isComplete: false }]);

      cy.get('.todo-count')
        .should('contain', '1 todo left');
    });
  });

  context('with multiple todos', () => {
    beforeEach(() => {
      cy.seedAndVisit();
    });

    it('display plural todos in count', () => {
      cy.get('.todo-count')
        .should('contain', '3 todos left');
    });

    it('handles filter links', () => {
      const filters = [
        { link: 'Active', expectLength: 3 },
        { link: 'Completed', expectLength: 1 },
        { link: 'All', expectLength: 4 },
      ];

      cy.wrap(filters)
        .each(({ link, expectLength }) => {
          cy.contains(link)
            .click();

          cy.get('.todo-list li')
            .should('have.length', expectLength);
        });
    });
  });
});
