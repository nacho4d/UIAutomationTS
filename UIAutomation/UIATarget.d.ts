/// <reference path="UIAHost.d.ts" />
/// <reference path="UIAApplication.d.ts" />
/// <reference path="UIAGeometry.d.ts" />

interface UIACoordinates {
	latitude: Number;
	longitude: Number;
}
interface UIACoordinatesOptions {
	altitude?: Number;
	horizontalAccuracy?: Number;
	verticalAccuracy?: Number;
	course?: Number;
	speed?: Number;
}

interface UIATargetRotationOptions {
	duration?: number;
	rotation?: number;
	touchCount?: number;
}
interface UIATargetTapOptions {
	tapCount?: number;
	touchCount?: number;
	duration?: number;
}

// Device Orientation
UIA_DEVICE_ORIENTATION_UNKNOWN: Number;
UIA_DEVICE_ORIENTATION_PORTRAIT_UPSIDEDOWN: Number;
UIA_DEVICE_ORIENTATION_LANDSCAPELEFT: Number;
UIA_DEVICE_ORIENTATION_LANDSCAPERIGHT: Number;
UIA_DEVICE_ORIENTATION_FACEUP: Number;
UIA_DEVICE_ORIENTATION_FACEDOWN: Number;

interface UIATarget {}
interface UIATarget {
	//Getting the Base Target and Host Objects
	host(): UIAHost;
	localTarget(): UIATarget;

	// Managing Your App
	deactivateAppForDuration(duration: Number): Boolean;
	frontMostApp(): UIAApplication;

	// Obtaining Device Property Information
	model(): String;
	name(): String;
	rect(): UIARect;
	systemName(): String;
	systemVersion(): String;

	// Determining and Changing Device Orientation
	deviceOrientation(): Number;
	setDeviceOrientation(orientation: Number): undefined; // See constants defined in UIAConstants.d.ts

	// Changing the Device Location
	setLocation(coordinates: UIACoordinates): Boolean; // docs say "boolean" ?
	setLocationWithOptions(coordinates: UIACoordinates, options: UIACoordinatesOptions): Boolean; // docs say "boolean" ?

	// Device Controls and Actions
	clickVolumeDown(): undefined;
	clickVolumeUp(): undefined;
	holdVolumeDown(duration: Number): undefined;
	holdVolumeUp(duration: Number): undefined;
	lockForDuration(duration: Number): undefined;
	shake(): undefined;
	lock(): undefined; // Deprecated in iOS 5.0
	unlock(): undefined; // Deprecated in iOS 5.0

	//Interacting with the Screen
	dragFromToForDuration(fromPointOrRect: any, toPointOrRect: any, duration: Number): undefined;
	doubleTap(tapPointOrRectOrUIAElement: any): undefined;
	flickFromTo(fromPointOrRect: any, toPointOrRect:any): undefined;
	pinchCloseFromToForDuration(fromPointOrRect: any, toPointOrRect: any, duration: Number): undefined;
	pinchOpenFromToForDuration(fromPointOrRect: any, toPointOrRect: any, duration: Number): undefined;
	rotateWithOptions(location: UIAPoint, options: UIATargetRotationOptions): undefined;
	tap(rectOrPointOrUIAElement: any): undefined;
	tapWithOptions(rectOrPointOrUIAElement: any, options: UIATargetTapOptions): undefined;
	touchAndHold(rectOrPointOrUIAElement: any, duration: Number): undefined;

	//Capturing Screen Images
	captureRectWithName(rect: UIARect, imageName: String): undefined;
	captureScreenWithName(imageName: String): undefined;

	//Manipulating Timeouts
	popTimeout(): Number;
	pushTimeout(timeout: Number): undefined;
	setTimeout(timeout: Number): undefined;
	timeout(): Number;

	//Miscellaneous
	delay(timeInterval: Number): Boolean;

	//onAlert: function handler(alert: UIAlert): Boolean;
}
