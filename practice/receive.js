function factorial(n) {
  if (n === 1) {
    // Base case, Termination case
    return 1;
  }
  console.error(n);
  return n * factorial(n - 1);
}

factorial(5);
