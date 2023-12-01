import styled, { css } from "styled-components";

export const teste = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border: 1px solid ${({theme })=> theme.colors.primary_100};
  background: transparent;
  width: fit-content;
  color: white;
  font-family: ${({theme}) => theme.fontFamily.Inter};
  font-size: ${({theme}) => theme.fontSizes.md};
  font-weight: ${({theme}) => theme.fontWeights.regular};
`;

export const Border = styled.div`
border: solid 5px white;
`

export const MainContainer = styled.div`
display: flex;
width: 100%;
height: 95vh;
justify-content: center;
align-items: center;
font-size: 30rem;
color: white;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
`