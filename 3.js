/* Buatlah fungsi yang memiliki parameter nilaiAwal dan nilaiAkhir, serta dataArray (array).

Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam array harus lebih dari 5.

Fungsi tersebut akan mencari data dalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.
*/

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	// nilaiAwal must be less than nilaiAkhir
	if (nilaiAwal >= nilaiAkhir) {
		return "Nilai akhir harus lebih besar dari nilai awal";
	}

	// dataArray must be an array
	if (!Array.isArray(dataArray)) {
		return "Data harus berupa array";
	}

	// dataArray must be more than 5 elements
	if (dataArray.length < 5) {
		return "Jumlah angka dalam dataArray harus lebih dari 5";
	}

	// find the elements that are between nilaiAwal and nilaiAkhir and sort them
	const result = dataArray
		.filter((element) => element > nilaiAwal && element < nilaiAkhir)
		.sort((a, b) => a - b);

	// if there is no element between nilaiAwal and nilaiAkhir, return "Nilai tidak ditemukan"
	return result.length === 0 ? "Nilai tidak ditemukan" : result;
};

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])); // [8, 10, 12, 14, 16, 18]
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])); // "Nilai akhir harus lebih besar dari nilai awal"
console.log(seleksiNilai(5, 17, [2, 25, 4])); // "Jumlah angka dalam dataArray harus lebih dari 5"
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])); // "Nilai tidak ditemukan"
console.log(seleksiNilai(5, 17, "Test")); // "dataArray harus berupa array"
