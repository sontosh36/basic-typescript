// Interfaces vs Types => when to use which one?

// 1. designing  a public APIs: interfaces
// 2. for simple object shapes: both
// 3. Union and intersection types: type
// 4. primitive or function types: type
// 5. flexibility: interfaces(extendable) and type (union & intersection types=> not extendable)

// define type alias for object
type User = {
    name: string;
    age: number;
    email: string;
}
//define interface for object
interface UserProfile {
    name: string;
    age: number;
}
// merging or extending interfaces
interface UserProfile {
    email: string;
}

const userIformation: UserProfile = {
    name: "Gean marquez",
    age: 55,
    email: 'gean.max.gmail.com'
}