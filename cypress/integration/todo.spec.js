describe("TodoアプリでCypressのチュートリアルをする", () => {
  it("初期状態のとき、,Todoアイテムは存在しない", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".todo-list li").should("have.length", 0);
  });
});
