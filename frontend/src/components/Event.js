import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class Event extends Component {
    render() {

        return (
            <Card className='ex-event'>
                <CardContent>
                    <h3>{this.props.event.name}</h3>
                </CardContent>
                <CardActions>
                    <div className={`ex-auth-buttons`}>
                        <Button variant="contained" color="primary">
                            View info
                        </Button>
                        <Button variant="contained" color="primary">
                            Attend
                        </Button>
                    </div>
                </CardActions>
            </Card>
        );
    }
}

export default Event;
