/// <reference types="Cypress" />

export class LoginFeature {
	captchaVerification() {
		cy.get("iframe")
			.first()
			.its("0.contentDocument.body")
			.should("not.be.undefined")
			.and("not.be.empty")
			.then(cy.wrap)
			.find("#recaptcha-anchor")
			.should("be.visible")
			.click()
	}

	Login(email, password) {
		cy.get("#id_username_email").type(email)
		cy.get("#id_password").type(password)
		this.captchaVerification()
		cy.wait(1500)
		cy.get("button").contains("Sign in").click()
	}
}
export const makeLogin = new LoginFeature()
