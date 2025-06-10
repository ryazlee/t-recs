export const log = (...args: any[]) => {
	if (process.env.NODE_ENV !== "production") {
		console.log("[LOG]", ...args);
	}
};

export const warn = (...args: any[]) => {
	if (process.env.NODE_ENV !== "production") {
		console.warn("[WARN]", ...args);
	}
};

export const error = (...args: any[]) => {
	console.error("[ERROR]", ...args); // Always log errors
};
