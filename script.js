/* An Axios object, Basic Axios HTTP request */

// axios({
//     url: 'http://www.yourserver.com/api/neat_stuff',
//     method: 'post',
//     headers: {
//       'content-type': 'multipart/form-data'
//     },
//     data: form
// })

const myFunction = () => {
    console.log('first')
    axios.get('https://dog.ceo/api/breeds/list/all').then(function () { // Can be indented for readability
      console.log('second')
    })
    console.log('third')
  }

// myFunction() 
// Console logs first, then third, then second.
// Why out of order?? This is ASYNCRYNOUS data
// Might break code


// Add async and await to fix this
// async - tells computer it is working with async data
// await - tells computer to WAIT until data loads before executing
// This is VERY IMPORTANT to make sure things render in the right order

const betterFunction = async () => {
    console.log('first')
    await axios.get('https://dog.ceo/api/breeds/list/all').then 
    (function () {
      console.log('second!')
    })
    console.log('third')
}

// betterFunction()
// Console logs in proper order, first, second, then third

const getBreeds = async () => {
    //Defining axios.get() as a variable
    const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
    // console.log(dogBreeds) // Pulls EVERYTHING, including the jargon
    breedArray = dogBreeds.data.message // Use dot notation to specify what you want
    console.log(breedArray)
}

// getBreeds() 
// Console logs array of ALL dog breeds from the API

// Now let's allow the page to pull dog images!

// Getting!
const button = document.querySelector('#btn')

const breedInput = document.querySelector('#search-bar')

const imgContainer = document.querySelector('#img-container')

// Setting!
button.addEventListener('click', async () => { // Make sure to include async
    let breed = breedInput.value // inputEl.value is what is inside of HTML input element
    console.log(breed) // Confirm it works
    let response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random` // Using string literals, we can sub input into a link!!!
    )
    console.log(response.data.message) // Puts dog image in a variable!
    let dogPic = response.data.message
    imgContainer.setAttribute ('src', dogPic) // Sets image container equal to the dog image
    // We can append a class and alt if we want with this function!
    // To make code more workable
    imgContainer.setAttribute ('alt', 'dog-picture')
    imgContainer.setAttribute ('class', 'dog-image')
})

// Personal note: Remake this in Java with random duck API and put it in your Repo