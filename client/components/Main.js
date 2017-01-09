//*****************
//
//MAIN component, all other components are rendered here. Manages app state and local storage.
//Also manages global color theme
//
//*****************

import React from 'react';
import AddMovie from './AddMovie';
import Movies from './Movies';
import SearchBar from './SearchBar';
import uuid from 'node-uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Main extends React.Component {

//State is defined with 2 properties, movies for all movies in app and searchMovies to manage 
//filters(search by category)
//
  constructor(props){
  super(props);
      this.state = {
        movies: [],
        searchMovies: ''
    };

  }

//ComponentDidUpdate is ran first setting local storage
//ComponentWillMount set state with saved data in localStorage
//Using JSON.parse to make items readable.
componentWillMount () {

  const movies = localStorage.movies;

  if (movies) {

    this.setState({

      movies: JSON.parse(movies)

    });

  }

}

//Setting local storage, using JSON.stringify to represent object data
//setting movies state equal to localStorage.
componentDidUpdate (prevProps, prevState) {

   const movies = JSON.stringify(this.state.movies);
    localStorage.setItem('movies', movies);

}


//**********
//Function to handle delete movie by id.
//**********

handleDelete (id) {

   const newMovieArray = this.state.movies.filter(function (pic) {

                  return pic.id !== id;

                    });
   this.setState({
       movies: newMovieArray,
       searchMovies: ''
   });

}


//**********
//Function to add movie to state, arguments coming from AddMovie component
//setting searchMovies state as well to render movie list.
//**********

addMovie (newMovie) {

this.state.movies.push(newMovie);
this.setState({
  movies:this.state.movies,
  searchMovies:''
});

}

//*******
//Function to handle search by key values, params is an array.
//*******

handleSearch (params) {

//Setting values coming from SearchBar component to variables
const searchVal = params[0].toLowerCase();
const searchBy= params[1];

//Function giving searchbar functionality
const movieSearch =this.state.movies.filter(function (pic) {

    if (pic[searchBy].toLowerCase().includes(searchVal)) {

          return pic;

    }

  });

this.setState({
  searchMovies: movieSearch
});

}

//Show all movies button functionality in SearchBar component.

showAllMovies () {

//Changing state to render Movies component
 this.setState({
  searchMovies: ''
 });

}

//Handles update movie by filtering by object id and
//updating object with new properties.

updateMovie (updatedMovie) {

this.state.movies.filter(function(pic){

  if(updatedMovie.id === pic.id){

    Object.assign(pic, updatedMovie);

  }

});

const updated = this.state.movies;

this.setState({

  movies: updated

});


}

render() {

//Application theme for material-UI
  const defaultTheme = {

  palette: {

    primary1Color: "#e67e22",
    primary2Color: "#e67e22",
    primary3Color: "#A9D2EB",
    accent1Color: "#ED3B3B",
    accent2Color: "#ED2B2B",
    accent3Color: "#F58C8C"
  }
};

//Function required by material-UI to apply theme to app
const muiTheme = getMuiTheme(defaultTheme);

//'e' used for any type of event, arrow function used for binding
 return (
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <SearchBar
        searchParams={e => this.handleSearch(e)}
        addMovie= {e => this.addMovie(e)}
        showAllMovies= {e => this.showAllMovies(e)}
        />
      </MuiThemeProvider>
       <MuiThemeProvider muiTheme={muiTheme}>
      { this.state.searchMovies === '' ?
        <Movies
          data= {this.state.movies}
          delete= {e => this.handleDelete(e)}
          updateMovie={e => this.updateMovie(e)}
          search={this.state.searchMovies}
        />
    :   <Movies
          data= {this.state.searchMovies}
          delete= {e => this.handleDelete(e)}
        />
    }
    </MuiThemeProvider>
      </div>
    );

  }
}