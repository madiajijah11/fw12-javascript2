/* A. Ubah data tersebut menggunakan spread operator */
let data = {
	id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
};

// changing the data using spread operator
let newData = {
	...data,
	name: "Dian Rahmadani",
	email: "madiajijah7@gmail.com",
	hobby: ["Coding", "Gaming", "Reading"],
};

console.log(newData);

/* B. Ambil data "street dan city" menggunakan destructuring */
const { street, city } = newData.address;

console.log(street, city);