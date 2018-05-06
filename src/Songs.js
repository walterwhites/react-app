import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import SongsCard from "./SongsCard";

class Songs extends React.Component {
    render() {
        return(
            <div>
                <SongsCard/>
            </div>
        );
    }
}

export default Songs;