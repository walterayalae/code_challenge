import React from 'react';
import TextField from 'material-ui/TextField';




export default class SearchBar extends React.Component {

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
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 2,
      }
  };

 return (
    <div style={style.searchBar}>
    <TextField
      hintText="Search Movies"
      style={{ width: '78%', marginRight: '2%' }}
    />
    </div>
  );}
}