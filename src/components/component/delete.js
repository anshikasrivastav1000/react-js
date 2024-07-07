let deal1 = 200;
let deal2 = 700;
let deal3 = 800;
let deal4 = 600;
let deal5 = 400;
let deal6 = 600;

// virat kohli = cheeku
// 5year later
    console.log(deal5);
//1000

//array sare data ko ikattha store krta h
// isse manage krna : easy [searching,sorting, deleting, update, create krna in simple CRUD]

let anshikaDeals = [200,700,800,600,400,600];

console.log(anshikaDeals[4]);
console.log(anshikaDeals.length);
anshikaDeals[4] = 1000;
console.log(anshikaDeals[4]);

//---------CREATING EMPTY ARRAY------------
let arrayName = [];
//---------copy one array to another--------
// copy through reference-->
    let arunDeals = anshikaDeals;
    console.log(arunDeals);
    console.log(arunDeals===anshikaDeals);

    console.log(arunDeals,anshikaDeals);

    arunDeals[4] = 700;
    console.log(arunDeals,anshikaDeals);

    // -------copy through creating new array------
   





    
    



//5 year later ek file me 

// task1: deal5 ko console krana h

/*

case 1: if not using array:
    approx 2min tk search kiye sare file kiye ki data konsa file me h
    us file me jaoge deal5 ko export kroge
    phir iss file me deal5 ko import kroge
    uskke baad cosole.log kroege
    console.log(deal5)
 
case 2: if using array
    approx 2min tk search kiye sare file kiye ki data konsa file me h
    us file me jaoge deals array  ko export kroge
    phir iss file me deals array  ko import kroge
    uskke baad cosole.log kroege
    console.log(deal5)

    syntax: array arrayName[elementNumber-1]
    bcz : array has concept of index for numbering starts with 0

    konsa student                                                       arrayIndex
    1st student                                                         rollNum[0]
    2nd student                                                         rollNum[1]
    3rd student                                                         rollNum[2]
    4th student                                                         rollNum[3]
    -                                                                   -
    -                                                                   -
    -                                                                   -
    -                                                                   -
    nTh student                                                         rollNum[n-1]


    5saal baad : task2: kitne deal kiye
    
    case1: without Array--- Searching
    1 deal ko search krne m 2 min
    6 deal ===> 2x6=12mins

    case2: kewal 1 array search krna h
    method is array.length

    -----DATA UPDATION----------
     
    us index ko access krenge jisko update krne h and new value assign krenge














*/