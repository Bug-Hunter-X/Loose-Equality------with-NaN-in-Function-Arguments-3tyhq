# Loose Equality with NaN in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript related to the loose equality operator (`==`) and `NaN` (Not a Number).

## The Problem

The loose equality operator (`==`) does not work as expected when comparing against `NaN`.  `NaN` is never equal to itself or any other value, even when using loose equality.

The `bug.js` file contains a function `foo` that demonstrates this issue. If either `a` or `b` is `NaN`, the condition `a == null || b == null` will evaluate to `false`, even though you might expect it to handle `NaN` as a 'null-like' value.

## The Solution

The `bugSolution.js` file shows a corrected version of `foo`. It uses `Number.isNaN()` to explicitly check for `NaN`, ensuring the function handles this case correctly.

## How to reproduce

1. Clone the repository
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run both files with a JavaScript runtime environment (such as Node.js).
4. Experiment with different inputs, including `NaN`, to observe the behavior difference between the original and corrected functions.

This example highlights the importance of using strict equality (`===`) or explicit checks like `Number.isNaN()` when dealing with `NaN` in JavaScript to avoid unexpected behavior.