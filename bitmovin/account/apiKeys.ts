import urljoin from 'url-join';

import {utils} from '../utils/http';

const apiKeys = (configuration, http) => {
  const apiKeysBaseUrl = urljoin(configuration.apiBaseUrl, 'account', 'api-keys');
  const {get, post, delete_} = http;

  const fn = apiKeyId => {
    const url = urljoin(apiKeysBaseUrl, apiKeyId);
    return get(configuration, url);
  };

  fn.list = (limit, offset) => {
    let url = apiKeysBaseUrl;
    const getParams = utils.buildGetParamString({
      limit,
      offset
    });
    if (getParams.length > 0) {
      url = urljoin(url, getParams);
    }
    return get(configuration, url);
  };

  fn.create = () => {
    const url = apiKeysBaseUrl;
    return post(configuration, url);
  };

  fn.delete = apiKeyId => {
    const url = urljoin(apiKeysBaseUrl, apiKeyId);
    return delete_(configuration, url);
  };

  return fn;
};

export default apiKeys;
