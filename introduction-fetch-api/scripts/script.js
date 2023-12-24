// Ambil ID dengan nama fullname dan address di HTML
const fullName = document.getElementById("fullname");
const address = document.getElementById("address");

// Link API
const BASE_URL = "https://jsonplaceholder.typicode.com/users/4";
console.log(BASE_URL, " : INI LINK API NYA");

// Function untuk mengambil data user
async function getDataUser() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    // Menampilkan nama
    fullName.innerText = data.name;

    // Menampilkan address
    address.innerText = data.address.street;

    console.log("Ini Hasilnya: ", data);
  } catch (error) {
    console.error("Errornya itu: ", { error });
  }
}

getDataUser();
