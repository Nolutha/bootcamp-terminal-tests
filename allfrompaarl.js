export default function allPaarl(registration){
    let regList = registration.split(',');
    let arr = [];
    for ( let i=0;i<regList.length;i++) {
      let item = regList[i].trim();
      if (item.startsWith('CJ')) {
        arr.push(item);
      }
  }
    console.log(arr);
    return arr;
  }