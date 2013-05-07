/// <reference path="UIAGeometry.d.ts" />

// Forward declarations
// See their respective declaration file for details
interface UIAActivityView extends UIAElement {}
interface UIAPopover extends UIAElement {}
interface UIAElement {}

// Formal declarations of gestures options
interface UIADragOptions {
	touchCount?: number;
	duration?: number;
	startOffset?: UIAPoint;
	endOffset?: UIAPoint;
}
interface UIAFlickOptions {
	touchCount?: number;
	startOffset?: UIAPoint;
	endOffset?: UIAPoint;
}
interface UIARotateOptions {
	centerOffset?: UIAPoint;
	duration?: number;
	radius?: number;
	rotation?: number;
	touchCount?: number;
}
interface UIATapOptions {
	tapCount?: number;
	touchCount?: number;
	duration?: number;
	tapOffset?: UIAPoint;
}

// Formal Declaration of UIElementArray
interface UIAElementArray {
	length: Number;
	firstWithName(name: String): UIAElement;
	firstWithPredicate(predicate: String): UIAElement; // FIXME: predicate should be of type PredicateString
	firstWithValueForKey(val: Object, key: String): UIAElement; // FIXME: val should be of type NotTyped
	toArray(): Array;
	withName(name: String): UIAElement;
	withPredicate(predicate: String): UIAElement; // FIXME: predicate should be of type PredicateString
	withValueForKey(val: Object, key: String): UIAElementArray; // FIXME: val should be of type NotTyped
}

// Formal declaration of UIAElement
// Unless specified all methods are available in iOS 4.0 and later
interface UIAElement extends Object {
	// Determining Element Positioning
	hitpoint(): UIAPoint;
	rect(): UIARect;

	// Determining and Manipulating Element Hierachy
	activityIndicators(): UIAElementArray;
	activityView(): UIAActivityView;	// Since iOS 6.0
	ancestry(): UIAElementArray;
	buttons(): UIAElementArray;
	collectionViews(): UIAElementArray;	// Since iOS 6.0
	elements(): UIAElementArray;
	images(): UIAElementArray;
	links(): UIAElementArray;
	navigationBar(): UIAElement;
	navigationBars(): UIAElementArray;
	pageIndicators(): UIAElementArray;
	parent(): UIAElement;				// Since 4.2
	pickers(): UIAElementArray;
	popover(): UIAPopover;				// Since 4.2
	progressIndicators(): UIAElementArray;
	scrollViews(): UIAElementArray;
	searchBars(): UIAElementArray;
	secureTextFields(): UIAElementArray;
	segmentedControls(): UIAElementArray;
	sliders(): UIAElementArray;
	staticTexts(): UIAElementArray;
	switches(): UIAElementArray;
	tabBar(): UIAElement;
	tabBars(): UIAElementArray;
	tableViews(): UIAElementArray;
	textFields(): UIAElementArray;
	textViews(): UIAElementArray;
	toolbar(): UIAElement;
	toolbars(): UIAElementArray;
	webViews(): UIAElementArray;

	// Gestures and Actions
	doubleTap(): undefined;
	dragInsideWithOptions(options: UIADragOptions): undefined;
	flickInsideWithOptions(options: UIAFlickOptions): undefined;
	rotateWithOptions(options: UIARotateOptions): undefined;
	scrollToVisible(): undefined;
	tap(): undefined;
	tapWithOptions(options: UIATapOptions): undefined;
	touchAndHold(duration: Number): undefined;
	twoFingerTap(): undefined;

	// Determinig Element State
	checkIsValid(): Boolean;
	hasKeyboardFocus(): Number; 	// yes: 1, no:0, unavailable:null
	isEnabled(): Number;		 	// yes: 1, no:0, unavailable:null
	isValid(): Boolean;
	isVisible(): Boolean; 			// yes: 1, no:0, unavailable:null
	waitForInvalid(): Boolean;

	// Identifying Elements
	label(): String;				// Since iOS 5.0
	name(): String;
	value(): String;
	withName(name: String): UIAElement;
	withPredicate(predicateString: String): UIAElement; // FIXME: predicate should be of type PredicateString
	withValueForKey(value: Object, key: String): UIAElement; // FIXME: value should be of type NotTyped

	// Logging Element Information
	logElement(): undefined;
	logElementTree(): undefined;
}

//static UIAElementNil: UIAElement; // FIXME: UIAElementNil should be a constant of type UIAElement


