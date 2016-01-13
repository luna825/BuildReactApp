
import React,{Component} from 'react';

class AddNote extends Component {
  render(){
    return (
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Add NewNote.." ref={ref=>this.note=ref}/>
            <span className="input-group-btn">
              <button className='btn btn-default' 
              onClick={() => {this.handleSubmit()}}>
                Submit
              </button>
            </span>
        </div>
    )
  }
  handleSubmit(){
    let newNote = this.note;
    this.props.onAddNote(newNote.value);
    newNote.value = ''
  }
}

AddNote.propTypes={
  onAddNote:React.PropTypes.func.isRequired
};

export default AddNote;

