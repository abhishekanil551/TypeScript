// • Using the Nullish Coalescing Operator we can fallback to a default value when dealing with null/unde ned objects.

//const name = null ?? "Guest"; // Returns "Guest"
//const count = 0 ?? 10;        // Returns 0 (preserves falsy values like 0, "")   

// ?? vs ||

// || falls back on any falsy value (0, "", false, etc.)
// ?? only falls back on null or undefined, making it safer for default values. 