class Shape {
     constructor(shapeColor, border, borderColor) {
          this.shapeColor = shapeColor;
          this.border = border;
          this.borderColor = borderColor;
     }

     getSvgElement() {
          throw new Error('Method not implemented');
     }
}

module.exports = Shape;
