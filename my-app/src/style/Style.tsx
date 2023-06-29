import COLORS from './Colors';
import { createTheme } from '@mui/system';
export const themeRTL = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: COLORS.primaryMainBlue,
      darkMain: COLORS.primaryDarkMainBlue,
      lightMain: COLORS.primaryLightMainBlue,
      blackMain: COLORS.black,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: COLORS.white,
          backgroundColor: COLORS.buttonRed,
          '&:hover': {
            color: COLORS.white,
            backgroundColor: COLORS.buttonRed,
          },
        },
      },
      variants: [
        {
          props: { variant: 'blackButton' },
          style: {
            textTransform: 'none',
            color: COLORS.black,
            backgroundColor: 'transparent',
            '&:hover': {
              color: COLORS.black,
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: { variant: 'emptyButton' },
          style: {
            textTransform: 'none',
            color: COLORS.buttonRed,
            backgroundColor: 'transparent',
            '&:hover': {
              color: COLORS.buttonRed,
              backgroundColor: 'transparent',
            },
            border: '1px solid',
            borderColor: COLORS.buttonRed,
          },
        },
      ],
    },
  },
  typography: {
    headLineBold: {
      fontFamily: 'Assistant',
      fontStyle: 'normal',
      fontSize: '30px',
      fontWeight: 'Bold',
      display: 'inline',
    },


    smHeadLineBold: {
        fontFamily: 'Assistant',
        fontStyle: 'normal',
        fontSize: '28px',
        fontWeight: 'Bold',
        display: 'inline'
      },
      headLine: {
        fontFamily: 'Assistant',
        fontStyle: 'normal',
        fontSize: '32px',
        display: 'inline',
      },
      subHeadLineBold: {
        fontFamily: 'Assistant',
        fontStyle: 'normal',
        fontSize: '26px',
        fontWeight: 'Bold',
        display: 'inline'
      },
      smSubHeadLineBold: {
        fontFamily: 'Assistant',
        fontStyle: 'normal',
        fontSize: '24px',
        fontWeight: 'Bold',
        display: 'inline'
      },
      subHeadLine: {
        fontFamily: 'Assistant',
        fontStyle: 'normal',
        fontSize: '26px',
        display: 'inline'
      },
      lgRegularSemiBold: {
        fontFamily: 'Assistant',
        fontSize: '20px',
        fontStyle: 'normal',
        lineHeight: '26px',
        fontWeight: '600',
      },
      regularHeadLine: {
        fontFamily: 'Assistant',
        fontSize: '18px',
        lineHeight: '26px',
        fontStyle: 'normal',
      },
      regularHeadLineBold: {
        fontFamily: 'Assistant',
        fontSize: '18px',
        lineHeight: '26px',
        fontStyle: 'normal',
        fontWeight: 'Bold',
        display: 'inline'
      },
      lgRegular: {
        fontFamily: 'Assistant',
        fontSize: '18px',
        lineHeight: '24px',
        fontStyle: 'normal',
      },
      regular: {
        fontFamily: 'Assistant',
        fontSize: '16px',
        lineHeight: '24px',
        fontStyle: 'normal',
      },
      regular12: {
        fontFamily: 'Assistant',
        fontSize: '12px',
        lineHeight: '24px',
        fontStyle: 'normal',
        fontWeight:700
      },
      exSmall: {
        fontFamily: 'Assistant',
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '15px',
      },
      exSmallBold: {
        fontFamily: 'Assistant',
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '15px',
        fontWeight: '600',
      },
      small: {
        fontFamily: 'Assistant',
        fontSize: '14px',
        lineHeight: '24px',
        fontStyle: 'normal',
      },
      regularBold: {
        fontFamily: 'Assistant',
        fontSize: '16px',
        lineHeight: '24px',
        fontStyle: 'normal',
        fontWeight: 'Bold',
        display: 'inline'
      },
  
  },
});
