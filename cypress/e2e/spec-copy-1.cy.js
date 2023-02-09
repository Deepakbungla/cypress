// describe('Test login to Netlify using Github', () => {
//   it("should login to netlify with github", () => {
//     // visit netlify
//     // cy.visit("https://www.netlify.com/");
//     // cy.get(".icon-hamburger").click({ force: true });
//     // cy.contains("Log in").click({ force: true });
//     // cy.contains("GitHub").click({ force: true });

//     // // click on 'login with Github' button
//     // cy.origin("https://github.com", () => {
//     //   cy.get("#login_field").type("*****@gmail.com");
//     //   cy.get("#password").type("********");
//     //   cy.get("input").contains("Sign in").click();
//     // });
//     cy.visit('https://teamplus.udyamo.com/login');
//     cy.contains('Sign in with Microsoft').click();
//     // cy.url().should('eq', 'https://localhost:3000/myorganizations')

//     cy.origin("https://login.microsoftonline.com/common", () => {
//       // cy.contains('Sign in to your workspace');
//       // cy.get('#domain').type('kylikhu');
//       // cy.wait(4000)
//       cy.contains('Sign in')
//     })
//     // cy.origin('https://kylikhu.slack.com', () => {
//     //   cy.contains('Sign In With Google').click();
//     // })
//     // should login to netlify and open dashboard
//     // cy.url().should("contain", "https://app.netlify.com/");
//   });
// });

describe('title', () => {
  it('abc', () => {
    cy.visit('https://localhost:3000/login');
    // cy.contains('Log in').click();
    cy.url().should('eq', 'https://localhost:3000/login');
    cy.contains('Sign in with Microsoft').click();

    // cy.origin('https://login.microsoftonline.com/common', () => {
      cy.get('input[type="email"]').type("deepak.bungla@aipan.tech")
      cy.get('input[type="submit"]').click()
      cy.get('input[type="password"]').type('password')
    // })
  })
})