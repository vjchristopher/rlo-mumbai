//  $(function () { // Same as document.addEventListener("DOMContentLoaded"...

// //   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });

//   // In Firefox and Safari, the click event doesn't retain the focus
//   // on the clicked button. Therefore, the blur event will not fire on
//   // user clicking somewhere else in the page and the blur event handler
//   // which is set up above will not be called.
//   // Refer to issue #28 in the repo.
//   // Solution: force focus on the element that the click event fired on
//   $("#navbarToggle").click(function (event) {
//     $(event.target).focus();
//   });
// });
// $(function(){ 
//   var navMain = $("#collapsable-nav");

//   navMain.on("click", "a", null, function () {
//       navMain.collapse('hide');
//   });
// });

(function (global) {

var dc = {};
var faqCategory;
var homeHtml = "snippets/home-snippet.html";
var homeTitleHtml="snippets/home-title.html";
var lateFeeTitleHtml="snippets/lateFee-title.html";
var lateFeeStatusHtml="snippets/lateFee-snippet.html";
var faqHeadHtml="snippets/faq-head.html";
var faqCategories="json/faq-head.json";
var faqContents="json/faq.json";
var formContents="Docs/Forms/";
var orderContents="Docs/Orders/";
var academicPaperContents="Docs/Academic/";
var disclosureHtml="snippets/disclosure.html";
var disclaimerHtml="snippets/disclaimer.html";
var faqTitleHtml = "snippets/faq-head-title.html";
var faqTitleItemsHtml= "snippets/faq-contents-title.html";
var faqContentsHtml = "snippets/faq-contents.html";
var formsTitleHtml= "snippets/forms-head-title.html";
var formsHeadHtml= "snippets/forms-head.html";
var formCategories="json/forms-head.json";
var academicPapers="json/academic-head.json";
var academicTitleHtml="snippets/academic-title.html";
var academicStatusHtml="snippets/academic-snippet.html";
var contactHtml="snippets/contact.html";
var ordersTitleHtml= "snippets/orders-head-title.html";
var ordersHeadHtml= "snippets/orders-head.html";
var orderCategories="json/orders-head.json";
var importStatusHtml="snippets/import-snippet.html";
var importTitleHtml="snippets/import-title.html";
var newGocStatusHtml="snippets/newGoc-snippet.html";
var newGocTitleHtml="snippets/newGoc-title.html";
var newRtrStatusHtml="snippets/newRtr-snippet.html";
var newRtrTitleHtml="snippets/newRtr-title.html";
var gocStatusHtml="snippets/goc-snippet.html";
var gocTitleHtml="snippets/goc-title.html";
var usrTitleHtml="snippets/usr-title.html";
var usrStatusHtml="snippets/usr-snippet.html";
var amslTitleHtml="snippets/amsl-title.html";
var amslStatusHtml="snippets/amsl-snippet.html";
var mmslTitleHtml="snippets/mmsl-title.html";
var mmslStatusHtml="snippets/mmsl-snippet.html";
var menuHeadHtml="snippets/menu-head.html";
// var menuItemsUrl 
//   "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";
var examTitleHtml="exam-snippets/exam-login-title.html";
var examStatusHtml="exam-snippets/exam-login.html";
var loginStatusHtml="php/exam-register.php";
//var welcomeStatusHtml="php/exam-welcome.php";
var registerTitleHtml="exam-snippets/exam-register-title.html";
var registerStatusHtml="exam-snippets/exam-register.html";
var welcomeTitleHtml="exam-snippets/exam-welcome-title.html";
var welcomeStatusHtml="exam-snippets/exam-welcome.html";
var submitTitleHtml="exam-snippets/exam-submit-title.html";
var submitStatusHtml="exam-snippets/exam-submit.html";
var resetStatusHtml="exam-snippets/exam-reset.html";
var resetTitleHtml="exam-snippets/exam-reset-title.html";
 //global array to filter duplicate search values.
var home="http://localhost/simpledb/?";
 var dup=Array();
 var userFname="";
 var userid="";
 var userLoggedin=false;
//  var outdata="";
// var grossout="";
 //select the licensee from optbox and show it in the licensee textbox.   




// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};



// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
// event.preventDefault;
// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeTitleHtml,
  function(responseText){
    var firstResponse=responseText;
  $ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = firstResponse+responseText;
  },
  false);
  //console.log(responseText);
},
false);

});

/*To display the email id when the mouse is moved into*/
document.getElementById("emailid").addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "green";
  // event.target.style.text="";
  email=document.getElementById("emailid");
  email.getElementsByTagName("span")[1].innerHTML="wrlo.wpc@gmail.com";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
    email.getElementsByTagName("span")[1].innerHTML="email";
  }, 1500);
}, false);
/*To display the phone number when the mouse is moved into*/
document.getElementById("phoneid").addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "green";
  // event.target.style.text="";
  email=document.getElementById("phoneid");
  email.getElementsByTagName("span")[1].innerHTML="022-28672351";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
    email.getElementsByTagName("span")[1].innerHTML="Contact";
  }, 1500);
}, false);


dc.goHome=function() {
  window.location.href="./?";
};

/* To load the contact details*/

dc.loadContacts=function() {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    contactHtml,
      function (responseText) {
        document.querySelector("#main-content")
          .innerHTML = responseText;
      },
      false);

};


//load the FAQ head menu-JSON
dc.loadDisclosure=function () {
  showLoading("#main-content");
  // first display the disclosure statement
$ajaxUtils.sendGetRequest(
    disclosureHtml,
      function (responseText) {
        document.querySelector("#main-content")
          .innerHTML = responseText;
      },
      false);
};
    
dc.loadFaq=function () { 
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    faqCategories,
    buildAndShowCategoriesHTML);
 
};


// Builds HTML for the categories page based on the data
// from the server
function buildAndShowCategoriesHTML (categories) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    faqTitleHtml,
    function (faqTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        faqHeadHtml,
        function (faqHeadHtml) {
          var categoriesViewHtml =
            buildCategoriesViewHtml(categories,
                                    faqTitleHtml,
                                    faqHeadHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}


// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildCategoriesViewHtml(categories,
                                 faqTitleHtml,
                                 faqHeadHtml) {
  //console.log(categoryHtml);                                
  var finalHtml = faqTitleHtml;
  finalHtml += "<section class='row'>";

  // Loop over categories
  
  var i=1;
  // Now display the headings for 9 categories of FAQ . How to make it clickable ?
  Object.keys(categories).forEach((key,index)=>{
    
      var html = faqHeadHtml;
      var name=" "+" - "+categories[key]+'<br>';
      var keyindex=key;
      html=insertProperty(html,"key",keyindex);
      //console.log(keyindex,name);
      html=insertProperty(html,"name",name);
      finalHtml += html;
      i++;
  });
  finalHtml += "</section>";
  return finalHtml;
  
}

// Load the menu items view-JSON
// 'categoryShort' is a short_name for a category
dc.loadFaqItems = function (categoryShort) {
  
  faqCategory=categoryShort.toUpperCase();
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
   faqContents,
    buildAndShowMenuItemsHTML);
  
};


// Builds HTML for the single category page based on the data
// from the server
function buildAndShowMenuItemsHTML (categoryMenuItems) {
  // Load title snippet of menu items page
  $ajaxUtils.sendGetRequest(
    faqTitleItemsHtml,
    function (faqTitleItemsHtml) {
      // Retrieve single menu item snippet
      $ajaxUtils.sendGetRequest(
        faqContentsHtml,
        function (faqContentsHtml) {
          var menuItemsViewHtml =
            buildMenuItemsViewHtml(categoryMenuItems,
                                   faqTitleItemsHtml,
                                   faqContentsHtml);
          insertHtml("#main-content", menuItemsViewHtml);
        },
        false);
    },
    false);
}


// Using category and menu items data and snippets html
// build menu items view HTML to be inserted into page
function buildMenuItemsViewHtml(categoryMenuItems,
                                faqTitleItemsHtml,
                                faqContentsHtml) {
//console.log(categoryMenuItems[faqCategory]);

  faqTitleItemsHtml =
    insertProperty(faqTitleItemsHtml,
                   "name",
                   faqCategory);
 

  var finalHtml = faqTitleItemsHtml;
  finalHtml += "<section class='row'>";

  //Object.keys(categoryMenuItems[faqCategory]).forEach((key,index)=>{
  for (var i = 0; i <categoryMenuItems[faqCategory].length; i++) {  
    var html = faqContentsHtml;
    var contents=categoryMenuItems[faqCategory][i];
    // var head=key;
    // html=insertProperty(html,"head",key);
    //console.log(categoryMenuItems[faqCategory][i]);
    //console.log(contents);
    Object.keys(contents).forEach((key,index)=>{
      var question=(i+1) + ") "+ key;
     
      var answer='<br>'+'<br>'+contents[key];
      
      html=insertProperty(html,"question",question);
      html=insertProperty(html,"answer",answer);
     // console.log(question, contents[key]);
    })

    finalHtml += html;
    
}

  finalHtml += "</section>";
  return finalHtml;
}

