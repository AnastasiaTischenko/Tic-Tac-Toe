var hod = 0;
const gameItem = (() => {
    function innerInit(){
        createField();
        addListeners();
    }
    
    function createField(){
        let size = 9;
        let str = "";
        let gameField = document.getElementsByClassName('game-field')[0];
        gameField.style.display = 'block';
        for (let i = 0; i < size; i++){
            str += '<div class="game__block"></div>'; 
        }
        gameField.innerHTML = str;
    }
    
    function addListeners(){
        document.getElementsByClassName('game-field')[0].addEventListener('click', function(event){
            
            (hod % 2 === 0) ? (document.getElementsByClassName('player')[0].innerHTML = 'Player : X') : (document.getElementsByClassName('player')[0].innerHTML = 'Player : 0')
            if (event.target.className === "game__block" && event.target.innerHTML === ""){
                (setValue)();
                if (hod > 4){
                    checkWinner();
                }
            }
        }, false);
    }
    
    function setValue(){
        ++hod;
        (hod % 2 === 0) ? (event.target.innerHTML = "X") : (event.target.innerHTML = "0")
    }
    
    function checkWinner(){
        let allblocks = document.getElementsByClassName('game__block')
        for (let i = 0; i < 3; i += 3){
            if (allblocks[i].innerHTML === "X" && allblocks[i + 1].innerHTML === "X" && allblocks[i + 2].innerHTML === "X"){
                document.getElementsByClassName('player')[0].innerHTML = 'X is winner';
                refreshField()
            }
            if (allblocks[i].innerHTML === "0" && allblocks[i + 1].innerHTML === "0" && allblocks[i + 2].innerHTML === "0"){
                document.getElementsByClassName('player')[0].innerHTML = '0 is winner';
                refreshField()
            }
        }
        for (let i = 0; i < 3; i++){
            if (allblocks[i].innerHTML === "X" && allblocks[i + 3].innerHTML === "X" && allblocks[i + 6].innerHTML === "X"){
                document.getElementsByClassName('player')[0].innerHTML = 'X is winner';
                refreshField()
            }
            if (allblocks[i].innerHTML === "0" && allblocks[i + 3].innerHTML === "0" && allblocks[i + 6].innerHTML === "0"){
                document.getElementsByClassName('player')[0].innerHTML = '0 is winner';
                refreshField()
            }
        }
        
        if (allblocks[0].innerHTML === "X" && allblocks[4].innerHTML === "X" && allblocks[8].innerHTML === "X"){
            document.getElementsByClassName('player')[0].innerHTML = 'X is winner';
            refreshField()
        }
        if (allblocks[2].innerHTML === "X" && allblocks[4].innerHTML === "X" && allblocks[6].innerHTML === "X"){
            document.getElementsByClassName('player')[0].innerHTML = 'X is winner';
            refreshField()
        }
    
        if (allblocks[0].innerHTML === "0" && allblocks[4].innerHTML === "0" && allblocks[8].innerHTML === "0"){
            document.getElementsByClassName('player')[0].innerHTML = '0 is winner';
            refreshField()
        }
        if (allblocks[2].innerHTML === "0" && allblocks[4].innerHTML === "0" && allblocks[6].innerHTML === "0"){
            document.getElementsByClassName('player')[0].innerHTML = '0 is winner';
            refreshField()
        }
    }
    
    function refreshField(){
        let allblocks = document.getElementsByClassName('game__block');
        for (block of allblocks){
            block.innerHTML = "";
        }
        hod = 0;
    }
    
    function closeField(){
        refreshField();
        document.getElementsByClassName('game-field')[0].style.display = 'none';
        document.getElementsByClassName('player')[0].innerHTML = '';
    }
    
    return {
        init: function(){
            innerInit();
        },
        refresh: function(){
            refreshField();
        },
        exit: function(){
            closeField();
        }
    }
})();

document.getElementsByClassName('start')[0].addEventListener('click', function(event){
    gameItem.init();
    this.setAttribute("disabled", "disabled");
}, false);

document.getElementsByClassName('refresh')[0].addEventListener('click', function(event){
    gameItem.refresh();
    console.log(hod);
}, false);

document.getElementsByClassName('close')[0].addEventListener('click', function(event){
    gameItem.exit();
    document.getElementsByClassName('start')[0].removeAttribute("disabled")
}, false);

















