import { HOME } from '../actionTypes';

export default function reducer(state={content: 'Hello world!'}, { type }) {
  switch (type) {
    case HOME.INIT:
    default:
      return state;
  }
}
