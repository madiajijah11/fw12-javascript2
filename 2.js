// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function

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

const searchName = (keyword, limit, callback) => {
	// filter the name converted to lowercase that contains the keyword
	const result = name.filter((names) => names.toLowerCase().includes(keyword));
	// run the callback function and pass the result and limit as the argument, and return it
	return callback(result, limit);
};

// callback function that will return the result with the limit
const sliceArray = (result, limit) => result.slice(0, limit);

console.log(searchName("bb", 3, sliceArray)); // ["Alexandra", "Amanda", "Angela"]
