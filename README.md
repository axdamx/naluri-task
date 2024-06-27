# Naluri Project

## Overview

This project calculates the value of Pi to increasing precision and provides an HTTP server to fetch the latest Pi value and the calculated circumference of the sun. It also includes a React frontend to display this data.

## How to Run

1. **Navigate to the directory**:

   ```sh
   - npm install

2. **Run dev server**:

   ```sh
   - npm run dev
   
## Tech Stacks Used
- Frontend
  - Vite (React JS)
  - Axios for API fetching
  - React Query
  - Lottie
  - Typescript

- Backend
  - Express

   <img width="561" alt="Screenshot 2024-06-24 at 1 16 05 PM" src="https://github.com/axdamx/naluri-task/assets/40446823/8883719a-99d9-4f34-af61-5e6e9d4cc00b">


## Pi Calculation Explaination
The calculation of Pi in this project is based on the Leibniz formula for Pi, which is expressed as:

Step-by-Step Calculation

1. Iteration Variable:

```
iterations is used as the variable 𝑛 in the series.
```
2. Power Operation:

```
Math.pow(-1, iterations) computes (−1)^iterations, which alternates between 1 and -1 as iterations increases.
```

3. Denominator:
```
2 * iterations + 1 computes the sequence of odd numbers.
```

4. Multiplication by 4:
```
The result of the series term is multiplied by 4 to fit the formula for Pi.
```

```
let currentPi = 0;
let iterations = 0;

const calculateNextPi = () => {
  currentPi += 4 * Math.pow(-1, iterations) / (2 * iterations + 1);
  iterations += 1;
  return { pi: currentPi.toFixed(iterations), iterations };
};
```
Example breakdown

First Iteration
- Initial State
   - currentPi = 0;
   - iterations = 0;

- Calculations
   - currentPi += 4 * Math.pow(-1, 0) / (2 * 0 + 1);
   - // currentPi += 4 * 1 / 1;
   - // currentPi = 4;
   - iterations += 1;
   - // iterations = 1;

- Results
   - { pi: "4.0", iterations: 1 }

Tenth Iteration
- Initial State
   - currentPi ≈ 3.0418396189; // after 9 iterations
   - iterations = 9;

- Calculations
   - currentPi += 4 * Math.pow(-1, 9) / (2 * 9 + 1);
   - // currentPi += 4 * -1 / 19;
   - // currentPi += -4/19;
   - // currentPi ≈ 3.0418396189 - 0.2105263158;
   - // currentPi ≈ 2.8313133031;
   - iterations += 1;
   - // iterations = 10;

- Results
   - { pi: "3.0418396189", iterations: 10 }

   
