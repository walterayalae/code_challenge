import React from 'react';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

render () {

const style = {
  height: 320,
  width: 320,
  margin: 100,
  textAlign: 'center',
  display: 'inline-block'
};

var list = this.props.data.map(function(pic, i) { 
  
  return (
    <Paper key={i} style={style} zDepth={1} rounded={false}>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
    <MenuItem primaryText="Delete" />
    <MenuItem primaryText="Update" />
    </IconMenu>
      <h2>{pic.Title}</h2>
      <h3>Genre: {pic.Genre}</h3>
      <h3>Year: {pic.Year}</h3>
      <h3>Rating: {pic.Rating}</h3>
      <h3>Actors:</h3>
      <h3>{pic.Actors.toString()}</h3>
    </Paper>
  );

});

return (
  <div>
     {list}
  </div>
  );

 }
}