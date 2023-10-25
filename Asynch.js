const getDog = async() => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
}

getDog()