dc.loadLatefee=function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    lateFeeTitleHtml,
      function (lateFeeTitleHtml) {
        $ajaxUtils.sendGetRequest(
           lateFeeStatusHtml,
              function (lateFeeStatusHtml) {
                $ajaxUtils.sendGetRequest(
                    homeHtml,
                      function (homeHtml) {
                          var categoriesViewHtml =
                              buildLatefeeViewHtml(lateFeeTitleHtml,
                      lateFeeStatusHtml,homeHtml );
                //console.log(usrStatusHtml);
              insertHtml("#main-content", categoriesViewHtml);

            },
            false);
        },
        false);
      },
      false);
    };


  function buildLatefeeViewHtml(lateFeeTitleHtml,
    lateFeeStatusHtml,homeHtml){
    var finalHtml = lateFeeTitleHtml;
    finalHtml += "<section class='row'>";
    var html=lateFeeStatusHtml;
    finalHtml += html;    
    finalHtml += "</section>";    
    finalHtml+=homeHtml;
    return finalHtml;
   
  };

dc.lateFeeGoc=function() {
   var duration, LFee;
   var validity = document.getElementById('dox').value;
   var duration1= document.getElementById('20yrs');
   var duration2= document.getElementById('life');
  //  var types = document.getElementById('vtypes').value;
  
  console.log(validity);
 
 //if the license number not provided, exit
 if (validity=="") {
  console.log("validity not given"); 
  return;
 }
if (duration1.checked) {
  duration=20;
} else if (duration2.checked){
  duration=30;
} else {
  duration=0;
}
/* calculate the no of months elapsed*/
window.outdata="";
if (duration==20) {
  fee=5000;
  showLatefee(validity,fee);

} else if(duration==30){
 fee=10000;
 showLatefee(validity,fee);
} else{
 document.getElementById('statement').innerHTML="The renewal type not selected";
  
}

       //console.log(outdata);
       document.getElementById('statement').innerHTML = outdata;
       document.getElementById('totLateFee').innerHTML =grossout;
 
};

dc.lateFeeUsr=function() {
  var expiry = document.getElementById('fox').value;
  var annualFee=document.getElementById('fees').value;   
  //  var types = document.getElementById('vtypes').value;
  
  console.log(expiry);

 //if the license number not provided, exit
 if (expiry=="") {
  console.log("expiry date not given"); 
  return;
 }
 if (annualFee=="") {
  console.log("Fee amount not given"); 
  return;
 }
/*start the calculation and display it*/
 window.outdata="";
showLatefeeUsr(expiry,annualFee)

  //console.log(outdata);
  document.getElementById('statement2').innerHTML = outdata;
  document.getElementById('totLateFee2').innerHTML =grossout;
};

//load the Academic disclaimer
dc.loadDisclaimer=function () {
  showLoading("#main-content");
  // first display the disclaimer statement
$ajaxUtils.sendGetRequest(
    disclaimerHtml,
      function (responseText) {
        document.querySelector("#main-content")
          .innerHTML = responseText;
      },
      false);
};
    

//load the Academic papaers head menu-JSON
dc.loadAcademic=function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    academicPapers,
    buildAndShowAcademicCategoriesHTML);
 
};


// Builds HTML for the categories page based on the data
// from the server
function buildAndShowAcademicCategoriesHTML (categories) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    academicTitleHtml,
      function (academicTitleHtml) {
        $ajaxUtils.sendGetRequest(
           academicStatusHtml,
              function (academicStatusHtml) {
                  var categoriesViewHtml =
                  buildAcademicCategoriesViewHtml(categories,
                  academicTitleHtml,academicStatusHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);   
      },
      false);   
};

function buildAcademicCategoriesViewHtml(categories,academicTitleHtml,academicStatusHtml) {

  var finalHtml = academicTitleHtml;
  finalHtml += "<section class='row'>";
    // Loop over categories
    // Now display the headings for different categories of Forms . How to make it clickable ?
    Object.keys(categories).forEach((key,index)=>{  // Take the outer key-value pairs;key=GMDSS, RTR etc.
      //to display all the members of the values in the key-value
  
      var html =academicStatusHtml;
      var name="";
      var link=""; 
      //console.log(categories[key]);
     
      name=" "+categories[key]["Paper"]
      link= categories[key]["link"];    
      var keyPut=key.slice(0,-1)+" "+key.slice(-1)+ " : ";
      // // html=html+'<li>'+'{{subkey}}{{name}}{{link}}'+'</li>';
      html=insertProperty(html,"key",keyPut);
      html=insertProperty(html,"name",name);
      html=insertProperty(html,"link",link);
      finalHtml += html;
  
    })
  
  finalHtml += "</section>";
  return finalHtml;


};



//load the Forms head menu-JSON
dc.loadForms=function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    formCategories,
    buildAndShowFormsCategoriesHTML);
 
};


