function max(array) {
    let res = array[0]
    for (i = 1; i < array.length; i++) {
        if (res < array[i]) {
            res = array[i]
        }
    } return res
}