
    //MEMBERS PER GROUP INPUT FIELD
    let Pgrp = document.getElementById("grpNO");
    
    let genBTN = document.getElementById("gen");
    
    // INPUT FIELDS
    
    var inp1 = document.getElementById("Input1");
    var inp2 = document.getElementById("Input2");
    var inp3 = document.getElementById("Input3");
    var inp4 = document.getElementById("Input4");
    var inp5 = document.getElementById("Input5");
    var inp6 = document.getElementById("Input6");
    var inp7 = document.getElementById("Input7");
    var inp8 = document.getElementById("Input8");
    var inp9 = document.getElementById("Input9");
    var inp10 = document.getElementById("Input10");
    var inp11 = document.getElementById("Input11");
    var inp12 = document.getElementById("Input12");
    var inp13 = document.getElementById("Input13");
    var inp14 = document.getElementById("Input14");
    var inp15 = document.getElementById("Input15");
    var inp16 = document.getElementById("Input16");
    var inp17 = document.getElementById("Input17");
    var inp18 = document.getElementById("Input18");
    var inp19 = document.getElementById("Input19");
    var inp20 = document.getElementById("Input20");
    var inp21 = document.getElementById("Input21");
    var inp22 = document.getElementById("Input22");
    var inp23 = document.getElementById("Input23");
    var inp24 = document.getElementById("Input24");
    var inp25 = document.getElementById("Input25");
    var inp26 = document.getElementById("Input26");
    var inp27 = document.getElementById("Input27");
    var inp28 = document.getElementById("Input28");
    var inp29 = document.getElementById("Input29");
    var inp30 = document.getElementById("Input30");


    // TEXT AREA
    var txtAr = document.getElementById("tA");
    
    //Other INFO
    var compNAME = document.getElementById("compNAME");
    var compADDRESS = document.getElementById("compADD");
    var compEV = document.getElementById("compEVENT");
    var compINFO = document.getElementById("OtherINFO");
    
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
      
    }
    
    function show_hideinp(){
    
    let finps = document.getElementById("hidden_input");
    let brekk  = document.getElementById("brak");
    
    if (finps.style.display === "none" && brekk.style.display === "none" ){
    
    finps.style.display = "block";
    
    brekk.style.display = "none";
    document.getElementById("s_h").innerHTML = "show less";
    
    }
    else{
    
    finps.style.display = "none";
    
    brekk.style.display = "none";
    
    document.getElementById("s_h").innerHTML = "show more | *Scroll down after clicking";
    
    }
    }

    let grp_arrayL;
    let grp_array = [];
    let holdArr = []
    let groupNo = 0;

    function createGrps(){
     
      
      grp_array.length = 0;
      document.getElementById("mamaDiv").innerHTML = " ";
      let pastedtext_split;

    if (txtAr.value !=="" && Pgrp.value !=="" && Pgrp.value > 0){
     // document.getElementById("totalGRPS").innerHTML = "Processing..."
    var counter = 0;
 
    let pastedtext = txtAr.value.replace(/([0-9{1,10}])+\./gi, " ").trim();
    
    pastedtext_split = pastedtext.split("\n");
    
    let text2arr = pastedtext_split.map((lak)=>{ return lak.split(",")|| []});
    
    if ( document.getElementById("shuffleit").checked === true){
    
    shuffle(text2arr);
    shuffle(text2arr);
    
    }
    
    //console.log(pastedtext_split)
    
    
        while (text2arr.length > 0) {
        
            grp_array.push(text2arr.splice(0,Pgrp.value));
            
        }

        holdArr = grp_array.length;
    
        let group1 = document.createTextNode(inp1.value);
        let group2 = document.createTextNode(inp2.value);
        let group3 = document.createTextNode(inp3.value);
        let group4 = document.createTextNode(inp4.value);
        let group5 = document.createTextNode(inp5.value);
        let group6 = document.createTextNode(inp6.value);
        let group7 = document.createTextNode(inp7.value);
        let group8 = document.createTextNode(inp8.value);
        let group9 = document.createTextNode(inp9.value);
        let group10 = document.createTextNode(inp10.value);
        let group11 = document.createTextNode(inp11.value);
        let group12 = document.createTextNode(inp12.value);
        let group13 = document.createTextNode(inp13.value);
        let group14 = document.createTextNode(inp14.value);
        let group15 = document.createTextNode(inp15.value);
        let group16 = document.createTextNode(inp16.value);
        let group17 = document.createTextNode(inp17.value);
        let group18 = document.createTextNode(inp18.value);
        let group19 = document.createTextNode(inp19.value);
        let group20 = document.createTextNode(inp20.value);
        let group21 = document.createTextNode(inp21.value);
        let group22 = document.createTextNode(inp22.value);
        let group23 = document.createTextNode(inp23.value);
        let group24 = document.createTextNode(inp24.value);
        let group25 = document.createTextNode(inp25.value);
        let group26 = document.createTextNode(inp26.value);
        let group27 = document.createTextNode(inp27.value);
        let group28 = document.createTextNode(inp28.value);
        let group29 = document.createTextNode(inp29.value);
        let group30 = document.createTextNode(inp30.value);
        
    
        let inputArray = [group1,group2,group3,group4,group5,group6,group7,group8,group9,group10,group11,group12,group13,group14,group15,
        group16,group17,group18,group19,group20,group21,group22,group23,group24,group25,group26,group27,group28,group29,group30]; 
  
    // estimate the length of the grp Array. Our mission is to make the other part of the code wait.
  
    //Create elements and append dia results, then display in the body
    let waitforArraySplit = Math.round(pastedtext_split.length / Pgrp.value);
  if(grp_array.length >= waitforArraySplit ){
   for (let i = 0; i < holdArr; i ++){
    let disDiv  = document.createElement('div');
    let innerDiv  = document.createElement('div');
    let names  = document.createElement('div');
    let header  = document.createElement('div');
    let subHeader  = document.createElement('div');
    let compAdress = document.createElement('div');
    let tag = document.createElement('div');
    let info = document.createElement('div');
    let hwMany = document.createElement('div');
    let ourGrp = document.createElement('div');
    let saveBtn = document.createElement('button');
    let saveBtnTxt = document.createTextNode("Copy contents")
    innerDiv.classList.add("dply");
    disDiv.classList.add("spangrp")
    innerDiv.setAttribute('contenteditable', 'true');
    header.classList.add("header");
    tag.classList.add("tag");
    info.classList.add("infoX");
    compAdress.classList.add("address");
    hwMany.classList.add("howMANYmembers");
    ourGrp.classList.add("ourGroup");
    saveBtn.classList.add("copyBTN");
    saveBtn.appendChild(saveBtnTxt);
   
    //Change the text on the save button to copied when clicked.

    saveBtn.onclick = function(){
     navigator.clipboard.writeText(this.parentElement.getElementsByTagName("div")[0].innerText)
     this.innerHTML = "Copied"
    }

   
   let inputVal = inputArray.shift();
   let cutOut = grp_array.shift();
   cutOut.unshift(["null"])
   let splitOut = cutOut.toString().split(",");
   let disArrLength = splitOut.length -1;
   groupNo++;
   
   let txt = " ";

    for (let j = 1; j < splitOut.length; j++){
      txt += [j] + ". "  + splitOut[j] + "<br/>";
    }
    let hwmanynames = document.createTextNode(disArrLength + " members in group " + groupNo);
    let discompHdr = document.createTextNode(compNAME.value);
    let discompAddress = document.createTextNode(compADDRESS.value);
    let discompTag = document.createTextNode(compEV.value);
    let discompInfo = document.createTextNode(compINFO.value);
    header.appendChild(discompHdr);
    compAdress.appendChild(discompAddress);
    tag.appendChild(discompTag);
    info.appendChild(discompInfo);
    ourGrp.appendChild(inputVal);
    names.innerHTML = txt;
    hwMany.appendChild(hwmanynames);
    innerDiv.appendChild(header);
    innerDiv.appendChild(compAdress);
    innerDiv.appendChild(tag);
    innerDiv.appendChild(info);
    innerDiv.appendChild(ourGrp);
    innerDiv.appendChild(names);
    disDiv.appendChild(innerDiv);
    disDiv.appendChild(hwMany);
    disDiv.appendChild(saveBtn);
    document.getElementById("mamaDiv").appendChild(disDiv);
    counter++;
   }
   }

  
   groupNo = 0;
      document.getElementById("totalGRPS").innerHTML = "You have sucessfully created "+counter+ " groups" + " from " + pastedtext_split.length + " names";
      
    }
   else{
     alert("Please add text to the text box & Number of names per group box")
   }
     
   }

   var dis_year = new Date();

var c_Year = dis_year.getFullYear();
document.getElementById("year").innerHTML = c_Year ;

 //Get the button
 var mybutton = document.getElementById("myBtn");
   
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
  
    
    
      
      
    