function foo(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b) || a == null || b == null) {
    return;
  }
  // ... rest of the function
}