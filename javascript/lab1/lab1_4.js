
function lab1_4() {
    let n = prompt("до какого простые искать будем: ", '');

    for (let i = 2; i <= n; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0)
        {
            for (let j = 3; j*j <= i ; j=j+2)
            {
                if (i%j==0)
                {
                    flag=0;
                    break;
                }
            }
        }
        else if (i != 2) flag = 0;
        if (flag==1) {document.write(i + '\n');}
    }
}
