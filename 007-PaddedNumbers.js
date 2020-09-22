function solution(value) {
    if (value >= 10, 000) {
        return "Value is " + value;
    } else {
        let valueStr = value.toString();
        while (valueStr.length < 5) {
            valueStr = "0" + valueStr;
        }

        return "Value is " + valueStr;
    }