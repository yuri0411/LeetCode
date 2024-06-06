function isNStraightHand(hand: number[], groupSize: number): boolean {
    hand.sort((a, b) => a - b )

    let cards = {}

    for(let card of hand) {
        if(cards[card]) {
            cards[card]++
        } else {
            cards[card] = 1
        }
    }

    for(let card of hand) {
        if(cards[card] === 0) {
            continue
        }
        console.log(card)
        for(let i = 0; i < groupSize; i ++){
            let currentCard = card + i
            
            if (cards[currentCard] > 0) {
                cards[currentCard] -= 1
            } else {
                return false
            }
        }
    }

    return true
};