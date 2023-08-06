import { styled } from 'styled-components'

export const ProductContainer = styled.div`
  max-width: 245px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  text-align: center;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme['gray-200']};

  > strong {
    padding: 0.5rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme['yellow-100']};
    color: ${({ theme }) => theme['yellow-900']};
  }

  > h3 {
    font: ${({ theme }) => theme['title-s']};
    color: ${({ theme }) => theme['brown-700']};
  }

  > p {
    font: ${({ theme }) => theme['text-s']};
    color: ${({ theme }) => theme['brown-500']};
  }
`

export const ProductAddToCartContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    font: ${({ theme }) => theme['text-xs']};
    color: ${({ theme }) => theme['brown-500']};
  }

  b {
    font: ${({ theme }) => theme['title-m']};
    color: ${({ theme }) => theme['brown-700']};
  }

  > span {
    display: flex;
    align-items: center;

    font: ${({ theme }) => theme['text-m']};
    background-color: ${({ theme }) => theme['brown-50']};
    border-radius: 6px;

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }
  }

  .iconWrapper,
  .addToCartButton {
    width: 35px;
    height: 35px;

    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .iconWrapper {
    line-height: 40px;

    &:hover {
      background-color: ${({ theme }) => theme['brown-100']};
    }
  }

  .addToCartButton {
    line-height: 40px;
    background-color: ${({ theme }) => theme['purple-900']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      filter: brightness(1.6);
    }
  }

  svg {
    color: ${({ theme }) => theme.white};
  }
`
