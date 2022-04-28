describe('Todoリストを追加', () => {
    it('can add todo', () => {
        cy.visit('http://localhost:3000/')

        // can type text and submit
        cy.get('[data-cy=new-todo-input-text]')
            .type('can be typing')
    })
});