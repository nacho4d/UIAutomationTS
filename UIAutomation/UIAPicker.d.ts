/// <reference path="UIAElement.d.ts" />

interface UIAPicker extends UIAElement {
	wheels(): UIAElementArray;
}

interface UIAPickerWheel extends UIAPicker {
	selectValue(): undefined;
	values(): Array;
}
