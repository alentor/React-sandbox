import React, { Component } from 'react';
import { FooUseState } from './fooUseState';
import { FooUseEffect } from './fooUseEffect';

export class App extends Component {

    render() {
        return (
            <div>
                Hello world
                <h1>UseState</h1>
                <FooUseState />
                <h1>UseEffect</h1>
                <FooUseEffect />
            </div>
        )
    }
}
