let availableKeywords = [
  "html",
  "css",
  "easy tutorial",
  "web design tutorials",
  "javascript",
  "where to learn coding online",
  "where to learn web design",
  "how to create  website",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.addEventListener("keyup", function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
});