// Builds HTML for the categories page based on the data
// from the server
function buildAndShowFormsCategoriesHTML (categories) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    formsTitleHtml,
    function (formsTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        formsHeadHtml,
        function (formsHeadHtml) {
          var categoriesViewHtml =
            buildFormsCategoriesViewHtml(categories,
                                    formsTitleHtml,
                                    formsHeadHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
};

// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildFormsCategoriesViewHtml(categories,
  formsTitleHtml,
  formsHeadHtml) {
  //console.log(categoryHtml);                                
  var finalHtml = formsTitleHtml;
  finalHtml += "<section class='row'>";

    // Loop over categories
    // Now display the headings for different categories of Forms . How to make it clickable ?
  Object.keys(categories).forEach((key,index)=>{  // Take the outer key-value pairs;key=GMDSS, RTR etc.
    //to display all the members of the values in the key-value

    var html = formsHeadHtml;
    var name="";
    var link=""; 
    //console.log(categories[key]);
   
    name=" "+categories[key]["Form"]
    link= categories[key]["link"];    
    var keyPut=key.slice(0,-1)+" form "+key.slice(-1)+ " : ";
    // // html=html+'<li>'+'{{subkey}}{{name}}{{link}}'+'</li>';
    html=insertProperty(html,"key",keyPut);
    html=insertProperty(html,"name",name);
    html=insertProperty(html,"link",link);
    finalHtml += html;

  })

finalHtml += "</section>";
return finalHtml;

};

/* The concerned paper is opened when you click the academic papers menu*/
dc.loadAcademicItems = function (categoryForm) {
  
  //console.log(categoryForm);
  window.open(academicPaperContents+categoryForm,"_blank");

};




// Load the menu items view-JSON
// 'categoryShort' is a short_name for a category
dc.loadFormsItems = function (categoryForm) {
  
    //console.log(categoryForm);
    window.open(formContents+categoryForm);
  
  };
 
//load the orders head menu-JSON
dc.loadOrders=function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    orderCategories,
    buildAndShowOrdersCategoriesHTML);
 
};
//Builds HTML for the categories page based on the data
// from the server
function buildAndShowOrdersCategoriesHTML (categories) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    ordersTitleHtml,
    function (ordersTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        ordersHeadHtml,
        function (ordersHeadHtml) {
          var categoriesViewHtml =
            buildOrdersCategoriesViewHtml(categories,
                                    ordersTitleHtml,
                                    ordersHeadHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}

// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildOrdersCategoriesViewHtml(categories,
  ordersTitleHtml,
  ordersHeadHtml) {
  //console.log(categoryHtml);                                
  var finalHtml = ordersTitleHtml;
  finalHtml += "<section class='row'>";

    // Loop over categories
    // Now display the headings for different categories of Forms . How to make it clickable ?
  Object.keys(categories).forEach((key,index)=>{  // Take the outer key-value pairs;key=GMDSS, RTR etc.
    //to display all the members of the values in the key-value

    var html = ordersHeadHtml;
    var name="";
    var link=""; 
    //console.log(categories[key]);
    name=" "+categories[key]["Order"];
    link= categories[key]["Link"];    

    // // html=html+'<li>'+'{{subkey}}{{name}}{{link}}'+'</li>';
    html=insertProperty(html,"key",key);
    html=insertProperty(html,"name",name);
    html=insertProperty(html,"link",link);
    finalHtml += html;

  })

finalHtml += "</section>";
return finalHtml;

}

// 'categoryShort' is a short_name for a category
dc.loadOrdersItems = function (categoryOrder) {
  
  if (categoryOrder=="") {
   return; //no order to be displayed
  }
    
 window.open(orderContents+categoryOrder);
        
};

//import section usinf import.csv file
dc.loadImport = function () {  
  // showLoading("#main-content");
     $ajaxUtils.sendGetRequest(
       importTitleHtml,
        function (importTitleHtml) {         
            $ajaxUtils.sendGetRequest(
              importStatusHtml,
              function (importStatusHtml) {
               $ajaxUtils.sendGetRequest(
                 homeHtml,
                 function (homeHtml) {
               var categoriesViewHtml =
                 buildImportViewHtml(importTitleHtml,
                   importStatusHtml,homeHtml );
             //console.log(usrStatusHtml);
           insertHtml("#main-content", categoriesViewHtml);
           
         },
         false);
     },
     false);
   },
   false);
   }
 
   function buildImportViewHtml(importTitleHtml,importStatusHtml,homeHtml){
     var finalHtml = importTitleHtml;
     finalHtml += "<section class='row'>";
     var html=importStatusHtml;
     finalHtml += html;    
     finalHtml += "</section>";    
     finalHtml+=homeHtml;
     return finalHtml;
    
   }
 
 // The data of candidates is stored in csv file and it is extratced, using Papa software to parse it and coverted from array to table.
 
   dc.loadImportData=function() {
     //showLoading("#main-content");
     var url = 'Docs/Import/import.csv?';
   
     fetch(url)
     .then(function (response) {
       return response.text();
     })
     .then(function (body) {
     
         //parse the CSV file using papaparse into anarray
         var data = Papa.parse(body);
         console.log(data.data);
         arrayToTable(data.data);     
      
     });
   }



// New RTR exam approved list of candidates and their certifcate status.
dc.loadNewRtr = function () {
  
  //showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      newRtrTitleHtml,
       function (newRtrTitleHtml) {   
        $ajaxUtils.sendGetRequest(
          newRtrStatusHtml,
           function (newRtrStatusHtml) { 
            $ajaxUtils.sendGetRequest(
              homeHtml,
              function (homeHtml) {     
                var categoriesViewHtml =
                buildNewRtrViewHtml(newRtrTitleHtml,newRtrStatusHtml,homeHtml);
            //console.log(usrStatusHtml);
          insertHtml("#main-content", categoriesViewHtml);          
        },
        false);
    },
    false);
  },
  false);
  }

  function buildNewRtrViewHtml(newRtrTitleHtml,newRtrStatusHtml,homeHtml){
    var finalHtml =newRtrTitleHtml;
    finalHtml+= "<section class='row'>"; 
    var html=newRtrStatusHtml;
    finalHtml += html;   
    finalHtml += "</section>";        
    finalHtml +=homeHtml;
    return finalHtml;
   
  }

  
// The data of candidates is stored in csv file and it is extratced, using Papa software to parse it and coverted from array to table.
  dc.loadNewRtrData=function() {
    //showLoading("#main-content");
    var url = 'Docs/RTR/Rtr_Mumbai_19.csv?';
  
    fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
    
        //parse the CSV file using papaparse into anarray
        var data = Papa.parse(body);
        console.log(url);
        arrayToTable(data.data);     
     
    });
  }

dc.loadNewGoc = function () {  
 // showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      newGocTitleHtml,
       function (newGocTitleHtml) {         
           $ajaxUtils.sendGetRequest(
             newGocStatusHtml,
             function (newGocStatusHtml) {
              $ajaxUtils.sendGetRequest(
                homeHtml,
                function (homeHtml) {
              var categoriesViewHtml =
                buildNewGocViewHtml(newGocTitleHtml,
                  newGocStatusHtml,homeHtml );
            //console.log(usrStatusHtml);
          insertHtml("#main-content", categoriesViewHtml);
          
        },
        false);
    },
    false);
  },
  false);
  }

  function buildNewGocViewHtml(newGocTitleHtml,newGocStatusHtml,homeHtml){
    var finalHtml = newGocTitleHtml;
    finalHtml += "<section class='row'>";
    var html=newGocStatusHtml;
    finalHtml += html;    
    finalHtml += "</section>";    
    finalHtml+=homeHtml;
    return finalHtml;
   
  }

