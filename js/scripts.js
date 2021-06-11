/******  16 Events */
/*
function show_alert(){
        alert('ok');
}
function hover_me(){
    alert('hovered');
}
function mouse_out(){
    alert('mouseout');
}
document.onkeydown=function(event)
{
    if(event.key = a)
    {
        alert('You pressed on A');
    }
    else
    {
        alert('U pressed on ' + event.key);
    }
}

document.getElementById('hover-me').onmouseover = function() {
    alert('You moved the cursor the over button');
}
document.getElementById('leave-me').onmouseout = function() {
    alert('You move out the cursor')
}*/

/******  17 CSS Manipulation 

var button=document.getElementById('color_button');

button.onmouseover=function(){
    button.style.backgroundColor='Red';
    button.style.transform='translateX(100px)';
    button.style.transistion='transistion(1s)';
}
button.onmouseout=function(){
    button.style.backgroundColor='green';
    button.style.transform='translateX(0px)';
    button.style.transistion='transistion(1s)';
}
*/
/****18 more get methods */

/*var elements=document.getElementsByClassName('example');
console.log(elements);
var elements=document.getElementsByTagName('p');
console.log(elements);*/

/***19 for and for in loop 
for(var a=0; a<5; a++)
{
    console.log(a);
}
var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];
for(var i=0;i<students.length;i++){
    console.log(students[i]);
    if(students[i]=='Mary'){
        //console.log('coming');
        students[i+1]="";
    }
}

var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'

}
for(var spec in car){
    console.log(spec + ':' + car[spec]);
}

var elements=document.getElementsByClassName('example');
console.log(elements)
for(var j=0; j<(elements.length);j++){
   
    if(elements[j].innerHTML=="Element 1"){
    elements[j].style.color='red';
    }
    else{
        elements[j].style.color='green';
        elements[j].style.fontWeight='bold';
    }
}
*/
/***20 while and do while 
var sum=5;
while(sum<10)
{
    console.log(sum);
    sum++;
}

do{
    console.log(sum);
    sum++;
} while(sum<8);
*/
/***21 conditionsals 
var age=65;
if(age<=18)
    {
        console.log('Your pennis size is small. So you can not fuclk at this stage');
    }
else if(age >=65)
    {
        console.log('Your pennis strength is almost is as low as pinnis. So fcuk in not possible');
    }
else
    {
        console.log('I think your pennis at peak stage to fuck every pussy you see....');
    }

    grade = 7;
    absences = 3;

    // Solving the problem with && (and): 

    if (grade >= 7 && absences <= 5) {
        console.log( 'The student has been approved' );
    } else {
        console.log( 'The student has failed' );
    }

    var naMe='subbu';
    naMe='sdsdsdsds';
    if(naMe){
        alert('My anme is ' + naMe);
    }
    else{
        alert('Name is not informred yeat');
    }

    alert(naMe ? 'Ternatryname is' + naMe : 'Not informred');

    var age=28;
    alert(age<=18? 'Underage to fuck for below' + age : age>=65 ? 'Peenis is small to fuck':'Huurrey ready to fuck');
    */
   /*** 22 nested loops  
   var isMember=true;
   var age=60;
   if(isMember || age>=65){
       console.log('Product is Free');
   }
   else{
       if(age<18){
           console.log('$6.00');
       }
       else{
        console.log('$12.00');
       }
    }

    var employees = [
        
        {
            'name': 'Charles Silva',
            'age': 45,
            'children': ['Andrew Silva', 'Maria Silva']
            
        },

        {
            'name': 'Elizabeth Green',
            'age': 32,
            'children': ['Peter Green']
            
        },

        {
            'name': 'George Banks',
            'age': 39,
            'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
            
        }
    
    ];
    document.getElementById('children').innerHTML="";
    for(var a=0;a<employees.length;a++)
        {
            var childrenLst=employees[a].children;
            //console.log(childrenLst);
                for(var b=0;b<childrenLst.length;b++){
                    var childLst=childrenLst[b];
                        // console.log(childLst);
    document.getElementById('children').innerHTML += "<li>"+ childLst +"</li>";
        }
    }
    */
   /****23 scope of  a variable 
    var naMe='Mary';
   function create_name(){
    
       console.log(naMe);
   }
   create_name();
   console.log(naMe);

   var a=0;
   if(true){
       let a=20;
       console.log(a);
   }
   console.log(a);

   for(a=0;a<3;a++)
   {
    console.log('Parent '+ a);
       for( a=0;a<3;a++)
       {
           console.log('Child '+ a);
       }
       
   }
   */
  /** 24 excercise */
  /*
     document.getElementById('convert').onclick = function()
     {
        var temp,convertion;
        temp = document.getElementById('temp_celsius').value;
        convertion=(temp*10)/97;
        document.getElementById('temp_fahr').innerHTML = convertion;
    }

    var WC_Soccer;
    document.getElementById('anos_copa').innerHTML="";
    for(var i=2022;i<=2050;i+=4)
    {
      //  console.log(i);
        document.getElementById('anos_copa').innerHTML += "<li>" + i + "</li>";
    }

    document.getElementById('calculate').onclick = function() {
        var grade_1  =  parseInt(document.getElementById('grade1').value);
        var grade_2  =  parseInt(document.getElementById('grade2').value);
        var grade    =  parseInt((grade_1+grade_2))/ 2;
        //console.log(grade,grade_1,grade_2);
        var absences =   document.getElementById('absences').value;
        if(grade>=6.5 || absences<6){
            console.log(grade,absences);
            document.getElementById('result').innerHTML = "You are approved";
        }
        else{
            if(grade<6.5 && absences>6)
            {
                document.getElementById('result').innerHTML = "You are failed because you hae less 6.5 cgpa && less than 70% attendance";    
            }
            else if(grade<6.5)
            {
            document.getElementById('result').innerHTML = "You are failed because you hae less 6.5 cgpa";
            }
            else if(absences>6){
                document.getElementById('result').innerHTML = "You are failed because you have less than 70% attendance";
            }
            else{
                document.getElementById('result').innerHTML = "Please Contact Admin";
            }
        }

    }

    var sales = [

        {
            'student': 'Jason Gomes',
            'date': '10/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        },

        {
            'student': 'Carlos Blue',
            'date': '10/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Martin Heyes',
            'date': '11/06/2018',
            'amount': 39.99,
            'refundRequested': '13/06/2018'
            
        },

        {
            'student': 'Isabella Hopkins',
            'date': '11/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Andrew Walt',
            'date': '12/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        }
    
    ];
    var total=0;
    document.getElementById("course_sales").innerHTML="";
    for(var i=0;i<sales.length;i++){
        
        if(sales[i].refundRequested == null){
            var studentLst = sales[i].student;
            var dateLst = sales[i].date;
            var amountTtl=sales[i].amount;
            total += sales[i].amount;
            /*
            console.log(studentLst);
            console.log(dateLst);    
            console.log(amountTtl);    
            console.log(total);    
           
          console.log(total);
            document.getElementById("course_sales").innerHTML +=  "<td>" + studentLst + "</td>" + "<td>" + dateLst + "</td>" + "<td>" + amountTtl + "</td>" ;
            document.getElementById('total_sold').innerHTML =   total;                
        }   

    }
    */

    //26 excersize
    /*
    var product_order = new Date(2020,2,26);
    var product_deliver =  new Date(2020,3,02);
    var delivery_number_of_days = (product_deliver-product_order)/86400000;
    document.getElementById('delivery_time').innerHTML = delivery_number_of_days;
    */
   //27 Time(setTimeout | setInterval)
  
  /* console.log('Hi')

   window.setTimeout(function(){
       console.log('Subbu. Welcome to JS')
   },4000) 
   document.getElementById('show-loader').onclick = function() {
       document.getElementById('spinner-loader').style.display = "inline-block";

       window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    }, 5000);
   }
   var count = 0;
   var intervalsPractice = window.setInterval(function(){
    count++;   
    console.log(count)
    if(count >= 5){
        window.clearInterval(intervalsPractice)
    }
   },1000)
   
  
   function add_leading_zero(number) {
       if(number < 10)
       {
           return "0" + number.toString();
       }
       else
       {
           return number.toString();
       }
   }
  
  window.setInterval(function(){
    var digitalClock = new Date();
  
    var hours = digitalClock.getHours();
    var minutes = digitalClock.getMinutes();
    var secs = digitalClock.getSeconds();
    
    document.getElementById("hours").innerHTML = add_leading_zero(hours);
    document.getElementById("minutes").innerHTML = add_leading_zero(minutes);
    document.getElementById("seconds").innerHTML = add_leading_zero(secs);

    },1000);
  
  

  document.getElementById('relogio').onmouseover = function() {
    document.getElementById('relogio').style.backgroundColor = 'red';
    //document.getElementById('relogio').style.transform = transform(100px);
    document.getElementById('relogio').onmouseout = function() {
        document.getElementById('relogio').style.backgroundColor = 'black';
    }
  }
  */


  /*29 forms
  document.getElementById('show_option').onclick = function() {
    
    var selectField = document.getElementById('options');
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue =selectField.options[selectedOption].innerHTML;
    
    document.getElementById('selected_option').innerHTML = selectedValue;
  }


  document.getElementById('show_radio').onclick = function() {
    
    var radio = document.getElementsByName('gender');
    var radio_selected;
    for(var a = 0; a < radio.length; a++) {
        if(radio[a].checked){
            document.getElementById('selected_radio').innerHTML = radio[a].value;
        }
    }
  }

  document.getElementById('show_check').onclick = function() {
    
    var check_box = document.getElementsByName('interest');
    document.getElementById("selected_check").innerHTML = "";
    for(var b = 0; b < check_box.length; b++)
    {
        
            
            if(check_box[b].checked){
                document.getElementById('selected_check').innerHTML += "<li>" + check_box[b].value + "</li>";
            }
            
        

    }
  }*/
  //31 excercise 4
  var shipments = 
        {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
        };

    document.getElementById('shipments').onchange = function() {
        var selectedOption =  document.getElementById('shipments').value;
        var leadTime =  shipments[selectedOption].leadTime;
        var fee = shipments[selectedOption].fee;
       
        var orderDate = new Date();
        var deliveryDate = new Date(orderDate.getTime() + (86400000 * leadTime) );
        
        document.getElementById('order_date').innerHTML = orderDate.toISOString().slice(0,10);
        document.getElementById('delivery_date').innerHTML = deliveryDate.toISOString().slice(0,10);
        document.getElementById('delivery_fee').innerHTML = fee.toFixed(2);
        

    }


    var phones = 
    {
        'iphone_se_red': {
            'name': 'iPhone SE 64GB Red',
            'price': '450',
            'currency': 'US$',
            'imageUrl': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMuXLotj_m-bHNuYsdA7Xgi_XmLvjy8rsdA&usqp=CAU"
        },
        'iphone_11_black': {
            'name': 'iPhone 11 128GB Black',
            'price': '869',
            'currency': 'EUR',
            'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418"
        },
        'iphone_8_plus_silver': {
            'name': 'iPhone 8 Plus 64GB Silver',
            'price': '519',
            'currency': 'US$',
            'imageUrl': "https://5.imimg.com/data5/OS/CC/LI/SELLER-76999292/apple-iphone-8-plus-64gb-250x250.JPG"
        }
    };

    var radio = document.getElementsByName('product');
    console.log(radio);
    for(var a = 0; a < radio.length ; a++)
    {
        radio[a].onchange =  function() {
            
            
                for(var b = 0; b < radio.length ; b++)
                {
                    if(radio[b].checked) {
                        console.log(radio[b].value)
                        var selectedRadio = radio[b].value;
                        document.getElementById('phone_name').innerHTML = phones[selectedRadio].name;
                        document.getElementById('phone_price').innerHTML = phones[selectedRadio].currency + "" + phones[selectedRadio].price;
                        document.getElementById('phone_image').src = phones[selectedRadio].imageUrl;
                    }    

                }
            }
        
    }

    function add_leading_zero(number) {
        if(number < 10)
        {
            return "0" + number.toString();
        }
        else
        {
            return number.toString();
        }
    }

    var isRunning = false,
    startTime,
    currentTime,
    elapsedTime = 0,
    clockInterval,
    hours,
    minutes,
    seconds,
    remainder;
    
    document.getElementById('start_stop').onclick = function()
    {   
            if(elapsedTime == 0){
                startTime = new Date().getTime();
            }
            else{
                startTime = new Date().getTime() - elapsedTime;
            }
            if(!isRunning)
            {
                isRunning = true;

                clockInterval = window.setInterval(function() {
                    currentTime = new Date().getTime();
                    elapsedTime =  currentTime - startTime;

                    hours = Math.floor(elapsedTime  / 3600000);
                    remainder = elapsedTime - (hours * 3600000);

                    
                    minutes = Math.floor(remainder  / 600000);
                    remainder -= minutes * 600000;

                    seconds = Math.floor(remainder  / 1000);
                    remainder -= seconds * 1000;
                    
                    clockTimer = add_leading_zero(hours) + ':' + add_leading_zero(minutes) + ':' + add_leading_zero(seconds) + ':' + add_leading_zero(remainder);
                    
                    document.getElementById('stopwatch').innerHTML = clockTimer;
                },10)
                
            }
            else
            {
                window.clearInterval(clockInterval);
                isRunning = false;
            }
  }

  document.getElementById('reset').onclick =  function(){
    startTime = new Date().getTime();
    if(!isRunning)
    {
        elapsedTime = 0;
        document.getElementById('stopwatch').innerHTML = 0;
    }
  }


    