/// <reference types="Cypress" />

/*Filling the Coupen Form for Coupen Class Functions  */
function FillingCoupenForm(
	discAmount,
	denomination,
	startingDate,
	endingDate,
	duplicatecoupen,
	discLimit
) {
	cy.get("form").then(coupenform => {
		if (duplicatecoupen == "123456789") {
			cy.wrap(coupenform).find("#id_coupon_code").type(duplicatecoupen)
		} else {
			let coupencode = Date.now()
			coupencode = Math.floor(Math.random() * 1000000)
			console.log(coupencode)
			cy.wrap(coupenform).find("#id_coupon_code").type(coupencode)
		}

		if (discAmount > 200) {
			cy.get("select").eq(0).select("AMOUNT")
		}

		cy.wrap(coupenform).find("#id_discount").clear().type(discAmount)
		cy.wrap(coupenform).find("#id_discount_limit").clear().type(discLimit)
		cy.wrap(coupenform).find("#id_total_count").clear().type("32532")
		cy.wrap(coupenform)
			.find("#id_allowed_denomination")
			.clear()
			.type(denomination)

		cy.wrap(coupenform).find("#id_start_time").type(startingDate)
		cy.wrap(coupenform).find("#id_expiration_time").type(endingDate)
		// cy.contains("button", "Create Coupon").click()
	})
}
/*SettingUp Date for Coupen Class Functions  */
function DateSelection(startdate) {
	let startyear = startdate.getFullYear()
	let startMonth = startdate.getUTCMonth() + 1
	let startDay = startdate.getUTCDate()
	let starthours = startdate.getUTCHours()
	let startmintues = startdate.getUTCMinutes()

	if (startMonth <= 9) startMonth = "0" + startMonth
	if (startDay <= 9) startDay = "0" + startDay
	if (starthours <= 9) starthours = "0" + starthours
	if (startmintues <= 9) startmintues = "0" + startmintues
	var start =
		startyear +
		"-" +
		startMonth +
		"-" +
		startDay +
		"T" +
		starthours +
		":" +
		startmintues

	return start
}

export class Coupen {
	createCoupen() {
		cy.contains("a", "Admin Dashboard").click()
		cy.contains("a", "Promotions").click()
		cy.get(".card-inner").contains(".card-title", "Create New Coupon").click()
		/*Setting Start Date */
		var startdate = new Date()
		const startingDate = DateSelection(startdate)
		/*Setting Expiration Date */
		var FutureDate = new Date()
		FutureDate.setDate(FutureDate.getDate() + 14)
		const endingDate = DateSelection(FutureDate)
		FillingCoupenForm("10", "50", startingDate, endingDate, "", "1")
		cy.contains("button", "Create Coupon").click()
	}
}
export const coupenmodule = new Coupen()
