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

class Square extends Shape {
     constructor(width, height, shapeColor, border, borderColor) {
          super(shapeColor, border, borderColor);
          this.width = width;
          this.height = height;
     }

     getSvgElement() {
          return `<rect fill="${this.shapeColor}" x="48" y="72" width="${this.width}" height="${this.height}" ${this.border ? `stroke="${this.borderColor}" stroke-width="2"` : ''}/>`;
     }

     render() {
          return this.getSvgElement();
     }
     
     setColor(color) {
          this.shapeColor = color;
     }
}

module.exports = Square;