// function convertFahrToCelsius(f) {
//    let celsius;
//    let fahr = Number(f);

 //   if (typeof f !== "boolean" && !isNaN(fahr)) {
 //       celsius = ((fahr - 32) * 5/9).toFixed(4);
 //   } else if(Array.isArray(f)) {
 //       celsius = `${JSON.stringify(f)} is not a valid number but a/an array`
 //   } else {
 //       celsius = `${JSON.stringify(f)} is not a valid number but a/an ${typeof f}` 
 //   }

  //  console.log(celsius);
  //  return celsius;
//}
 //convertFahrToCelsius(62);

const checkYuGiOh = (number) => {
    let formatedArray = [];
    let check = JSON.stringify(number);

    if (isNaN(number) || number == null || !parseInt(number)) {
        console.log(`invalid parameter: ${check}`);
        return `invalid parameter: ${check}`;
    } else {
        for (let i = 1; i <= number; i++) {
            if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                formatedArray.push("yu-gi-oh")
            } else if (i % 2 === 0 && i % 3 === 0) {
                formatedArray.push("yu-gi")
            } else if (i % 2 === 0 && i % 5 === 0) {
                formatedArray.push("yu-oh")
            } else if (i % 3 === 0 && i % 5 === 0) {
                formatedArray.push("gi-oh")
            } else if (i % 2 === 0) {
                formatedArray.push("yu")
            } else if (i % 3 === 0) {
                formatedArray.push("gi")
            } else if (i % 5 === 0) {
                formatedArray.push("oh")
            } else {
                formatedArray.push(i) 
            } 
        }
        console.log(formatedArray)
        return formatedArray;
    }
}
checkYuGiOh(80);