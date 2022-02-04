import { defineStep } from "cypress-cucumber-preprocessor/steps"

defineStep("I am waiting for {int} seconds", time => {
	cy.wait(time)
})
