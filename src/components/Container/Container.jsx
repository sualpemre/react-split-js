import React from 'react';
import './Container.css';
import { Editor1 } from '../Editor/Editor1';
import { Editor2 } from '../Editor/Editor2';
import { Editor3 } from '../Editor/Editor3';
import { Editor4 } from '../Editor/Editor4';
import Split from "react-split";

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            topLeftWidth: 70,
            topLeftHeight: 60,
            topRightWidth: 30,
            topRightHeight: 60,
            bottomLeftWidth: 70,
            bottomLeftHeight: 40,
            bottomRightWidth: 30,
            bottomRightHeight: 40,
        };
        this.vertical = this.vertical.bind(this);
        this.topHorizontal = this.topHorizontal.bind(this);
        this.bottomHorizontal = this.bottomHorizontal.bind(this);
    }

    vertical($event) {
        this.setState({
            topLeftHeight: $event[0],
            topRightHeight: $event[0],
            bottomLeftHeight: $event[1],
            bottomRightHeight: $event[1],
        });
    }
    topHorizontal($event) {
        this.setState({
            topLeftWidth: $event[0],
            topRightWidth: $event[1],
        });
    }
    bottomHorizontal($event) {
        this.setState({
            bottomLeftWidth: $event[0],
            bottomRightWidth: $event[1],
        });
    }

    render() {
        return (
            <Split
                direction="vertical"
                sizes={[60, 40]}
                gutterSize={10}
                onDrag={this.vertical}
                style={{ height: '88.5vh' }}>
                <Split className="horizontalSplit" gutterSize={10} sizes={[70, 30]} direction="horizontal" onDrag={this.topHorizontal}>
                    <Editor1 />
                    <Editor2 state={this.state} />
                </Split>
                <Split className="horizontalSplit" gutterSize={10} sizes={[70, 30]} direction="horizontal" onDrag={this.bottomHorizontal}>
                    <Editor3 />
                    <Editor4 />
                </Split>
            </Split>
        )
    }
};