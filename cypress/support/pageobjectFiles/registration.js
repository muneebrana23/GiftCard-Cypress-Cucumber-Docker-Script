/// <reference types="Cypress" />

function UniqueEmail() {
	var uniqueId = Date.now()
	uniqueId = uniqueId.toString().substring(6)
	var email = "Muneeb" + uniqueId + "@appmailer.org"
	console.log(email)

	return email
}

function getPhoneNumber() {
	const UScode = "264654"
	const rand = Math.floor(Math.random() * 10000)
	var phone = UScode + rand

	return phone
}

function stateGenrator() {
	var state = Math.random().toString(36).substring(5, 15)
	return state
}

function captchaVerification() {
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

export class RegistrationSuccessfully {
	creatingaUser(password, FirstName, LastName, DoB, address, city, zip) {
		cy.contains("Register").click()
		cy.get("form").then(userdata => {
			const email = UniqueEmail()
			cy.wrap(userdata).find("#id_email").type(email)
			cy.wrap(userdata).find("#id_password1").type(password)
			cy.wrap(userdata).find("#id_password2").type(password)
			cy.wrap(userdata).find("#id_first_name").type(FirstName)
			cy.wrap(userdata).find("#id_last_name").type(LastName)
			cy.wrap(userdata).find("#id_date_of_birth").type("1994-08-26")
			cy.wrap(userdata).find("#id_street_address_line1").type(address)
			cy.wrap(userdata).find("#id_city").type(city)
			const state = stateGenrator()
			cy.wrap(userdata).find("#id_state").type(state)
			cy.wrap(userdata).find("#id_zip_code").type(zip)
			const phone = getPhoneNumber()
			cy.wrap(userdata).find("#id_phone_number").type(phone)
			captchaVerification()
			cy.wait(2000)
			cy.wrap(userdata).submit()
		})
	}
}
export const createUser = new RegistrationSuccessfully()
