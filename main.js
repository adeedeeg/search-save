const form = document.querySelector('form');
const container = document.querySelector('.image-container');
const apiUrl = 'https://api.themoviedb.org/';

//querySelector is a method that refers back to an element in the html document

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = form.querySelector('input').value;
  console.log(query);

  tvMazeApi(query);

})

//addEventListener is a method that sets up a function everytime the specific event is triggered.
//preventDefault is a method that cancels the event from happening. In this case a new webpage from opening.
//creating a query variable then referencing the HTML form. 'input' element is inside the form. value returns the value of a text field.
//this section is enabling the input to be submitted and calling the tvMazeApi function 

async function tvMazeApi(query) {
  // const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const req = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDlkMWNmNzVmYjI2ZjljNzQ4Y2JlZjlhOTdiZWVhMyIsIm5iZiI6MTczNDY1NDY5My4zNTYsInN1YiI6IjY3NjRiYWU1MWIwNmM1ZjI4Yjc0ODYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SgSWhGUA5UcgHWmTj0f5E5wZzgofoNsjmN6sD4MNDoM',
    }
  });
  let movies = await req.json();

  console.log(movies);
  //makeImages(movies);
  streamSites(movies);
}

//async = makes a function return a promise
//await = makes an async function wait for a promise
//promise = object that links producing code and consuming code
//this section is calling the API using the query input, converting to json and calling makeImages function


// async function watchProvidersApi(movies) {
//   for (let movie of movies.results) {
//     let movieId = movie.id;

//     let reqMovies = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers`, {
//       headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDlkMWNmNzVmYjI2ZjljNzQ4Y2JlZjlhOTdiZWVhMyIsIm5iZiI6MTczNDY1NDY5My4zNTYsInN1YiI6IjY3NjRiYWU1MWIwNmM1ZjI4Yjc0ODYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SgSWhGUA5UcgHWmTj0f5E5wZzgofoNsjmN6sD4MNDoM',
//       }
//     })

//     let providers = await reqMovies.json();

//     console.log(providers);
//   }
// }


function streamSites(movies) {
  watchProvidersApi(movies)
  async function watchProvidersApi(movies) {
    for (let movie of movies.results) {
      let movieId = movie.id;
  
      let reqMovies = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDlkMWNmNzVmYjI2ZjljNzQ4Y2JlZjlhOTdiZWVhMyIsIm5iZiI6MTczNDY1NDY5My4zNTYsInN1YiI6IjY3NjRiYWU1MWIwNmM1ZjI4Yjc0ODYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SgSWhGUA5UcgHWmTj0f5E5wZzgofoNsjmN6sD4MNDoM',
        }
      })
  
      let providers = await reqMovies.json();
  
      console.log(providers);
    }
  }
    for (let provider of providers.result.AD.flatrate) {
      let streamProvider = provider.provider_name;
    }
  console.log(streamProvider);
  return streamProvider;
}







// async function streamingInfo(movies) {
//   for (let multiId of movies.results) {
//     if (movies.results.media_type == 'tv') {
//       multiId = seriesId;
//     } else {
//       multiId = movieId;
//     }
//     const reqSeries = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}/watch/providers`);
//     const reqMovies = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers`);

//     const [seriesStreamSites, movieStreamSites] = await Promise.all(
//       [
//         reqSeries.json(),
//         reqMovies.json()
//       ])
//   }
// }
// let streamSite = [seriesStreamSites, movieStreamSites].results.AD.flatrate.provider_id;
// console.log(streamSite);





// function makeImages(movies){
//   for(let movie of movies.results){
//     let src = movie.name.poster_path;

//     const img = document.createElement('img');
//     img.src=src;

//     container.appendChild(img);
//   }
// }

