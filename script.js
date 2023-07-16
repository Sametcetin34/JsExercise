
//!1-Belirlenen sayı aralağında sayı üretme
function rasgele(x, y){
    return Math.round(Math.random() * (y - x) + x) ;
   }
   
   console.log(rasgele(1,10));

//!2-People2 dizisi oluşturmak

const people=["Greg","Mary","Devon","James"];
const value=people.splice(1,2,"Elizabeth","Marie","Artie");
let people2=people;
console.log(people2);

//!3-Dönüştürücü
const text1="mustafa_selman@gmail.com"
const text2="mehmet_colak@hotmail.com"
const text3="yasin_sezer@yandex.com"
function donusturucu(email){

  
    var bolum = email.split("@");
    var isimsoyisim = bolum[0];
    
   
      var isimsoyisimdizi = isimsoyisim.split('_');
      var isim = isimsoyisimdizi[0];
      var soyisim = isimsoyisimdizi[1];
    
      
 
      var buyukIsimIlkHarf = isim.charAt(0).toUpperCase() + isim.slice(1);
      var buyukSoyisimIlkHarf = soyisim.charAt(0).toUpperCase() + soyisim.slice(1);
    
  
      var sonuc = buyukIsimIlkHarf + ' ' + buyukSoyisimIlkHarf;
    
      return sonuc;
    }
    
    console.log(donusturucu(text1));
    console.log(donusturucu(text2));
    console.log(donusturucu(text3));

//!4-Sayılar fonksiyonu

let sayilar=[12,34,2,3,67,66,5,24]

function maxSecond(count){
count=count.sort(function(a,b){return b-a});
count=count[1];
return count;
}
console.log(maxSecond(sayilar));


function minSecond(count){
    count=count.sort(function(a,b){return a-b});
    count=count[1];
    return count;
    }
console.log(minSecond(sayilar));    