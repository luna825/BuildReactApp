var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
    mixins:[Router.History],
    handleSubmit:function(){
        var username = this.usernameRef.value;
        this.usernameRef.value='';
        this.history.pushState(null, '/profile/'+ username);
    },
    render: function() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={ref => this.usernameRef=ref} />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-primary btn-block">Search Github</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports=SearchGithub;