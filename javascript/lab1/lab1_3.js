function lab1_3() {
    let ans;
    do {
        ans = prompt('введи число больше 100: ', '');
    } while (ans <= 100 ^ ans == null);
}