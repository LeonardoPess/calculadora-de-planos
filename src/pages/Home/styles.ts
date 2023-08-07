import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  > p {
    font: ${({ theme }) => theme['title-xs']};
  }

  > div {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    border-radius: 6px 44px;

    background-color: ${({ theme }) => theme['brown-50']};

    .titleBox {
      display: flex;
      gap: 0.5rem;

      h2 {
        font: ${({ theme }) => theme['title-xs']};
      }
    }

    .inputWrapper {
      display: flex;
      flex-direction: column;

      label {
        font: ${({ theme }) => theme['text-s']};
      }

      input {
        padding: 1rem;
        margin-top: 0.5rem;

        border: none;
        background-color: ${({ theme }) => theme['gray-300']};
        border-radius: 6px;
      }
    }
  }
`
