export default  function yearsAgo(years) {
  const yearNo = new Date();
 
  return yearNo.getFullYear() - years;
}