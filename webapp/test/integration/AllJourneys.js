sap.ui.define([
	"sap/ui/test/Opa5",
	"Startup",
	"./WelcomeJourney",
	"./NavigationJourney",
	"./DeleteProductJourney",
	"./BuyProductJourney",
	"./FilterJourney",
	"./ComparisonJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "com.crossroadsbiriyani.customer.cart.view.",
		autoWait: true
	});
});