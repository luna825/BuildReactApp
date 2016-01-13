import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';


class Notes extends React.Component {
    render(){
        return(
            <div>
                <h3>Notes For {this.props.username}</h3>
                <AddNote onAddNote={this.props.addNote} />
                <NotesList notes={this.props.notes} />
            </div>)
    }
}

Notes.propTypes = {
    username:React.PropTypes.string.isRequired,
    addNote:React.PropTypes.func.isRequired,
    notes:React.PropTypes.array.isRequired
};

export default Notes;