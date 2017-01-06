import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




export default class SearchBar extends React.Component {

constructor(props){
 super(props);
  this.state = {
    searchValue:'',
    value: 1
  };

}

handleSearchValue (e) {

  this.setState({
    searchValue: e.currentTarget.value
  });

}

handleSearch () {

  const searchVal = this.state.searchValue;
  this.props.handleSearch(searchVal);

}

handleChange(event, index, value){
console.log(value)

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
        backgroundColor: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 2,
        textColor:'white'
        
      },
    button: {
      margin: 12
      },
    customWidth: {
      width: 180
  }

  };

 return (
    <div style={style.searchBar}>
    <TextField
      hintText="Search Movies"
      style={{width: '78%', marginRight: '2%' }}
      onChange={e => this.handleSearchValue(e)}
    />
       <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={style.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Search by Title" />
          <MenuItem value={2} primaryText="Search by Genre" />
          <MenuItem value={3} primaryText="Search by Year" />
          <MenuItem value={4} primaryText="Search by Ratings" />
          <MenuItem value={5} primaryText="Actors" />
        </DropDownMenu>
    </div>
  );}
}