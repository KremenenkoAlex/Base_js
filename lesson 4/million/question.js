var answers, great = 0, mistake = 0, money = 0;
for (var i = 0; i < questions.length; i++) {
    answers = +prompt("вопрос " + (i + 1) +"\n"+ questions[i].question +"\n"+ "варианьы ответов " +"\n"+ questions[i].a1 + "\n" + questions[i].a2 + "\n" + questions[i].a3 + "\n" + questions[i].a4 + "\n" + "введите номер ответа./n Для выхода из игры нажмите -1");
    if (answers == -1) {
        alert("Досвидания")
        break;
    } if (answers == questions[i].correct) {
        money += (i + 1) * 100;
        alert("ответили правильно" + ((i + 1) * 100) + " $");
        great++;
    } else {
        mistake++;
        alert("не верно" + "\n" + "У вас осталось " + (3 - mistake) + "попытки");
        if (mistake == 3) {
        break;
        }
    }
}
alert("вы правильно ответили на " + great + " и заработали " + money);
