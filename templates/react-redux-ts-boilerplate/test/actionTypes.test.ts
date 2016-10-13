/**
 * Created by Zhengfeng.Yao on 16/10/9.
 */
/// <reference path="./typings/index.d.ts" />
import types from '../src/actionTypes';
const expect = chai.expect;

describe('appEnvConfigTests', () => {
  it('test actionTypes', () => {
    expect(types['APP']['INIT']).to.equal('APP.INIT');
  });
});

