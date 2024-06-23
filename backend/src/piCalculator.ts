let currentPi = 0;
let iterations = 0;

export const calculateNextPi = (): string => {
  currentPi += 4 * Math.pow(-1, iterations) / (2 * iterations + 1);
  iterations += 1;
  return currentPi.toFixed(iterations);
};

export const getCurrentPi = (): string => {
  return currentPi.toFixed(iterations);
};