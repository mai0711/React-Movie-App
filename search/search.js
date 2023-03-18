//search function

const form = document.querySelector('#searchForm');
const apiKey = "6a66b47ce6e7d7a0f7ade5211784f182";
const language = "en-US";
const searchTermInput= form.elements.query;

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    //fetch
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${searchTermInput.value}&page=1&include_adult=false`);
    const data = await res.json();
    
    const resultData = data.results;

    //give the data to makeImages
    makeImages(resultData);

    //to delete the word I typed in in the input box
    // searchTermInput.value = '';
});

//for-loop is to display each image which is related to the keyword I input
const makeImages = (resultData) => {
    for(let result of resultData){
        console.log(result);
        
        //create element for image
        const img = document.createElement('IMG');
        img.src = "https://image.tmdb.org/t/p/w500"+result.poster_path;
        img.style.height = "40%";
        img.style.width = "20%";
        img.style.margin = "20px 20px";
        img.style.maxHeight = "400px";
        img.style.maxWidth = "200px";

        
        document.body.append(img);

        //to remove previous images I searched
        const searchForm = document.querySelector(".searchForm");
        searchForm.addEventListener('change', updateValue);
        function updateValue(e){
        img.remove("IMG");
}
    }
}




//axios
// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function(e) {
//         e.preventDefault();
//         const searchTermInput = form.elements.query;
//         const config = {
//             params:{
//                 q: searchTermInput.value,
//                 // apiKey: "6a66b47ce6e7d7a0f7ade5211784f182",
//             }
//         }

//         const res = await axios.get('https://api.tvmaze.com/search/shows', config);
//         makeImages(res.data);
//         searchTermInput.value = '';
// });

// const makeImages = (results) => {
//     for(let result of results){
//         if(result.show.image){
//             console.log(result);
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img);
//         }
//     }
// }




// //open and close search function
// const searchButtonOpen = document.querySelector('.search');
// const searchButtonClose = document.getElementById('searchButtonClose');
// const searchButton = document.getElementById("searchButton");

// searchButtonOpen.addEventListener("click", () => {
//     searchButton.style.display = "block";
// })

// searchButtonClose.addEventListener("click", () => {
//     searchButton.style.display = "none";
// })

// document.addEventListener("click", (e) => {
//     if(e.target === searchButton){
//         searchButton.style.display = "none";
//     }
// });


