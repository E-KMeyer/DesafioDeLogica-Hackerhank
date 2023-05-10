function processData(input) {
    var lines = input.split('\n');
    var password = lines[0];
    var typed = lines[1];
    var j = 0;
    for (var i = 0; i < typed.length; i++) {
        if (typed[i] === password[j]) {
            j++;
        }
    }
    if (j === password.length) {
        console.log('SIM');
    } else {
        console.log('NAO');
    }
}