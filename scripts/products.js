//dummy json
const jsonFile = "../products.json";

//fetch product data from dummy api
async function fetchData() {
  try {
    const response = await fetch(jsonFile);
    if (!response.ok) {
      throw new Error("Could not fetch data.");
    }
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => console.log(data));
