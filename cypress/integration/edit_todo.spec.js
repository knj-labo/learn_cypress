import { TYPE_FIRST_PATTERN, TYPE_THIRD_PATTERN } from "../support/consts";
context('Todoの項目を編集する場合', () => {
    beforeEach(() => {
        cy.createThreeOfTodoItems();
    })

    it('Todoの項目をテキストを編集する', () => {
        cy.get('[data-cy=todo-item]:nth-of-type(3)')
            .find('[data-cy=todo-body-text]')
            .should('contain', )
            .click()

        cy.get('[data-cy=todo-item]:nth-of-type(3)')
            .find('[data-cy=todo-edit-input]')
            .type(' of kind')
            .type('{enter}')

        cy.get('[data-cy=todo-item]:nth-of-type(3)')
            .find('[data-cy=todo-body-text]')
            .should('contain', 'one of kind')
    })
})
