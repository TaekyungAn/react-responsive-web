/* eslint-disable no-unused-vars */
const color = {
  darkGreen: "#0f393b",
  lighterDarkGreen: "#124C51",
  grayGreen: "#3F6162",
  naturalGreen: "#2A6355",
  orange: "#EF8451",
  beige: "#F2EBE4",
  bgBeige: "#F5F3EE",
};

const height = {
  header: "8rem",
};

const calRem = (size) => `${size}rem`;

const fontSize = {
  title_1: calRem(6.4),
  title_2: calRem(5),
  title_40: calRem(4),
  title_3: calRem(3.6),
  title_32: calRem(3.2),
  title_24: calRem(2.4),
  title_4: calRem(2),

  logo: calRem(2.3),

  content_18: calRem(1.8),
  content_16: calRem(1.6),
  content_14: calRem(1.4),

  navBar: calRem(1.5),
  button: calRem(1.4),
};

const tabletFontSize = {
  title: calRem(6.4), // 40rem
  logo: calRem(2.3),
  content: calRem(1.8),
  navBar: calRem(1.5),
  button: calRem(1.4),
};

const breakpoints = {
  desktop: "1200",
  tablet: "768",
  phone: "600",
};
const deviceSizes = {
  mobile: "375px",
  tablet_small: "850px",
  tablet_large: "1090px",
  laptop: "1024px",
};

const device = {
  mobile: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet_small: `only screen and (max-width: ${deviceSizes.tablet_small})`,
  tablet_large: `only screen and (max-width: ${deviceSizes.tablet_large})`,
  tablet_large2: `only screen and (min-width: ${deviceSizes.tablet_large})`,
  laptop: `only screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = { fontSize, color, height, tabletFontSize, device };

export default theme;