// The data of candidates is stored in csv file and it is extratced, using Papa software to parse it and coverted from array to table.

  dc.loadNewGocData=function() {
    //showLoading("#main-content");
    var url = 'Docs/GOC/Goc_2021.csv?';
  
    fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
    
        //parse the CSV file using papaparse into anarray
        var data = Papa.parse(body);
        //console.log(data.data);
        arrayToTable(data.data);     
     
    });
  }
  
  function arrayToTable(data){
  var table = document.getElementById("table");  // set this to your table
  // clear the table entries already displayed if any
  while(table.rows.length > 0) {
    table.deleteRow(0);
  }
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  data.forEach(function(items) {
    var row = document.createElement("tr");
    items.forEach(function(item) {
      var cell = document.createElement("td");
      cell.textContent = item;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  }

  
dc.loadGoc = function () {
  
  showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      gocTitleHtml,
       function (gocTitleHtml) {         
           $ajaxUtils.sendGetRequest(
             gocStatusHtml,
             function (gocStatusHtml) {
              $ajaxUtils.sendGetRequest(
                homeHtml,
                function (homeHtml) {
              var categoriesViewHtml =
                buildGocViewHtml(gocTitleHtml,
                  gocStatusHtml,homeHtml );
            //console.log(usrStatusHtml);
          insertHtml("#main-content", categoriesViewHtml);
          
        },
        false);
    },
    false);
  },
  false);
  }

  function buildGocViewHtml(gocTitleHtml,gocStatusHtml,homeHtml){
    var finalHtml = gocTitleHtml;
    finalHtml += "<section class='row'>";
    var html=gocStatusHtml;
    finalHtml += html;    
    finalHtml += "</section>";    
    finalHtml+=homeHtml;
    return finalHtml;
   
  }



dc.gocSearch=function() {
    // showLoading("#main-content");
    var num = document.getElementById('goc').value;
    //Remove other characters.
    //console.log(num);
    if (num.length>4) {
      num=num.slice(-4);
    }
    var dte = document.getElementById('dob').value;
    var params = "gocnumber="+num+"&datebirth="+dte;
    // console.log(params);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/goc.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //console.log('READYSTATE: ', xhr.readyState);
    //console.log(xhr);
    xhr.onload = function(){
    //console.log(this.responseText);
    
    if(this.status == 200){
         var users = JSON.parse(this.responseText);
         //console.log(this.responseText);
         var output = '';
       
         for(var i in users){
           output += '<ul>' +
             '<li>Firstname: '+users[i].firstname+'</li>' +
             '<li>Lastname: '+users[i].lastname+'</li>' +
             '<li>Status: '+users[i].status+'</li>' +
             '</ul>';
            }
            // console.log(output);
            // console.log(users.length);
        } 
      if (users.length==0) {
        
        output="No record found.Please try later."
       
        } 
        document.getElementById('resultGoc').style.visibility='visible';                
  
        document.getElementById('usersGoc').innerHTML = output;
        //console.log(output);
        xhr.onerror = function(){
        console.log('Request Error...');
        }
  
     }
  
     xhr.send(params);
  }



    dc.loadUsr = function () {
      
     showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
       usrStatusHtml,
         function (usrStatusHtml) {         
             $ajaxUtils.sendGetRequest(
               usrTitleHtml,
               function (usrTitleHtml) {
                $ajaxUtils.sendGetRequest(
                  homeHtml,
                  function (homeHtml) {
                var categoriesViewHtml =
                  buildUsrViewHtml(usrTitleHtml,
                    usrStatusHtml,homeHtml );
              //console.log(usrStatusHtml);
            insertHtml("#main-content", categoriesViewHtml);
            
          },
          false);
      },
      false);
    },
    false);
    }


      function buildUsrViewHtml(usrTitleHtml,usrStatusHtml,homeHtml){
        var finalHtml = usrTitleHtml;
        finalHtml += "<section class='row'>";
        var html=usrStatusHtml;
        finalHtml += html;    
        finalHtml += "</section>";    
        finalHtml+=homeHtml;
        return finalHtml;
       
      }
      
   
 
    dc.changeFunc=function() {
      var selectBox = document.getElementById("select");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      
      document.getElementById('lic').value=selectedValue;
     };
     
    dc.showSuggestion=function(str) {
      //console.log(str);
      //document.getElementById('select').innerHTML =" ";  
      var arr=Array();

      if (str===undefined){ 
        document.getElementById('select').innerHTML =" ";  
      }
      //console.log(str.length);
			if(str.length <3){    //minimum 3 characters required to search.
        //initialise the dup array for a new search
        dup=[];
        document.getElementById('select').innerHTML =" ";
			  } else {
				// AJAX REQ
      
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function(){
        //console.log(this.responseText);
        if(this.readyState == 4 && this.status == 200){
            //Now populate the searched data into the option box appending 
            //the text and has to be selected from this droplist
            //The received data is split based on new line character.
            
            var msg=this.response;
            
            //console.log(msg);  
            //store into another array to check for duplicates in the next iteration.            
            arr="";
            arr=msg.split("\n").map(item => item.trim())
            //console.log(arr,arr.length);
            //now check if the contents of arr are already displayed
            //if these entries are found in dup array, they  have been already displayed in 
            //the earlier iteration. Now we will have to remove the entries that are existing 
            //in the dup array from arr and display the remaining only. 

            //remove the entries from array that are already existing in dup array.
            //arr = arr.filter(function(x) { return dup.indexOf(x) < 0 })

            // Having removed the entries from the arr array that were already existing 
            // in dup array, we now have to update the dup array with the new entries by
            //concating dup with the arr array 
            //dup=dup.concat(arr); dup variable is not used since the php file is tuned to select only those matching exactly
            
            document.getElementById('select').textContent=""; 
            //finally create the optboxes and display the result
            for (var i=0; (i<arr.length);i++){
            var el = document.createElement("option");
            el.textContent=arr[i];
            //console.log(el.textContent,arr[i]);
            el.value = arr[i];
            select.appendChild(el);        

            }
           //str=""; 
           //console.log((msg.split("\n")).length);
					//document.getElementById('select').value = this.responseText;
					}
				}
      
      
            //allow only alpha numeric characters before sending to database.
            var letters = /^[0-9a-zA-Z]/; // including white space
            lic=document.getElementById('lic').value;
            //console.log(letters);
            //console.log(lic.match(letters));
            if(lic.match(letters)){
           
            xmlhttp.open("GET", "php/suggestUsr.php?q="+str, true);
            xmlhttp.send();
            }
        }
	}

    dc.usrSearch=function() {
        // window.alert("Details temporarily not available ");
        // return;
      //showLoading("#main-content");
      var num = document.getElementById('usr').value;
    
      var licensee = document.getElementById('lic').value;
            
      var params = "LicNo="+num+"&Names="+licensee;
      //console.log(params);
      var xhr = new XMLHttpRequest();
    //if the license number not provided, exit
    if (num=="") {
      return;
    }
      xhr.open('POST', 'php/usr_search.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      //console.log('READYSTATE: ', xhr.readyState);
     
     
      xhr.onload = function(){
      //console.log(this.responseText);
      
      if(this.status == 200){
           var users = JSON.parse(this.responseText);
           console.log(users);
          window.outdata="";
          window.grossout="";
           for(var i in users){
            // note that the function display should precede  the next part though
            // it is displayed in the reverse order. Dont know the reason yet.  
            var j=Number(i)+1;  
              if ((users[i].LicValidDate=="2000-12-31")||(users[i].LicValidDate=="0000-00-00")||(users[i].Remarks.toUpperCase()=="CANCEL")) {
                window.alert("Lic is Cancelled");
                return;
              }
              if (users[i].LicIssueDate=="2000-12-31") {
                window.alert("License issue date is likely to be fictitious");
              }
              display(users[i]);
              
              outdata += '<ul>' +
               '<li>'+ j +') '+'LicNo: '+users[i].LicNo+'/'+ users[i].SchNo+  '</li>' +
               '<li>Valid-upto: '+users[i].LicValidDate+'</li>' +
               '<li>Licensee: '+users[i].Names+'</li>' +
               '<li>Address: '+users[i].NameAddress+'</li>' +
               '<li>No of Handheld: '+users[i].HandHeld+'</li>' +
               '<li>Remarks: '+users[i].Remarks+'</li>' +
               '<li>Action required: '+'Please contact office for accuracy of the calculation and for a certified copy of the dues.'+'</li>' +
               '</ul>';
               //document.getElementById('users').innerHTML = outdata;
            
               
               //console.log(outdata);
              }
              
          } 
          //console.log(outdata);
          document.getElementById('users').innerHTML = outdata;
          document.getElementById('totalDues').innerHTML =grossout;
          //console.log(users, users.length);
          if (users.length==0) {
          
          output="Wrong credentials. If you don't know the license no and name of licensee,please send mail to: wrlo.wpc@gmail.com."
          //console.log(output);
          document.getElementById('dues').innerHTML = '';
          document.getElementById('totalDues').innerHTML='';
          document.getElementById('toggle').style.visibility='hidden';
          document.getElementById('users').innerHTML = output;
          } else {
            document.getElementById('toggle').style.visibility='visible';
          }
         
          //document.getElementById('users').innerHTML = output;
          
          xhr.onerror = function(){
          console.log('Request Error...');
          }
          
       }
    
       xhr.send(params);
       
    }

/*MMSL module*/

dc.loadMmsl = function () {
  
  showLoading("#main-content");
   $ajaxUtils.sendGetRequest(
    mmslStatusHtml,
      function (mmslStatusHtml) {         
          $ajaxUtils.sendGetRequest(
            mmslTitleHtml,
            function (mmslTitleHtml) {
             $ajaxUtils.sendGetRequest(
               homeHtml,
               function (homeHtml) {
             var categoriesViewHtml =
               buildAmslViewHtml(mmslTitleHtml,
                 mmslStatusHtml,homeHtml );
           //console.log(usrStatusHtml);
         insertHtml("#main-content", categoriesViewHtml);
         
       },
       false);
   },
   false);
 },
 false);
 }
 
 
   function buildAmslViewHtml(mmslTitleHtml,mmslStatusHtml,homeHtml){
     var finalHtml = mmslTitleHtml;
     finalHtml += "<section class='row'>";
     var html=mmslStatusHtml;
     finalHtml += html;    
     finalHtml += "</section>";    
     finalHtml+=homeHtml;
     return finalHtml;
    
   }
 
   dc.changeMmslFunc=function() {
    var selectBox = document.getElementById("sel");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
    document.getElementById('operator').value=selectedValue;
   };
   
  dc.showSuggestionMmsl=function(str) {
   
    var arr=Array();

    if (str===undefined){ 
      document.getElementById('sel').innerHTML =" ";  
    }
    //console.log(str.length);
    if(str.length <2){    //minimum 3 characters required to search.
      //initialise the dup array for a new search
      dup=[];
      document.getElementById('sel').innerHTML =" ";
      } else {
      // AJAX REQ
    
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
      //console.log(this.responseText);
      if(this.readyState == 4 && this.status == 200){
          
          var msg=this.response;
          console.log(msg);
          arr="";
          arr=msg.split("\n").map(item => item.trim())
        
          
          document.getElementById('sel').textContent=""; 
          //finally create the optboxes and display the result
          for (var i=0; (i<arr.length);i++){
          var el = document.createElement("option");
          el.textContent=arr[i];
          //console.log(el.textContent,arr[i]);
          el.value = arr[i];
          sel.appendChild(el);        

          }
         //str=""; 
         //console.log((msg.split("\n")).length);
        //document.getElementById('select').value = this.responseText;
        }
      }
    
    
          //allow only alpha numeric characters before sending to database.
          var letters = /^[0-9a-zA-Z/.]+$/; // including white space
          lic=document.getElementById('operator').value;
          //console.log(lic);
          if(lic.match(letters)){
          //console.log(lic);
          xmlhttp.open("GET", "php/suggestMmsl.php?q="+str, true);
          xmlhttp.send();
          }
      }
  }

  dc.mmslSearch=function() {
  
    var num = document.getElementById('mmsl').value;
    var cs = document.getElementById('cs').value; /* call sign*/
    var sch = document.getElementById('sch').value;
    var licensee = document.getElementById('operator').value;
    licensee=licensee.split(" ")[0]+" "+licensee.split(" ")[1] /* only first two words of the operator are taken for searching the database*/
    //console.log(num,sch,licensee);      
    var params = "licno="+num+"&callsign="+cs+"&schno="+sch+"&operator="+licensee;
    //console.log(params);
    var xhr = new XMLHttpRequest();
  //if the license number not provided, exit
  if (num=="") {
    return;
  }
    xhr.open('POST', 'php/mmsl_search.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //console.log('READYSTATE: ', xhr.readyState);
   
   
    xhr.onload = function(){
    //console.log(this.responseText);
    
    if(this.status == 200){
         var users = JSON.parse(this.responseText);
         //console.log(users[0],users[1]);
        // window.outdata="";
        // window.grossout="";
        var licencee=users[0];
        var equipmt=users[1];
        //display the license details first
        if (licencee===null) {
               
          window.alert("No records could be found with the given input");       
          window.location.href="./?";/* go to home*/
        }
        var outdata="";
        if (typeof licencee !== 'undefined' && licencee.length > 0) {
        
          //document.getElementById('toggle').style.visibility='visible';
          // $sql1 = "SELECT CaseID,fileno,licno,schno,callsign,regNo,dor,por,shipname,mmsi,licprefix,built,builtyear,operator,licvalidfrom,licvalidto,vesselclass,servicetype,remarks     
          var licType;
          if (licencee[10]==='S'){
            licType="License";
          } else {
            licType="SSTP";
          }
          outdata += '<ul>' +
          '<li>File No: '+ licencee[1]+  '</li>' +
           '<li>LicNo: '+ licencee[2]+  '</li>' +
           '<li>ScheduleNo: '+ licencee[3]+  '</li>' +
           '<li>Call Sign: '+ licencee[4]+  '</li>' +
           '<li>Regn No: '+ licencee[5]+  '</li>' +
           '<li>Date of Regn.: '+ licencee[6]+  '</li>' +
           '<li>Port of Regn.: '+ licencee[7]+  '</li>' +
           '<li>Name of ship: '+ licencee[8]+  '</li>' +
           '<li>MMSI: '+ licencee[9]+  '</li>' +
           '<li>Manufacturer: '+ licencee[11]+  '</li>' +
           '<li>Manufacture Year: '+ licencee[12]+  '</li>' +    
           '<li>Type: '+licType+'</li>' +    
           '<li>Valid-from: '+licencee[14]+'</li>' +
           '<li>Valid-upto: '+licencee[15]+'</li>' +
           '<li>Licensee: '+licencee[13]+'</li>' +
           '<li>Class of vessel: '+ licencee[16]+  '</li>' +
           '<li>Service Class: '+ licencee[17]+  '</li>' +   
           '<li>Last Event: '+ licencee[18]+  '</li>' +  
           '<li>Date of last event: '+ licencee[19]+  '</li>' +        
           '</ul>';
           document.getElementById('usersMmsl').innerHTML = outdata;
          } else {
            outdata="Wrong credentials. If you don't know the licensed parameters,please send mail to: wrlo.wpc@gmail.com."
            document.getElementById('usersMmsl').innerHTML = outdata;
           
        } 
  
         
       
        
        //Now display the equipment details in a table
        if (typeof equipmt !== 'undefined' && equipmt.length > 0) {
        putOnTable(equipmt)
        }
  
       
        xhr.onerror = function(){
        console.log('Request Error...');
        }
        
     }
  
    }
     xhr.send(params);
     
  }  






/*AMSL module*/

dc.loadAmsl = function () {
  
  showLoading("#main-content");
   $ajaxUtils.sendGetRequest(
    amslStatusHtml,
      function (amslStatusHtml) {         
          $ajaxUtils.sendGetRequest(
            amslTitleHtml,
            function (amslTitleHtml) {
             $ajaxUtils.sendGetRequest(
               homeHtml,
               function (homeHtml) {
             var categoriesViewHtml =
               buildAmslViewHtml(amslTitleHtml,
                 amslStatusHtml,homeHtml );
           //console.log(usrStatusHtml);
         insertHtml("#main-content", categoriesViewHtml);
         
       },
       false);
   },
   false);
 },
 false);
 }
 
 
   function buildAmslViewHtml(amslTitleHtml,amslStatusHtml,homeHtml){
     var finalHtml = amslTitleHtml;
     finalHtml += "<section class='row'>";
     var html=amslStatusHtml;
     finalHtml += html;    
     finalHtml += "</section>";    
     finalHtml+=homeHtml;
     return finalHtml;
    
   }
 
   

   dc.changeAmslFunc=function() {
    var selectBox = document.getElementById("sel");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
    document.getElementById('operator').value=selectedValue;
   };
   
  dc.showSuggestionAmsl=function(str) {
   
    var arr=Array();

    if (str===undefined){ 
      document.getElementById('sel').innerHTML =" ";  
    }
    //console.log(str.length);
    if(str.length <2){    //minimum 3 characters required to search.
      //initialise the dup array for a new search
      dup=[];
      document.getElementById('sel').innerHTML =" ";
      } else {
      // AJAX REQ
    
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
      //console.log(this.responseText);
      if(this.readyState == 4 && this.status == 200){
          
          var msg=this.response;
          console.log(msg);
          arr="";
          arr=msg.split("\n").map(item => item.trim())
        
          
          document.getElementById('sel').textContent=""; 
          //finally create the optboxes and display the result
          for (var i=0; (i<arr.length);i++){
          var el = document.createElement("option");
          el.textContent=arr[i];
          //console.log(el.textContent,arr[i]);
          el.value = arr[i];
          sel.appendChild(el);        

          }
         //str=""; 
         //console.log((msg.split("\n")).length);
        //document.getElementById('select').value = this.responseText;
        }
      }
    
    
          //allow only alpha numeric characters before sending to database.
          var letters = /^[0-9a-zA-Z/.]+$/; // including white space
          lic=document.getElementById('operator').value;
          //console.log(lic);
          if(lic.match(letters)){
          //console.log(lic);
          xmlhttp.open("GET", "php/suggestAmsl.php?q="+str, true);
          xmlhttp.send();
          }
      }
  }

dc.amslSearch=function() {
  
  var num = document.getElementById('amsl').value;
  var cs = document.getElementById('cs').value; /* call sign*/
  var sch = document.getElementById('sch').value;
  var licensee = document.getElementById('operator').value;
  licensee=licensee.split(" ")[0]+" "+licensee.split(" ")[1] /* only first two words of the operator are taken for searching the database*/
  //console.log(num,sch,licensee);      
  var params = "licNo="+num+"&callSign="+cs+"&schPrefix="+sch+"&operator="+licensee;
  //console.log(params);
  var xhr = new XMLHttpRequest();
//if the license number not provided, exit
if (num=="") {
  return;
}
  xhr.open('POST', 'php/amsl_search.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //console.log('READYSTATE: ', xhr.readyState);
 
 
  xhr.onload = function(){
  //console.log(this.responseText);
  
  if(this.status == 200){
       var users = JSON.parse(this.responseText);
       //console.log(users[0],users[1]);
      // window.outdata="";
      // window.grossout="";
      var licencee=users[0];
      var equipmt=users[1];
      //display the license details first
      if (licencee===null) {
             
        window.alert("No records could be found with the given input");       
        window.location.href="./?";/* go to home*/
      }
      var outdata="";
      if (typeof licencee !== 'undefined' && licencee.length > 0) {
      
        //document.getElementById('toggle').style.visibility='visible';
        
        var licType;
        if (licencee[6]==='A'){
          licType="License";
        } else {
          licType="STP";
        }
        outdata += '<ul>' +
         '<li>LicNo: '+ licencee[1]+  '</li>' +
         '<li>ScheduleNo: '+ licencee[2]+  '</li>' +
         '<li>Call Sign: '+ licencee[3]+  '</li>' +
         '<li>Manufacturer: '+ licencee[4]+  '</li>' +
         '<li>Manufacture Year: '+ licencee[5]+  '</li>' +    
         '<li>Type: '+licType+'</li>' +    
         '<li>Valid-from: '+licencee[8]+'</li>' +
         '<li>Valid-upto: '+licencee[9]+'</li>' +
         '<li>Licensee: '+licencee[7]+'</li>' +
        
         '</ul>';
         document.getElementById('usersAmsl').innerHTML = outdata;
        } else {
          outdata="Wrong credentials. If you don't know the licensed parameters, please send mail to: wrlo.wpc@gmail.com."
          document.getElementById('usersAmsl').innerHTML = outdata;
         
      } 

       
     
      
      //Now display the equipment details in a table
      if (typeof equipmt !== 'undefined' && equipmt.length > 0) {
      putOnTable(equipmt)
      }

     
      xhr.onerror = function(){
      console.log('Request Error...');
      }
      
   }

  }
   xhr.send(params);
   
}

/* This function is common for AMSL and MMSL as the equipment list have similar columns*/
putOnTable=function(array) {
  if (document.contains(document.getElementById('tableData'))){
    var removeTab = document.getElementById('tableData');
    removeTab.parentNode.removeChild(removeTab);
    
  }
  var dvHead=document.getElementById("heading");
  dvHead.style.textAlign="Center";
  dvHead.style.fontWeight="Bold";
  dvHead.style.fontSize="1.5em";
  dvHead.innerHTML="Equipment Fitted on the Mobile Station";
  var stnInfo="";
  var FieldName=Array("Sl No","Category","Quantity","Type No","Manufacturer","Power","Freq range","Emission","Remarks");
  var table = document.createElement('table');
  table.setAttribute('id','tableData');
  //document.getElementById('table').innerHTML="";
  table.border='1';      
  // table.style.width='100%';

  var tHead = document.createElement("thead");
  tHead.style.className="thead thead-dark";
  var tr = document.createElement('tr'); 
 
   // ADD COLUMN HEADER TO ROW OF TABLE HEAD.

   for (var i = 0; i < FieldName.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = FieldName[i]//.toUpperCase();
    
    
    tr.appendChild(th);
    // var head = document.getElementById("tableData").getElementsByTagName("th");
    // tr.style.backgroundColor = "red"; 
    }

    tHead.appendChild(tr);
    table.appendChild(tHead);	
    
    var tableBody = document.createElement('TBODY');

  /* Here we will call all the posting data with id and station details to knwo whether the officers have done their hard station tenure.*/
  //console.log(typeof(array));
        /* Actual display of the table begins here*/    

    for (var i = 0; i <array.length; i++){
      var tr1 = document.createElement('tr'); 
    
      for (var j = 1; j <FieldName.length+1; j++){
          var td = document.createElement('td');
          if (Object.values(array[i])[j]==='undefined') {
            continue;
          }
          var text = document.createTextNode(Object.values(array[i])[j]); /* converting object into array using Object.values*/
          //console.log(text);
          td.appendChild(text);
          tr1.appendChild(td)
          } 

      table.appendChild(tr1);
    }
// table.tHead.style.className="thead-dark";
         
          table.className="table-responsive-lg ml-auto mr-auto w-auto small table-active ";
          table.appendChild(tableBody);
          //document.body.appendChild(table);
          var dvTable=document.getElementById("tablearea");
          dvTable.innerHTML="";
          dvTable.appendChild(table);
  /* end of asynchrounous loop for fooHard(). If this ending loop is 
placed before the display starts, then the hardstation data in the last columns will be undefined.*/
}

//rtr exam module



    
dc.loadExam = function () {

//if already logged-in, then go to welcome page
//console.log(userid,userLoggedin);
if (!checkSessionOn()) {

// if ((userid!="") || (userLoggedin==true)) {  
//   return;
// };
console.log(userid,userLoggedin);
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  examStatusHtml,
   function (examStatusHtml) { 
   $ajaxUtils.sendGetRequest(
    examTitleHtml,
      function (examTitleHtml) {  
        $ajaxUtils.sendGetRequest(
          homeHtml,
            function (homeHtml){                
             var categoriesViewHtml =
               buildExamViewHtml(examTitleHtml,examStatusHtml,
                                  homeHtml);
           //console.log(categoriesViewHtml);
         insertHtml("#main-content", categoriesViewHtml);
        
        },
        false);
       },
        false);
      },
       false);
   };
  } 
 function buildExamViewHtml(examTitleHtml,examStatusHtml,homeHtml){
  
  var finalHtml = examTitleHtml;
     finalHtml += "<section class='row'>";
     var html=examStatusHtml;
     finalHtml += html;    
     finalHtml += "</section>";    
     finalHtml += homeHtml;
    // console.log(examStatusHtml);
     return finalHtml;
    
   }
   
  function checkSessionOn() {
    var url = 'php/check_session.php?';

    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (body) {
      //console.log(body);
      if (body.status =='ok') { 
      //console.log(body.redirect);
      userFname=body.redirect[1];
      userid=body.redirect[0];
      userLoggedin=true;
      dc.loadWelcome();
      //console.log("True");
      return true;
      }
     
    });
  }

  dc.loadMainPage = function () {
    //showLoading("#main-content");
    //verify the user name and password
    var username=document.getElementById("InputEmail").value;
    var passwrd=document.getElementById("InputPassword").value;
    var params = "username="+username+"&password="+passwrd;
    //console.log(params);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/exam-login-verify.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //console.log('READYSTATE: ', xhr.readyState);
   
   
    xhr.onload = function(){
   
     
    if(this.status == 200){
         var users = JSON.parse(this.responseText);
         console.log(users);
        if (users.status != "ok") {
          if (users.msg[0]!="") {
            console.log("Password error:"+users.msg[0]);
            window.alert("Password error");
          }
          if (users.msg[1]!="") {
            console.log("Username error:"+users.msg[1]);  
            window.alert("Username error");       
        }
         }
          else {
          //console.log(users.redirect); 
          userFname=users.redirect[1];
          userid=users.redirect[0];
          userLoggedin=true;
          console.log(userid,userFname);
          dc.loadWelcome();
          
        }
        }
     } 
     xhr.send(params);           
    
  }

//Regsitration for RTR exam.

dc.loadRegistration = function () {
  
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  registerStatusHtml,
   function (registerStatusHtml) { 
   $ajaxUtils.sendGetRequest(
    registerTitleHtml,
      function (registerTitleHtml) {  
        $ajaxUtils.sendGetRequest(
          homeHtml,
            function (homeHtml){                
             var categoriesViewHtml =
               buildRegisterViewHtml(registerTitleHtml,registerStatusHtml,
                                  homeHtml);
           //console.log(categoriesViewHtml);
         insertHtml("#main-content", categoriesViewHtml);
        
        },
        false);
       },
        false);
      },
       false);
   };
 
 function buildRegisterViewHtml(registerTitleHtml,registerStatusHtml,homeHtml){
  
  var finalHtml = registerTitleHtml;
     finalHtml += "<section class='row'>";
     var html=registerStatusHtml;
     finalHtml += html;    
     finalHtml += "</section>";    
     finalHtml += homeHtml;
    // console.log(examStatusHtml);
     return finalHtml;
    
   }
   dc.loadRegister = function () {
    //showLoading("#main-content");
    //verify the user name and password
    var uname=document.getElementById("InputName").value;
    var pword=document.getElementById("InputPword").value;
    var confpword=document.getElementById("ConfInputPword").value;
    
    var params = "username="+uname+"&password="+pword+"&confirm_password="+confpword;
    //console.log(params);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/exam-register.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //console.log('READYSTATE: ', xhr.readyState);
   
   
    xhr.onload = function(){
   
     
    if(this.status == 200){
         var users = JSON.parse(this.responseText);
        if (users.status != "ok") {
           if (users.msg[0]!="") window.alert(users.msg[0])
          //console.log("Password error:"+users.msg[0]);
          if (users.msg[1]!="") window.alert(users.msg[1])
          //console.log("Password error:"+users.msg[1])
          if (users.msg[2]!="") window.alert(users.msg[2])
          //console.log("Username error:"+users.msg[2]);  
              
        }
        else {
          
          window.alert("Registration successful");
          dc.loadExam();
        }
        }
     } 
     xhr.send(params);           
    
  }
