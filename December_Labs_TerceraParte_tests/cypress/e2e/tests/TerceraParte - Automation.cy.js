/// <reference types="cypress"/>

import { TodoPage } from "../../page-objects/todo-page";

describe('Test suites - December Labs - Austin office', () => {
    const todoPage = new TodoPage();

    it('Validate that the website opens correctly', () => {
        todoPage.navigate();
        cy.get('h2').should('have.text','Rocket-Fuelyour Product')
        cy.get('#menu-header-main-menu').should('exist')
        cy.get('#menu-item-844').should('have.text','Home')
        cy.get('#menu-item-839').should('have.text','About')
        cy.get('#menu-item-842').should('have.text','Services')
        cy.get('#menu-item-841').should('have.text','Our Work')
        cy.get('#menu-item-840').should('have.text','Blog')
        cy.get('#menu-item-843').should('have.text','FAQ')
        cy.get('#menu-item-838').should('have.text','Careers')
    })

    // Disable uncaught exceptions because the target page through an execption. We want to ignore this exception.
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });

    it('should be able to access to Austin office page', () => {
        todoPage.navigate();
        cy.get(':nth-child(1) > .city').click()
        cy.get('h1').should('have.text','Austin Web and App Developers')
        cy.url().should('equal', 'https://inhouse.decemberlabs.com/locations/austin/')
    })

    it('Validate that the "Schedule free consultation" popup is displayed', () => {
        todoPage.navigate();
        cy.get(':nth-child(1) > .city').click()
        cy.get('.left > .buttons > .button').click()
        cy.get('.start-project-form > div > iframe').should('be.visible')
        cy.frameLoaded('.start-project-form > div > iframe')
        cy.iframe('.start-project-form > div > iframe').contains('Please pick a time slot below.')
        cy.iframe('.start-project-form > div > iframe').get('.calendar-modal > div > .btn-close-modal').click()
        cy.get('.start-project-form > div > iframe').should('not.be.visible')
    })

    it('Validate that the "Schedule free consultation" popup is no longer displayed', () => {
        todoPage.navigate();
        cy.get(':nth-child(1) > .city').click()
        cy.get('.left > .buttons > .button').click()
        cy.get('.start-project-form > div > iframe').should('be.visible')
        cy.frameLoaded('.start-project-form > div > iframe')
        cy.iframe('.start-project-form > div > iframe').contains('Please pick a time slot below.')
        cy.iframe('.start-project-form > div > iframe').get('.calendar-modal > div > .btn-close-modal').click()
        cy.get('.start-project-form > div > iframe').should('not.be.visible')
    })
})
