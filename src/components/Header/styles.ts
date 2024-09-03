import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  text-align: center;
  font: ${({ theme }) => theme['title-xl']};

  span{
    font-size: 1rem;
  }
`
