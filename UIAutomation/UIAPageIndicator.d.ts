/// <reference path="UIAElement.d.ts" />

interface UIAPageIndicator extends UIAElement {
	goToNextPage(): undefined;
	goToPreviousPage(): undefined;
	pageCount(): undefined;
	pageIndex(): undefined;
	selectPage(index: Number): undefined;
}
