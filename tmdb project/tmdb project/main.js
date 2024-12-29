const form = document.querySelector('form');
const container = document.querySelector('.image-container');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let query = form.querySelector('input').value;
  console.log(query);

 tvMazeApi(query);

})

async function tvMazeApi(query){
  const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
  const movies = await req.jason();
  
  makeImages(movies);
} 

function makeImages(movies){
  for(let movies of movies){
    let image = movies.show.image.medium;

    const img = document.createElement('img');
    img.scr=src;

    container.appendChild(img);
  }
}

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDlkMWNmNzVmYjI2ZjljNzQ4Y2JlZjlhOTdiZWVhMyIsIm5iZiI6MTczNDY1NDY5My4zNTYsInN1YiI6IjY3NjRiYWU1MWIwNmM1ZjI4Yjc0ODYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SgSWhGUA5UcgHWmTj0f5E5wZzgofoNsjmN6sD4MNDoM'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));