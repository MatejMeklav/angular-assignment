export const displayElementsUtil = (
  displayed: number,
  allElements: number,
  step: number
): number => {
  if (displayed >= allElements) {
    return step;
  } else {
    return displayed + step;
  }
};
