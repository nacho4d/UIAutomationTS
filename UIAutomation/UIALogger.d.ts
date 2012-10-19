interface UIALogger {

	// Logging With Test Status
	logFail(message: String): undefined;
	logIssue(message: String): undefined;
	logPass(message: String): undefined;
	logStart(message: String): undefined;
	
	// Logging With Severity Levels
	logDebug(message: String): undefined;
	logError(message: String): undefined;
	logMessage(message: String): undefined;
	logWarning(message: String): undefined;
}
