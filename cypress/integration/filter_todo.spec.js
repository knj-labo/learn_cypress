context("Filter", () => {
  beforeEach(() => {
    cy.createThreeOfTodoItems();
  });

  it('"All"が選択されたとき、全ての項目を表示されている', () => {
    cy.get("[data-cy=todo-item]").should("have.length", 3);
    // done the todo
    cy.get("[data-cy=todo-item]:first-of-type")
      .find("[data-cy=todo-item-complete-check]")
      .check();
    cy.get("[data-cy=todo-item]").should("have.length", 3);

    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
    cy.get("[data-cy=active-filter]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/active"));
    cy.get("[data-cy=all-filter]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
    cy.get("[data-cy=todo-item]").should("have.length", 3);
  });

  it('"Active"が選択されたとき、urlは /active で未完了の項目を表示されている', () => {
    cy.get("[data-cy=active-filter]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/active"));
    cy.get("[data-cy=todo-item]").should("have.length", 3);
    // done the todo
    cy.get("[data-cy=todo-item]:first-of-type")
      .find("[data-cy=todo-item-complete-check]")
      .check();
    cy.get("[data-cy=todo-item]").should("have.length", 2);
  });

  it('"Completed"が選択されたとき、urlは /completed で完了された項目を表示されている', () => {
    cy.get("[data-cy=completed-filter]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/completed"));
    cy.get("[data-cy=todo-item]").should("not.exist");
    // done the todo
    cy.get("[data-cy=all-filter]").click();
    cy.get("[data-cy=todo-item]:first-of-type")
      .find("[data-cy=todo-item-complete-check]")
      .check();
    cy.get("[data-cy=completed-filter]").click();
    cy.get("[data-cy=todo-item]").should("have.length", 1);
  });
});
