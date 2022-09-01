import { DefaultTheme } from "styled-components"

const devices = {
  mobileS: '(max-width: 320px)',
  mobileM: '(max-width: 375px)',
  mobileL: '(max-width: 430px)',
  tablet: '(max-width: 960px)',
  laptop: '(max-width: 1024px)',
  laptopL: '(max-width: 1440px)',
  desktop: '(max-width: 2560px)'
}

export const lightTheme: DefaultTheme = {
  colors: {
    body: '#7b7b80',
    title: '#1b1b1d',
    button: '#707070',
    buttonHover: 'black',
    background: '#fafafd',
    secondaryBackground: '#f3f3f6',
    backgroundActive: '#e5e5ea',
    accent: '#007aff',
    secondaryAccent: '#c0d9f5'
  },
  devices: devices
}

export const darkTheme: DefaultTheme = {
  colors: {
    body: '#8D8D8D',
    title: '#F0F2F3',
    button: '#707070',
    buttonHover: '#F0F2F3',
    background: '#141414',
    secondaryBackground: '#171717',
    backgroundActive: '#1b1b1b',
    accent: '#0a84ff',
    secondaryAccent: '#152a44'
  },
  devices: devices
}