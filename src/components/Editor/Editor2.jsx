
import React from 'react';

export class Editor2 extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="content-box" style={{ width: '300px', height: '300px', backgroundColor: 'gray', border: '2px solid black', padding: '1rem' }}>
                    <p><b>Ayarlar</b></p>
                    <br />
                    <p><b>Top Left</b></p>
                    <p><b>Width : </b>%{this.props.state.topLeftWidth} <br /><b>Height : </b>%{this.props.state.topLeftHeight}</p>
                    <br />
                    <p><b>Top Right</b></p>
                    <p><b>Width : </b>%{this.props.state.topRightWidth} <br /><b>Height : </b>%{this.props.state.topRightHeight}</p>
                    <br />
                    <p><b>Bottom Left</b></p>
                    <p><b>Width : </b>%{this.props.state.bottomLeftWidth} <br /><b>Height : </b>%{this.props.state.bottomLeftHeight}</p>
                    <br />
                    <p><b>Bottom Right</b></p>
                    <p><b>Width : </b>%{this.props.state.bottomRightWidth} <br /><b>Height : </b>%{this.props.state.bottomRightHeight}</p>
                </div>
            </div>


        );
    }
}
