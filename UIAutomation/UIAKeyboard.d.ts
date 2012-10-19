/// <reference path="UIAElement.d.ts" />

interface UIAKeyboard extends UIAElement {
	keys(): UIAElementArray;
	typeString(text: String): undefined;
}
