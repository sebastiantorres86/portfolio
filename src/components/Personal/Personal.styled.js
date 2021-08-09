import styled from 'styled-components'
import photo from '../../assets/me.jpeg'

export const Container = styled.article`
  height: auto;
  width: fit-content;
  background: ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 22px 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    flex-direction: row;
  }
`

export const StyledImage = styled.div`
  width: 351px;
  height: 343px;
  background: url(${photo});
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 12px;
  margin-bottom: 23px;

  @media screen and (min-width: 1024px) {
    margin: 0 34px 0 0;
    width: 271.86px;
    height: 266.14px;
  }
`

export const Div = styled.div`
  /* flex: 1; */
  margin-bottom: 31px;

  @media screen and (min-width: 1024px) {
    :first-child {
      margin-right: 34px;
    }
    /* min-width: 350px; */
  }
`

export const Data = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.gray2};
  margin: 0 0 10px;
`

export const Copy = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.gray3};
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


