let destPosition = { x: 1585, y: 42 };
let destBoard = [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,8,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,4,14,14,26,4,14,14,14,14,8,4,8,11,8,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,26,4,7,8,8,14,14,14,14,14,14,14,8,7,4,26,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,8,14,14,8,4,4,4,8,14,14,14,14,14,14,8,4,4,4,4,14,14,8,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,4,14,11,14,14,30,14,14,14,14,8,8,14,14,14,14,14,14,14,11,14,4,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,30,4,8,8,26,14,14,14,14,14,14,8,29,14,14,14,14,14,14,8,26,8,4,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,26,26,26,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,26,4,4,14,14,11,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,29,28,28,29,29,29,24,28,25,24,24,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,11,14,26,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,24,24,28,29,24,24,4,25,28,25,26,28,28,28,24,29,14,14,8,14,14,14,14,14,14,14,14,14,29,30,14,11,8,26,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,24,28,28,28,25,25,25,24,4,25,24,25,25,26,28,28,28,24,24,29,29,14,14,8,14,14,14,14,14,14,14,26,4,8,4,8,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,10,28,28,28,28,28,28,25,25,24,24,29,25,24,24,25,25,28,28,28,28,28,24,24,29,30,14,14,14,14,14,14,14,14,14,8,8,26,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,24,28,28,28,28,28,28,28,28,24,29,14,14,24,28,28,28,28,28,28,28,28,28,28,24,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,11,11,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,14,14,28,24,28,28,28,28,28,28,28,28,28,28,11,14,14,29,24,28,28,28,28,28,28,28,28,28,28,24,25,26,14,14,14,11,14,14,26,8,11,14,10,9,27,27,27,27,27,9,10,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,11,28,28,28,28,28,28,28,28,28,28,28,24,10,8,4,14,7,28,28,28,28,28,28,28,28,28,28,28,28,24,24,29,8,8,14,14,14,26,4,10,28,27,27,27,27,24,24,27,27,27,9,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,10,24,28,28,28,28,28,28,28,28,28,24,24,24,11,14,4,4,8,25,24,24,28,28,28,28,28,28,28,28,28,28,28,24,29,14,14,14,14,29,4,28,0,0,27,27,28,24,0,24,24,27,27,28,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,10,24,28,28,28,28,28,24,24,24,24,24,25,26,26,29,14,14,4,8,29,29,29,24,24,24,24,24,24,28,28,28,28,28,24,24,29,14,14,8,14,8,29,0,24,27,27,24,24,24,25,24,27,27,27,9,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,29,24,24,28,28,28,28,28,28,28,28,28,24,26,26,26,26,14,14,14,26,26,26,26,25,24,28,28,28,28,28,28,28,28,28,28,28,24,29,26,4,14,7,14,9,27,27,27,27,24,24,28,27,27,27,27,27,11,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,24,24,28,28,28,28,28,28,28,28,28,28,25,26,26,26,26,14,14,8,4,26,26,26,26,25,28,28,28,28,28,28,28,28,28,28,28,24,24,25,26,7,8,30,29,28,25,24,24,24,24,24,24,24,24,24,28,11,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,29,29,11,28,28,29,25,25,4,26,4,4,26,4,25,25,24,29,14,14,29,4,4,26,26,25,24,28,28,28,28,28,28,28,28,28,28,28,24,24,29,4,4,4,14,29,25,25,25,25,25,25,25,25,25,25,11,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,29,29,26,25,25,25,24,24,28,28,28,28,24,24,28,14,14,28,24,25,25,4,4,4,4,4,26,4,25,25,25,25,28,28,24,24,24,29,26,8,14,14,29,25,25,25,26,5,26,25,25,25,25,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,14,14,14,6,6,29,29,29,29,28,28,28,28,28,28,28,24,29,14,10,24,24,28,28,28,28,28,24,25,25,25,25,25,26,26,28,24,24,24,28,29,14,14,14,14,28,25,25,5,5,5,5,26,25,25,25,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,14,14,29,11,6,6,6,30,31,30,29,27,29,29,29,29,29,28,29,31,14,11,24,24,28,28,28,28,28,28,28,28,28,28,29,25,25,25,24,28,24,24,24,29,14,14,28,24,25,25,25,26,5,5,5,25,25,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,14,29,24,24,24,28,6,6,6,29,28,28,28,29,30,31,31,30,27,28,30,14,14,10,28,28,28,28,28,28,28,28,28,28,24,28,25,26,26,0,28,27,28,24,28,14,14,11,29,25,25,25,26,5,5,4,25,25,25,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,14,14,28,24,24,24,24,24,28,6,28,28,6,6,6,6,6,29,29,28,24,24,28,29,14,10,28,24,28,28,24,28,24,24,29,30,24,29,29,26,26,25,28,28,28,28,24,11,14,14,14,30,26,26,5,5,26,26,25,25,25,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,14,29,24,24,25,24,24,24,24,28,6,28,24,24,24,24,24,24,24,24,24,24,28,24,24,24,28,28,28,28,28,24,26,24,28,29,29,29,29,29,26,26,25,28,28,28,28,28,28,14,14,14,30,5,26,26,5,5,26,25,25,25,25,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[14,14,28,24,24,24,25,25,24,24,28,6,6,6,6,6,28,28,28,28,28,6,6,6,28,24,24,24,24,29,30,29,29,24,26,26,26,26,26,26,26,26,26,29,28,28,28,28,28,28,28,28,28,10,30,5,5,5,5,5,26,26,25,25,25,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14],[29,24,25,25,25,24,24,24,28,6,6,6,6,6,6,6,6,6,9,28,28,27,27,27,27,27,27,24,24,28,28,25,29,25,26,26,26,29,25,29,29,25,25,28,28,28,28,28,28,28,28,28,28,28,28,28,29,5,5,5,5,5,26,25,25,25,28,28,29,29,29,29,14,14,14,14,14,14,14,14],[24,25,26,26,24,24,24,28,6,6,6,6,6,6,6,6,9,27,27,27,27,27,27,27,27,27,27,27,27,28,29,26,25,25,25,25,24,24,28,28,28,28,24,28,28,25,29,28,28,28,28,28,28,28,28,28,28,29,5,5,5,5,5,26,26,25,24,24,24,24,24,24,24,24,24,24,24,2,2,2],[6,24,25,25,25,28,6,6,6,6,6,6,6,6,9,28,27,27,27,27,27,27,28,27,27,27,27,27,27,27,27,24,28,28,24,24,24,24,27,27,27,28,24,28,28,24,25,28,28,28,28,28,28,28,28,28,28,28,29,5,5,5,5,5,26,25,24,24,24,24,29,25,29,25,29,24,24,2,2,2],[6,6,24,24,28,6,6,6,6,9,9,9,9,28,27,27,27,27,27,27,24,24,24,25,27,27,27,27,27,27,0,0,27,27,24,24,24,24,24,28,27,28,24,28,28,24,25,28,28,28,28,28,28,28,28,28,28,28,28,26,5,5,5,26,26,24,24,24,24,24,24,24,25,25,29,24,29,26,2,2],[6,6,28,6,9,28,28,28,28,28,28,28,28,28,28,27,27,27,27,24,24,0,0,25,28,27,27,27,27,27,0,0,0,28,24,24,24,24,24,24,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,26,26,26,25,26,25,24,27,27,27,27,27,27,27,24,24,29,5,26,2],[6,6,9,28,28,28,28,28,28,28,28,28,28,28,28,28,27,27,28,25,24,0,0,24,24,27,27,27,27,0,24,0,0,24,24,24,24,24,24,24,28,29,29,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,24,25,25,25,26,25,27,27,27,27,27,27,27,27,27,27,27,29,5,26,2],[6,28,28,28,28,28,28,28,28,28,28,28,29,24,28,28,27,27,27,25,25,24,24,25,24,27,27,27,27,27,27,0,24,24,24,24,24,24,24,24,24,28,29,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,26,26,26,29,0,0,27,27,27,24,24,0,24,27,27,27,27,29,5,25],[28,28,28,28,28,28,28,28,28,28,28,24,25,24,28,27,27,27,27,28,24,24,24,24,27,27,27,27,27,27,27,27,28,24,24,24,24,24,24,24,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,5,5,5,0,0,24,27,27,27,24,24,0,24,24,27,27,27,27,29,26],[28,28,28,28,28,28,28,28,28,28,28,28,24,28,28,27,27,28,28,28,28,28,28,28,28,28,27,27,27,27,28,27,28,24,24,24,24,24,24,24,24,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,5,5,5,26,0,0,27,27,27,24,24,24,25,24,27,27,27,27,27,25],[28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,27,28,28,28,27,27,27,28,28,28,28,28,27,28,28,24,24,24,24,24,24,24,24,28,29,28,28,29,28,28,28,28,29,28,28,28,28,28,28,28,28,5,5,5,5,28,27,27,27,27,28,28,28,24,28,27,27,27,27,27,24],[28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,27,27,27,27,27,30,28,27,28,27,28,29,27,27,27,27,28,27,24,24,24,24,24,24,28,28,28,29,28,28,29,28,29,29,29,29,29,29,28,28,28,28,29,28,30,5,5,5,30,28,28,28,28,28,28,29,28,28,28,28,9,28,24,28],[28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,27,28,28,31,29,27,27,28,28,30,29,27,27,27,27,28,24,28,24,24,28,28,28,27,28,30,28,28,29,28,29,29,29,30,26,29,28,28,29,29,28,28,29,5,5,5,30,30,29,29,30,30,31,29,28,30,29,6,6,29,5,26],[28,28,28,28,28,28,28,27,27,28,28,28,28,28,28,28,28,28,27,29,28,30,30,29,27,29,28,29,30,27,27,27,27,28,24,28,28,28,27,27,28,28,29,30,28,28,29,28,29,29,29,30,30,29,29,28,28,28,28,28,28,5,5,5,30,30,28,29,30,30,31,30,29,30,29,6,6,6,29,26],[28,28,24,24,28,29,30,29,29,29,29,28,28,28,28,28,27,27,27,29,29,29,5,30,29,30,30,29,29,27,27,27,28,27,28,27,27,28,28,27,28,24,29,29,28,28,29,28,29,29,30,31,30,30,29,28,28,28,28,27,28,26,5,5,5,28,6,6,6,6,6,28,25,25,25,28,6,6,6,29],[6,24,24,28,29,30,30,30,29,29,29,28,28,24,24,28,27,29,29,30,28,29,31,5,31,31,29,24,30,29,27,27,28,27,28,28,27,28,24,24,24,25,23,29,28,28,30,24,29,29,30,30,30,30,30,29,28,28,28,28,28,29,26,26,26,25,25,25,25,25,25,25,25,25,25,6,6,6,6,29],[6,24,28,28,29,29,30,30,30,29,28,28,27,28,24,28,28,29,30,29,24,24,30,31,5,31,29,24,29,30,27,27,24,24,24,24,24,24,24,24,24,26,26,29,28,28,30,29,30,5,23,30,30,31,30,29,29,29,28,28,28,28,29,25,25,25,25,25,25,25,25,25,25,28,6,6,6,6,6,28],[6,24,24,28,28,29,30,30,29,29,28,28,27,28,28,24,28,28,31,29,25,1,30,31,31,31,30,29,30,31,28,27,28,24,24,24,24,24,24,24,26,26,26,28,28,28,29,29,30,30,30,30,31,30,31,29,29,29,28,28,29,29,30,26,26,26,25,24,28,6,6,6,6,6,6,6,6,6,28,24],[6,24,28,28,28,28,30,29,29,29,29,29,29,29,28,24,28,27,30,30,29,30,5,31,31,5,5,31,30,30,30,27,27,24,24,24,24,24,24,25,26,26,29,29,29,28,29,30,29,30,31,30,23,30,30,29,28,28,28,28,29,29,29,26,26,25,24,24,24,28,6,6,6,6,6,6,6,6,6,28],[6,28,28,28,29,29,29,29,29,29,29,30,30,29,29,24,29,28,30,30,30,30,30,30,30,29,30,29,30,30,30,27,28,24,24,24,24,24,26,26,26,26,26,23,28,28,29,29,29,30,30,30,31,30,30,29,29,24,24,24,24,24,24,25,24,25,24,24,24,6,6,6,6,6,6,6,6,6,6,6],[25,29,28,29,30,30,30,29,29,28,29,30,29,29,29,24,29,28,30,30,30,30,23,26,26,26,26,30,31,31,30,27,27,24,24,25,25,26,26,26,26,26,26,26,28,28,28,28,28,29,30,30,30,23,23,23,29,24,24,24,24,25,24,25,24,25,24,24,28,6,6,9,6,6,6,6,6,6,6,6],[2,29,29,29,30,30,30,29,29,24,29,29,29,29,29,29,29,28,29,29,30,30,30,26,26,26,26,30,31,30,28,27,27,25,26,26,26,26,26,26,26,26,26,25,26,29,28,28,28,30,31,30,30,30,31,30,23,24,24,24,24,24,24,25,24,24,28,6,6,6,6,27,9,6,6,6,6,6,6,6],[2,30,29,29,30,29,29,29,24,24,29,29,29,29,30,30,29,29,29,28,29,30,30,30,26,26,23,31,30,28,27,28,25,26,26,26,26,26,26,26,26,25,25,26,26,29,29,28,28,30,31,23,29,30,30,31,30,29,30,29,23,30,30,30,29,6,25,28,6,6,6,9,28,6,6,6,6,6,6,6],[2,30,29,29,29,29,29,29,24,28,29,29,29,29,30,30,29,29,29,24,29,30,30,30,29,29,29,28,27,27,28,29,26,26,26,26,26,26,26,26,24,26,26,26,26,26,28,28,29,31,23,23,29,29,29,31,31,23,31,30,23,31,31,31,29,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[2,30,30,29,29,29,29,29,29,29,29,29,30,30,30,30,30,29,28,24,29,29,30,29,28,24,24,24,27,27,29,26,26,26,26,26,26,26,26,24,26,26,26,26,26,26,28,28,30,31,23,30,29,29,30,29,30,30,30,30,23,31,31,31,29,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[2,30,30,30,29,29,29,29,29,29,29,29,30,30,30,30,30,29,29,29,29,30,26,8,29,25,24,25,24,29,26,26,26,26,26,26,26,29,24,26,26,26,26,26,26,29,28,28,31,31,23,29,29,28,28,28,28,30,23,29,30,31,31,31,29,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[24,24,24,24,24,25,28,29,29,25,29,29,30,29,30,30,29,29,29,29,30,5,4,25,4,4,25,25,25,25,26,26,26,26,26,26,29,24,26,26,26,26,26,26,26,29,28,28,29,31,23,28,30,28,28,28,28,29,23,29,30,31,31,30,29,29,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[24,24,24,25,24,25,24,29,29,29,29,29,30,29,29,29,29,29,29,29,30,5,4,4,4,4,4,4,24,26,26,26,26,26,26,25,24,25,26,26,26,26,26,26,29,28,28,28,28,31,23,29,28,28,28,28,28,29,28,28,29,5,26,25,29,29,6,6,6,9,6,6,9,6,6,6,6,6,6,6]];

function getPixelColor(x, y) {
    return board[y * WIDTH + x]
}

function setPixelColor(setx, sety, setc) {
    x = setx; y = sety; PEN = setc;
    put();
}

function getBoardFromXY(x, y, width, heigh) {
    let board = [];
    for (let i = 0; i < heigh; i++) {
        board[i] = [];
        for (let j = 0; j < width; j++) {
            board[i][j] = getPixelColor(x + j, y + i);
        }
    }
    return board;
}

function diffBoards(source, dest) {
    const diff = [];
    dest.forEach((row, y) => {
        row.forEach((expectedCell, x) => {
            if (expectedCell !== source[y][x]) {
                diff.push({ x, y, expectedCell,currentCell: source[y][x]});
            }
        });
    });
    return diff;
}
function put() {
    if (CD > Date.now()) return
    canvselect.style.background = ''; palette.style.transform = 'translateY(100%)'; colors.children[PEN].classList.remove('sel'); pok.classList.remove('enabled')
    set(Math.floor(x), Math.floor(y), PEN)
    canvselect.children[0].style.display = 'block'; canvselect.style.outline = ''; canvselect.style.boxShadow = ''
    audios.cooldownStart.run()
    CD = Date.now() + (localStorage.vip ? (localStorage.vip[0] == '!' ? 0 : COOLDOWN / 2) : COOLDOWN)
    let a = new DataView(new Uint8Array(6).buffer)
    a.setUint8(0, 4)
    a.setUint32(1, Math.floor(x) + Math.floor(y) * WIDTH)
    a.setUint8(5, PEN)
    console.log(`setting ${Math.floor(x)}, ${Math.floor(y)} to ${PEN}`);
    PEN = -1

    ws.send(a)
}

function doSingle() {
    const src = getBoardFromXY(destPosition.x, destPosition.y, destBoard[0]?.length || 0, destBoard.length)
    const diff = diffBoards(src, destBoard);
    
    const randomized = diff.sort(() => Math.random() - 0.5)[0];
    if (randomized) {
        setPixelColor(randomized.x + destPosition.x, randomized.y + destPosition.y, randomized.expectedCell);
    }
    console.log(diff.length,"difference remaining");
}
setInterval(()=>!onCooldown && doSingle(),500)
doSingle();
