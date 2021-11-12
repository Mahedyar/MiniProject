function Card(title, imdb, date , duration , img) {
    this.title = title;
    this.imdb = imdb;
    this.date = date
    this.duration = duration
    this.img = img;
}

const cardsInfo = [];
cardsInfo.push(new Card('Avengers:Endgame', '8.2', 'SUN 8 SEPT - 10:00 PM' , "2HR 20MIN","res/img/avengers.jpg"))
cardsInfo.push(new Card('Hobbs & Shaw', '9.7', 'TUE 4 JULY - 05:00 PM' ,"2HR 10MIN","res/img/hobbs.jpg"))
cardsInfo.push(new Card('John Wick 3', '8.3', 'WED 18 AUG - 07:00 PM',"1HR 50MIN","res/img/John-Wick-3.jpg"))
cardsInfo.push(new Card('Deadpool 2', '7.3', 'MON 18 OCT - 10:00 PM',"2HR 15MIN","res/img/deadpool-2.jpg"))
cardsInfo.push(new Card('The Lion King', '8.1', 'SUN 10 SEPT - 11:00 PM',"1HR 45MIN","res/img/lionking.jpg"))
cardsInfo.push(new Card('Mad Max: Fury Road', '7.4', 'WED 12 DEC - 6:00 PM',"2HR 30MIN","res/img/mad-max.jpg"))
cardsInfo.push(new Card('Aquaman', '8.1', 'SUN 12 SEPT - 10:00 PM',"2HR 2MIN","res/img/aquaman.jpg"))
cardsInfo.push(new Card('Mission Impossible', '7.8', 'SUN 16 NOV - 12:00 PM',"2HR 40MIN","res/img/mission-impossible.jpg"))


const cardView = (cardInfo) => {
    return `
<div  class="card col-2 ">
    <div>
        <img alt=${cardInfo.title} class="photo" src=${cardInfo.img}>
    </div>
    <div class="contentHolder">
        <div class="card_content">
            <h3 class="title">
                ${cardInfo.title}
            </h3>
            <h4>
                <span style="color: cornflowerblue">${cardInfo.imdb}</span>/10
            </h4>
        </div>
        <div class="card_content " style="color: gray">
            <h4>LAST UPDATE</h4>
            <h4>RUNNING TIME</h4>
        </div>
        <div class="card_content ">
            <h4 >${cardInfo.date}</h4>
            <h4>${cardInfo.duration}</h4>
        </div>
    </div>

</div>
`
}

const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = generateCards(cardsInfo)


function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = cardsInfo.filter(card => {
        return card.title.includes(searchTerm)
    })

    cardContainer.innerHTML = generateCards(filteredCards)
}


