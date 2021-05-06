function calc(a,b,c){
    switch (c){
        case '+':
            return console.log(a+b);
        case '-':
            return console.log(a-b);
        case '*':
            return console.log(a*b);
        case '/':
            return console.log(a/b);
        case '%':
            return console.log(a%b);
        default:
            alert("기호도 넣어줭 숫자만 넣으면 어떠켕");
    }
}