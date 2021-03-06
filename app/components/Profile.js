var React = require('react');
var Router = require('react-router');
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
import helpers from '../utils/helper';

var Profile = React.createClass({
    mixins:[ReactFireMixin],

    getInitialState: function() {
        return {
            notes: [],
            bio : {},
            repos:[] 
        };
    },
    componentDidMount: function() {
        this.ref = new Firebase("https://sizzling-inferno-7853.firebaseio.com/");
        this.init(this.props.params.username)

    },
    componentWillReceiveProps: function(nextProps) {
        this.unbind('notes');
        this.init(nextProps.params.username)
    },
    componentWillUnmount: function() {
        this.unbind('notes');
    },
    handleAddNote:function (newNote) {
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
    },
    init:function(username){
        var childRef = this.ref.child(username);
        this.bindAsArray(childRef,'notes');

        helpers.getGithubInfo(username)
            .then(function(data){
                this.setState({
                    bio:data.bio,
                    repos:data.repos
                })
            }.bind(this));
    },
    render:function  () {
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes addNote={this.handleAddNote} username={this.props.params.username} notes={this.state.notes} />
                </div>
            </div>
        )
    }
});

module.exports=Profile;