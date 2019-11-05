
getRandom=()=>{

    const quotes = [
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "Don't watch the clock; do what it does. Keep going.",
        "The secret of getting ahead is getting started.",
        "Well done is better than well said.",
        "You miss 100% of the shots you don’t take.",
        "A goal is a dream with a deadline.",
        "Outstanding people have one thing in common: An absolute sense of mission.",
        "Trying is winning in the moment.",
        "Fall down seven times and stand up eight.",
        "You just can't beat the person who never gives up.",
        "There is little success where there is little laughter.",
        "We cannot solve our problems with the same thinking we used when we created them."
      ];
      let min = Math.ceil(0);
      let max = Math.floor(quotes.length-1);
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      //let randomNumber =Math.floor( Math.random(0, quotes.length-1))
      return quotes[randomNumber]
}


function getRandomIntInclusive(min, max) {
     //The maximum is inclusive and the minimum is inclusive 
  }


callbackRandom = (event) => {
    let quote = getRandom()
    console.log(quote)
    document.querySelector('#quote').textContent= quote
    // console.dir(event.target)

}


init = () => {
    document.querySelector('button').addEventListener("click", callbackRandom)
    callbackRandom()

}


window.addEventListener("load", init)

