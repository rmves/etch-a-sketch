const slider = document.getElementById("myRange");
const sliderContainer = document.querySelector('.slidercontainer');
const output = document.createElement('div');
output.innerHTML = `Grid Size : ${slider.value}`;
sliderContainer.appendChild(output);

function makeGrid(rows) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    document.documentElement.style.setProperty('--columns-row', slider.value);
    for (let i=0;i<(rows*rows);i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover',function() {
            this.style.background = 'black';
        });
        };
    };

makeGrid(slider.value);

slider.oninput = function() {
    output.innerHTML = `Grid Size : ${this.value}`;
    makeGrid(this.value);
  };



