import urljoin from 'url-join';

import http from '../utils/http';

export const impressions = (configuration, http) => {
  const {post} = http;
  const impressionBaseUrl = urljoin(configuration.apiBaseUrl, 'analytics', 'impressions');

  const fn = (impressionId, licenseKey) => {
    const url = urljoin(impressionBaseUrl, impressionId);
    return post(configuration, url, {licenseKey});
  };

  return fn;
};

export default configuration => {
  return impressions(configuration, http);
};
