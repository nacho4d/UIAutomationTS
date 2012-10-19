/// <reference path="UIAElement.d.ts" />

interface UIAScrollView extends UIAElement {
	scrollUp(): undefined;
	scrollDown(): undefined;
	scrollLeft(): undefined;
	scrollRight(): undefined;
	scrollToElementWithName(name: String): UIAElement;
	scrollToElementWithPredicate(predicate: String): UIAElement;
	scrollToElementWithValueForKey(value: Object, key: String): UIAElement;
}
