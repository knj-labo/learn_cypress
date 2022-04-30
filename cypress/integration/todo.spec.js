import { LOCALHOST } from "../support/consts";

describe("TodoアプリでCypressのチュートリアルをする", () => {
  it("初期状態のとき、,Todoアイテムは存在しない", () => {
    cy.visit(LOCALHOST);
    cy.get(".todo-list li").should("have.length", 0);
  });
});
