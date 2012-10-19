/// <reference path="UIAElement.d.ts" />
/// <reference path="UIAActionSheet.d.ts" />
/// <reference path="UIAAlert.d.ts" />
/// <reference path="UIAEditingMenu.d.ts" />
/// <reference path="UIAKeyboard.d.ts" />
/// <reference path="UIAWindow.d.ts" />
/// <reference path="UIANavigationBar.d.ts" />
/// <reference path="UIAStatusBar.d.ts" />
/// <reference path="UIATabBar.d.ts" />
/// <reference path="UIAToolbar.d.ts" />

interface UIAApplication {
	actionSheet(): UIAActionSheet;
	alert(): UIAAlert;
	bundleID(): String;
	editingMenu(): UIAEditingMenu;
	interfaceOrientation(): Number;
	keyboard(): UIAKeyboard;
	mainWindow(): UIAWindow;
	navigationBar(): UIANavigationBar;
	preferencesValueForKey(key: String): Object;
	setPreferencesValueForKey(value: Object, key: String): undefined;
	statusBar(): UIAStatusBar;
	tabBar(): UIATabBar;
	toolbar(): UIAToolbar;
	version(): String;
	windows(): UIAElementArray;
}