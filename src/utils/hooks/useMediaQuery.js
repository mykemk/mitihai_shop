import { useCallback } from "react";

export function useMediaQuery({
  smallScreenStyles = {},
  mediumScreenStyles = {},
  largeScreenStyles = {},
}) {
  let isLargeScreen = window.matchMedia("(min-width: 1050px)");
  let isMediumScreen = window.matchMedia(
    "(min-width: 600px) and (max-width: 1050px)",
  );
  let isSmallScreen = window.matchMedia("(max-width: 600px)");
  let styles;

  const getStyles = useCallback(() => {
    if (isSmallScreen.matches) {
      styles = smallScreenStyles;
    } else if (isMediumScreen.matches) {
      styles = mediumScreenStyles;
    } else {
      styles = largeScreenStyles;
    }
  }, [isLargeScreen.matches, isSmallScreen.matches, isMediumScreen.matches]);

  isLargeScreen.addListener(getStyles);
  isMediumScreen.addListener(getStyles);
  isSmallScreen.addListener(getStyles);

  getStyles();

  return {
    styles: styles,
    isSmallScreen: isSmallScreen,
    isLargeScreen: isLargeScreen,
    isMediumScreen: isMediumScreen,
  };
}
