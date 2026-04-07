// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
// bosh va oxirgi harflarini birlashtirgan stringni qaytarsin.
function harf(a) {
  return a[0] + a[a.length - 1];
}
console.log(harf("salom"));
// 79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini
// qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni
// boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini.
// Agar funksiya string kiritilsa xuddi shunday formatda string
// qaytarsin.
function sozAytish(word) {
  if (word === "") {
    return console.log("Hech narsa yo'q");
  }
  if (word === 1) {
    return console.log("Son kiritilmasin");
  }
  let soz = word.slice(0, 2);
  return `${soz}... ${soz}... ${word}`;
}

console.log(sozAytish("ikki"));
// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy")  "Today, I am feeling happy"
// ahvol("sad") "Today, I am feeling sad"
// ahvol() "Today, I am feeling neutral"
function hol(a) {
  if (a === 1) {
    return "Son kiritilmasin";
  }
  if (a.endsWith("happy")) {
    return "Today, I am feeling happy";
  } else if (a.endsWith("sad")) {
    return "Today, I am feeling sad";
  } else if (a.endsWith("")) {
    return "Today, I am feeling neutral";
  }
}
console.log(hol("sad"));
// 81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta
// bo’g’in borligini aytsin.
function bogin(word) {
  let count = 0;
  let unli = ["a", "e", "i", "o", "o'", "u"];
  word.split("").forEach((harf) => {
    if (unli.includes(harf)) {
      count++;
    }
  });
  return count;
}
console.log(bogin("salom"));
// 83.Funksiyaga 2ta so’z beriladi, anashu 2ta so’z bir-biriga teng
// bo’lsa true qaytsin, aks holda false. Bunda ikkala so’zining katta
// yoki kichik harflarda yozilgani ahamiyatsiz deb oling
function tengmi(soz1, soz2) {
  return soz1.toLowerCase() === soz2.toLowerCase();
}
console.log(tengmi("salom", "SALOM"));
// 84.Funksiyaga so’z berilsa, funksiya ushbu so’zining nechta
// belgidan iborat ekanligini qaytarsin. Bunda string.length
// propertisizdan foydalanish mumkin emas !!!
function belgiSoni(word) {
  let count = 0;
  for (let harf of word) {
    count += 1;
  }
  return count;
}
console.log(belgiSoni("salom"));
// 86.Quyidagi namunani kuzatgan holda funkisya yasang.
// Namuna:
// namuna([2, 5, 3]) ᔍ [4, 10, 6]
// namuna([1, 86, -5]) ᔍ [2, 172, -10]
// namuna([5, 382, 0]) ᔍ [10, 764, 0]
function two(a) {
  return a.map((item) => (item *= 2));
}
console.log(two([2, 5, 3]));
// 87.Funksiya so’zlar massivini qabul qiladi. Funksiya ana shu
// so’zlarning uzunligidan iborat bo’lgan yangi massiv qaytarsin.
// Namuna:
// wordLengths(["hello", "world"]) ᔍ [5, 5]
// wordLengths(["Halloween", "Thanksgiving",
// "Christmas"]) ᔍ [9, 12, 9]
// wordLengths(["She", "sells", "seashells", "down",
// "by", "the", "seashore"]) ᔍ [3, 5, 9, 4, 2, 3, 8]
function son(word) {
  return word.map((item) => item.length);
}
console.log(son(["She", "sells", "seashells", "down"]));
// 89.Funksiya matn qabu qilsa, ushbu funksiya ushbu matnda “d”
// harfi nechi marta ishtirok etganligini qaytarsin. “d” harfining
// katta kichikligini ahamiyati yo’q.
function dlar(text) {
  let count = 0;
  for (let harf of text) {
    if (harf === "d" || harf === "D") {
      count++;
    }
  }
  return count;
}
console.log(dlar("My friend Dylan got distracted in school."));
// 90.Funksiya string qabul qiladi. Va har belgini orasiga bo’sh joy
// qo’yib qaytarsin.
function space(bosh) {
  return bosh
    .split("")
    .map((item) => item + " ")
    .join("");
}
console.log(space("space"));
// 92.Agar men cafedan 3ta kofe olsam yana 1ta tekinga qo’shib
// berishadi. Funksiya nechta kofe olsam meni qo’limda jami
// nechta kofe bo’lishini qaytarsin
function kofe(a) {
  if (a >= 3) {
    return (a += 1);
  } else {
    return a;
  }
}
console.log(kofe(4));
// 93.Funksiyaga string va son berilsa, ushbu stringning oxirigi
// belgisini funksiya son marta takrorlab qaytarib bersin.
function str(str, son) {
  let oxiri = str[str.length - 1];
  return str + oxiri.repeat(son);
}
console.log(str("hello", 3));
// 94.Funksiyaga sonlar massivi berilsa, Ana shu massivdagi 5dan
// katta bo’lgan elementlarni yig’indiisini qaytarsin.
function yigindi(a) {
  let jami = 0;
  a.forEach((item) => {
    if (item > 5) {
      jami += item;
    }
  });
  return jami;
}
console.log(yigindi([1, 5, 20, 30, 4, 9, 18]));
// 95.Funksiyaga massiv berilsa, ushbu funksiya massiv elementlarini
// barchasini yig’indisini qaytarsin.
function jami(a) {
  let jami = 0;
  a.forEach((item) => (jami += item));
  return jami;
}
console.log(jami([2, 7, 4]));
// 97.Doston uyidan masofalar bosib o’tadi. Uyidan yo oldinga
// yoki orqaga. Bosib o’tilgan masoflar massivi funksiya berilsa,
// funksiya Doston uyiga qaytishi uchun qancha masofa bosib
function home(a) {
  let jami = 0;
  a.forEach((item) => (jami += item));
  return jami;
}
console.log(home([3, 4, -5, -2]));
