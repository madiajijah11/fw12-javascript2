/* Javascript method (built in function) */

// 1.concat() method
// metode ini digunakan untuk menggabungkan dua buah array menjadi satu array baru tanpa mengubah array yang lama
// bisa digunakan pada string dan array
const concat1 = ["a", "b", "c"];
const concat2 = ["d", "e", "f"];
const concat3 = concat1.concat(concat2);
console.log(concat3); // output: ['a', 'b', 'c', 'd', 'e', 'f']
const concat4 = "Hello";
const concat5 = "World";
const concat6 = concat4.concat(concat5);
console.log(concat6); // output: HelloWorld

// 2.indexOf() method
// metode ini digunakan untuk mengecek apakah suatu nilai ada di dalam array atau tidak dan mengembalikan nilai index dari nilai tersebut jika ada dan mengembalikan nilai -1 jika tidak ada
// bisa digunakan pada string dan array
const indexOf1 = [1, 2, 3];
const indexOf2 = "jakarta";
console.log(indexOf1.indexOf(2)); // 1
console.log(indexOf1.indexOf(4)); // -1
console.log(indexOf2.indexOf("a")); // 1
console.log(indexOf2.indexOf("z")); // -1

// 3.join() method
// metode ini digunakan untuk menggabungkan semua elemen array menjadi sebuah string dan mengembalikan string tersebut
// bisa digunakan pada array
const join1 = ["a", "b", "c"];
console.log(join1.join()); // a,b,c
console.log(join1.join("")); // abc
console.log(join1.join("-")); // a-b-c

// 4.pop() method
// metode ini digunakan untuk menghapus elemen terakhir dari array dan mengembalikan elemen tersebut
// bisa digunakan pada array
const pop1 = ["a", "b", "c"];
console.log(pop1.pop()); // c
console.log(pop1); // ['a', 'b']

// 5.push() method
// metode ini digunakan untuk menambahkan elemen baru ke akhir array dan mengembalikan panjang array
// bisa digunakan pada array
const push1 = ["a", "b", "c"];
console.log(push1.push("d")); // 4
console.log(push1); // ['a', 'b', 'c', 'd']

// 6.reverse() method
// metode ini digunakan untuk membalik urutan elemen array dan mengembalikan array yang sudah dibalik
// bisa digunakan pada array
const reverse1 = ["a", "b", "c"];
console.log(reverse1.reverse()); // ['c', 'b', 'a']

// 7.shift() method
// metode ini digunakan untuk menghapus elemen pertama dari array dan mengembalikan elemen tersebut
// bisa digunakan pada array
const shift1 = ["a", "b", "c"];
console.log(shift1.shift()); // a
console.log(shift1); // ['b', 'c']

// 8.slice() method
// metode ini digunakan untuk mengambil elemen array dari index awal sampai index akhir dan mengembalikan elemen tersebut
// bisa digunakan pada array
const slice1 = ["a", "b", "c", "d", "e"];
console.log(slice1.slice(1, 3)); // ['b', 'c']
console.log(slice1.slice(2)); // ['c', 'd', 'e']

// 9.sort() method
// metode ini digunakan untuk mengurutkan elemen array dan mengembalikan array yang sudah diurutkan
// bisa digunakan pada array
const sort1 = ["c", "a", "b"];
console.log(sort1.sort()); // ['a', 'b', 'c']

// 10.toString() method
// metode ini digunakan untuk mengubah array menjadi string dan mengembalikan string tersebut
// bisa digunakan pada array
const toString1 = ["a", "b", "c"];
console.log(toString1.toString()); // a,b,c
