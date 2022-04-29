describe("", () => {
  it("should show not found page", () => {
    // no exist uri
    cy.visit("http://localhost:3000/sdg3y3457jtdyjgbvn");

    cy.get("[data-cy=not-found-page]")
      .should("exist")
      .should("contain", "Page Not Found");
  });
});
