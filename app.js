const rolldicebtn = document.getElementById('rolldice');
const list = document.getElementById('list');
const dice = document.getElementById('dice');
let history = [];

function solution (){
    dice.classList.add('animation')
    setTimeout(()=>{
        dice.classList.remove('animation')
    },1000)
    let randomdice = Math.floor(Math.random()*6)+1;
    let diceface = casebox(randomdice);
    history.push(diceface);
    console.log(history);
    setTimeout(()=>{
        updatedice(history,diceface)
    },900)

    

}
function updatedice(history,diceface){
    
    dice.innerHTML=diceface;
    let li = document.createElement('li')
    for(let i =0 ;i<history.length;i++){
        li.innerHTML=` Roll ${i+1}:<div>${diceface}</div>`
    // list.innerHTML=`<li></li>`
    list.appendChild(li)
    }
    // let li = document.createComment('li');

}
function casebox (randomdice){
    switch(randomdice){
        case 1:
            return '&#9856;';
            case 2:
                return '&#9857;';
                case 3:
                    return '&#9858;';
                    case 4:
                        return '&#9859;'
                        case 5:
                            return '&#9860;'
                            case 6 :
                                return '&#9861;'
    }
}
rolldicebtn.addEventListener('click',()=>{
    solution();
  
    // dice.innerText=`${diceface}`
    // console.log(diceface)

})

