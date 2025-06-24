import 'cypress-file-upload';

describe('Tokenization Wizard Happy Path', () => {
  it('completes all steps and submits the form', () => {
    cy.visit('/wizard');

    /* Step 1: Fill Asset Info */
    cy.get('[data-cy=assetSymbol]').type('ABC');
    cy.get('[data-cy=assetName]').type('Awesome Asset');
    cy.get('[data-cy=decimals]').type('18');
    cy.contains('Next').click();

    /* Step 2: Upload file */
    const fileName = 'example.pdf';
    cy.fixture(fileName).then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName,
        mimeType: 'application/pdf',
      });
    });
    cy.contains('Next').click();

    /* Step 3: Review & Submit */
    cy.contains('Submit').click();

    /* Confirmation */
    cy.contains('Submission successful').should('exist');
  });
});
