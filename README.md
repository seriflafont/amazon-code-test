The problem:

Given an input representing a canvas comprised of only black or white areas, create a function that takes a user input of either black or white, and the coordinates of their 'click' and change the fill of the canvas in the way a paint bucket would (in Photoshop, etc). In the problem, black is represented by 1, and white is represented by 0.
So if the inputs are the following:
Canvas:
[[0, 1, 0]],
[0, 0, 1],
[0, 1, 1]]

Color:
1 (black)

Coordinates of click:
[0, 0]

The output would be:
[[1, 1, 0]],
[1, 1, 1],
[1, 1, 1]]

To test:
1. npm run test


[[0, 1, 1, 1, 0, 0, 0],
[[0, 1, 0, 0, 0, 1, 0],
[0, 1, 1, 1, 0, 0, 0]]
1
[0,4]

[[0, 1, 1, 1, 1, 1, 1],
[0, 1, 1 1, 1, 1, 1],
[0, 1, 1, 1, 1, 1, 1]]