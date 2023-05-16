function lab1_5() {
    let m = 8;
    let n = 6;

    var matrix = new Array(m);
    for (var i = 0; i < m; i++) {
        matrix[i] = new Array(n);
    }

    for (let i = 0; i < m; i++) {
        let diag = n - i - 1;
        for (let j = 0; j < n; j++) {
            
            if ((j == diag && diag - 1 >= 0 || j == diag - 1) && diag != 0) matrix[i][j] = 'cat';
            else if (((j == i) || j == i + 1) && diag == 0) matrix[i][j] = 'cat';
            else matrix[i][j] = 'dog';

        }
    }
    console.log(matrix);
}