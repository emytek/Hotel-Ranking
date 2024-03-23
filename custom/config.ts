import { defineStyleConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors : {
    brand: {
      900: '#024fc9',
      800: '#146af5',
      700: '#2977f2',
      600: '#337df2',
      500: '#4287f5'
    },
  },
 fonts : {
    body: `'Ubuntu', 'sans-serif'`,
    heading: `'Ubuntu', 'sans-serif'`
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
      },
      // Two sizes: sm and md
      sizes: {
        sm: {
          fontSize: 'sm',
          px: 4, // <-- px is short for paddingLeft and paddingRight
          py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
          fontSize: 'md',
          px: 6, // <-- these values are tokens from the design system
          py: 4, // <-- these values are tokens from the design system
        },
      },
      // Two variants: outline and solid
      variants: {
        outline: {
          border: '2px solid',
          borderColor: 'purple.500',
          color: 'purple.500',
        },
        solid: {
          bg: 'purple.500',
          color: 'white',
        },
      },
      // The default size and variant values
      defaultProps: {
        size: 'md',
        variant: 'outline',
      },
    }
  }
})
  
export default theme;
  