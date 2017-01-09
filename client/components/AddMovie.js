import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import uuid from 'node-uuid';

export default class AddMovie extends React.Component {

constructor (props) {

 super(props);
  this.state = {
    open: false,
    newTitle: '',
    newGenre: '',
    newYear: '',
    newActors: '',
    newRating: ''

  };

}

  handleOpen () {

    this.setState({open: true});

  }

  handleClose () {

    this.setState({open: false});

  }

  handleSubmit () {

    this.setState({
      open: false
    });

    const newMovie = Object.assign({}, {
    id: uuid.v4(),
    Title: this.state.newTitle,
    Genre: this.state.newGenre,
    Year: this.state.newYear,
    Actors: this.state.newActors,
    Rating: this.state.newRating
    });

    this.props.addMovie(newMovie);

  }

  handleTitleAdd (e) {

    this.setState({
      newTitle: e.currentTarget.value
    });

  }

  handleGenreAdd (e) {

    this.setState({
      newGenre: e.currentTarget.value
    });

  }

  handleYearAdd (e) {

    this.setState({
      newYear: e.currentTarget.value
    });

  }

  handleActorsAdd (e) {

    this.setState({
      newActors: e.currentTarget.value
    });

  }

  handleRatingAdd (e) {

    this.setState({
      newRating: e.currentTarget.value
    });

  }

  render () {

  const style = {
      showAllButton: {
        marginLeft: 50,
      }
    };

   const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={e => this.handleClose(e)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={e => this.handleSubmit(e)}
      />
    ];

    return (
      <div>
        <RaisedButton
        label="Add Movie"
        onTouchTap={e => this.handleOpen(e)}
        style={style.showAllButton}
        />
        <Dialog
          title="Add Movie to my collection"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
    <TextField
      hintText="Title"
      floatingLabelText="Movie Title"
      floatingLabelFixed={true}
      onChange={e => this.handleTitleAdd(e)}
    /><br />
    <TextField
      hintText="Genre"
      floatingLabelText="Genre"
      floatingLabelFixed={true}
      onChange={e => this.handleGenreAdd(e)}
    /><br />
    <TextField
      hintText="Actors"
      floatingLabelText="Actors"
      floatingLabelFixed={true}
      onChange={e => this.handleActorsAdd(e)}
    /><br />
    <TextField
      hintText="Year"
      floatingLabelText="Year"
      floatingLabelFixed={true}
      onChange={e => this.handleYearAdd(e)}
    /><br />
    <TextField
      hintText="Rating"
      floatingLabelText="Rating"
      floatingLabelFixed={true}
      onChange={e => this.handleRatingAdd(e)}
    /><br />
        </Dialog>
      </div>
    );

  }

}