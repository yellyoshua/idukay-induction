
module.exports = function efficientJanitor(weight = []) {
  let counts = 0;
  const ascendentSort = (a, b) => a - b;
  weight = weight.sort(ascendentSort);
  while (weight.length) {
    const first = weight.shift();
    while(weight.length) {
      const last = weight.pop()
      if ((first + last) <= 3)
        break;
      counts++;
    }
    counts++;
  }

  return counts;

  const parseFloatVal = (val) => {
    return Number(
      parseFloat(
        val
      ).toFixed(3)
    )
  }
  const filterNonValues = (val) => {
    return val === null || val === undefined;
  }
  const delFromIndex = (arr = [], index = 0) => {
    const clone = arr;
    delete clone[index];
    return clone.filter(filterNonValues)
  }
  let numsGT = weight.filter((w) => w >= 2.01);
  let numsLT = weight.filter((w) => w < 2.01);
  numsLT = numsLT.sort((a, b) => a - b);

  const trimNumsSlices = (arr = []) => {
    const newArray = [];
    let index = 0;
    let lastIndex = (arr.length - 1);

    for (; index < arr.length;) {
      const num = arr.shift();
      const last = arr.pop();
      if (last && parseFloatVal(num + last) <= 3) {
        newArray.push(
          parseFloatVal(num + last)
        );
      } else {
        newArray.push(num);
      }
    }

    return newArray;
  }

  arr = trimNumsSlices(numsLT);
  // arr = arr.sort((a, b) => a - b);
  // arr = trimNumsSlices(arr);
  // arr = arr.sort((a, b) => a - b);
  // arr = trimNumsSlices(arr);
  // arr = arr.sort((a, b) => a - b);
  
  // numsLT.reduce((prev, current) => {
  //   if (parseFloatVal(prev + current) <= 3.00) {
  //     console.log({prev, current})
  //     arr.push(parseFloatVal(prev + current));
  //   }
  //   return current;
  // }, 0);


  // for (let i = 0; i < numsLT.length;) {
  //   const w = numsLT[i];
  //   if (parseFloatVal(w + arr[arr.length - 1]) <= 3) {
  //     arr[arr.length - 1] = parseFloatVal(w + arr[arr.length - 1]);
  //     i++;
  //   } else if (parseFloatVal(w + numsLT[i + 1]) <= 3) {
  //     arr.push(parseFloatVal(w + numsLT[i + 1]))
  //     i += 2;
  //   }
  //   arr.push(w);
  //   i++;
  // }

  const total = [...numsGT, ...arr];
  return total.length;

  // for (let i = 0; i < weight.length;) {
  //   const w = weight[i];
  //   if (parseFloatVal(w + arr[arr.length - 1]) <= 3) {
  //     arr[arr.length - 1] = parseFloatVal(w + arr[arr.length - 1]);
  //     i++;
  //   } else if (parseFloatVal(w + weight[i + 1]) <= 3) {
  //     arr.push(parseFloatVal(w + weight[i + 1]))
  //     i += 2;
  //   }
  //   arr.push(w);
  //   i++;
  // }

  return arr.length;
}