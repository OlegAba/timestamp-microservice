import React, { FunctionComponent } from 'react';
import { StyledMain } from './Main.styled';
import Endpoint from './endpoint/Endpoint';
import { EndpointParam, EndpointCode, EndpointData } from './endpoint/Endpoint.interface';

interface Props {
  isDarkMode: boolean,
}

const endpointParams: EndpointParam[] = [
  {
    name: 'date',
    type: 'string',
    apiInterface: 'path',
    description: 'A valid javascript date (optional)',
    sampleInput: '/api/2015-12-25'
  }
]

const sample200Res = `{ 
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
`

const sample404Res = `{
  "error": "Invalid Date"
}
`

const endpointCodes: EndpointCode[] = [
  {
    statusCode: 200,
    description: 'Successful operation',
    sampleRes: sample200Res
  },
  {
    statusCode: 404,
    description: 'Invalid date provided',
    sampleRes: sample404Res
  }
]

const endpointData: EndpointData = {
  method: 'GET',
  endpoint: '/api/{date?}',
  params: endpointParams,
  codes: endpointCodes
}

const Main: FunctionComponent<Props> = ({ isDarkMode }) => {

  return(
    <StyledMain>
      <div className='title-container noselect'>
        <h2>date</h2>
        <p>returns a JSON object with a Unix and UTC timestamp</p>
      </div>
      <div className='endpoint-container'>
        <Endpoint isDarkMode={isDarkMode} endpointData={endpointData} />
      </div>
    </StyledMain>
  );
}

export default Main