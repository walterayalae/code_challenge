import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




export default class SearchBar extends React.Component {

constructor(props){
 super(props);
  this.state = {
    searchValue:''
  };

}

handleSearchValue (e) {

  this.setState({
    searchValue: e.currentTarget.value
  });

}


render() {
    
 const style = {
      searchBar: {
        width: '40%',
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
      }
  }

 return (
    <div style={style.searchBar}>
    <TextField
      hintText="Search Movies"
      style={{width: '78%', marginRight: '2%' }}
      onChange={e => this.handleSearchValue(e)}
    />
    <RaisedButton 
      label="Search" 
      secondary={true} 
      style={style.button} 
      onTouchTap={e => this.handleSearch(e)}
      />
    </div>
  );}
}