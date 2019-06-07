import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abcjs from 'abcjs/midi';
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

    renderMidi(
      el || this.el,
      notation,
      parserParams,
      midiParams,
      renderParams,
    );

    if (soundFontUrl) {
      abcjs.midi.setSoundFont(soundFontUrl);
    }
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
