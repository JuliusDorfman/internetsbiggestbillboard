import { render } from '@testing-library/react';
import React from 'react';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="homepage-component">
                Hello world
            </div>
        )
    };

};
