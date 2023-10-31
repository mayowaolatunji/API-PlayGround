const input = document.querySelector(".input");
const search = document.querySelector("#search");
const dogContainer = document.querySelector('.dog-container');
const dog = document.querySelector('.dog');

// Function to fetch a random dog image based on the search input
const browseDog = async (browse) => {
  const link = `https://dog.ceo/api/breed/${browse}/images/random`;
  const response = await fetch(link);
  const data = await response.json();
  const imageUrl = data.message;
  const name = browse; // Get the breed name from the input

  if (data.status === "error") {
    alert("No dog image found for the specified breed.");
  } else {
    // Create a new container for the image and name
    const dogItem = document.createElement('div');
    dogItem.classList.add('dog-item');

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = imageUrl;
    newImage.height = 300;
    newImage.width = 300;

    // Create an h3 element for the breed name
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;

    // Append the image and name to the container
    dogItem.appendChild(newImage);
    dogItem.appendChild(nameElement);

    // Add the new container to the 'dog' div
    dogContainer.appendChild(dogItem);

    const maxImages = 8; // Adjust this number based on your container size
    if (dogContainer.children.length > maxImages) {
      // Container is filled, remove the first container
      dogContainer.removeChild(dogContainer.firstElementChild);
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

  // Create a new container for the image and name
  const dogItem = document.createElement('div');
  dogItem.classList.add('dog-item');

  // Create a new image element
  const newImage = document.createElement('img');
  newImage.src = imageUrl;
  newImage.height = 300;
  newImage.width = 300;

  // Create an h3 element for the breed name (you can set a default name)
  const nameElement = document.createElement('h3');
  nameElement.textContent = "Random Dog";

  // Append the image and name to the container
  dogItem.appendChild(newImage);
  dogItem.appendChild(nameElement);

  // Add the new container to the 'dog' div
  dogContainer.appendChild(dogItem);

  const maxImages = 8; // Adjust this number based on your container size
  if (dogContainer.children.length > maxImages) {
    // Container is filled, remove the first container
    dogContainer.removeChild(dogContainer.firstElementChild);
  }
};

getNewDog.addEventListener("click", function () {
  getDog();
});
