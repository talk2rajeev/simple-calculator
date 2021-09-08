# simple-calculator

[![GitHub issues](https://img.shields.io/github/issues/talk2rajeev/simple-calculator.svg)](https://github.com/talk2rajeev/simple-calculator/issues)

## install
```
npm i @talk2rajeev/simple-calculator
```

## How to Use

### addition
```
import module from '@talk2rajeev/simple-calculator'
```

#### addition
```
const { add, substract, multiply, divide } = module;

add(1,2) //Output: 3
add(1,2,3,4) //Output: 10
```

#### substract
```
substract(4,2) //output: 2

substract(10,2,1) //output: 7
Explanation: 10 -2 -1 = 7
```

#### Multiplication
```
multiply(3,2) //output: 6

multiply(10,2,5) //output: 100
Explanation: 10 * 2 * 5 = 100
```


#### Division
division only takes 2 arguments
```
divide(8,2) //output: 4

divide(10,2) //output: 100
Explanation: 10 / 2  = 5
```