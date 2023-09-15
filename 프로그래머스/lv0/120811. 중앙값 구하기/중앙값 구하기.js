function solution(array) {
    let mid = (array.length + 1) / 2 - 1
    let answer = array.sort((a, b) => a -b);
    return answer[mid];
}