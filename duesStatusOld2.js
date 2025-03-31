
//display function calculates the dues data from the AJAX data=users and displays it in the main page.

//global decl

function monthDiff(d1,d2) {
  var months;
  // var today=new Date;
  
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? -1 : months;
  }          

//main function to display the account of the licensee

function display(users){
  //console.log(window.outdata);
  var validity=users.LicValidDate;
    //console.log(typeof(validity));
  var validityDate=new Date(validity);
    //6 , this is used in the print
  var vYear=validityDate.getFullYear();
  var vMonth=validityDate.getMonth()+1;
  var vDate=validityDate.getDate();
  var handHeld=users["HandHeld"];
  if (handHeld==0) {
    window.alert(" The number of hand held sets against this license are shown as 0. Calculation may not be possible");
    return;
  }
  const oldLicFee=250;
  const newLicFee=250;
  var oldRoyalty=1200+(handHeld-2)*300;
  var newRoyalty=3000+(handHeld-2)*750;
  var AddlRoyalty=(users["BmSurcharge"]==1) ? 0.1*newRoyalty: 0 ;
  var today=new Date();
  var currentMonth=today.getMonth();
  var currentYear=today.getFullYear();
  var Total=0;//used for late fee
  var TotalRow=0;//used to show each year total
  var LateFee=0;
  var GrossTotal=0;//grand total

  //first check if he validity is beyond the current month. If so no dues pending

  if (monthDiff(validityDate,today)==-1){
    window.alert("No dues pending. The license is valid as on date)");
    return;
  }

  outdata+= "<table border='1'>"+
  "<tr>"+
  "<th>Validate: </th>"+
  "<th>License fee per year</th>"+
  "<th>Royalty per year</th>"+
  "<th>Addl.Royalty per year</th>"+
  "<th>Late fee yearwise</th>"+
  "<th>Total Dues yearwise</th>"+
  "</tr>";


//first we will check whether validity expires before 31/3/2012 for the low fee regime
var cutOffDate=new Date("2012-03-31");
var monthsUptoCutoff=monthDiff(validityDate,cutOffDate);//calculate months after validity expired upto 31/3/2012
//if this number is positive, the lic expired before 31/3/2012

if (monthsUptoCutoff>0) {
  //convert the total months in terms of years and months
 var noOfYears=Math.floor(monthsUptoCutoff/12); 
 var noOfMonths=monthsUptoCutoff%12;
 //console.log(monthsUptoCutoff,noOfYears,noOfMonths);
            for (var i=1;i<=noOfYears;i++){//for that number of years, fees caclulated
             //each year calculation: late fee=(previous years due+this year royalty+this year lic fee)*.24
             // Total this year=royalty+lic fee+late fee
              LateFee=0.02*((oldLicFee)*handHeld+(oldRoyalty)+Total)*12;
              Total+=(oldLicFee)*handHeld+(oldRoyalty)+LateFee;
              TotalRow=(oldLicFee)*handHeld+(oldRoyalty)+LateFee;
              //console.log(Total)   
              outdata+= "<td><p>upto &nbsp;&nbsp"+vDate+"-"+vMonth+"-"+ (vYear+i)+"</td>"+
              "<td>"+oldLicFee*handHeld+ "</td>"+
              "<td>"+oldRoyalty+ "</td>"+
              "<td>"+ 0 + "</td>"+
              "<td>"+ Math.round(LateFee)+ "</td>"+
              "<td>"+ Math.round(TotalRow)+ "</td>"+
              "</tr>";
              //console.log(outdata);
              //document.getElementById('users').innerHTML = outdata;
              GrossTotal+=TotalRow;              
            }
//for the remaining months less than 12. The total found in the last row is used to caluclate the late fee
         if (noOfMonths>0)   {
              LateFee=0.02*((oldLicFee)*handHeld+(oldRoyalty)*noOfMonths/12+Total)*noOfMonths;
              Total+=(oldLicFee)*handHeld+(oldRoyalty)*noOfMonths/12+LateFee;//only royalty proportionally reduced
              TotalRow=(oldLicFee)*handHeld+(oldRoyalty)*noOfMonths/12+LateFee;
              //console.log(Total)   
              outdata+= "<td><p>upto &nbsp;&nbsp"+"31-3-2012"+"</td>"+
              "<td>"+oldLicFee*handHeld+ "</td>"+
              "<td>"+oldRoyalty*noOfMonths/12+ "</td>"+
              "<td>"+ 0 + "</td>"+
              "<td>"+ Math.round(LateFee)+ "</td>"+
              "<td>"+ Math.round(TotalRow)+ "</td>"+
              "</tr>";
              //console.log(outdata);
              //document.getElementById('users').innerHTML = outdata;
              GrossTotal+=TotalRow;         
            }


//Now we will caluclate the dues for the remaining period.


var monthFirstRow=12-noOfMonths; // the no of months in first row will be in the range (1-12)
//calulate the number of months till now
var yearFirstRow;
var monthsAfterCutoff= monthDiff(cutOffDate,today);

//if the no of years 1 or more the first entry will be from 1/4/2012 to 31/vMonth/2012 
// if vMonth is from 5 to 12 else 1/4/2012 to 31/vMonth/2013 
//let's find the first row using the same total
//console.log(monthsUptoCutoff,noOfYears,noOfMonths);

  if (monthsAfterCutoff>0){
                if (vMonth<=3){//first row will be from 1/4/2012 to 31/vmonth/13
                  //monthFirstRow=9+vMonth;
                  yearFirstRow=2013;
                }else{ //first row will be from 1/4/2012 to 31/vmonth/12
                  //monthFirstRow=(vMonth-4)+1
                  yearFirstRow=2012;
                }
                LateFee=0.02*((newLicFee-oldLicFee)*handHeld+(newRoyalty+AddlRoyalty)*monthFirstRow/12+Total)*monthFirstRow;
                Total+=(newLicFee-oldLicFee)*handHeld+(newRoyalty+AddlRoyalty)*monthFirstRow/12+LateFee;//only royalty proportionally reduced
                TotalRow=(newLicFee-oldLicFee)*handHeld+(newRoyalty+AddlRoyalty)*monthFirstRow/12+LateFee;
                //console.log(Total)   
                outdata+= "<td><p>upto &nbsp;&nbsp"+vDate+"-"+vMonth+"-"+ (yearFirstRow)+"</td>"+
                "<td>"+(newLicFee-oldLicFee)*handHeld+ "</td>"+
                "<td>"+newRoyalty*monthFirstRow/12+ "</td>"+
                "<td>"+ AddlRoyalty*monthFirstRow/12 + "</td>"+
                "<td>"+ Math.round(LateFee)+ "</td>"+
                "<td>"+ Math.round(TotalRow)+ "</td>"+
                "</tr>";
                //console.log(outdata);
                //document.getElementById('users').innerHTML = outdata;
                GrossTotal+=TotalRow;         
              
var noOfYearsAfterCutoff=Math.floor((monthsAfterCutoff-monthFirstRow)/12); //in terms of years upto current month
var noOfMonthsAfterCutoff=(monthsAfterCutoff-monthFirstRow)%12; //no of months remaining till the current month
 
              for (var i=1;i<=noOfYearsAfterCutoff;i++){//for that number of years, fees caclulated
                //each year calculation: late fee=(previous years due+this year royalty+this year lic fee)*.24
                // Total this year=royalty+lic fee+late fee
                LateFee=0.02*((newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+Total)*12;
                Total+=(newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+LateFee;
                TotalRow=(newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+LateFee;
                //console.log(Total)   
                outdata+= "<td><p>upto &nbsp;&nbsp"+vDate+"-"+vMonth+"-"+ (yearFirstRow+i)+"</td>"+
                "<td>"+newLicFee*handHeld+ "</td>"+
                "<td>"+newRoyalty+ "</td>"+
                "<td>"+ AddlRoyalty + "</td>"+
                "<td>"+ Math.round(LateFee)+ "</td>"+
                "<td>"+ Math.round(TotalRow)+ "</td>"+
                "</tr>";
                //console.log(outdata);
                //document.getElementById('users').innerHTML = outdata;
                GrossTotal+=TotalRow;              
              }

//we have completed the first row, then number of years after the first row. 
//Now what is pending is the few months: validity month to current month(now October).
// If we do (12-noOfMonthsAfterCutoff) will get the more number of months that are required to make it a full year

            {
              var lastYear=yearFirstRow+noOfYearsAfterCutoff+1 //it may be 2020 or 2021
              LateFee=0.02*((newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+Total)*noOfMonthsAfterCutoff;
              Total+=(newLicFee)*handHeld+(newRoyalty+AddlRoyalty)+LateFee;//only royalty proportionally reduced
              TotalRow=(newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+LateFee;  
              outdata+= "<td><p>upto &nbsp;&nbsp"+vDate+"-"+vMonth+"-"+ lastYear+"</td>"+
              "<td>"+newLicFee*handHeld+ "</td>"+
              "<td>"+newRoyalty+ "</td>"+
              "<td>"+ AddlRoyalty + "</td>"+
              "<td>"+ Math.round(LateFee)+ "</td>"+
              "<td>"+ Math.round(TotalRow)+ "</td>"+
              "</tr>";
              //console.log(outdata);
              //document.getElementById('users').innerHTML = outdata;
              GrossTotal+=TotalRow;         
            }
  
       } 

  }
    else {
                /* here the validity of licensee has either lying beyond the cutoff date 31/3/2012 or the license 
                was created only after the cutoffdate.Therefore, we would straightaway calculate with the existing 
                charges and validate upto the current year*/
                var monthsAfterExpiry=monthDiff(validityDate,today);
                var yearsAfterExpiry=Math.floor((monthsAfterExpiry)/12); //in terms of years upto current month
                var monthsLastRow=(monthsAfterExpiry)%12; //no of months remaining till the current month
                /*year wise display of the dues*/
                for (var i=1;i<=yearsAfterExpiry;i++){//for that number of years, fees caclulated
                  //each year calculation: late fee=(previous years due+this year royalty+this year lic fee)*.24
                  // Total this year=royalty+lic fee+late fee
                  LateFee=0.02*((newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+Total)*12;
                  Total+=(newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+LateFee;
                  TotalRow=(newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+LateFee;
                  //console.log(Total)   
                  outdata+= "<td><p>upto &nbsp;&nbsp"+vDate+"-"+vMonth+"-"+ (vYear+i)+"</td>"+
                  "<td>"+newLicFee*handHeld+ "</td>"+
                  "<td>"+newRoyalty+ "</td>"+
                  "<td>"+ AddlRoyalty + "</td>"+
                  "<td>"+ Math.round(LateFee)+ "</td>"+
                  "<td>"+ Math.round(TotalRow)+ "</td>"+
                  "</tr>";
                  //console.log(outdata);
                  //document.getElementById('users').innerHTML = outdata;
                  GrossTotal+=TotalRow;              
                }
              /*last few months of display of the dues which would be last ; but for th full year*/
              if (monthsLastRow>0)   {
                var lastRowYear=vYear+yearsAfterExpiry+1 //it may be 2020 or 2021
                LateFee=0.02*((newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+Total)*monthsLastRow;//late fee only for the late fee months before the current month
                Total+=(newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+LateFee;
                TotalRow=(newLicFee)*handHeld+(newRoyalty)+(AddlRoyalty)+LateFee;
                //console.log(Total)   
                outdata+= "<td><p>upto &nbsp;&nbsp"+vDate+"-"+vMonth+"-"+ lastRowYear+"</td>"+
                "<td>"+newLicFee*handHeld+ "</td>"+
                "<td>"+newRoyalty+ "</td>"+
                "<td>"+ AddlRoyalty + "</td>"+
                "<td>"+ Math.round(LateFee)+ "</td>"+
                "<td>"+ Math.round(TotalRow)+ "</td>"+
                "</tr>";
                //console.log(outdata);
                //document.getElementById('users').innerHTML = outdata;
                GrossTotal+=TotalRow;         
              }

}
    // console.log(monthsAfterCutoff,vMonth,monthFirstRow,noOfYearsAfterCutoff,noOfMonthsAfterCutoff);
   grossout += '<ul>'+
    '<li> Total outstanding dues as on date for Lic No:'+users['LicNo']+'/'+ users['SchNo']+" is Rs: "+ Math.round(GrossTotal)+'</li>' +
    '</ul>';
    //console.log(grossout);
    //console.log(outdata);
} //and end of function


