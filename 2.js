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
	const result = name.filter((names) => names.toLowerCase().includes(keyword));
	return callback(result, limit);
};

const sliceArray = (result, limit) => {
	return result.slice(0, limit);
};

console.log(searchName("an", 3, sliceArray)); // ["Alexandra", "Amanda", "Angela"]
