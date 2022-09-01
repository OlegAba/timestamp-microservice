import styled from "styled-components";

export const StyledMain = styled.div`
  .title-container {
    vertical-align: bottom;
    line-height: 50px;
    display: flex;
    border-bottom: 2px solid ${props => props.theme.colors.border};

    p {
      margin-left: 15px;
    }
  }

  .endpoint-container {
    padding: 10px 0 10px 0;
  }
`;