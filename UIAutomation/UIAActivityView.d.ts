/// <reference path="UIAButton.d.ts" />

interface UIAActivityView extends UIAElement { // Since iOS 6.0
	cancelButton(): UIAButton;
}