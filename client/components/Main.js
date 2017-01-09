import React from 'react';
import AddMovie from './AddMovie';
import Movies from './Movies';
import SearchBar from './SearchBar';
import uuid from 'node-uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blue500,
  blue700,
  blueGrey100,
  blueGrey500,
  darkBlack,
  grey300,
  lightBlack,
  purpleA200,
  white
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';


export default class Main extends React.Component {
  constructor(props){
  super(props);
      this.state = {
        movies: [],
        searchMovies: ''
    };

  }

//ComponentDidUpdate is ran first setting local storage
//ComponentWillMount set state with saved data in localStorage
//Using JSON.parse to make item readable
componentWillMount () {

  const movies = localStorage.movies;

  if (movies) {

    this.setState({

      movies: JSON.parse(movies)

    });

  }

}

//Setting local storage, using JSON.stringify to represent object data
//setting item movies equal to state
componentDidUpdate (prevProps, prevState) {

   const movies = JSON.stringify(this.state.movies);
    localStorage.setItem('movies', movies);

}


//**********
//Function to handle delete movie by id
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
//setting searchMovies state as well to render movie list
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

updateMovie (updatedMovie) {

this.state.movies.filter(function(pic){

  if(updatedMovie.id === pic.id){

    Object.assign(pic, updatedMovie);

  }

});

const updated = this.state.movies;

this.setState({

  movies: updated

})



}

render() {
 
//Application theme for material-UI
  const defaultTheme = {

  palette: {
   
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: lightBlack,
    accent1Color: purpleA200,
    accent2Color: blueGrey100,
    accent3Color: blueGrey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade( darkBlack, 0.3 ),
    pickerHeaderColor: blue500,
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