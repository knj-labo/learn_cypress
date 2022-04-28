describe('Todoリストを追加', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const TYPE_SOMETHING = 'can be typing'
    it(`${TYPE_SOMETHING} を input に入力し、enter を押したときは テキストは ${TYPE_SOMETHING} のTodoアイテムが存在する`, () => {
        cy.get('[data-cy=new-todo-input-text]')
            .type(TYPE_SOMETHING)
            .type('{enter}')
            .should('not.have.value')

        // it is added a submited todo
        cy.get('[data-cy=todo-item]')
            .should('exist')
            .should('contain', TYPE_SOMETHING)
    })
});