/* global QUnit */

QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/gherkin/opa5TestHarness",
	"com/crossroadsbiriyani/customer/cart/test/integration/GherkinSteps",
	"com/crossroadsbiriyani/customer/cart/test/integration/configureOpa"
], function (testHarness, Steps) {
	"use strict";

	testHarness.test({featurePath: "com/crossroadsbiriyani/customer/cart/test/integration/DeleteProduct", generateMissingSteps : true});
	testHarness.test({featurePath: "com/crossroadsbiriyani/customer/cart/test/integration/BuyProduct", generateMissingSteps : true, steps: Steps});
	testHarness.test({featurePath: "com/crossroadsbiriyani/customer/cart/test/integration/SaveForLater", generateMissingSteps : true});
	testHarness.test({featurePath: "com/crossroadsbiriyani/customer/cart/test/integration/ProductsFilter", generateMissingSteps : true});

	QUnit.start();
});