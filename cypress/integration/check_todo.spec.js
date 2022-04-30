import { TYPE_SECOND_PATTERN, TYPE_THIRD_PATTERN } from "../support/consts";

describe("Todoリストのチェックを確認する場合で", () => {
  beforeEach(() => {
    cy.createThreeOfTodoItems();
  });

  describe("チェックをしてないとき", () => {
    it("Todoリストは3つ表示されている", () => {
      cy.get("[data-cy=remaining-uncompleted-todo-count]").should(
        "contain",
        "3"
      );
    });
    it('"Clear completed"は表示されていない', () => {
      cy.get("[data-cy=clear-completed-button]").should("not.exist");
    });
  });

  describe("各Todoリストにチェックするとき", () => {
    it(`${TYPE_THIRD_PATTERN}のTodoリストをチェックする`, () => {
      cy.get("[data-cy=todo-item]:first-of-type")
        .should("have.text", TYPE_THIRD_PATTERN)
        .find("[data-cy=todo-item-complete-check]")
        .check()
        .should("have.checked");
      cy.get("[data-cy=remaining-uncompleted-todo-count]").should(
        "contain",
        "2"
      );
      // it should show "Clear cmpleted" button on footer
      cy.get("[data-cy=clear-completed-button]").should("be.visible");

      // can check todo 'TYPE_SECOND_PATTERN' as comoleted
      cy.get("[data-cy=todo-item]:nth-of-type(2)")
        .should("have.text", TYPE_SECOND_PATTERN)
        .find("[data-cy=todo-item-complete-check]")
        .check()
        .should("have.checked");
      //  it should show "Clear completed" button on footer
      cy.get("[data-cy=clear-completed-button]").should("be.visible");
    });

    it(`${TYPE_THIRD_PATTERN}のTodoリストをチェックして、再度チェックをする`, () => {
      cy.get("[data-cy=todo-item]:first-of-type")
        .should("have.text", TYPE_THIRD_PATTERN)
        .find("[data-cy=todo-item-complete-check]")
        .check()
        .should("have.checked");
      cy.get("[data-cy=remaining-uncompleted-todo-count]").should(
        "contain",
        "2"
      );

      // can un-check todo 'TYPE_THIRD_PATTERN' as un-completed
      cy.get("[data-cy=todo-item]:first-of-type")
        .should("have.text", TYPE_THIRD_PATTERN)
        .find("[data-cy=todo-item-complete-check]")
        .click()
        .should("not.have.checked");
    });
  });
});
