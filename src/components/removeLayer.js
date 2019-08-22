import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export default class RemoveLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layerKey: ''
    }
    this.selectLayer = this.selectLayer.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  componentWillReceiveProps() {
    const firstLayer = this.props.layers[0]
    if (firstLayer) {
      this.setState({layerKey: firstLayer.layerKey});
    }
  }

  availbeLayers() {
    const layers = this.props.layers.map(l => {
      return (
        <option value={l.layerKey}>
          {l.name}
        </option>
      )
    })
    return layers
  }

  selectLayer(event) {
    this.setState({key: event.target.value})
  }

  onButtonPress(event) {
    this.props.removeLayer(
      this.state.layerKey
    )
  }

  render() {
    return (
      <Popup
        trigger={<div className="bm-item">RemoveLayer</div>}
        modal >
        {close => (
          <div>
            <h2>Remove Layer</h2>
            <p>Layer Name</p>
            <select onChange={this.selectLayer}>
              {this.availbeLayers()}
            </select>
            <button onClick={() => {
              this.onButtonPress();
              close();
            }}>
              Remove
            </button>
          </div>
        )}
      </Popup>
    );
  }
}