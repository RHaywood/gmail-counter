function snapshotEmails() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var jcfd = ss.getSheetByName("Sheet1");
  jcfd.activate();
  jcfd.insertRowAfter(1);
  
  setValue(jcfd, "A2", new Date())
  setValue(jcfd, "B2", GmailApp.getInboxThreads().length)
}

function setValue(sheet, column, value){
  var cell = sheet.setActiveSelection(column);
  cell.setValue(value);
}