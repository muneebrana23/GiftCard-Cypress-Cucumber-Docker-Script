import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { makeLogin } from "../../../support/pageobjectFiles/login"
import { coupenmodule } from "../../../support/pageobjectFiles/coupencreation"

Given("I load the login page", () => {
	cy.visit("/")
	cy.contains("Login").click({ force: true })
})

When("I logged in as Admin", () => {
	makeLogin.Login("Muneeb5@appmailer.org", "mun123,./")
})

And("I created a coupen code", () => {
	coupenmodule.createCoupen()
})

Then("I see coupen created", () => {
	cy.get("[class='alert alert-success alert-dismissible']")
		.invoke("text")
		.then(successText => {
			successText = successText.trim()
			expect(successText).to.equal("coupon is created successfully")
		})
})
