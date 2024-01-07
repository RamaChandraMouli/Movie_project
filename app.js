const api='https://www.omdbapi.com/?apikey=e1f5a806&t='
let notfound=document.getElementById('notfound')
let found=document.getElementById('found')





function searchMovie(){
    let title=document.getElementById('title')
    let query=api+title.value
        console.log(query)
    fetch(query).then((data)=>{
        return data.json()
    })
    .then((data)=>{
        console.log(data)
    
    if(data.Error){
        notfound.classList.remove('d_none');
        found.classList.add('d_none');
    }
    else{
        found.classList.remove('d_none');
        notfound.classList.add('d_none');
        document.getElementById('moviename').innerText=data.Title;
        document.getElementById('poster').src = data.Poster;
        document.getElementById('genre').innerText = data.Genre;
        document.getElementById('date').innerText = data.Released;
        document.getElementById('actors').innerText = data.Actors;
        document.getElementById('collections').innerText = data.BoxOffice;
        document.getElementById('awards').innerText = data.Awards;
        document.getElementById('director').innerText = data.Director;
        document.getElementById('writer').innerText = data.Writer;
        document.getElementById('ratings').innerText = data.imdbRating;
        document.getElementById('desc').innerText = data.Plot;

    }
    })
}