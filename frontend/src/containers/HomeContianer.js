import React, { Component } from 'react';
import { EventsService } from "../data/Events";
import { UsersService } from "../data/Users";
import { AttendeesService } from "../data/Attendees";
import Event from "../components/Event";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { events: [] };
    }

    _renderEvent(event) {
        return <Event key={event.id} event={event}/>
    }

    async componentDidMount() {
        const eventsService = new EventsService();
        const usersService = new UsersService();
        const attendeesService = new AttendeesService();

        await eventsService.loadEvents();
        await usersService.loadUsers();
        await attendeesService.loadAttendees();

        console.log(eventsService.events);
        console.log(usersService.users);
        console.log(attendeesService.attendees);

        this.setState({ events: eventsService.getEventsFormatted().slice(0, 10) });
    }

    render() {
        const events = this.state.events.map(this._renderEvent.bind(this));

        return (
            <div className="HomeContainer">
                {events}
            </div>
        );
    }
}

export default HomeContainer;
