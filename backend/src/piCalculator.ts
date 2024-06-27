let currentPi = 0;
let iterations = 0;

export const calculateNextPi = (): { pi: string, iterations: number } => {
  currentPi += 4 * Math.pow(-1, iterations) / (2 * iterations + 1);
  iterations += 1;
  return { pi: currentPi.toFixed(iterations), iterations };
};

export const getCurrentPi = (): { pi: string, iterations: number } => {
  return { pi: currentPi.toFixed(iterations), iterations };
};