// function mnozenje(a,b) {
//     let c = a*b;
//     console.log(c);

//}

// const Mnozenje = (a,b) => console.log(a*b);

// mnozenje(10,8);
// Mnozenje(10,8);

// mnozenje(7,9);

// mnozenje(4,2);


//funkcija 1 pravi konverzija od C vo F.
//funkcija 1 pravi konverzija od C vo F.

//c2f(12); // vrakja stepeni vo F - da se trgne // za da moze da iskuca mojata vezba
//f2c(100); //vrakja stepeni vo c


// function c2f(celZ){
//  var cel = celZ;
//  var fromCtoF = cel *9/5+32;
//  var rez = cel+'\xB0C is ' + fromCtoF + '\xB0F';

//  console.log(rez);
// }


// function f2c(Far){
//     var far = Far;
//     var fromFtoC = far *5/9-32;
//     var rez = far-'\xB0F' - fromFtoC +'\xB0C';
// }

//- '\xB0' se koristi kako simbol za stepeni vo js i html
// http://www.javascripter.net/faq/mathsymbols.htm


const c2f = (c) => {
    return c * 1,8 +32;

};

const f2c = (f) => {
    return((f - 32) * 5 / 9);
};

 let res1 = c2f(12);
 console.log(res1);

  let res2 = f2c(100);
 console.log(res2);



f2c(100);

const fun = (parm, c) => {
    let r = parm(c) + 100;
    return r;

};

let res = fun(c2f,12);
console.log('FUN:', res);


const handler = (e) => {
    console.log(e);

}

// el.addEventListener('clik',handler);
// el.addEventListener('clik', (e)=> {
//     console.log(e);
// }) - call back funkcii 