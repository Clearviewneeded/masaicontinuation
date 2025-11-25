function countCategories(categories) {
  const result = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return result;
}

// Example Input
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));
