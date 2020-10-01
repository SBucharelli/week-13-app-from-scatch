import React from 'react';
import Week from './Week'
import BackButton from './BackButton'
import config from '../config'

class ThirdTrimester extends React.Component {
  constructor() {
    super();
    this.state = { apiResponse: [] }
  }

  callAPI = async () => {
    const response = await fetch(`${config.API_URL}thirdTrimester`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  componentDidMount() {
    this.callAPI()
      .then((apiResponse) => {
        this.setState({ apiResponse })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <BackButton page="/" />
        <br />
        <br />
        <Week weeks={this.state.apiResponse} />
      </>
    )
  }
}

export default ThirdTrimester