//welcome page of RTR
  dc.loadWelcome = function () {
    //console.log(userFname,userid);
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    welcomeTitleHtml,
     function (welcomeTitleHtml) { 
     $ajaxUtils.sendGetRequest(
      welcomeStatusHtml,
        function (welcomeStatusHtml) {  
          $ajaxUtils.sendGetRequest(
            homeHtml,
              function (homeHtml){                
               var categoriesViewLoadHtml =
                 buildWelcomeViewHtml(welcomeTitleHtml,welcomeStatusHtml,
                                    homeHtml);
            //console.log(categoriesViewLoadHtml);
           insertHtml("#main-content", categoriesViewLoadHtml);
          
          },
          false);
         },
          false);
        },
         false);
     };
   
   function buildWelcomeViewHtml(welcomeTitleHtml,welcomeStatusHtml,homeHtml){
    
       var finalHtml="<section class='row'>";
      
       var html=welcomeTitleHtml;
       //console.log("Name",userFname);
       html=insertProperty(html,"fname",userFname);
       html=insertProperty(html,"rnumber",userid);
       finalHtml+=html
       //console.log(html);
       finalHtml += welcomeStatusHtml;    
       finalHtml += "</section>";    
       finalHtml += homeHtml;
       //console.log(finalHtml);
       return finalHtml;
      
     }
