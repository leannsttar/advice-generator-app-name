let message = document.getElementById("message");
let idM = document.getElementById("idM");
let roll = document.getElementById("roll");

roll.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      let advice = data.slip.advice;
      let idMessage = data.slip.id;

      message.textContent = `"${advice}"`;
      idM.textContent = "ADVICE #" + idMessage;
    })
    .catch((error) => {
      console.log(error);
    });
});

//SAZZZ way

// let roll = document.getElementById('roll');

// roll.addEventListener('click', () => {
//     mostrarQuote();
// })

// async function getQuote(){
//     let quote = await fetch("https://api.adviceslip.com/advice");
//     return quote.json();
// }
// async function mostrarQuote(){
//     console.log("Quote!")
//     myQuote = await getQuote();
//     console.log(myQuote)
//     document.getElementById("idM").innerHTML = "#"+myQuote.slip.id;
//     document.getElementById("message").innerHTML = '"'+myQuote.slip.advice+'"';
// }
