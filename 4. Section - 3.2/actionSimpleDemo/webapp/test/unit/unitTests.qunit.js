/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/action/simple/actionSimpleDemo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});