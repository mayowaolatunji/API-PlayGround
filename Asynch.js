const input = document.querySelector(".input");
const search = document.querySelector(".search");


// we want the search button to take user input to search for dogs using their calls.

search.addEventListener("click", function () {
    const browse = input.value;
  
    // Function to fetch a random dog image based on the search input
    const browseDog = async () => {
      const link = `https://dog.ceo/api/breed/${browse}/images/random`;
      const response = await fetch(link);
      const data = await response.json();
      const imageUrl = data.message;
  
      if (data.status === "error") {
        // Handle the case where no image is found for the given breed
        alert("No dog image found for the specified breed.");
      } else {
        dog.innerHTML += `<img src="${imageUrl}" height="300" width="300" />`;
      }
    };
  
    browseDog();
  });


   



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








