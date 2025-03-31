//display function calculates the dues data from the AJAX data=users and displays it in the main page.

//global decl

function monthDiff(d1) {
    var months;
    var today=new Date();
    
    months = (today.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += today.getMonth();
    return months <= 0 ? 0 : months;
    }          
  
    
  //main function to display the account of the licensee
  
  function showLatefee(validity,fee){
    //console.log(window.outdata);
   var Total,GrossTotal;
    var validityDate=new Date(validity);
      //6 , this is used in the print
    var validyear=validityDate.getFullYear();
    var validmonth=validityDate.getMonth();
    var validdate=validityDate.getDate();
   
    /*For GOC maximum two years only allowed to remain in expired condition*/

    var monthsTillNow=monthDiff(validityDate);
    if (monthsTillNow >24){
      outdata="The renewal grace period(maximum 2 years after expiry of license ) elapsed. You may have to qualify in the GOC part exam for a fresh license";
      grossout="";
      return;
    }

    outdata+= "<table border='1'>"+
    "<tr>"+
    "<th>Expired period: </th>"+
    "<th>Latefee applied on</th>"+
    "<th>Late fee yearwise</th>"+
    "<th>Total Dues yearwise</th>"+
    "</tr>";
    /* If monthstillnow is more than 12, it will be split into two rows*/
    
    Total=0;
    GrossTotal=fee;
    if (monthsTillNow >12) {
      var num_months=12;
      LateFee=0.02*fee*12;
      for (i=0;i<2;i++) {
        Total=Number(GrossTotal)+Number(LateFee);
        outdata+= "<td><P>For &nbsp;&nbsp"+num_months+" months"+"</td>"+
                    "<td>"+Math.round(GrossTotal)+ "</td>"+
                    "<td>"+ Math.round(LateFee)+ "</td>"+
                    "<td>"+ Math.round(Total)+ "</td>"+
                    "</tr>";
        GrossTotal=Total;
        Total=0;
        num_months=monthsTillNow-12;
        LateFee=0.02*GrossTotal*num_months;
      }
    } else {
      num_months=monthsTillNow;
      LateFee=0.02*fee*num_months;
      if((LateFee>0) & (LateFee<250)) { 
        LateFee=250;
      }
      Total=fee+LateFee;
      outdata+= "<td><P>For &nbsp;&nbsp"+num_months+" months"+"</td>"+
                  "<td>"+fee+ "</td>"+
                  "<td>"+ Math.round(LateFee)+ "</td>"+
                  "<td>"+ Math.round(Total)+ "</td>"+
                  "</tr>";
      GrossTotal=Total;
    }
      
     grossout = '<ul>'+
      '<li> Total renewal fee as on date to be paid  is Rs: '+ Math.round(GrossTotal)+'</li>' +
      '</ul>';
      
  }

  function showLatefeeUsr(expiry,annualFee){
    //console.log(expiry,annualFee);
    var Total,GrossTotal,GrossSum;
    var num_months;
      var validityDate=new Date(expiry);
        //6 , this is used in the print
        if (validityDate < new Date('04/01/2012')) {
          outdata="Please contact the office for the estimate of the due" 
          grossout="";
          return;
        }
      //  console.log(validityDate);

      var validyear=validityDate.getFullYear();
      var validmonth=validityDate.getMonth();
      var validdate=validityDate.getDate();
      //console.log(validmonth,validdate,validyear);
    //if this is December, then next month = Jan and year advances by one. These variables are only used fro printing.
      /*For GOC maximum two years only allowed to remain in expired condition*/
  
      var monthsTillNow=monthDiff(validityDate);
      
      outdata+= "<table border='1'>"+
      "<tr>"+
      "<th>Expired period: </th>"+
      "<th>Latefee applied on</th>"+
      "<th>Late fee yearwise</th>"+
      "<th>Total Dues yearwise</th>"+
      "</tr>";
      /* If monthstillnow is more than 12, it will be split into many rows*/
      /* first row upto one year from the expiry, second row second year after tge expiry and so on*/

      /* calculate the number of years*/
      var rows=Math.floor(monthsTillNow/12);
      var lastRow=Math.floor(monthsTillNow%12);
      Total=0;
      GrossSum=0;
      GrossTotal=annualFee;
      //console.log(rows,lastRow, monthsTillNow,Total,GrossTotal);
      if (rows>0) {
        
          num_months=12;
          for (i=0;i<rows;i++) {    
            LateFee=0.02*GrossTotal*num_months;            
            Total=Number(GrossTotal)+Number(LateFee);
            outdata+= "<td><P>For &nbsp;&nbsp"+num_months+" months"+"</td>"+
                        "<td>"+Math.round(GrossTotal)+ "</td>"+
                        "<td>"+ Math.round(LateFee)+ "</td>"+
                        "<td>"+ Math.round(Total)+ "</td>"+
                        "</tr>";
            console.log(GrossTotal,LateFee,Total);
            GrossTotal=Total; 
            GrossSum+=Total;


            // num_months=monthsTillNow-12;            
          }
          /* now for the last row*/
           LateFee=0.02*GrossTotal*lastRow;            
            Total=Number(GrossTotal)+Number(LateFee);
            outdata+= "<td><P>For the last &nbsp;&nbsp"+lastRow+" months"+"</td>"+
                        "<td>"+Math.round(GrossTotal)+ "</td>"+
                        "<td>"+ Math.round(LateFee)+ "</td>"+
                        "<td>"+ Math.round(Total)+ "</td>"+
                        "</tr>";
            GrossTotal=Total;
            GrossSum+=Total;         

        } else {
          /* only one row*/
          num_months=monthsTillNow;
          LateFee=0.02*annualFee*num_months;
          Total=Number(GrossTotal)+Number(LateFee);
          outdata+= "<td><P>For &nbsp;&nbsp"+num_months+" months"+"</td>"+
                        "<td>"+Math.round(GrossTotal)+ "</td>"+
                        "<td>"+ Math.round(LateFee)+ "</td>"+
                        "<td>"+ Math.round(Total)+ "</td>"+
                        "</tr>";
          GrossTotal=Total;
          GrossSum+=Total;
        }

   
        grossout = '<ul>'+
        '<li> Total renewal fee as on date to be paid  is Rs: '+ Math.round(GrossSum)+'</li>' +
        '</ul>';

      }
