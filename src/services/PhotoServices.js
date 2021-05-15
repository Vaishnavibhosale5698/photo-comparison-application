function getPhotos() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=20")
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
    
}

export default getPhotos;