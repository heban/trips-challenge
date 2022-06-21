import { ReactNode, FC } from 'react'
import { Text, TextProps, forwardRef, useTheme } from '@chakra-ui/react'
import { rem } from 'polished'

type Props = {
  children?: ReactNode
  variantColor?: 'dark' | 'light'
  variantFont?: 'primary' | 'secondary'
  variantFontSize?: number | string
}

export const Content: FC<TextProps & Props> = forwardRef(
  ({ variantColor = 'dark', variantFontSize = 16, variantFont = 'primary', children, ...props }, ref) => {
    const { colors } = useTheme()

    return (
      <Text
        ref={ref}
        fontSize={rem(variantFontSize)}
        fontFamily="Roboto, sans-serif"
        fontWeight={variantFont === 'primary' ? 700 : 300}
        fontStyle={variantFont === 'primary' ? 'normal' : 'italic'}
        color={variantColor === 'light' ? colors.textLight : colors.textDark}
        {...props}
      >
        {children}
      </Text>
    )
  }
)

export default Content
