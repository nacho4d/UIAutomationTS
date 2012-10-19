/// <reference path="UIAElement.d.ts" />
/// <reference path="UIAButton.d.ts" />

interface UIATabBar extends UIAElement {
	selectedButton(): UIAButton;
}
