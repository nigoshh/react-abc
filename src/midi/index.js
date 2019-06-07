import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abcjs from 'abcjs/midi';
import { midiProps } from '../defaults/props';
import './style.css';

class Midi extends Component {
  componentDidMount() {
    const {
      el,
      midiParams,
      notation,
      parserParams,
      renderParams,
      soundfontUrl,
    } = this.props;

    console.log('url', soundfontUrl);
    abcjs.midi.setSoundFont(soundfontUrl);

    abcjs.renderMidi(
      el || this.el,
      notation,
      parserParams,
      midiParams,
      renderParams,
    );

    abcjs.midi.startPlaying();
  }

  render() {
    return (
      <div
        ref={(input) => { this.el = input; }}
      />
    );
  }
}

Midi.propTypes = {
  el: PropTypes.node,
  midiParams: PropTypes.object,
  notation: PropTypes.string.isRequired,
  parserParams: PropTypes.object,
  renderParams: PropTypes.object,
  soundfontUrl: PropTypes.string,
};

Midi.defaultProps = midiProps;

export default Midi;
