var React = require('react');

var AddNote = React.createClass({
    handleSubmit:function(){
        var newNote = this.note;
        this.props.onAddNote(newNote.value);
        newNote.value = ''
    },
    render:function () {
        return (
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Add NewNote.." ref={ref=>this.note=ref}/>
                <span className="input-group-btn">
                  <button className='btn btn-default' 
                  onClick={this.handleSubmit}>
                    Submit
                  </button>
                </span>
            </div>
        )
    }
});

module.exports = AddNote;