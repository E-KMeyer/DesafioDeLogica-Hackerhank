function processData(input) {
  //Enter your code here
  let lines = input.split('\n');
  let n = parseInt(lines[0]);
  let points = [];
  for (let i = 1; i <= n; i++) {
      let [x, y] = lines[i].split(' ').map(Number);
      points.push({x, y});
  }
  let maxDistance = 0;
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          let distance = Math.sqrt(Math.pow(points[i].x - points[j].x, 2) + Math.pow(points[i].y - points[j].y, 2));
          maxDistance = Math.max(maxDistance, distance);
      }
  }
  console.log(maxDistance);
}