import {credentials} from '../../credentials';
const getIframeDocument = () => {
  return cy
  .get('iframe')
  .its('0.contentDocument').should('exist')
}
const getIframeBody = () => {
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}

beforeEach(() => {
  cy.visit(credentials.site);
    cy.viewport(1290, 1024);
    getIframeBody().find('h4').contains('Welcome to MyResearch');
    // --------------------------------------------------------------------------------
    //  We have to modify the HTML in the login iframe, as it tries to load the site
    //  in the _top window (which is the whole cypress runner) and fails.
    // --------------------------------------------------------------------------------
    getIframeBody().find('form[target="_top"]').then((elem) => {
      elem[0].setAttribute('target', '_parent');
    })
    getIframeBody().find('input#UserName').focus().type(credentials.username, {delay: 10});
    getIframeBody().find('input#Password').focus().type(credentials.password, {delay: 10});
    getIframeBody().find('button.btn-primary[type="submit"]').click();
    
    // Licence agreement page
    cy.get('h1#AccountTitle').contains('Licence agreement');
    cy.get('button#login').contains('Agree').click();
    
    // Orcid page
    cy.get('h1#AccountTitle').contains('ORCID iD Identifier');
    cy.get('a.continue').contains('Continue').click();

    // Main page
    cy.get('h1').contains('MyResearch Portal');
})

afterEach(() => {
  cy.get('a#signout').click();
})

describe('My Research - Pages', () => {
  it('Navigates to the Applications page and tests its accessibility', () => {
    // The text label is hidden, so we must force the click on invisible element
    cy.get('a').contains('Applications').click({force: true}); 
    cy.get('h1').contains('Applications');

    cy.injectAxe();
    cy.log('Testing page at WCAG2.0a');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2a' });
    cy.log('Testing page at WCAG2.0aa');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2aa' });
  })

  it('Navigates to the Projects page and tests its accessibility', () => {
    // The text label is hidden, so we must force the click on invisible element
    cy.get('a').contains('Projects').click({force: true}); 
    cy.get('h1').contains('Projects');

    cy.injectAxe();
    cy.log('Testing page at WCAG2.0a');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2a' });
    cy.log('Testing page at WCAG2.0aa');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2aa' });
  })

  it('Navigates to the Profile page and tests its accessibility', () => {
    // The text label is hidden, so we must force the click on invisible element
    cy.get('a').contains('Profile').click({force: true}); 
    cy.get('h1').contains('Profile');

    cy.injectAxe();
    cy.log('Testing page at WCAG2.0a');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2a' });
    cy.log('Testing page at WCAG2.0aa');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2aa' });
  })

  it('Navigates to the Help modal and tests its accessibility', () => {
    // The text label is hidden, so we must force the click on invisible element
    cy.get('a').contains('Help').click({force: true}); 
    cy.get('div#helpModal').contains('Help - Home');

    cy.injectAxe();
    cy.log('Testing page at WCAG2.0a');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2a' });
    cy.log('Testing page at WCAG2.0aa');
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'], values: 'wcag2aa' });

    cy.get('div#helpModal').click({force: true});
  })

});
