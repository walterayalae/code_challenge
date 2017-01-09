//*****************
//
//Movie list, component maps items in state and renders movie list, update and delete buttons.
//
//*****************
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
  width: 310,
  margin: 90,
  textAlign: 'center',
  display: 'inline-block',
  border: 'solid',
  borderRadius: '5px',
  borderStyle: 'groove',
  borderWidth: '7px'
};

const that = this;
const list = this.props.data.map(function(pic, i) {

  return (
     <div key={i} style={style}>
      <h2>{pic.Title}</h2>
      <h3>Genre: {pic.Genre}</h3>
      <h3>Year: {pic.Year}</h3>
      <h3>Rating: {pic.Rating}</h3>
      <h3>Actor(s):</h3>
      <h3>{pic.Actors.toString()}</h3>
      <UpdateMovie 
        updateMovie={that.props.updateMovie}
        id={pic.id}
        Title={pic.Title}
        Genre={pic.Genre}
        Year={pic.Year}
        Actors={pic.Actors}
        Rating={pic.Rating}
        search={that.props.search}
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