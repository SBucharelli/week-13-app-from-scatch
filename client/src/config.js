const dev = {
  API_URL: 'http://localhost:9000/'
};
const prod = {
  API_URL: 'http://pregnancyappapi-env.eba-yxb77k2y.us-east-2.elasticbeanstalk.com/'
};
const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;
export default config;