const apiKey = "6a66b47ce6e7d7a0f7ade5211784f182";

//filter(tv shows)
const tv = document.querySelector('#tvButton');

tv.addEventListener('click', async function(e) {
    e.preventDefault();

    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
    const data = await res.json();
    const resultData = data.results;

    const Result = resultData.filter(resultData => resultData.media_type === "tv");
    console.log(Result[0].poster_path);
    makeTvImages(Result);
},{once: true});

    const makeTvImages = (results) => {
        for(let result of results){
            const img = document.createElement('img');
            img.src = "https://image.tmdb.org/t/p/w500"+result.poster_path
            document.body.append(img);
            img.style.height = "40%";
            img.style.width = "20%";
            img.style.margin = "20px 20px";
            img.style.maxHeight = "400px";
            img.style.maxWidth = "200px";
        }
    }


//filter(movies)
const movie = document.querySelector('#movieButton');

movie.addEventListener('click', async function(e) {
    e.preventDefault();

    
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
    const data = await res.json();
    const resultData = data.results;

    const Result = resultData.filter(resultData => resultData.media_type === "movie");
    console.log(Result[0].poster_path);
    makeMovieImages(Result);
});

    const makeMovieImages = (results) => {
        for(let result of results){
            const img = document.createElement('IMG');
            img.src = "https://image.tmdb.org/t/p/w500"+result.poster_path
            document.body.append(img);
            img.style.height = "40%";
            img.style.width = "20%";
            img.style.margin = "20px 20px";
            img.style.maxHeight = "400px";
            img.style.maxWidth = "200px";
        }
    }





