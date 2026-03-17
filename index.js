"use strict";

const output = document.querySelector("#output");

function render(rick) {
    const name = document.createElement("p")

    name.textContent = rick.name
     
    output.appendChild(name)
}

async function getrickAndMorty(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("fetch failed");
    }
    const rick = await res.json();
    return rick
  } catch (error) {
    console.error(error)
  }
}

async function main(){
    try {
        const rick = await getrickAndMorty("https://rickandmortyapi.com/api/character/1")
        console.log(rick)
        render(rick)
    } catch (error) {
        console.error(error)
    }
}

main()
