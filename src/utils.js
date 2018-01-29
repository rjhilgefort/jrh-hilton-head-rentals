import {
  map, addIndex, always,
} from 'ramda';

export const mapIndexed = addIndex(map);
export const noop = always(null);
