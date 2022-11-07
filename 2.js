const name = [
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

const searchName = (keyword, limit, name) => {
	// filter name by keyword and limit, then return the result
	const result = name.filter((item) => item.toLowerCase().includes(keyword));

	// if the result is more than the limit, then return the result with the limit
	return result.slice(0, limit);
};

console.log(searchName("caro", 4, name));
