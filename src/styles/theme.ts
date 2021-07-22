import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme ({
  color: {
    yellow: {
      "500": "#FFBA08",
      "200": 'rgba(255, 186, 8, 0.5)',
    },
    gray: {
      "600": "#47585B",
      "500": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body:{
        bg: 'gray.50',
        color: 'gray.700' 
      }
    }
  }
})