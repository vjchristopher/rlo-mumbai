var num = document.getElementById('usr').value;
var licensee = document.getElementById('lic').value;
      
var params = "usrnumber="+num+"&licensee="+licensee;
var usrSearchPhp="php/usr_search.php"
dc.loadFaq=function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      usrSearchPhp+"?q="+params,
      buildAndShowCategoriesHTML);
   
  };
  // Builds HTML for the categories page based on the data
  // from the server
  function buildAndShowCategoriesHTML () {
    // Load title snippet of categories page
    $ajaxUtils.sendGetRequest(
      usrTitleHtml,
      function (usrTitleHtml) {
        // Retrieve single category snippet
        $ajaxUtils.sendGetRequest(
          usrStatusHtml,
          function (usrStatusHtml) {
            var categoriesViewHtml =
              buildCategoriesViewHtml(usrTitleHtml,
                                      usrStatusHtml);
            insertHtml("#main-content", categoriesViewHtml);
          },
          false);
      },
      false);
  }  
  // Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildCategoriesViewHtml(categories,
    usrTitleHtml,
    usrHeadHtml) {
//console.log(categoryHtml);                                
var finalHtml = usrTitleHtml;
finalHtml += "<section class='row'>";

// Process using the Display() function and use outdata

var html = usrStatusHtml;
var name=" "+" - "+categories[key]+'<br>';
var keyindex=key;
html=insertProperty(html,"key",keyindex);
//console.log(keyindex,name);
html=insertProperty(html,"name",name);
finalHtml += html;
i++
})
finalHtml += "</section>";
return finalHtml;

}
