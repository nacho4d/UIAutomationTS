/// <reference path="UIAElement.d.ts" />

interface UIAScrollView extends UIAElement {
	scrollUp(): undefined;
	scrollDown(): undefined;
	scrollLeft(): undefined;
	scrollRight(): undefined;
	scrollToElementWithName(name: String): UIAElement;
	scrollToElementWithPredicate(predicate: String): UIAElement; // FIXME: predicate should be of type PredicateString
	scrollToElementWithValueForKey(value: Object, key: String): UIAElement; // FIXME: value should be of type NotTyped
}
