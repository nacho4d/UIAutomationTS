/// <reference path="UIAElement.d.ts" />
/// <reference path="UIAActionSheet.d.ts" />
/// <reference path="UIANavigationBar.d.ts" />
/// <reference path="UIATabBar.d.ts" />
/// <reference path="UIAToolbar.d.ts" />

interface UIAPopover extends UIAElement {
	// Retrieving Popover Contents
	actionSheet(): UIAActionSheet;
	navigationBar(): UIANavigationBar;
	tabBar(): UIATabBar;
	toolbar(): UIAToolbar;
	
	// Dismissing the Popover
	dismiss(): undefined;
}
