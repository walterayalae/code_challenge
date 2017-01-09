import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import UpdateMovie from './UpdateMovie';


export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

render () {

const style = {
  height: 360,
  width: 320,
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',
  border: 'solid'
};
const that = this;
const list = this.props.data.map(function(pic, i) {
 
  return (
     <div key={i} style={style}>
      <h2>{pic.Title}</h2>
      <h3>Genre: {pic.Genre}</h3>
      <h3>Year: {pic.Year}</h3>
      <h3>Rating: {pic.Rating}</h3>
      <h3>Actors:</h3>
      <h3>{pic.Actors.toString()}</h3>
      <UpdateMovie 
        updateMovie={that.props.updateMovie}
        id={that.props.id}
      />
      <FlatButton
      label="Delete"
      primary={true}
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