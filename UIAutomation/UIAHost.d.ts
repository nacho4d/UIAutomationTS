interface UIATaskResult {
	exitCode: Number;
	stdout: String;
	stderr: String;
}

interface UIAHost {
	performTaskWithPathArgumentsTimeout(path: String, args: Array, timeout: Number): UIATaskResult; 
}
