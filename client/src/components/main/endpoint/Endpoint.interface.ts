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

export interface EndpointData {
  method: string,
  endpoint: string,
  params: EndpointParam[],
  codes: EndpointCode[]
}