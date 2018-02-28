module.exports = function getZerosCount(number) {
    let carry = 0;
    let arr = [1];
    let k = 0;

    for (let i = 1; i <= number; i++) {
        for (let j = 0; j <= k; j++) {
            arr[j] = arr[j] * i + carry;
            carry = parseInt(arr[j] / 10, 10);
            arr[j] = arr[j] % 10;
        }
        while (carry) {
            k++;
            arr[k] = carry % 10;
            carry = parseInt(carry / 10, 10);
        }
    }

    console.log(arr.reverse().join(""));
}