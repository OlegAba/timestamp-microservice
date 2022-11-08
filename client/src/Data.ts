import { EndpointData, Method } from './components/endpoint/Endpoint.interface';

export const dateEndpointData: EndpointData = {
  name: 'date',
  description: 'Returns a JSON object with a Unix and UTC timestamp',
  methodsData: [
    {
      method: Method.GET,
      endpoint: '/api/',
      params: [],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "unix": 1451001600000,\n  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"\n}\n'
        }
      ]
    },
    {
      method: Method.GET,
      endpoint: '/api/{date}',
      params: [
        {
          name: 'date',
          type: 'string',
          apiInterface: 'path',
          description: 'A valid javascript date',
          sampleInput: '/api/2015-12-25'
        },
      ],
      codes: [
        {
          statusCode: 200,
          description: 'Successful operation',
          sampleRes: '{ \n  "unix": 1451001600000,\n  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"\n}\n'
        },
        {
          statusCode: 404,
          description: 'Invalid date provided',
          sampleRes: '{\n  "error": "Invalid Date"\n}\n'
        }
      ]
    }
  ]
}