export interface User {
	displayName: string;
	email: string;
	photoURL: string;
	createdAt: Date; // Using Date for timestamp
	favoritedGuides: string[];
}
