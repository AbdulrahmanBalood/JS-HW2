const output = document.getElementById("output");
window.addEventListener("load", () => {
  getData();
});
async function getData() {
  let res = await fetch("https://breakingbadapi.com/api/characters");

  let result = await res.json();

  result.map((result) => {
    const page = `
    <div class = "charImg">
    <img src = "${result.img}"  class = "resultImg">
    <p class = "imageInfo">${result.nickname}</p>
    </div>
    <div class = "data">
    <h5>${result.name}</h5>
    </div>
    `;
    let results = document.createElement("div");
    results.classList.add(
      "col-md-6",
      "mb-3",
      "col-xl-3",
      "col-sm-12",
      "col-lg-4",
      "col-xxl-1"
    );
    results.innerHTML = page;
    output.appendChild(results);
  });
}
