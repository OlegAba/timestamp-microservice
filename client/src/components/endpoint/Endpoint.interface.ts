export interface EndpointParam {
  name: string,
  type: string,
  apiInterface: string,
  description: string,
  sampleInput: string
}

export interface EndpointCode {
  statusCode: number,
  description: string,
  sampleRes: string  
}

export const endpointParams: EndpointParam[] = [
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

export const endpointCodes: EndpointCode[] = [
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