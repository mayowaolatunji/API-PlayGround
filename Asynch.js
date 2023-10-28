const input = document.getElementById("input");
const search = document.getElementById("search");

// we want the search button to take user input to search for dogs using their calls.


const body = document.querySelector("body");
const getNewDog = document.querySelector(".getNewDog");
const dog = document.querySelector(".dog");
body.append(dog)

const getDog = async () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = data.message; // Assuming the URL is in the "message" property

    console.log(imageUrl);
    dog.innerHTML += `<img src="${imageUrl}" height =300 width = 300 />`;
}

getNewDog.addEventListener("click", function(){
    getDog()

} )






