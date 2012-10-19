/// <reference path="UIAElement.d.ts" />
/// <reference path="UIAButton.d.ts" />

interface UIANavigationBar extends UIAElement {
	leftButton(): UIAButton;
	rightButton(): UIAButton;
}