//submit page of RTR where data is entered.
dc.loadEditPage = function () {
  
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  submitStatusHtml,
   function (submitStatusHtml) { 
   $ajaxUtils.sendGetRequest(
    submitTitleHtml,
      function (submitTitleHtml) {  
        $ajaxUtils.sendGetRequest(
          homeHtml,
            function (homeHtml){                
             var categoriesViewHtml =
               buildWelcomeViewEditHtml(submitTitleHtml,submitStatusHtml,
                                  homeHtml);
           //console.log(categoriesViewHtml);
         insertHtml("#main-content", categoriesViewHtml);
         //update the page with the data
         dc.loadExamData();// This will be triggered only when the edit page is first time opened
        },
        false);
       },
        false);
      },
       false);
   };
 
 function buildWelcomeViewEditHtml(submitTitleHtml,submitStatusHtml,homeHtml){
  
  var finalHtml =submitTitleHtml;
     finalHtml += "<section class='row'>";
     var html=submitStatusHtml;
     finalHtml += html;    
     finalHtml += "</section>";    
     finalHtml += homeHtml;
    // console.log(examStatusHtml);
     return finalHtml;
    
   }
  
//No update . Only display the data
dc.loadExamData=function() {
  //showLoading("#main-content");
  var url = 'php/exam-submit.php?x='+userid;

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (body) {
    if (body.status !='ok') { 
      console.log(body.redirect);
      // error in update. Display the error
      //call the edit page and display the error in the respective window.
      //dc.loadWelcome();
      window.alert("No data exists in the database.");
      dc.populateError(body); 
    } else {
      console.log(body.redirect);
      dc.populate(body);
    }
   
  });
}
//populate data
dc.populate=function(body) {

  var inputs = document.getElementById("formElem").elements;
  //display the photo
  var imgTag=document.getElementById('picture');
  var loc='php/'+body.redirect[12];
  imgTag.src=loc;
  //display the category.
  var cat1=document.getElementById('full');
  var cat2=document.getElementById('part1');
 
  if (body.redirect[10]==1){
    cat1.checked=true;
    cat2.checked=false;
  } else {
    console.log(body.redirect[10]);
    cat1.checked=false;
    cat2.checked=true;
  }
   // Iterate over the form controls.The j is used to keep track of the array returned.
  for (i = 0, j=0; i < inputs.length; i++) {
    // if (inputs[i].tagName==='IMG'){
    //   inputs[i].src=loc;
    //}
     if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
      // Update text input
      inputs[i].value=body.redirect[j];
     j++;    

    }
   
  
  } 
  //display image
  

}
// update the data entered;always done as a POST request.

