const winner=document.getElementById('winner');
const sc1=document.getElementById('sc1');
const sc2=document.getElementById('sc2');
const reset=document.getElementById('reset');
const p1im=document.getElementById('im1');
const p2im=document.getElementById('im2');
const ad1=document.getElementById('p1attack');
const ad2=document.getElementById('p2attack');
const ad3=document.getElementById('p1heal');
const ad4=document.getElementById('p2heal');
const ad5=document.getElementById('victory');
function updateGame(sc1,sc2,str1,str2,h1,h2){
    sc1.innerText=Number(sc1.innerText)+Number(h1)-Number(str1);
    sc2.innerText=Number(sc2.innerText)+Number(h2)-Number(str2);
    if(Number(sc1.innerText)<=0 || Number(sc2.innerText)<=0){
        // game.isOver=true;
        console.log('looookkkk',p1im,p2im);
        gameState=false;
        game.declareWinner(sc1,sc2,gameState);
    }
}
class Player{
    constructor(score,oppscore){
        this.score=score;
        this.oppscore=oppscore;
    }
    strike(){
        let k=(Math.floor(Math.random()*10))+1;
        return k;
    }
    heal(){
        let k=(Math.floor(Math.random()*5))+1;
        return k;
    }
}
class Game{
    constructor(){
        this.isOver=false;
    }
    declareWinner(){
            if(Number(sc1.innerText)<=0){
                winner.innerText='PLAYER 2 WINS';
                // this.isOver=true;
                gameState=false;
                p1im.style.display='none';
                ad5.play();
            }
            else if(Number(sc2.innerText)<=0){
                winner.innerText='PLAYER 1 WINS';
                // this.isOver=true;
                gameState=false;
                p2im.style.display='none';
                ad5.play();
            }
    }
    resetGame(){

        sc1.innerText=100;
        sc2.innerText=100;
        winner.innerText=' ';
        // this.isOver=false;
        gameState=true;
        p1im.style.display='block';
        p2im.style.display='block';
    }
}
let pl1=new Player(Number(sc1.innerText),Number(sc2.innerText));
let pl2=new Player(Number(sc2.innerText),Number(sc1.innerText));
let game=new Game();
let gameState = true;
document.addEventListener('keydown',function(e){
    if((e.key=='q' || e.key =='Q') && Number(sc2.innerText)>0 && gameState==true){
        let s=pl1.strike();
        updateGame(sc1,sc2,0,s,0,0);
        p1im.src='assests/strik1.gif';
        ad1.play();
    }
    else if((e.key=='p' || e.key =='P') && Number(sc1.innerText)>0 && gameState==true){
        let s=pl2.strike();
        updateGame(sc1,sc2,s,0,0,0);
        p2im.src='assests/strik2.gif';
        ad2.play();
    }
    else if((e.key=='a' || e.key =='A') && Number(sc1.innerText)>0 && gameState==true){
        let h=pl1.heal();
        updateGame(sc1,sc2,0,0,h,0);
        ad3.play();
    }
    else if((e.key=='l'|| e.key =='L') && Number(sc2.innerText)>0 && gameState==true){
        let h=pl2.heal();
        updateGame(sc1,sc2,0,0,0,h);
        ad4.play();
    }
})
reset.onclick=function(){
    game.resetGame();
    p2im.src='./assests/ken-akuma.gif';
    p1im.src="https://i.gifer.com/origin/00/0019f6845ceaa9347b881ccbe8f5644a_w200.gif";
}
