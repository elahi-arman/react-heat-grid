# HeatGrid component example:

The default HeatGrid component renders a 5x```N``` grid. Using the CSS grid property, it aligns every square equally and takes up 20vw. It also has a couple of default color: ``` RED, GREEN, BLUE, YELLOW, ORANGE, TEAL, PURPLE, GREY ```.

```js
import React from 'react'
const data = [
  {color: 'RED', opacity: 0.2},
  {color: 'RED', opacity: 0.2},
  {color: 'RED', opacity: 0.2},
  {color: 'RED', opacity: 0.2},
  {color: 'RED', opacity: 0.2}
]

<HeatGrid />
```
