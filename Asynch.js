const input = document.querySelector(".input");
const search = document.querySelector("#search"); // Fix the id selector here
const dogContainer = document.querySelector('.dog-container');
const dog = document.querySelector('.dog'); // Select the '.dog' div to add new images

// Function to fetch a random dog image based on the search input
const browseDog = async (browse) => {
  const link = `https://dog.ceo/api/breed/${browse}/images/random`;
  const response = await fetch(link);
  const data = await response.json();
  const imageUrl = data.message;

  if (data.status === "error") {
    // Handle the case where no image is found for the given breed
    alert("No dog image found for the specified breed.");
  } else {
    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = imageUrl;
    newImage.height = 300;
    newImage.width = 300;

    // Add the new image to the 'dog' div
    dog.appendChild(newImage);

    const maxImages = 8; // Adjust this number based on your container size
    if (dogContainer.children.length >= maxImages) {
      // Container is filled, remove the first image
      dogContainer.firstElementChild.remove();
    }
  }
};

search.addEventListener("click", function () {
  const browse = input.value;
  browseDog(browse);
});

const getNewDog = document.querySelector(".getNewDog");

const getDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  const imageUrl = data.message;

  // Create a new image element
  const newImage = document.createElement('img');
  newImage.src = imageUrl;
  newImage.height = 300;
  newImage.width = 300;

  // Add the new image to the 'dog' div
  dog.appendChild(newImage);

  const maxImages = 8; // Adjust this number based on your container size
  if (dogContainer.children.length >= maxImages) {
    // Container is filled, remove the first image
    dogContainer.firstElementChild.remove();
  }
};

getNewDog.addEventListener("click", function () {
  getDog();
});
