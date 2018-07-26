import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props){
  super(props)
 // console.log("this is my initializer")


const movies = [
{id: 0, poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg", title: "Avengers Infinity War", overview: "ReactJS is a very popular framework for creating modern web applications for the browser"},

{id: 1, poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ouYgAatYH4JzIThj6FI3UYf31RI.jpg", title: "Avengers 1 ", overview: "ReactJS is a very popular framework for creating modern web applications for the browser"}

]



var movieRows = []

movies.forEach((movie) => {
  console.log(movie.title)
  
const movieRow = <table key={movie.id}>
      <tbody> 
        <tr>
          <td>
            <img alt="poster" width="100" src={movie.poster_src}/>
          </td>
          <td>
            {movie.title}
            <p>{movie.overview}</p>
          </td>
        </tr>
       </tbody>
  </table>

  movieRows.push(movieRow);
})

this.state = {rows: movieRows}
}

  render() {
    return (
      <div>
  
      <table className= "titleBar">
         <tbody>
            <tr>
             <td>
                <img  alt="app icon" width="50" src="green_app_icon.svg" />
              </td>
              <td width="8"/>
              <td>
               <h1>Movies DB Search</h1>
              </td>
            </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 24,
        display: 'block',
        width: "99%",
        padding: 8,
        margin: 5
      }} placeholder="Enter the movie" />

      {this.state.rows}

      </div>
    );
  }
}

export default App;
