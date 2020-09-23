import { helper } from '@ember/component/helper'

function json(arg) {
  return JSON.stringify(arg, undefined, 2);
}

export default helper(json);