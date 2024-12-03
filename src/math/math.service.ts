class MathService {
  sum(numbers: number[]) {
    return numbers.reduce((acc, number) => acc + number * 10, 0) / 10;
  }
}

export default new MathService()
