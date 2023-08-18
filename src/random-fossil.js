import axios from "axios";

const button = document.getElementById("get-random-fossil");

button.addEventListener("click", () => {
  axios.get("/random-fossil.json").then((res) => {
    const image = res.data.img;
    const name = res.data.name;
    const div = document.querySelector("#random-fossil-image");
    const para = document.querySelector("#random-fossil-name");
    div.innerHTML = `<img src=${image}></img>`;
    para.innerText = `${name}`;
  });
});
