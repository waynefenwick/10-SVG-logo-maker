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

// Circle class, inheriting from Shape
class Circle extends Shape {
     constructor(radius, shapeColor, border, borderColor) {
          super(shapeColor, border, borderColor);
          this.radius = radius;
     }

     getSvgElement() {
          return `<circle fill="${this.shapeColor}" cx="125" cy="145" r="${this.radius}" ${this.border ? `stroke="${this.borderColor}" stroke-width="2"` : ''}/>`;
     }

     render() {
          return this.getSvgElement();
     }
     
     setColor(color) {
          this.shapeColor = color;
     }
}

module.exports = Circle;
