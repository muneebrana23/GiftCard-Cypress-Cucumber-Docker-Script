import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { createUser } from "../../../support/pageobjectFiles/registration"

Given("I load the registration page", () => {
	cy.visit("/")
	cy.contains("Register").click({ force: true })
})

When("I provided the user detail", () => {
	createUser.creatingaUser(
		"mun123,./",
		"Muneeb",
		"Akhtar",
		"1994-08-26",
		"Westbourne Road",
		"Luton",
		"10001"
	)
})

Then("I see user is registered succesfully", () => {
	cy.get(".alert-success").should(
		"contain",
		"Your account has been created and a verification sent to your email address. You may now log in."
	)
})
