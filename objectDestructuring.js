//object destructurig
const band={
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherSong: "Nmaste Uncle",
};
// const bandName=band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName,famousSong);
//but we have shortcut to that
// let {bandName,famousSong}=band; //by defaukt key name ka hi variabkle banta hai.
// console.log(bandName);
// making new variable of key
let{bandName:var1,famousSong:var2, ...bachaHuaPrintHoJayega}=band;
// console.log(bandName); //throw an error
console.log(var1);
console.log(bachaHuaPrintHoJayega);