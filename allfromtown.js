export default function countAllFromTown(RegNo, town){
    let reglist = RegNo.split(',');
    let count = 0;
    for (let i=0;i<reglist.length;i++) {
      let regtown = reglist[i].trim();
      if (regtown.startsWith(town)){
        count++
      }
  } return count;
  }