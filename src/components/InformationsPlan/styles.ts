import { css, styled } from 'styled-components'

interface InformationsPlanContainerProps {
  border?: boolean
}

export const InformationsPlanContainer = styled.div<InformationsPlanContainerProps>`
  min-width: 255px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  border-radius: 6px 44px;
  ${(props) =>
    props.border &&
    css`
      border: 2px solid ${({ theme }) => theme['purple-500']};
    `}

  background-color: ${({ theme }) => theme['brown-50']};

  h2 {
    font: ${({ theme }) => theme['title-xs']};

    &.active {
      color: ${({ theme }) => theme['purple-900']};
    }
  }

  span {
    font: ${({ theme }) => theme['text-s']};
  }

  > strong {
    font: ${({ theme }) => theme['title-xs']};
    color: ${({ theme }) => theme['purple-900']};
  }
`
