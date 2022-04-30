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
});
