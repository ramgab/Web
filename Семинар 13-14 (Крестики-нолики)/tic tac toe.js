let board = [[".", ".", "."],
         [".", ".", "."],
         [".", ".", "."]];
let stop = 0; //Если стоп будет равна 1, то кто-то выиграл, в противном случае объявится ничья 

//Приступаем к ходу и проверяем, выиграл ли кто-то или заполнено ли поле
while (stop == 0 || (board[0][0] == '.' && board[0][1] == '.' && board[0][2] == '.' && board[1][0] == '.' && board[1][1] == '.' && board[1][2] == '.' && board[2][0] == '.' && board[2][1] == '.' && board[2][2] == '.')){
        if (stop != 1 && (board[0][0] == '.' || board[0][1] == '.' || board[0][2] == '.' || board[1][0] == '.' || board[1][1] == '.' 
                          || board[1][2] == '.' || board[2][0] == '.' || board[2][1] == '.' || board[2][2] == '.')){
            alert("ход крестиков "); 
            document.write('<br/>')
            let line = Number(prompt("Введите номер линии: "));
            let column = Number(prompt("Введите номер столбца: "));
            while (line > 3 || line < 1 || column > 3 || column < 1){ //Если выбранная позиция не существует
                alert("Введите координаты заново, выбранная позиция не существует");
                document.write('<br/>')
                let line = Number(prompt("Введите номер линии: "));
                let column = Number(prompt("Введите номер столбца: "));
            }    
            while (board[line-1][column-1] != '.'){ //Если выбранная позиция уже занята, то просим игрока заново ввести координаты
                alert("Введите координаты заново, выбранная позиция занята");
                document.write('<br/>')
                let line = Number(prompt("Введите номер линии: "));
                let column = Number(prompt("Введите номер столбца: "));
            }    
            board[line-1][column-1] = 'x';
            document.getElementById("box1_1").innerHTML = board[0][0];
            document.getElementById("box1_2").innerHTML = board[0][1];
            document.getElementById("box1_3").innerHTML = board[0][2];
            document.getElementById("box2_1").innerHTML = board[1][0];
            document.getElementById("box2_2").innerHTML = board[1][1];
            document.getElementById("box2_3").innerHTML = board[1][2];
            document.getElementById("box3_1").innerHTML = board[2][0];
            document.getElementById("box3_2").innerHTML = board[2][1];
            document.getElementById("box3_3").innerHTML = board[2][2];
        

        }else{
            stop = 2; //Чтобы остановить цикл при ничье
        }    
        if (board[0][0] == 'x' && board[0][1] == 'x' && board[0][2] == 'x'){ //Проверка строк
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[1][0] == 'x' && board[1][1] == 'x' && board[1][2] == 'x'){
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[2][0] == 'x' && board[2][1] == 'x' && board[2][2] == 'x'){
            alert("победили крестики!"); 
            stop = 1;
        }    
        else if (board[0][0] == 'x' && board[1][0] == 'x' && board[2][0] == 'x'){ //Проверка столбцов
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[0][1] == 'x' && board[1][1] == 'x' && board[2][1] == 'x'){
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[0][2] == 'x' && board[1][2] == 'x' && board[2][2] == 'x'){
            alert("победили крестики!");
            stop = 1;
        }    
        else if (board[0][0] == 'x' && board[1][1] == 'x' && board[2][2] == 'x'){ //Проверка диагоналей
            alert("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][2] == 'x' && board[1][1] == 'x' && board[2][0] == 'x'){
            alert("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }
        
        if (stop != 1 && (board[0][0] == '.' || board[0][1] == '.' || board[0][2] == '.' || board[1][0] == '.' || board[1][1] == '.' 
                          || board[1][2] == '.' || board[2][0] == '.' || board[2][1] == '.' || board[2][2] == '.')){ //Для того, чтобы после победы крестиков не просили ходить нолики
            alert("ход ноликов ");
            document.write('<br/>')
            line = Number(prompt("Введите номер линии: "));
            column = Number(prompt("Введите номер столбца: "));
            while (line > 3 || line < 1 || column > 3 || column < 1){ //Если выбранная позиция не существует
                alert("Введите координаты заново, выбранная позиция не существует");
                document.write('<br/>')
                line = Number(prompt("Введите номер линии: "));
                column = Number(prompt("Введите номер столбца: "));
            }    
            while (board[line-1][column-1] != '.'){ //Если выбранная позиция уже занята, то просим игрока заново ввести координаты; либо если на поле нет больше мест
                alert("Введите координаты заново, выбранная позиция занята");
                document.write('<br/>')
                line = Number(prompt("Введите номер линии: "));
                column = Number(prompt("Введите номер столбца: "));
            }    
            board[line-1][column-1] = 'o';
            document.getElementById("box1_1").innerHTML = board[0][0];
            document.getElementById("box1_2").innerHTML = board[0][1];
            document.getElementById("box1_3").innerHTML = board[0][2];
            document.getElementById("box2_1").innerHTML = board[1][0];
            document.getElementById("box2_2").innerHTML = board[1][1];
            document.getElementById("box2_3").innerHTML = board[1][2];
            document.getElementById("box3_1").innerHTML = board[2][0];
            document.getElementById("box3_2").innerHTML = board[2][1];
            document.getElementById("box3_3").innerHTML = board[2][2];
                
        }else{
            if (stop != 1){ //Для того, чтобы если уже после победы не было ничьи
                stop = 2; //Чтобы остановить цикл при ничье
            }    
        }        
        if (board[0][0] == 'o' && board[0][1] == 'o' && board[0][2] == 'o'){ //Проверка строк
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[1][0] == 'o' && board[1][1] == 'o' && board[1][2] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[2][0] == 'o' && board[2][1] == 'o' && board[2][2] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][0] == 'o' && board[1][0] == 'o' && board[2][0] == 'o'){ //Проверка столбцов
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][1] == 'o' && board[1][1] == 'o' && board[2][1] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][2] == 'o' && board[1][2] == 'o' && board[2][2] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][0] == 'o' && board[1][1] == 'o' && board[2][2] == 'o'){ //Проверка диагоналей
            alert("победили нолики!");
            stop = 1;
        }    
        else if (board[0][2] == 'o' && board[1][1] == 'o' && board[2][0] == 'o'){
            alert("победили нолики!");
            stop = 1;
        }    

}
if (stop == 2){
    alert("Ничья");
}    


