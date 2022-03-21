import { useEffect, useState} from "react";

const App = () => {
    const [films, setFilms] = useState([]);

useEffect(() => {
    //Async style

const getFilms =async () => {
const res = await fetch ('https://ghibliapi.herokuapp.com/films/');
const allFilms = await res.json();
setFilms(allFilms);
}
getFilms()
//Async style end

    fetch('https://ghibliapi.herokuapp.com/films/')
.then(res => res.json()) 
    .then(allFilms => setFilms(allFilms))
}, [])

    return (
        <main className="container">
        <section className="row justify-content-center mt-5">
        <h1 className="col-12 text-center">
        hello there!
        </h1>
        {films.map(film => (
            <div className= "col-md-6" key= {`film-card-${film.id}`}>
                 <div className="card shadow my-2"> 
                 <div className="card-body">
                     <h4 className="card-title">{films.title}</h4>
<p className="card-subtitle text-muted">{film.title}</p>
<p className="card-text">{film.title} / {film.location.name} </p>
                 </div>
            </div>
            </div>
        ))}

        </section>
        </main>

    );
};

export default App;