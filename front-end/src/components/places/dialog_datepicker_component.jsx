import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogDatePicker extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="BUTTON" onTouchTap={this.handleOpen} />
        <Dialog
          title="Pick a Date and Time for this Activity"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <DatePicker hintText="Pick a date" />
          <TimePicker hintText="Pick a time" />
        </Dialog>
      </div>
    );
  }
}