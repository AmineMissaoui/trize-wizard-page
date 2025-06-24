import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    supportFile: 'cypress/support/e2e.ts', // or .js if you're using JS
    specPattern: 'cypress/e2e/**/*.cy.{ts,js,tsx,jsx}',
  },
});
