import _ from 'lodash';

export default function composeConstants(obj, prefix) {
  if (obj.constructor == Object) {
    Object.keys(obj).forEach(key => {
      obj[key] = composeConstants(obj[key], prefix ? `${prefix}.${key}` : key);
    });

    return obj;
  }

  if (_.isArray(obj)) {
    if (!prefix) {
      return { ...obj };
    }
    const tmp = {};
    obj.forEach(key => {
      tmp[key] = `${prefix}.${key}`;
    });
    return tmp;
  }

  return prefix ? `${prefix}.${obj}` : { obj };
}
