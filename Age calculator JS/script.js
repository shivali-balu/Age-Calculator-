function calculateAge() {
    var user_date = document.getElementById("date").value;
    var user_month = document.getElementById("month").value;
    var user_year = document.getElementById("year").value;
  // Get today's date, month, and year
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; // Note: January is 0, so we add 1 to get the actual month
  var year = today.getFullYear(); 
  var user_age_year = year-user_year ; 
  var user_age_month = month-user_month ; 
  var user_age_day = day-user_date ;  
  const result = document.getElementById("result");
  result.innerHTML = `Your age is ${user_age_year} years  ${user_age_month} months  ${user_age_day} days` ;  
  result.style.fontWeight = "bold" 

} 



