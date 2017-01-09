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
      Title: this.props.Title,
      Genre: this.props.Genre,
      Year: this.props.Year,
      Actors: this.props.Actors,
      Rating: this.props.Rating

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

    const updatedMovie = Object.assign({}, {
    id: this.props.id,
    Title: this.state.Title,
    Genre: this.state.Genre,
    Year: this.state.Year,
    Actors: this.state.Actors,
    Rating: this.state.Rating
    });

    this.props.updateMovie(updatedMovie);

  }

  handleTitleAdd (e) {

    this.setState({
      Title: e.currentTarget.value
    });

  }

  handleGenreAdd (e) {

    this.setState({
      Genre: e.currentTarget.value
    });

  }

  handleYearAdd (e) {

    this.setState({
      Year: e.currentTarget.value
    });

  }

  handleActorsAdd (e) {

    this.setState({
      Actors: e.currentTarget.value
    });

  }

  handleRatingAdd (e) {

    this.setState({
      Rating: e.currentTarget.value
    });

  }

  render () {

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
        <FlatButton
          label="Update"
          primary={true}
          onTouchTap={e => this.handleOpen(e)}
      />
        <Dialog
          title="Update Movie"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
    <TextField
      hintText="Title"
      floatingLabelText="Movie Title"
      floatingLabelFixed={true}
      value={this.state.Title}
      onChange={e => this.handleTitleAdd(e)}
    /><br />
    <TextField
      hintText="Genre"
      floatingLabelText="Genre"
      floatingLabelFixed={true}
      value={this.state.Genre}
      onChange={e => this.handleGenreAdd(e)}
    /><br />
    <TextField
      hintText="Actors"
      floatingLabelText="Actors"
      floatingLabelFixed={true}
      value={this.state.Actors}
      onChange={e => this.handleActorsAdd(e)}
    /><br />
    <TextField
      hintText="Year"
      floatingLabelText="Year"
      floatingLabelFixed={true}
      value={this.state.Year}
      onChange={e => this.handleYearAdd(e)}
    /><br />
    <TextField
      hintText="Rating"
      floatingLabelText="Rating"
      floatingLabelFixed={true}
      value={this.state.Rating}
      onChange={e => this.handleRatingAdd(e)}
    /><br />
        </Dialog>
      </div>
    );

  }

}