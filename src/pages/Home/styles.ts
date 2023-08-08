import { styled } from 'styled-components'
export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  > div {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`

export const FormContainer = styled.form`
  min-width: 350px;
  min-height: 70vh;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
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
      margin-left: 0.5rem;
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

  input:disabled {
    color: ${({ theme }) => theme['purple-900']};
    font: ${({ theme }) => theme['title-xs']};
  }
`
