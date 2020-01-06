var dataList = [];
var screen = $('.screen-box');


$(document).ready(function () {
    var i;
    $('.btn-num').click(function () {
        var lastIndex = dataList.length - 1;
        if (lastIndex === -1 || (dataList[lastIndex] == 'x' || dataList[lastIndex] == '/' || dataList[lastIndex] == '+' || dataList[lastIndex] == '-'||dataList[lastIndex]=='%')) {
            dataList.push(this.value)

        }else{
            dataList[lastIndex] = dataList[lastIndex]+this.value;
        }
           display();
    });




    $('.btn-operator').click(function () {
        
        var i;
        var lastIndex = dataList.length-1;
        if((dataList[lastIndex] == 'x' || dataList[lastIndex] == '/' || dataList[lastIndex] == '+' || dataList[lastIndex] == '-'||dataList[lastIndex]=='%')){
            return;
        }
        dataList.push(this.value);
        display();
    });



    $('#btn-result').click(function () {
        if (dataList.length === 1) {
            result = dataList[0];
            return;
        }
        printResult();
        screen.html(dataList[0]);
    });





    $('#btn-clear').click(function () {
        dataList = [];
        screen.html('');
    });

});



    function display() {
        if (dataList) {
            screen.html('');
            for (i = 0; i < dataList.length; i++) {
                screen.html(screen.html() + dataList[i]);
            }
        }
    }




function printResult() {
    if (dataList.length === 1) {
        return;
    }
    var i;

    if (dataList.indexOf('x') > 0) {
        var index = dataList.indexOf('x');
        dataList[index - 1] = parseFloat(dataList[index - 1]) * parseFloat(dataList[index + 1]);
        for (i = index; i < dataList.length - 2; i++) {
            dataList[i] = dataList[i + 2];
        }
        dataList.pop();
        dataList.pop();
    }

    if (dataList.indexOf('/') > 0) {
        var index = dataList.indexOf('/');
        dataList[index - 1] = parseFloat(dataList[index - 1]) / parseFloat(dataList[index + 1]);
        for (i = index; i < dataList.length - 2; i++) {
            dataList[i] = dataList[i + 2];
        }
        dataList.pop();
        dataList.pop();
    }
    
    if (dataList.indexOf('%') > 0) {
        var index = dataList.indexOf('%');
        dataList[index - 1] = parseFloat(dataList[index - 1]) % parseFloat(dataList[index + 1]);
        for (i = index; i < dataList.length - 2; i++) {
            dataList[i] = dataList[i + 2];
        }
        dataList.pop();
        dataList.pop();
    }

    if (dataList.indexOf('+') > 0) {
        var index = dataList.indexOf('+');
        dataList[index - 1] = parseFloat(dataList[index - 1]) + parseFloat(dataList[index + 1]);
        for (i = index; i < dataList.length - 2; i++) {
            dataList[i] = dataList[i + 2];
        }
        dataList.pop();
        dataList.pop();
    }

    if (dataList.indexOf('-') > 0) {
        var index = dataList.indexOf('-');
        dataList[index - 1] = parseFloat(dataList[index - 1]) - parseFloat(dataList[index + 1]);
        for (i = index; i < dataList.length - 2; i++) {
            dataList[i] = dataList[i + 2];
        }
        dataList.pop();
        dataList.pop();
    }

    printResult()
}
