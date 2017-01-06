import React from 'react';
import FlatButton from 'material-ui/FlatButton';


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
  display: 'inline-block',
  border: 'solid'
};
var that = this;
var list = this.props.data.map(function(pic, i) {
 
  return (
     <div key={i} style={style}>
      <h2>{pic.Title}</h2>
      <h3>Genre: {pic.Genre}</h3>
      <h3>Year: {pic.Year}</h3>
      <h3>Rating: {pic.Rating}</h3>
      <h3>Actors:</h3>
      <h3>{pic.Actors.toString()}</h3>
      <FlatButton
      label="Update"
      primary={true}
      onTouchTap={that.props.update}
      />
      <FlatButton
      label="Delete"
      secondary={true}
      onTouchTap= {e => {
            e.preventDefault();
            that.props.delete(pic.id);
                 
          }}
      />

    </div>
  );

});

return (
  <div>
     {list}
  </div>
  );

 }
}