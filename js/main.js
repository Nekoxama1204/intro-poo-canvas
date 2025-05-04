const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 150;
canvasOOP.width = 150;

canvasRandom.height = 150;
canvasRandom.width = 150;

canvasMultiple.height = 150;
canvasMultiple.width = 150;

canvasOOP.style.background = "#d6f5d6";        // verde claro
canvasRandom.style.background = "#fff0f5";     // rosado claro
canvasMultiple.style.background = "#e0f7fa";   // azul claro

class Circle {
  constructor(x, y, radius, color, text, backcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = this.color;
    context.stroke();
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 14px sans-serif";
    context.fillStyle = "#333";
    context.fillText(this.text, this.posX, this.posY);
    context.closePath();
  }
}

// Círculo de equilibrio
let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 40, "#4CAF50", "Equilibrio", "#A5D6A7");
miCirculo.draw(ctx);

// Círculo aleatorio
let randomRadius = Math.floor(Math.random() * 20 + 30);
let randomX = Math.random() * (canvasRandom.width - 3 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 3 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "#BA68C8", "Emoción", "#E1BEE7");
miCirculoRandom.draw(ctxRandom);

// Múltiples emociones
let arrayCircle = [];
for (let i = 0; i < 5; i++) {
  let radius = Math.floor(Math.random() * 10 + 20);
  let x = Math.random() * (canvasMultiple.width - 3 * radius) + radius;
  let y = Math.random() * (canvasMultiple.height - 3 * radius) + radius;
  let colores = ["#FF7043", "#42A5F5", "#66BB6A", "#FFD54F", "#AB47BC"];
  let textos = ["Paz", "Amor", "Fuerza", "Calma", "Esperanza"];
  let circle = new Circle(x, y, radius, "#333", textos[i], colores[i]);
  arrayCircle.push(circle);
  circle.draw(ctxMultiple);
}
