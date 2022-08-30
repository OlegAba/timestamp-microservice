import React, { FunctionComponent } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { StyledEndpointButton } from './EndpointButton.styled';

interface Props {
  method: string,
  endpoint: string,
  active: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const EndpointButton: FunctionComponent<Props> = ({ 
  method,
  endpoint,
  active, 
  onClick
}) => {

  return(
    <StyledEndpointButton onClick={onClick} className={active ? "open" : ""}>
      <span>{method}</span>
      <code>{endpoint}</code>
      <div>
        {active 
        ? <RiArrowUpSLine className='icon-arrow' size='30px' />
        : <RiArrowDownSLine id='icon-arrow' size='30px' />}
      </div>
    </StyledEndpointButton>
  );
}

export default EndpointButton;