class Text {
     constructor(text, textColor) {
          this.text = text;
          this.textColor = textColor;
     }

     getSvgElement() {
          return `<text x="128" y="157" text-anchor="middle" fill="${this.textColor}" font-size="30">${this.text}</text>`;
     }

     render() {
          return this.getSvgElement();
     }

     setColor(color) {
          this.shapeColor = color;
     }
}

module.exports = Text;
