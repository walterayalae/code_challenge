import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Main extends React.Component {

constructor(props){
 super(props);
  this.state = {
    open: false,
  };
}

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
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
        onTouchTap={e => this.handleClose(e)}
      />,
    ];

    return (
      <div>
        <RaisedButton 
        label="Add Movie" 
        onTouchTap={e => this.handleOpen(e)} 
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
    /><br />
    <TextField
      hintText="Genre"
      floatingLabelText="Genre"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Actors"
      floatingLabelText="Actors"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Year"
      floatingLabelText="Year"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Rating"
      floatingLabelText="Rating"
      floatingLabelFixed={true}
    /><br />
        </Dialog>
      </div>
    );
  }
}