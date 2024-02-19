async function warriorAttack() {
    await warriorMoveForwards();
    await warriorJump();
    await warriorMoveBackwards();
}

async function warriorMoveForwards() {
    let tmpPosition = 5;
    let endPosition = 39;
    while (tmpPosition <= endPosition) {
        tmpPosition += 0.2;
        warrior.style.left = tmpPosition + 'rem'; //${tmpPos}rem
        await timeWaiting(1);
    }
}

async function warriorJump() {
    let startPosition = 12;
    let endPosition = 15;
    let tmpPosition = 12;
    warriorImg.setAttribute('src', '/Gameplay-main/images/jump.png');
    while (tmpPosition <= endPosition) {
        tmpPosition += 0.1;
        warrior.style.bottom = tmpPosition + 'rem';
        await timeWaiting(10);
    }

    warriorImg.setAttribute('src', '/Gameplay-main/images/attack.png');
    dragonHp -= randomAttack();
    if(dragonHp <= 0) {
        dragonHp = 0;
        winnerElement.style.display = 'block';
        winnerElement.innerHTML = 'WARRIOR IS THE WINNER!';
    }

    dragonHpElement.style.width = dragonHp + '%';

    while (tmpPosition >= startPosition) {
        tmpPosition -= 0.1;
        warrior.style.bottom = tmpPosition + 'rem';
        await timeWaiting(10);
    }

    warriorImg.setAttribute('src', '/Gameplay-main/images/normal.png');
}

async function warriorMoveBackwards() {
    let tmpPosition = 39;
    let endPosition = 5;
    warriorImg.setAttribute('src', '/Gameplay-main/images/n-b.png');
    while (tmpPosition >= endPosition) {
        tmpPosition -= 0.2;
        warrior.style.left = tmpPosition + 'rem';
        await timeWaiting(1);
    }

    warriorImg.setAttribute('src', '/Gameplay-main/images/normal.png');
}
