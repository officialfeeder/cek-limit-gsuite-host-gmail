function checkMyQuota() { 
throw "You can still send " + MailApp.getRemainingDailyQuota() + " emails today."; 
}
