async function dragonAttack() {
    let tmpPosition = 5;
    let endPosition = 39;
    
    while(endPosition >= tmpPosition) {
        tmpPosition += 0.2;
        dragon.style.right = tmpPosition + 'rem';
        await timeWaiting(1);
    }

    dragonImg.setAttribute('src', '/images/dragon-attack-1.png');
    await timeWaiting(250);
    dragonImg.setAttribute('src', '/images/dragon-attack-2.png');
    await timeWaiting(250);
    dragonImg.setAttribute('src', '/images/dragon-attack-1.png');
    await timeWaiting(250);

    warriorHp -= randomAttack();
    if(warriorHp <= 0) {
        warriorHp = 0;
        winnerElement.style.display = 'block';
        winnerElement.innerHTML = 'DRAGON IS THE WINNER!';
    }

    warriorHpElement.style.width = warriorHp + '%';
    
    dragonImg.setAttribute('src', '/images/d-b.png');
    endPosition = 5;
    while(endPosition <= tmpPosition) {
        tmpPosition -= 0.2;
        dragon.style.right = tmpPosition + 'rem';
        await timeWaiting(1);
    }

    dragonImg.setAttribute('src', '/images/dragon-normal.png');
}