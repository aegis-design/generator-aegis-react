import { HOME } from '../actionTypes';

export default function reducer(state={}, { type }) {
  switch (type) {
    case HOME.INIT:
    default:
      return state;
  }
}
