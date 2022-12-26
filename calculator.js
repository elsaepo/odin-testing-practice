const calculator = {
    add: function(x, y){
        return x + y;
    },
    subtract: function(x, y){
        return x - y;
    },
    divide: function(x, y){
        if (y === 0) return null;
        else return x / y;
    },
    multiply: function(x, y){
        return x * y;
    }
}

export default calculator;