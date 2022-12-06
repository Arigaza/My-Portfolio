class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  subtract({ x, y }) {
    return new Vector(this.x - x, this.y - y)
  }

  add(x, y) {
    return new Vector(this.x + x, this.y + y)
  }

  scaleBy(number) {
    return new Vector(this.x * number, this.y * number)
  }

  length() {
    return Math.hypot(this.x, this.y)
  }

  normalize() {
    return this.scaleBy(1 / this.length())
  }

  isOpposite(vector) {
    const { x, y } = this.add(vector)
    return areEqual(x, 0) && areEqual(y, 0)
  }

  equalTo({ x, y }) {
    return areEqual(this.x, x) && areEqual(this.y, y)
  }
}
