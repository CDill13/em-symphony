import React, { Component } from 'react';
import axios from 'axios';

class EventForm extends Component {
    constructor() {
        super();
        this.state = {
            eventTitle: '',
            eventCreationDate: '',
            eventDate: '',
            eventPostBody: '',
            eventImage: ''
        }
        this.postEvent = this.postEvent.bind(this);
    }

    editPost(eventItem, event){
        this.setState({
            [eventItem] : event.target.value
        })
    }

    postEvent(event){
        event.preventDefault()
        let eventPost = {
            title: this.state.eventTitle,
            dateCreated: this.state.eventCreationDate,
            eventDate: this.state.eventDate,
            body: this.state.eventPostBody,
            imageURL: this.state.eventImage
        }
        console.log(eventPost);
        axios.post('/eventpost', eventPost)
    }
    
    render(){
        return (
            <form>
                <div>
                    <p>event title</p>
                    <input 
                        type='text'
                        value={this.state.eventTitle} 
                        onChange={(e) => this.editPost('eventTitle', e)}
                    />
                </div>
                <div>
                    <p>date created</p>
                    <input 
                        type="date"
                        value={this.state.eventCreationDate}
                        onChange={(e) => this.editPost('eventCreationDate', e)}
                    />
                </div>
                <div>
                    <p>event date</p>
                    <input 
                        type="date"
                        value={this.state.eventDate}
                        onChange={(e) => this.editPost('eventDate', e)}
                    />
                </div>
                <div>
                    <p>post body</p>
                    <textarea 
                        rows='7'
                        cols='70'
                        value={this.state.eventPostBody}
                        onChange={(e) => this.editPost('eventPostBody', e)}
                    />
                </div>
                <div>
                    <p>paste image URL</p>
                <input 
                    type='text'
                    value={this.state.eventImage}
                    onChange={(e) => this.editPost('eventImage', e)}
                />
                </div>
                <button
                    onClick={this.postEvent}
                >post event</button>
            </form>
        )
    }
};

export default EventForm;