import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem 0 4rem;

  .bannerWrapper {
    min-width: 45%;

    padding: 2rem;
  }

  h1 {
    margin-bottom: 1rem;

    font: ${(props) => props.theme['title-xl']};
  }

  p {
    font: ${(props) => props.theme['text-l']};
  }

  .benefits {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    span {
      min-width: 230px;

      display: flex;
      align-items: center;
      gap: 0.75rem;

      &:nth-of-type(1) {
        .iconCircleBackground {
          background-color: ${({ theme }) => theme['yellow-900']};
        }
      }

      &:nth-of-type(2) {
        .iconCircleBackground {
          background-color: ${({ theme }) => theme['brown-500']};
        }
      }

      &:nth-of-type(3) {
        .iconCircleBackground {
          background-color: ${({ theme }) => theme['yellow-500']};
        }
      }

      &:nth-of-type(4) {
        .iconCircleBackground {
          background-color: ${({ theme }) => theme['purple-500']};
        }
      }

      .iconCircleBackground {
        height: 32px;
        width: 32px;

        position: relative;

        border-radius: 100%;

        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          color: white;
        }
      }
    }
  }
`

export const ProductsContainer = styled.div`
  padding: 2rem 0;

  h2 {
    font: ${({ theme }) => theme['title-l']};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 4rem;
    align-items: center;
  }
`
