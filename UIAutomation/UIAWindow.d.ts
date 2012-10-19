/// <reference path="UIAGeometry.d.ts" />
/// <reference path="UIAElement.d.ts" />
/// <reference path="UIANavigationBar.d.ts" />
/// <reference path="UIATabBar.d.ts" />
/// <reference path="UIAToolbar.d.ts" />

interface UIAWindow extends UIAElement {
	// Working with Window-level Elements
	contentArea(): UIARect;
	navigationBar(): UIANavigationBar;
	navigationBars(): UIAElementArray;
	tabBar(): UIATabBar;
	tabBars(): UIAElementArray;
	toolbar(): UIAToolbar;
	toolbars(): UIAElementArray;
}
