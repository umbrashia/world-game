import EnemyController from './application/controllers/EnemyController'
import './assets/css/style.css' // import typescript Logo from './typescript.svg"

document.querySelector<HTMLDivElement>(`#app`)!.innerHTML = `
<div class="canvasDiv">
  <canvas class="mainCanvas"></canvas>
</div>`
new EnemyController().initMain()
