import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { makeLogin } from "../../../support/pageobjectFiles/login"

Given("I load the login page", () => {
	cy.visit("/")
	cy.contains("Login").click({ force: true })
})

When("I entered valid credentials", () => {
	makeLogin.Login("Muneeb5@appmailer.org", "mun123,./")
})

And("I tried to create coupen failed scenario", () => {
	makeLogin.FailedCoupen()
})

Then("I see the error page", () => {
	cy.contains("Oops! Why you’re here?").should("be.visible")
})
