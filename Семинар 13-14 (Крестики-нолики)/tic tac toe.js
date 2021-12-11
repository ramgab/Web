let board = [[".", ".", "."],
         [".", ".", "."],
         [".", ".", "."]];
let stop = 0; //Если стоп будет равна 1, то кто-то выиграл, в противном случае объявится ничья 
for (let y = 0; y < 3; y++){ //Вывод поля на экран
    document.write(board[y][0] + ' ' + board[y][1] + ' ' + board[y][0]);
    document.write('<br/>')  
}
//Приступаем к ходу и проверяем, выиграл ли кто-то или заполнено ли поле
while (stop == 0 || (board[0][0] == '.' && board[0][1] == '.' && board[0][2] == '.' && board[1][0] == '.' && board[1][1] == '.' && board[1][2] == '.' && board[2][0] == '.' && board[2][1] == '.' && board[2][2] == '.')){
        if (stop != 1 && (board[0][0] == '.' || board[0][1] == '.' || board[0][2] == '.' || board[1][0] == '.' || board[1][1] == '.' 
                          || board[1][2] == '.' || board[2][0] == '.' || board[2][1] == '.' || board[2][2] == '.')){
            document.write("ход крестиков "); 
            document.write('<br/>')
            let line = Number(prompt("Введите номер линии: "));
            let column = Number(prompt("Введите номер столбца: "));
            while (line > 3 || line < 1 || column > 3 || column < 1){ //Если выбранная позиция не существует
                document.write("Введите координаты заново, выбранная позиция не существует");
                document.write('<br/>')
                let line = Number(prompt("Введите номер линии: "));
                let column = Number(prompt("Введите номер столбца: "));
            }    
            while (board[line-1][column-1] != '.'){ //Если выбранная позиция уже занята, то просим игрока заново ввести координаты
                document.write("Введите координаты заново, выбранная позиция занята");
                document.write('<br/>')
                let line = Number(prompt("Введите номер линии: "));
                let column = Number(prompt("Введите номер столбца: "));
            }    
            board[line-1][column-1] = 'x';
            for (let y = 0; y < 3; y++){ //Вывод обновленного поля на экран
                document.write(board[y][0] + ' ' + board[y][1] + ' ' + board[y][0]); 
                document.write('<br/>') 
            }

        }else{
            stop = 2; //Чтобы остановить цикл при ничье
        }    
        if (board[0][0] == 'x' && board[0][1] == 'x' && board[0][2] == 'x'){ //Проверка строк
            document.write("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[1][0] == 'x' && board[1][1] == 'x' && board[1][2] == 'x'){
            document.write("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[2][0] == 'x' && board[2][1] == 'x' && board[2][2] == 'x'){
            document.write("победили крестики!"); 
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][0] == 'x' && board[1][0] == 'x' && board[2][0] == 'x'){ //Проверка столбцов
            document.write("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][1] == 'x' && board[1][1] == 'x' && board[2][1] == 'x'){
            document.write("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][2] == 'x' && board[1][2] == 'x' && board[2][2] == 'x'){
            document.write("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][0] == 'x' && board[1][1] == 'x' && board[2][2] == 'x'){ //Проверка диагоналей
            document.write("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][2] == 'x' && board[1][1] == 'x' && board[2][0] == 'x'){
            document.write("победили крестики!");
            document.write('<br/>')
            stop = 1;
        }
        
        if (stop != 1 && (board[0][0] == '.' || board[0][1] == '.' || board[0][2] == '.' || board[1][0] == '.' || board[1][1] == '.' 
                          || board[1][2] == '.' || board[2][0] == '.' || board[2][1] == '.' || board[2][2] == '.')){ //Для того, чтобы после победы крестиков не просили ходить нолики
            document.write("ход ноликов ");
            document.write('<br/>')
            line = Number(prompt("Введите номер линии: "));
            column = Number(prompt("Введите номер столбца: "));
            while (line > 3 || line < 1 || column > 3 || column < 1){ //Если выбранная позиция не существует
                document.write("Введите координаты заново, выбранная позиция не существует");
                document.write('<br/>')
                line = Number(prompt("Введите номер линии: "));
                column = Number(prompt("Введите номер столбца: "));
            }    
            while (board[line-1][column-1] != '.'){ //Если выбранная позиция уже занята, то просим игрока заново ввести координаты; либо если на поле нет больше мест
                document.write("Введите координаты заново, выбранная позиция занята");
                document.write('<br/>')
                line = Number(prompt("Введите номер линии: "));
                column = Number(prompt("Введите номер столбца: "));
            }    
            board[line-1][column-1] = 'o';
            for (let y = 0; y < 3; y++){ //Вывод обновленного поля на экран
                document.write(board[y][0] + ' ' + board[y][1] + ' ' + board[y][0]);  
                document.write('<br/>')
            }
                
        }else{
            if (stop != 1){ //Для того, чтобы если уже после победы не было ничьи
                stop = 2; //Чтобы остановить цикл при ничье
            }    
        }        
        if (board[0][0] == 'o' && board[0][1] == 'o' && board[0][2] == 'o'){ //Проверка строк
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[1][0] == 'o' && board[1][1] == 'o' && board[1][2] == 'o'){
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[2][0] == 'o' && board[2][1] == 'o' && board[2][2] == 'o'){
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][0] == 'o' && board[1][0] == 'o' && board[2][0] == 'o'){ //Проверка столбцов
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][1] == 'o' && board[1][1] == 'o' && board[2][1] == 'o'){
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][2] == 'o' && board[1][2] == 'o' && board[2][2] == 'o'){
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][0] == 'o' && board[1][1] == 'o' && board[2][2] == 'o'){ //Проверка диагоналей
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    
        else if (board[0][2] == 'o' && board[1][1] == 'o' && board[2][0] == 'o'){
            document.write("победили нолики!");
            document.write('<br/>')
            stop = 1;
        }    

}
if (stop == 2){
    document.write("Ничья");
}    


