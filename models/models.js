'use strict';

const speedmodes = require('./speedmodes');
const watermodes = require('./watermodes');

module.exports = {
  'default': {speed: speedmodes.gen1},
  'rockrobo.vacuum.v1': {speed: speedmodes.gen1},
  'roborock.vacuum.c1': {speed: speedmodes.gen1},
  'roborock.vacuum.s5': {speed: speedmodes.gen2},
  'roborock.vacuum.s5e': {speed: speedmodes.gen4, waterspeed: watermodes.gen1},
  'roborock.vacuum.s6': {speed: speedmodes.gen3},
  'roborock.vacuum.t6': {speed: speedmodes.gen3},
  'roborock.vacuum.e2': {speed: speedmodes.gen3},
};
