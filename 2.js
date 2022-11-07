const people = [
	"Abigail",
	"Alexandra",
	"Alison",
	"Amanda",
	"Angela",
	"Bella",
	"Carol",
	"Caroline",
	"Carolyn",
	"Deidre",
	"Diana",
	"Elizabeth",
	"Ella",
	"Faith",
	"Olivia",
	"Penelope",
];

const searchName = (keyword, limit, people) => {
	// filter people by keyword and limit, then return the result
	const result = people.filter((item) => item.toLowerCase().includes(keyword));
	// if the result is more than the limit, then return the result with the limit
	return result.slice(0, limit);
};

console.log(searchName("an", 4, people));
