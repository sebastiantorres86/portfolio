import React from 'react'
import {
  Container,
  Copy,
  Link,
  SideA,
  SideB,
  SideC,
  StyledImage,
  Title,
  UpperTitle
} from './Blog.styled'

const Blog = () => {
  return (
    <Container>
      <SideA>
        <UpperTitle>Blog</UpperTitle>
        <Title>How to organize your CSS</Title>
      </SideA>

      <SideC>
        <Copy>
          In this article I tell the story about Proin eu justo sit amet lacus
          bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
        </Copy>
        <Copy>
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
          feugiat malesuada molestie.
        </Copy>
        <Link href='###'>dev.to</Link>
      </SideC>

      <SideB>
        <StyledImage />
      </SideB>
    </Container>
  )
}

export default Blog
