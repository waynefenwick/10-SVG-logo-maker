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

     class Triangle extends Shape {
     constructor(points, shapeColor, border, borderColor) {
          super(shapeColor, border, borderColor);
          this.points = points;
     }

     getSvgElement() {
          return `<polygon fill="${this.shapeColor}" points="${this.points}" ${this.border ? `stroke="${this.borderColor}" stroke-width="2"` : ''}/>`;
     }

     render() {
          return this.getSvgElement();
     }

     setColor(color) {
          this.shapeColor = color;
     }
}

module.exports = Triangle;
