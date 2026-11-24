// Build User Profile System

// step 1: define a user interface
interface User {
    id: number;
    username: string;
    email: string;
}

// step 2: create an author interface that extends the user interface
interface Author extends User {
    bio: string;
    posts: string[];
}

// step 3: define a status type for user accounts
type Status = "active" | "inactive" | "banned";

// step 4: create a author object
const authorProfile: Author = {
    id: 1,
    username: "sontosh-dev",
    email: "sontoshdev@gmail.com",
    bio: "Full Stack Developer and Tech Enthusiast",
    posts: ["Introduction to TypeScript", "Advanced TypeScript", "TypeScript Best Practices"],
}

// step 5: makes account status for the author
const accountStatus: Status = "inactive";