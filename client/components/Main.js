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
        movies: [{id: uuid.v4(), Title: 'Back to the Future', Genre: 'Comedy', Year: '1985', Rating: 5, Actors:['Marty Mcfly', 'Doc']}, {id: uuid.v4(), Title: 'Back to the Future', Genre: 'Comedy', Year: '1985', Rating: 5, Actors:['Marty Mcfly', 'Doc']},{id: uuid.v4(),Title: 'Mighty Ducks', Genre: 'Comedy', Year: '1998', Rating: 5, Actors:['Emilio Estevez', 'Sylvester Stallone']}, {id: uuid.v4(), Title: 'Fight Club', Genre: 'Drama', Year: '2000', Rating: 5, Actors:['Brad Pitt', 'Sylvester Stallone']}],
  
    };
  }

handleDelete(id){

   const newMovieArray = this.state.movies.filter(function(pic){
                  return  pic.id !== id;
                    });
   this.setState({
       movies: newMovieArray
   });

}

addMovie(newMovie){
this.state.movies.push(newMovie);
this.setState({
  movies:this.state.movies
});

}

//NOT working functions
handleSearch(val){
console.log(this.state.searchParam)

}

searchBy (e) {
  this.setState({
    searchParam: e
  });
}
//NOT Working
render() {
 
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

const muiTheme = getMuiTheme(defaultTheme);


 return (
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <SearchBar
        searchVal={e => this.handleSearch(e)}
        searchBy={e => this.searchBy(e)}
        />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={muiTheme}>
        <AddMovie
         addMovie= {e => this.addMovie(e)}
         />
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Movies
         data= {this.state.movies}
         delete= {e => this.handleDelete(e)}
        />
      </MuiThemeProvider>
      </div>
    );

  }
}