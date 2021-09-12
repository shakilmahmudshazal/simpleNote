import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      editingNote:"",
      editingIndex:"",
      editingStatus:false,
      notes: []
    };
  }

  onNoteChange = (e) => {
    console.log(e.target.value);
    this.setState({ note: e.target.value });
  };

  saveNotes = () => {
    this.setState({ notes: [...this.state.notes, this.state.note] });
    this.setState({ note: "" });
  }

  onDeleteNote = (deleteItem) => {
    let ar = this.state.notes;
    ar = ar.filter(function (item) { return item !== deleteItem })
    this.setState({ notes: [...ar] });
  }

  onEdit = (editItem, index) => {
    this.setState({ note: editItem });
    this.setState({ editingNote: editItem });
    this.setState({ editingIndex: index });
    this.setState({ editingStatus: true });
  }

  onUpdate = ()=>{ 
    let ar = this.state.notes;
    ar[this.state.editingIndex] = this.state.note;
    this.setState({ notes: [...ar] });
  }



  render() {
    return (
      <div>

        
        <div>
          <input value={this.state.note} onChange={this.onNoteChange} />
          {
            this.state.editingStatus ?   <button onClick={this.onUpdate}>Update</button> :  <button onClick={this.saveNotes}>Save</button>
          }
        
        </div>

        <table>
          <tr>
            <th>notes</th>
            <th>Action</th>
            <th>Action 2</th>
          </tr>


          {
            this.state.notes.map((item, index) => <tr>
              <td>{item}</td>
              <td > <button onClick={() => { this.onDeleteNote(item) }}>Delete</button></td>
              <td > <button onClick={() => { this.onEdit(item,index) }}>Edit</button></td>
            </tr>)
          }

        </table>

        {/* <h1>{this.state.note}</h1> */}
      </div>
    );
  }
}

export default App;
