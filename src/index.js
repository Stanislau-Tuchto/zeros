module.exports = function getZerosCount(number) {
    let zeros = 0, i = 1, five_pow ,flag = true;
    while(flag) {
        five_pow = Math.pow(5,i)
        if(five_pow<number){
            zeros += (number - number %five_pow)/five_pow;
            i++;
        }else flag=false;
    }
    return zeros;
}