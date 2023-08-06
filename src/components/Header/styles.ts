import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    span,
    a {
      padding: 0.5rem;
      display: flex;
      align-items: center;

      border-radius: 6px;
      background-color: ${({ theme }) => theme['yellow-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all 0.2s ease-in-out;
    }

    span {
      gap: 0.5rem;

      background-color: ${({ theme }) => theme['purple-100']};
      color: ${({ theme }) => theme['purple-500']};
    }

    a {
      background-color: ${({ theme }) => theme['yellow-100']};
      color: ${({ theme }) => theme['yellow-900']};

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme['yellow-900']};
      }

      &.active {
        border-bottom: 3px solid ${({ theme }) => theme['yellow-900']};
      }
    }
  }
`
