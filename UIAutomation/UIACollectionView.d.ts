/// <reference path="UIAScrollView.d.ts" />

interface UIACollectionView extends UIAScrollView {
	cells(): UIAElementArray;
	visibleCells(): UIAElementArray;
}
