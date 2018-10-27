import React, { Component } from 'react';
import { EventsService } from "../data/Events";
import { UsersService } from "../data/Users";
import { AttendeesService } from "../data/Attendees";

class HomeContainer extends Component {
    async componentDidMount() {
        const eventsService = new EventsService();
        const usersService = new UsersService();
        const attendeesService = new AttendeesService();

        await eventsService.getEvents();
        await usersService.getUsers();
        await attendeesService.getAttendees();

        console.log(eventsService.events);
        console.log(usersService.users);
        console.log(attendeesService.attendees);
    }

    render() {
        return (
            <div className="HomeContainer">
                Home
            </div>
        );
    }
}

export default HomeContainer;
