function oblicz(){
    var waga = document.getElementById("waga").value;
    waga = parseInt(waga);
    var wzrost = document.getElementById("wzrost").value;
    wzrost = parseInt(wzrost)/100;
    var bmi = waga / (wzrost * wzrost);
    document.getElementById("wynik").innerHTML = bmi.toFixed(2);


if (bmi<16){
    document.getElementById("slownie").innerHTML = "wygłodzenie"
}

else if( (bmi>=16)&&(bmi<17)){
    document.getElementById("slownie").innerHTML = "wychudzenie"
}
else if ((bmi>=17)&&(bmi<18.5)){
    document.getElementById("slownie").innerHTML = "niedowaga"
}
else if ((bmi>=18.5)&&(bmi<25)){
    document.getElementById("slownie").innerHTML = "wartość prawidłowa"
}
else if ((bmi>=25)&&(bmi<30)){
    document.getElementById("slownie").innerHTML = "nadwaga"
}
else if ((bmi>=30)&&(bmi<35)){
    document.getElementById("slownie").innerHTML = "1 stopień otyłości"
}
else if ((bmi>=35)&&(bmi<40)){
    document.getElementById("slownie").innerHTML = "2 stopień otyłości"
}
else if (bmi>=40){
    document.getElementById("slownie").innerHTML = "otyłość skrajna"
}




}