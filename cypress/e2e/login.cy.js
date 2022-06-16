import {credentials} from '../../credentials';
const getIframeDocument = () => {
  return cy
  .get('iframe')
  .its('0.contentDocument').should('exist')
}
const getIframeBody = () => {
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap)
}

describe('My Research - Login screen -', () => {
  it('should load and pass a11y tests', () => {
    cy.visit(credentials.site);
    cy.viewport(1290, 1024);
    cy.get('h4').contains('Welcome to MyResearch');
    cy.injectAxe();
    cy.log('Testing page at WCAG2.0a');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2a' });
    cy.log('Testing page at WCAG2.0aa');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2aa' });
    cy.get('input#UserName').focus().type(credentials.username, {delay: 100});
    cy.get('input#Password').focus().type(credentials.password, {delay: 100});
    cy.get('button.btn-primary[type="submit"]').click();
    cy.screenshot();
  })
});
