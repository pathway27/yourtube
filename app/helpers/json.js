import { helper } from '@ember/component/helper'

import config from 'yourtube/config/environment';

function json(arg) {
  if (config.environment === 'development')
    return JSON.stringify(arg, undefined, 2);
  else
    return null;
}

export default helper(json);
