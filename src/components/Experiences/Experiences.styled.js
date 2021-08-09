import styled from 'styled-components'

export const Container = styled.article`
  height: auto;
  width: fit-content;
  background: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 24px 22px 0 22px;
  /* display: flex;
  justify-content: space-between;
  flex-direction: column; */

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    /* flex-direction: row; */
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`

export const Title = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.gray2};
  margin-bottom: 44px;
`

export const Logo = styled.div`
  grid-area: A;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DateAndJob = styled.div`
  grid-area: B;
`

export const Description = styled.div`
  grid-area: C;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray3};
`

export const Date = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.gray3};
  margin: 0;
`

export const Job = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray1};
  margin: 12px 0 0 0;
`

export const Jobs = styled.div`
  display: grid;
  grid-template-columns: 84px 2fr;
  grid-template-rows: auto;
  gap: 16px;
  grid-template-areas:
    'A B'
    '. C';
  margin-bottom: 36px;
`
