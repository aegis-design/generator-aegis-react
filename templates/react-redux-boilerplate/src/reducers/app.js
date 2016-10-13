import { APP } from '../actionTypes';

export default function reducer(state={content: 'Hello world!'}, { type }) {
  switch (type) {
    case APP.INIT:
    default:
      return state;
  }
}
