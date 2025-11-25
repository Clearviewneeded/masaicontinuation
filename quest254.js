function processEmployees(employees) {
// 1. Filter
const filtered = employees.filter(e => e.tasksCompleted > 5);


// 2. Map to include performance
const mapped = filtered.map(e => {
let performance;
if (e.rating > 4.5) performance = "Excellent";
else if (e.rating >= 3 && e.rating <= 4.5) performance = "Good";
else performance = "Needs Improvement";


return { name: e.name, performance, marks: e.rating };
});


// 3. Sort by performance level, then by rating descending within same level
const order = { "Excellent": 0, "Good": 1, "Needs Improvement": 2 };
mapped.sort((a, b) => {
if (order[a.performance] !== order[b.performance]) {
return order[a.performance] - order[b.performance];
}
// For tie-breaker, sort by rating (marks) descending
return b.marks - a.marks;
});


// 4. Return final array containing name and performance
return mapped.map(({ name, performance }) => ({ name, performance }));
}


// Example usage:
const input = [
{ name: "Alice", tasksCompleted: 8, rating: 4.7 },
{ name: "Bob", tasksCompleted: 4, rating: 4.0 },
{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },
{ name: "David", tasksCompleted: 10, rating: 4.9 },
{ name: "Eve", tasksCompleted: 7, rating: 2.8 }
];


console.log(processEmployees(input));