const categoriesList = document.getElementById("categories");

const totalCategories = categoriesList.querySelectorAll("li.item").length;
console.log("Number of categories:", totalCategories);

categoriesList.querySelectorAll("li.item").forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  console.log("\nCategory:", categoryName);

  const elementsCount = category.querySelectorAll("ul li").length;
  console.log("Elements:", elementsCount);
});
