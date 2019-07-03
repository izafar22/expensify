import React, { Component } from "react";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    note: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input type="number" placeholder="amount" />
          <textarea
            placeholder="add note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>ADD EXPENSE</button>
        </form>
      </div>
    );
  }
}
