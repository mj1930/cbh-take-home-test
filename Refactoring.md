# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. Converted multiple times used crypto statement to 1 common function
2. Since we are returning 0 in case we don't find any event value. Hence we declared the candidate value to 0 initially and removed 1 variable TRIVIAL_PARTITION_KEY only being used for assigning the condidate value.
3. Since we already assigned candidate a value initially, we removed the if case where we are checking if candidate value is present or not. If not we were assigning the value, so we have removed that as well.
4. We maintained the code by reducing the number of lines hence making the code more cleaner and readable by refactoring it.
5. Written some test cases based on the understanding of function.