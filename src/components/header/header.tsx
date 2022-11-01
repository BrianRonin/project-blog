import * as S from './S.header'
import { Heading } from '../Heading/index'
import { LogoLink } from '../MENU_NAV_SIDEBAR/logo_link/logo_link'
import { Text } from '../Text'

export type headerProps = {
  alt: string
  srcImg?: string
  allowText?: boolean
  title?: string
  description?: string
}

export const Header = ({
  title,
  description,
  alt,
  srcImg,
  allowText = true,
}: headerProps) => {
  return (
    <S.Main>
      <LogoLink
        text={alt}
        srcImg={srcImg}
        link='/'
      />
      {!!allowText && (
        <S.TextContainer>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </S.TextContainer>
      )}
    </S.Main>
  )
}
