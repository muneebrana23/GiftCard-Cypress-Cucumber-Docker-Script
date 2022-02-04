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

	FailedCoupen() {
		cy.contains("Admin Dashboard").click()
		cy.contains("Promotions").click()
		cy.get(".card-title").contains("Create New Coupon").click()
		cy.get("form")
			.eq(1)
			.then(coupenform => {
				cy.wrap(coupenform).find("#id_coupon_code").type("11111111")
				cy.wrap(coupenform).find("#id_discount").type("11111111")
				// cy.wrap(coupenform).find("#id_coupon_code").type("11111111")
				cy.wrap(coupenform).find("#id_total_count").type("11111111")
				cy.wrap(coupenform).find("#id_allowed_denomination").type("11111111")
				cy.wrap(coupenform).find("#id_start_time").type("2022-02-02T08:00")
				cy.wrap(coupenform).find("#id_expiration_time").type("2022-02-06T09:00")
				cy.wrap(coupenform).submit()
			})
	}
}
export const makeLogin = new LoginFeature()
