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
  white,
  red200
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';


export default class Main extends React.Component {
  constructor(props){
  super(props);
      this.state = {
        movies: [{id: uuid.v4(), Title: 'Back to the Future', Genre: 'Comedy', Year: '1985', Rating: 5, Actors:['Marty Mcfly', 'Doc']}, {id: uuid.v4(), Title: 'Back to the Future', Genre: 'Comedy', Year: '1985', Rating: 5, Actors:['Marty Mcfly', 'Doc']},{id: uuid.v4(),Title: 'Mighty Ducks', Genre: 'Comedy', Year: '1998', Rating: 5, Actors:['Emilio Estevez', 'Sylvester Stallone']}, {id: uuid.v4(), Title: 'Fight Club', Genre: 'Drama', Year: '2000', Rating: 5, Actors:['Brad Pitt', 'Sylvester Stallone']}]
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


render() {
 
  const defaultTheme = {

  palette: {
   
    primary1Color: blue500,
    primary2Color: red200,
    primary3Color: white,
    accent1Color: blue700,
    accent2Color: blueGrey100,
    accent3Color: blueGrey500,
    textColor: white,
    alternateTextColor: lightBlack,
    canvasColor: lightBlack,
    borderColor: grey300,
    disabledColor: fade( white ),
    pickerHeaderColor: blue500,
  }
};

const muiTheme = getMuiTheme(defaultTheme);


 return (
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <SearchBar />
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