dc.loadUpdate = function() {
  //showLoading("#main-content");
  //formData.append('inpFile',files[0]);
  formElem.onsubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('php/exam-submit.php', {
      method: 'POST',
      body: new FormData(formElem)
    }).then(res => res.json())
      .then(result=> {
        console.log('Success',result.status);
        if (result.status !='ok') {
          console.log(result.redirect);
          // error in update. Display the error
          //call the edit page and display the error in the respective window.
          //dc.loadWelcome();
          window.alert("Please fill up all the fileds marked with *");
          dc.populateError(result);
        
        }
        else {
          console.log(result.redirect);
          window.alert("Success");
          dc.loadWelcome(); 
        }
      })
      .catch(error => {
          console.error('Error:', error);
      });
        // let result = await response.json();

    // alert(result.message);
  };
}

//error display in the edit page
dc.populateError=function(body) {

  var inputs = document.getElementById("formElem").elements;
  
  //display the category.
  var cat1=document.getElementById('full');
  var cat2=document.getElementById('part1');
 
  if (body.redirect[10]==1){
    cat1.checked=true;
    cat2.checked=false;
  } else {
    console.log(body.redirect[10]);
    cat1.checked=false;
    cat2.checked=true;
  }
   // Iterate over the form controls.The j is used to keep track of the array returned.
  for (i = 0, j=0; i < inputs.length; i++) {
    // if (inputs[i].tagName==='IMG'){
    //   inputs[i].src=loc;
    //}
     if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
      // Update text input
      inputs[i].placeholder=body.redirect[j];
     j++;    

    }
   
  
  } 

}


dc.loadExitPage = function () {
  phpUrl = 'php/exam-logout.php';
  $ajaxUtils.sendGetRequest(
    phpUrl,
    function (responseText) {
     //if successful go to home page
      //console.log(responseText);
      //dc.loadExam();
      userid="";
      userLoggedin=false;
      window.location.href="./?";
    },
    false);
}

//reset the password
dc.loadResetPage=function(){
showLoading("#main-content");
 $ajaxUtils.sendGetRequest(
 resetStatusHtml,
   function (resetStatusHtml) { 
   $ajaxUtils.sendGetRequest(
    resetTitleHtml,
      function (resetTitleHtml) {  
        $ajaxUtils.sendGetRequest(
          homeHtml,
            function (homeHtml){                
             var categoriesViewHtml =
               buildResetViewEditHtml(resetTitleHtml,resetStatusHtml,
                                  homeHtml);
              //console.log(categoriesViewHtml);
              insertHtml("#main-content", categoriesViewHtml);
        
        },
        false);
       },
        false);
      },
       false);
}

function buildResetViewEditHtml(resetTitleHtml,resetStatusHtml,homeHtml){
  
  var finalHtml =resetTitleHtml;
     finalHtml += "<section class='row'>";
     var html=resetStatusHtml;
     finalHtml += html;    
     finalHtml += "</section>";    
     finalHtml += homeHtml;
    // console.log(examStatusHtml);
     return finalHtml;
    
   }


//Resetted password to accept

