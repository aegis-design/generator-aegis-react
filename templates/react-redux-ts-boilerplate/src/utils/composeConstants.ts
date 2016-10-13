/**
 * Created by Zhengfeng.Yao on 16/10/9.
 */
import * as _ from 'lodash';

export default function composeConstants(obj:any, prefix?:null | string) {
  if (obj.constructor == Object) {
    Object.keys(obj).forEach(key => {
      obj[key] = composeConstants(obj[key], prefix ? `${prefix}.${key}` : key);
    });

    return obj;
  }

  if (_.isArray(obj)) {
    const tmp = {};
    if (!prefix) {
      obj.forEach((key:string) => {
        tmp[key] = key;
      });
      return tmp;
    }
    obj.forEach((key:string) => {
      tmp[key] = `${prefix}.${key}`;
    });
    return tmp;
  }

  return prefix ? `${prefix}.${obj}` : { obj };
}
