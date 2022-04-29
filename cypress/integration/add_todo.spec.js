describe("Todoリストを追加", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const TYPE_SOMETHING = "can be typing";
  it(`${TYPE_SOMETHING} を input に入力し、enter を押したときは テキストは ${TYPE_SOMETHING} のTodoアイテムが存在する`, () => {
    cy.get("[data-cy=new-todo-input-text]")
      .type(TYPE_SOMETHING)
      .type("{enter}")
      .should("not.have.value");

    // it is added a submited todo
    cy.get("[data-cy=todo-item]")
      .should("exist")
      .should("contain", TYPE_SOMETHING);
  });

  const TYPE_FIRST_PATTERN = "type first pattern";
  const TYPE_SECOND_PATTERN = "type second pattern";
  const TYPE_THIRD_PATTERN = "type third pattern";
  it("Todoリストは複数のアイテムを作成", () => {
    cy.get("[data-cy=new-todo-input-text]")
      .type(TYPE_FIRST_PATTERN)
      .type("{enter}")
      .should("not.have.value");

    // it is added a submited todo
    cy.get("[data-cy=todo-item]")
      .should("exist")
      .should("contain", TYPE_FIRST_PATTERN);

    // can add 2 more todos
    cy.get("[data-cy=new-todo-input-text]")
      .type(TYPE_SECOND_PATTERN)
      .should("have.value", TYPE_SECOND_PATTERN)
      .type("{enter}")
      .should("not.have.value");
    cy.get("[data-cy=todo-item]")
      .should("exist")
      .should("contain", TYPE_SECOND_PATTERN);

    cy.get("[data-cy=new-todo-input-text]")
      .type(TYPE_THIRD_PATTERN)
      .should("have.value", TYPE_THIRD_PATTERN)
      .type("{enter}")
      .should("not.have.value");
    cy.get("[data-cy=todo-item]")
      .should("exist")
      .should("contain", TYPE_THIRD_PATTERN);
  });

  it("空白スペースのみの場合はTodoアイテムを作成できない", () => {
    // submit space only input that submit should be disallowed
    cy.get("[data-cy=new-todo-input-text]").type("       ").type("{enter}");

    // there is no added todo item
    cy.get("[data-cy=todo-item]").should("not.exist");
  });
});
