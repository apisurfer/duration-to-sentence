# duration-to-sentence

Lightweight function that returns human readable string for given duration in seconds.

*Shows days, hours, minutes and seconds passed*

## Usage example

**Disclaimer**: At the moment function might not be exposed directly, try to log out the imported module first...

```javascript
import durationToSentence from 'duration-to-sentence'

const duration = 435432
const longHumanString = durationToSentence(duration)
const shortHumanString = durationToSentence(duration, true)

console.log(longHumanString)
// output: '5days, 57minutes, 12seconds'

console.log(shortHumanString)
// output: '5d, 57m, 12s'

// Notice that time units are skipped when they equal 0.
// In this example that was the "hours" value
```
