import styled from "styled-components";

export const StyledEndpointButton = styled.div`
  button {
    width: 100%;
    display: flex;
    border-radius: 10px;
    padding: 5px;
    background: ${path => path.theme.colors.secondaryAccent};
    border: none;
    border-style: solid;
    border-color: ${path => path.theme.colors.accent};
    border-width: 1px;
    cursor: pointer;
  }  

  button.open {
    border: none;
    border-top: 1px solid ${path => path.theme.colors.accent};
    border-left: 1px solid ${path => path.theme.colors.accent};
    border-right: 1px solid ${path => path.theme.colors.accent};
    border-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  span {
    background: ${path => path.theme.colors.accent};
    color: white;
    font-weight: bold;
    padding: 0 30px 0 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    border-radius: 5px;
  }

  code {
    color: ${path => path.theme.colors.title};
    font-size: 20px;
    line-height: 30px;
    margin-left: 20px;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .icon-arrow {
    color: ${path => path.theme.colors.body};
  }
`;
