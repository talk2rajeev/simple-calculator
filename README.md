# simple-calculator

[![GitHub issues](https://img.shields.io/github/issues/talk2rajeev/simple-calculator.svg)](https://github.com/talk2rajeev/simple-calculator/issues)

## install
```
npm i @talk2rajeev/simple-calculator
```

## How to Use

### addition
```javascript
import module from '@talk2rajeev/simple-calculator'
```

#### addition
addition takes multiple argument, all argument will be added together.
```javascript
const { add, substract, multiply, divide } = module;

add(1,2) //Output: 3
add(1,2,3,4) //Output: 10
```

#### substract
substract takes multiple argument, all argument (except 1st) will be substrated from 1st one
```javascript
substract(4,2) //output: 2

substract(10,2,1) //output: 7
Explanation: 10 -2 -1 = 7
```

#### Multiplication
multiply takes multiple argument, all argument will be multiplied together.
```javascript
multiply(3,2) //output: 6

multiply(10,2,5) //output: 100
Explanation: 10 * 2 * 5 = 100
```


#### Division
division takes only 2 arguments
```javascript
divide(8,2) //output: 4
divide(10,2) //output: 100
```

#### Power
```javascript
power(2)(3) //output: 8
power(3)(4) //output: 81
```


#### Square Root

```javascript
squareRoot(2); //Output: 1.4142135623730951
squareRoot(4); //Output: 2
squareRoot(9); //Output: 3
```

#### Cube Root

```javascript
cubeRoot(3); //Output: 1.4422495703074083
cubeRoot(8); //Output: 2
cubeRoot(27); //Output: 3
```

#### Percent

```javascript
percent(P, X)// here P is part and X is Whole
percent(5, 20) //Output : 20
Explanation: what percent 5 is of 20
```