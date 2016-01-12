var React = require('react');

var UserProfile = React.createClass({
    propTypes:{
        username:React.PropTypes.string.isRequired,
        bio:React.PropTypes.object.isRequired
    },
    render:function () {
        return(
            <div>
                {this.props.bio.avatar_url && <li className="list-group-item"><img className="img-rounded img-responsive" src={this.props.bio.avatar_url} /></li> }
                {this.props.bio.name && <li className="list-group-item">Name:{this.props.bio.name}</li> }
                {this.props.bio.login && <li className="list-group-item">Login:{this.props.bio.login}</li> }
                {this.props.bio.email && <li className="list-group-item">Email:{this.props.bio.email}</li> }
                {this.props.bio.location && <li className="list-group-item">Location:{this.props.bio.location}</li> }
                {this.props.bio.company && <li className="list-group-item">Company:{this.props.bio.company}</li> }
                {this.props.bio.followers ? <li className="list-group-item">Follower:{this.props.bio.followers}</li> : null}
                {this.props.bio.following ? <li className="list-group-item">Following:{this.props.bio.following}</li> : null}
                {this.props.bio.following ? <li className="list-group-item">Public Ropos:{this.props.bio.public_repos} </li> : null}
                {this.props.bio.blog && <li className="list-group-item">Name:{this.props.bio.blog}</li> }
            </div>
        )
    }
});

module.exports = UserProfile;