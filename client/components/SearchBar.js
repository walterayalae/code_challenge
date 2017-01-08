import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Movies from './Movies';
import AddMovie from './AddMovie';


export default class SearchBar extends React.Component {

constructor(props){
 super(props);
 this.state= {
    searchValue:'',
    value: 'Search by'
  };
this.handleChange= this.handleChange.bind(this);
this.handleSearch= this.handleSearch.bind(this);

}

handleSearchValue (e) {
  
  this.setState({
    searchValue: e.currentTarget.value
  });

}

//Search not working yet, find a way ro pass props to main component
handleSearch () {

  if(this.state.value === 'Search by'){
    alert('Please select Search by option');
  } else {

  const searchVal = this.state.searchValue;
  const searchBy = this.state.value;
  const arr = [searchVal, searchBy];

  this.props.searchParams(arr);

   }
}

handleChange(event, index, value){

this.setState({
  value
})

}

render () {

 const style = {
      searchBar: {
       width: '60%',
        flex: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
        borderRadius: 4,
        marginBottom: 10,
        backgroundColor: 'white',
        paddingLeft: 0,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 2,  
      },
    customWidth: {
      width: 190,  
  },
  button: {
     margin: 12,
  }

  };

 return (
    <div>
    <div style={style.searchBar}>
    <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={style.customWidth}
          autoWidth={false}
        >
          <MenuItem value={'Search by'} primaryText="Search by" />
          <MenuItem value={'Title'} primaryText="Search by Title" />
          <MenuItem value={'Genre'} primaryText="Search by Genre" />
          <MenuItem value={'Year'} primaryText="Search by Year" />
          <MenuItem value={'Rating'} primaryText="Search by Rating" />
          <MenuItem value={'Actors'} primaryText="Search by Actors" />
        </DropDownMenu>
    <TextField
      hintText="Search Movies"
      style={{width: '78%', marginRight: '2%' }}
      onChange={e => this.handleSearchValue(e)}
    />
     <RaisedButton 
     label="Search" 
     primary={true} 
     style={style.button} 
     onTouchTap={this.handleSearch}
     />
    </div>
    <AddMovie 
     addMovie={this.props.addMovie}
     
     />
     <RaisedButton 
      label="Show All Movies" 
      primary={true} 
      style={style} 
      onTouchTap={this.props.showAllMovies}
      />
    { this.props.filter === ''
     ? <Movies 
    data= {this.props.data}
    delete= {this.props.delete}
    />
    : <Movies 
       data= {this.props.filter}
       delete= {this.props.delete}
       />
    }
    </div>
  );}
}