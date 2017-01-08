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
        movies: [{id: uuid.v4(), 'Title': 'Back to the Future', 'Genre': 'Comedy', 'Year': '1985', 'Rating': '5', 'Actors':'Marty Mcfly,Doc'}, {'id': uuid.v4(), 'Title': 'Back to the Future', 'Genre': 'Comedy', 'Year': '1985', 'Rating': '5', 'Actors':'Marty Mcfly, Doc'},{'id': uuid.v4(),'Title': 'Mighty Ducks', 'Genre': 'Comedy', 'Year': '1998', 'Rating': '5', 'Actors':'Emilio Estevez,Sylvester Stallone'}, {'id': uuid.v4(), 'Title': 'Fight Club', 'Genre': 'Drama', 'Year': '2000', 'Rating': '5', 'Actors':'Brad Pitt,Sylvester Stallone'}],
        searchMovies: ''
  
    };
  }

//**********
//Function to handle delete movie by id
//**********

handleDelete(id){

   const newMovieArray = this.state.movies.filter(function(pic){
                  return  pic.id !== id;
                    });
   this.setState({
       movies: newMovieArray
   });

}


//**********
//Function to add movie to state, arguments coming from AddMovie component
//**********

addMovie(newMovie){
this.state.movies.push(newMovie);
this.setState({
  movies:this.state.movies
});

}

//*******
//Function to handle search by key values, params is an array.
//*******

handleSearch(params){

//Setting values coming from SearchBar component to variables
const searchVal = params[0].toLowerCase();
const searchBy= params[1];

//Function giving searchbar functionality
const movieSearch =this.state.movies.filter(function(pic){

    if(pic[searchBy].toLowerCase().includes(searchVal)){
          return pic;

    }

  });

this.setState({
  searchMovies: movieSearch
});

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


 return (
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <SearchBar
        searchParams={e => this.handleSearch(e)}
        data= {this.state.movies}
        delete= {e => this.handleDelete(e)}
        date= {this.state.searchMovies}
        />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={muiTheme}>
        <AddMovie
         addMovie= {e => this.addMovie(e)}
         />
      </MuiThemeProvider>
      </div>
    );

  }
}