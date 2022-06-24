let courses = [
  {name: "Courses in England", prices: [0, 100]},
  {name: "Courses in Germany", prices: [500, null]},
  {name: "Courses in Italy", prices: [100, 200]},
  {name: "Courses in Russia", prices: [null, 400]},
  {name: "Courses in China", prices: [50, 250]},
  {name: "Courses in USA", prices: [200, null]},
  {name: "Courses in Kazakhstan", prices: [56, 324]},
  {name: "Courses in France", prices: [null, null]},
];

const filteredCourses = ([startValue, endValue]) => {
  let coursesCopy = [...courses]
  return coursesCopy.filter((el) => {
      if (startValue !== null && endValue === null) {
        return el.prices[0] >= startValue
          || el.prices[1] >= startValue
      } else if (el.prices[1] !== null && el.prices[0] !== null) {
        return startValue >= el.prices[0] && endValue <= el.prices[1]
          || startValue >= el.prices[0] && endValue >= el.prices[1]
          || startValue <= el.prices[0] && endValue <= el.prices[1]
      } else if (el.prices[0] === null && el.prices[1] !== null) {
        return el.prices[0] >= 0 && el.prices[1] >= endValue
      } else if (el.prices[0] !== null && el.prices[1] === null) {
        return el.prices[0] <= endValue
      } else if (el.prices[0] === null && el.prices[1] === null) {
        return el.prices[0] === startValue
      }
    }
  )
}

console.log(filteredCourses([null, 200]))
console.log(filteredCourses([100, 350]))
console.log(filteredCourses([200, null]))