function createTable(){
    var table = document.createElement("table");
    var tr1   =  document.createElement("tr");
    var tr2   =  document.createElement("tr");
    var tr3   =  document.createElement("tr");
    var tr4   =  document.createElement("tr");

    table.appendChild(tr1); //inside table 1 tr will added
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    
    //Create clum
    var td1   =  document.createElement("td");
    var td2   =  document.createElement("td");
    var td3   =  document.createElement("td");
    var td4   =  document.createElement("td");
    var td5   =  document.createElement("td");
    var td6   =  document.createElement("td");
    var td7   =  document.createElement("td");
    var td8   =  document.createElement("td");
    var td9   =  document.createElement("td");
    
    var th1  =  document.createElement("th");
    var th2  =  document.createElement("th");
    var th3  =  document.createElement("th");

    th1.innerText = "ID";
    th2.innerText = "Name";
    th3.innerText = "Email";

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);

//added the colum in 2,3,4row
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);

    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);

    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

//added the content in colums

   td1.innerText = 101;
   td2.innerText = "Soha Sharma";
   td3.innerText = "soha12@gmail.com";

   td4.innerText = 102;
   td5.innerText = "Priya patil";
   td6.innerText = "priya@gmail.com";

   td7.innerText = 103;
   td8.innerText = "Ram koli";
   td9.innerText = "ram34@gmail.com";
//css part in javascript
    table.width = "800px";
    table.frame ="box";
    table.rules = "all";
    table.style.margin = "auto";
    table.cellPadding = "10px";

    tr1.style.backgroundColor = "black";
    tr1.style.color = "white";

    tr2.align = "center";
    tr3.align = "center";
    tr4.align = "center";

//tagnames return a array
   var bodyRef = document.getElementsByTagName("body");
   bodyRef[0].appendChild(table);
}