function processStudents(students) {
  const filtered = students.filter(student => student.marks > 60);
  const sorted = filtered.sort((a, b) => b.marks - a.marks);

  const names = sorted.map(student => student.name);

  return names;
}
const students = [
  { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 35 },
  { "name": "Emma", "marks": 76 },
  { "name": "Mia", "marks": 67 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 63 },
  { "name": "Kate", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Frank", "marks": 92 },
  { "name": "Leo", "marks": 88 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
];

console.log(processStudents(students));
