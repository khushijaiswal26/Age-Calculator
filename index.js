function calculate(){

    let year;
    let month;
    let day;

    let curr= document.getElementById("cd").value;
    let cy=parseInt(curr.slice(0,4),10);
    let cm=parseInt(curr.slice(5,7),10);
    let cd=parseInt(curr.slice(8,10),10);

    let birth= document.getElementById("bd").value;
    let by=parseInt(birth.slice(0,4),10);
    let bm=parseInt(birth.slice(5,7),10);
    let bd=parseInt(birth.slice(8,10),10);

    if(cd>=bd){
        day = cd - bd;
    }
    else{
        // if(cm==1||cm==3||cm==5||cm==7||cm==8||cm==10||cm==12){
        //     day = cd + 31 - bd;
        // }
        // else if(cm==2){
        //     if(cy%4==0){
        //         day = cd + 29 - bd;
        //     }
        //     else{
        //         day = cd + 28 - bd;
        //     }  
        // }
        // else{
        //     day = cd + 30 - bd;
        // }
        day= cd+new Date(cy,cm).getDate() - bd;
        cm--;   
    }

    if(cm>=bm){
        month= cm-bm;
    }
    else{
        month= cm + 12 -bm;
        cy--;
    }

    year= cy - by;

    if(year<0){
        ageText.innerHTML= "Kya mazak kar rhe ho yaar, sahi date dhalo";
    }
    else{
        ageText.innerHTML= year + " years " + month + " months " + day + " days";
    }
}