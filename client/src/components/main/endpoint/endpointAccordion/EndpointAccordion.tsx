import React, { FunctionComponent } from 'react';
import { StyledEndpointAccordion } from './EndpointAccordion.styled';
import { EndpointParam, EndpointCode } from '../Endpoint.interface';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  active: boolean,
  isDarkMode: boolean,
  params: EndpointParam[],
  codes: EndpointCode[]
}

const EndpointAccordion: FunctionComponent<Props> = ({ active, isDarkMode, params, codes }) => {

  return(
    <StyledEndpointAccordion>
      <div id='accordion' className={active ? "open" : ""}>
        <h5>Parameters</h5>
        <div className='accordion-section-container'>
          <div className='accordion-title-container accordion-row'>
            <h6 className='accordion-col-left'>Name</h6>
            <h6 className='accordion-col-right'>Description</h6>
          </div>

          {params.map((param: EndpointParam, index: number) =>
            <div className='accordion-row' key={index}>
              <div className='accordion-col-left'>
                <h4>{param.name}</h4>
                <code>{param.type}</code>
                <p>({param.apiInterface})</p>
              </div>
              <div className='accordion-col-right'>
                <p>{param.description}</p>
                  <SyntaxHighlighter 
                  language='javascript' 
                  style={isDarkMode ? tomorrowNightBlue : tomorrow}
                  customStyle={{ padding: 15 }}>
                    {param.sampleInput}
                  </SyntaxHighlighter>
              </div>
            </div>
          )}
        </div>

        <h5>Responses</h5>
        <div className='accordion-section-container'>
          <div className='accordion-title-container accordion-row'>
            <h6 className='accordion-col-left'>Code</h6>
            <h6 className='accordion-col-right'>Description</h6>
          </div>

          {codes.map((code: EndpointCode, index: number) => 
            <div className='accordion-row' key={index}>
              <div className='accordion-col-left'>
                <p>{code.statusCode}</p>
              </div>
              <div className='accordion-col-right'>
                <p>{code.description}</p>
                <SyntaxHighlighter 
                language='javascript' 
                style={isDarkMode ? tomorrowNightBlue : tomorrow}
                customStyle={{ padding: 15 }}>
                  {code.sampleRes}
                </SyntaxHighlighter>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledEndpointAccordion>
  );
}

export default EndpointAccordion;