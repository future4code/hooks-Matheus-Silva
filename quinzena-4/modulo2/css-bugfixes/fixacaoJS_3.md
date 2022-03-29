```javascript
function calculaNota(ex, p1, p2) {
  let grade = (ex + p1 * 2 + p2 * 3)/6
  if (grade >= 9) {
    return 'A'
  } 
  if (grade >= 7.5) {
    return 'B'
    
  }
  if (grade >= 6) {
    return 'C'
  }
  if (grade < 6) {
    return 'D'
  }
}
```