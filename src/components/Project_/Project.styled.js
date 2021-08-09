import styled from 'styled-components'
import image1 from '../../assets/recipe.png'

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
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`

export const StyledImage = styled.div`
  width: 351px;
  height: 261px;
  background: url(${image1});
  background-size: cover;
  background-position: left;
  border: none;
  border-radius: 12px;
  margin-bottom: 23px;

  @media screen and (min-width: 1024px) {
    margin: 0 34px 0 0;
    width: 384px;
    height: 267px;
  }
`

export const Tag = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray2};
  margin-right: 9px;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin: 22px 0 18px 0;

  color: ${({ theme }) => theme.gray1};

  @media screen and (min-width: 1024px) {
    /* margin: 25px 0 18px 0; */
  }
`

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray3};
  margin: 0 0 41px;
`

export const Button = styled.a`
  font-family: Montserrat;
  padding: 12px 35px;
  font-style: normal;
  width: 135px;
  height: 46px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.blue};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  margin-right: 11px;
`

export const ButtonOutlined = styled(Button)`
  width: 118px;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.blue};
  background: ${({ theme }) => theme.white};
  box-sizing: border-box;
  color: ${({ theme }) => theme.blue};
`

export const ContainerButton = styled.div`
  width: 264px;
  display: flex;
`
