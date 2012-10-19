/// <reference path="UIAButton.d.ts" />

interface UIAAlert extends UIAElement {
	cancelButton(): UIAButton;
	defaultButton(): UIAButton;
}