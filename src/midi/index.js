import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abcjs from 'abcjs/midi/abc_midi_controls'
import renderMidi from 'abcjs/src/api/abc_tunebook_midi';
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
      soundFontUrl,
    } = this.props;

    if (soundFontUrl) {
      abcjs.midi.setSoundFont(soundFontUrl);
    }

    renderMidi(
      el || this.el,
      notation,
      parserParams,
      midiParams,
      renderParams,
    );
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
  soundFontUrl: PropTypes.string,
};

Midi.defaultProps = midiProps;

export default Midi;
