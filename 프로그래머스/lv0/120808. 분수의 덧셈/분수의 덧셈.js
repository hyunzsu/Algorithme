function solution(numer1, denom1, numer2, denom2) {
    let top = numer1 * denom2 + numer2 * denom1;
    let bottom = denom1 * denom2;

    // 최대공약수를 구하기 위한 함수
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    // 최대공약수를 계산하고 기약분수로 만듬
    const common = gcd(top, bottom);
    return [top / common, bottom / common];
}