dc.loadResetAccept=function(){
//formData.append('inpFile',files[0]);
formReset.onsubmit = async (e) => {
  e.preventDefault();
  
  let response = await fetch('php/exam-reset.php', {
    method: 'POST',
    body: new FormData(formReset)
  }).then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      if (result.status !='ok') {
        console.log(result.status);
        dc.loadWelcome();
      }
      else {
        console.log(result.msg);
        dc.loadExam(); 
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
 
  // let result = await response.json();

  // alert(result.message);
};
}
dc.loadAckPage = function () {
  phpUrl = 'php/exam-display.php';
  $ajaxUtils.sendGetRequest(
    phpUrl,
    function (responseText) {
     //if successful go to home page
     if (responseText.status !="ok") {
       console.log(typeof(responseText));
       window.alert("No record could be fetched")
       
      
     } else {
      $("#printkey").show();
      dc.printAck(responseText['redirect']);
     
     }
     console.log(responseText.status);
      
     
    },
    true);
}
dc.printAck=function(body) {
  
  console.log(body);
  if (document.contains(document.getElementById('tableData'))){
    var removeTab = document.getElementById('tableData');
    removeTab.parentNode.removeChild(removeTab);
    
  } 
  
  var dvHead=document.getElementById("heading");
    dvHead.style.textAlign="Left";
    dvHead.style.fontWeight="Bold";
    dvHead.style.fontSize="1.5em";
  
    
    dvHead.innerHTML="Acknowledgement Slip";
  //var FieldName=Array("Firstname","LastName","Category","Designation","Emp No","Date of Birth","Date of entry in Govt","Now Posted at","Posted city","Batch Number","Batch Type","Qualification" ,"Regularised date","UPSC reference","Last NFU","NFU date");
  //display the image first
  var imgTag=document.getElementById('picture1');
  var loc='php/uploads/'+body['image'];
  //console.log(loc);
  if(imgTag && imgTag.style) {
  imgTag.style.width='100px';
  imgTag.style.height='100px';
  imgTag.src=loc;
  }
  
  var table = document.createElement('table');
  table.setAttribute('id','tableData');
  table.style.width='50%';
  table.border='1';
  var headName=["Key","Content"];
  var tHead = document.createElement("thead");
    var tr = document.createElement('tr'); 
    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (var i = 0; i < 2; i++) {
      var th = document.createElement("th");
      th.innerHTML = headName[i].toUpperCase();
  
      
      tr.appendChild(th);
      // var head = document.getElementById("tableData").getElementsByTagName("th");
      //tr.style.backgroundColor = "green"; 
      }
      tHead.appendChild(tr);
      table.appendChild(tHead);	
    
      var tableBody = document.createElement('TBODY');
      table.appendChild(tableBody);
  
    //for ( i = 0; i < FieldName.length; i++)
    for (x in body){
      tr = document.createElement('tr');   
  
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
  
      //var text1 = document.createTextNode(FieldName[i]);
      var text1 = document.createTextNode(x);
      
      var text2 = document.createTextNode(body[x]);
     
      td1.appendChild(text1);
      td2.appendChild(text2);
      tr.appendChild(td1);
      tr.appendChild(td2);
  
      table.appendChild(tr);
      }
    // table.className="tbl";
    // document.body.appendChild(table);
   // table-responsive-lg ml-auto mr-auto table-active 
   
    table.className="table-responsive-lg ml-auto mr-auto table-bordered table-dark ";
    table.appendChild(tableBody);
    var dvTable=document.getElementById("tablearea");
    dvTable.innerHTML="";
    dvTable.appendChild(table);
   
  };
  dc.printTable=function(){
  
    var printContents = document.getElementById('printArea').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    dc.loadWelcome();
  }
 //New added on 22-09-2021
 dc.loadAdmitPage = function () {
  phpUrl = 'php/exam-admit.php';
  $ajaxUtils.sendGetRequest(
    phpUrl,
    function (responseText) {
     //if successful go to home page
     if (responseText.status !='ok') {
       console.log(typeof(responseText));
       window.alert('No record could be fetched. Please check with the RLO office')
       
      
     } else {
      $('#printkey').show();
      dc.printAdmit(responseText['redirect']);
      //document.write('<form><input type=button name=print value='Print' onClick='window.print()'></form>');     
     }
     console.log(responseText.status);
      
     
    },
    true);
}

dc.printAdmit=function(body) {
  
  console.log(body);
  if (document.contains(document.getElementById('tableData'))){
    var removeTab = document.getElementById('tableData');
    removeTab.parentNode.removeChild(removeTab);
    
  } 
//first heading
// var opened = window.open('');
//   imge=bod.image;
  // opened.document.write("<html><head><title>MyTitle</title></head><body><img id='picture1' src='' width='100' height='100'><div id='heading'> "+
  // "</div><div id='tablearea'> </div>")
  // var logoTag=document.getElementById('logo');
  // var loc1='..\images\emblem.png';
  // console.log(loc1);
  // logoTag.src=loc1;

  var dvHead=document.getElementById('heading');
  dvHead.style.textAlign='center';
  dvHead.style.fontWeight='Bold';
  dvHead.style.fontSize='1.5em';

  
  dvHead.innerHTML='<u>Admission Certificate</u>';


  var dvlHead=document.getElementById('letterHead');
  dvlHead.style.textAlign='center';
  dvlHead.style.fontWeight='Bold';
  dvlHead.style.fontSize='1.5em';  
  dvlHead.innerHTML='GOVERNMENT OF INDIA<br>'+
            'MINISTRY OF COMMUNICATION (WPC WING)<br>'+
            "Regional Licensing Office, Mumbai<br><br><br>";
           


//var FieldName=Array('Firstname','LastName','Category','Designation','Emp No','Date of Birth','Date of entry in Govt','Now Posted at','Posted city','Batch Number','Batch Type','Qualification' ,'Regularised date','UPSC reference','Last NFU','NFU date');
//display the image first
var imgTag=document.getElementById('picture1');
var loc='php/uploads/'+body['image'];
//console.log(loc);
if(imgTag && imgTag.style) {
imgTag.style.width='100px';
imgTag.style.height='100px';
imgTag.style.display='block';
imgTag.style.margin = "0 auto";
imgTag.src=loc;
}
var dvAddress=document.getElementById('address');
dvAddress.style.textAlign='left';
dvAddress.style.fontWeight='Normal';
dvAddress.style.fontSize='1.2em';  
dvAddress.innerHTML= "<br><br>Shri &nbsp"+body.firstname+" &nbsp"+ body.lastname+ "&nbsp is hereby admitted to the following exam:<br><br><br>";


var table = document.createElement('table');
table.setAttribute('id','tableData');
table.style.width='80%';
table.style.marginLeft='auto';
table.style.marginRight='auto';
table.border='1';
var headName=['Candidate','Credentials'];
var tHead = document.createElement('thead');
  var tr = document.createElement('tr'); 
  // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
  for (var i = 0; i < 2; i++) {
    var th = document.createElement('th');
    th.innerHTML = headName[i].toUpperCase();

    
    tr.appendChild(th);
    // var head = document.getElementById('tableData').getElementsByTagName('th');
    //tr.style.backgroundColor = 'green'; 
    }
    tHead.appendChild(tr);
    table.appendChild(tHead);	
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
 //if anything undefined in array, fix it:
 
  //for ( i = 0; i < FieldName.length; i++)
  var tableItems=Array('First Name','Last Name','Examination','Centre','Roll No','Exam Date','Exam Time','Remarks');
  var name1=body.firstname;
  var name2=body.lastname
  var examName="RTR(A) EXAM";
  var examCentre="Operation dept, Air India, Old Airport,Kalina,Santa Cruz(E), Mumbai:400029";
  var rollNo =body.wpcrollno;
  var examDate=body.examdate;
  var examTime=body.examtime;
   if(examTime==2){examTime='2 PM'}
  if(examTime==9){examTime='9 AM'}
  var examRemarks=body.remarks;
  if (examRemarks==""){ examRemarks='-nil-'}
  var tableContent=Array(name1,name2,examName,examCentre,rollNo,examDate,examTime,examRemarks);
  var x,y;
 
  for (x in tableItems ){
    tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    //var text1 = document.createTextNode(FieldName[i]);
    var text1 = document.createTextNode(tableItems[x]);
    
    var text2 = document.createTextNode(tableContent[x]);
   
    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
    }
  // table.className='tbl';
  // document.body.appendChild(table);
 // table-responsive-lg ml-auto mr-auto table-active 
 
  table.className='table-responsive-lg ml-auto mr-auto table-bordered table-dark ';
  table.appendChild(tableBody);
  var dvTable=document.getElementById('tablearea');
  dvTable.innerHTML='';
  dvTable.appendChild(table);
 
  var dvAddress=document.getElementById('instructions');
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  var today=d + "/" + m + "/" + y;
  dvAddress.style.textAlign='left';
  dvAddress.style.fontWeight='Normal';
  dvAddress.style.fontSize='1.0em';  
  dvAddress.style.whiteSpace='pre';
  dvAddress.innerHTML= "<br><br>Dated: "+today+"                                                              Authorised by: Assistant Wireless Adviser<br>"+
                        "<br>Instructions:<br> 1.&nbsp Candidates must carefully study the following instructions for strict compliance::<br><br>"+
                       "i)&nbsp&nbsp No candidate will be admitted to the Examination Hall after half an hour from thecommencement of examination<br>" +
                       "ii)&nbsp&nbsp Candidates should bring their own pen, ink, pencil, erasures and drawinginstruments<br>"+
                       "iii)&nbsp&nbsp Candidates shall not be allowed the help of any scribe to write answers for them.<br>"+
                       "iv)&nbsp&nbsp No candidate shall be permitted to leave the Examination Hall unless half an hourhas elapsed after the commencement of the paper.<br>"+
                       "v)&nbsp&nbsp Candidates are not allowed to take mobile phones/electronic gadgets to theexamination hall<br><br>"+
                       "2.&nbsp If the candidate is found guilty of impersonation or using or attempting to use unfair meansin the Examination Hall,he is liable to <br>"+
                       " criminal prosecution and/or he may be debarred eitherpermanently or for a specified period from appearing in the examination.<br><br>"+
                       "THE CANDIDATES MUST ABIDE BY ANY OTHER INSTRUCTIONS WHICH MAYBE GIVEN TO THEM BY THE CHIEF EXAMINER/INVIGILATING OFFICER.<br><br>"+
                       "<i>(This is a computer generated document. Admission subject to your candidature conforming to the WPC approved list with the Examiner. )</i>";
  
};

global.$dc = dc;

})(window);
