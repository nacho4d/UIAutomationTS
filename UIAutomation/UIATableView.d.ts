/// <reference path="UIAScrollView.d.ts" />

interface UIATableView extends UIAScrollView {
	cells(): UIAElementArray;
	groups(): UIAElementArray;
	visibleCells(): UIAElementArray;
}
