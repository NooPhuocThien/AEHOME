var main_color = getComputedStyle(document.documentElement).getPropertyValue("--main_color")

window.onload = function () {
  uibuilder.start();
  {
    var status_check = "reload";
    console.log(status_check);
    var msg = {
      topic: "page_reload",
      payload: status_check,
    };
    uibuilder.send(msg);
  }

  uibuilder.onChange("msg", function (msg) {

    if (msg.topic === "AGM") {
          var status = msg.payload.status
          var status_color;
            if(status === 0){
                  status_color = '#a4a9b2ff'
                } else if(status === 1){
                  status_color = '#abd876ff'
                } else if(status === 2){
                  status_color = '#ffd85aff'
                } else if(status === 3){
                  status_color = '#ef6454ff'
                }
              document.getElementById('gm_status_id').style.backgroundColor = status_color
              document.getElementById('gm_output_id').innerText = msg.payload.output_col
    }
    if (msg.topic === "AR") {
      var status = msg.payload.status
      var status_color;
        if(status === 0){
              status_color = '#a4a9b2ff'
            } else if(status === 1){
              status_color = '#abd876ff'
            } else if(status === 2){
              status_color = '#ffd85aff'
            } else if(status === 3){
              status_color = '#ef6454ff'
            }
          document.getElementById('ar_status_id').style.backgroundColor = status_color
          document.getElementById('ar_output_id').innerText = msg.payload.output_col
      }
      if (msg.topic === "AP") {
        var status = msg.payload.status
        var status_color;
          if(status === 0){
                status_color = '#a4a9b2ff'
              } else if(status === 1){
                status_color = '#abd876ff'
              } else if(status === 2){
                status_color = '#ffd85aff'
              } else if(status === 3){
                status_color = '#ef6454ff'
              }
            document.getElementById('ap_status_id').style.backgroundColor = status_color
            document.getElementById('ap_output_id').innerText = msg.payload.output_col
  }
  if (msg.topic === "AC") {
          var status = msg.payload.status
          var status_color;
            if(status === 0){
                  status_color = '#a4a9b2ff'
                } else if(status === 1){
                  status_color = '#abd876ff'
                } else if(status === 2){
                  status_color = '#ffd85aff'
                } else if(status === 3){
                  status_color = '#ef6454ff'
                }
              document.getElementById('ac_status_id').style.backgroundColor = status_color
              document.getElementById('ac_output_id').innerText = msg.payload.output_col
          }

        if(msg.topic === 'temphumid'){
          var id = msg.payload.id
          var temp = msg.payload.temp + '°C'
          var humid = msg.payload.humid + '%'
          document.getElementById('thermal_id_id').innerText = id
          document.getElementById('thermal_temp_id').innerText = temp
          document.getElementById('thermal_humid_id').innerText = humid
        }
  });
};




function ae_information(name_value){
  console.log(name_value)
  document.getElementById('infor_name_id').innerText = name_value;
}


function create_edit_skill(){
  document.getElementById('edit_profile_id').style.display ='flex'
  const tbody = document.getElementById('insert_edit_skill');
  const numberOfCells = 33; // Number of rows to add

  for (let i = 0; i < numberOfCells; i++) {
          const td = document.createElement('td');
          const select = document.createElement('select');
                    select.className = 'skill_table_input';
                    const percentages = [0, 25, 50, 75, 100];
                    percentages.forEach(percent => {
                        const option = document.createElement('option');
                        option.value = percent / 100;
                        option.textContent = `${percent}%`;
                        select.appendChild(option);
                    });

                    // Create div to show selected value
                    const skillValueDiv = document.createElement('div');
                    skillValueDiv.className = 'skill_value';
                    skillValueDiv.textContent = select.options[select.selectedIndex].text;

                    // Add change event to update the div
                    select.addEventListener('change', (event) => {
                        const selectedOption = event.target.options[event.target.selectedIndex];
                        skillValueDiv.textContent = selectedOption.textContent;
                    });

                    // Append select and div to td
                    td.appendChild(select);
                    td.appendChild(skillValueDiv);
                    tbody.appendChild(td);
      }
    }




function uploadFile() {
  console.log("vao day")
  const fileInput = document.getElementById("picture_id");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result.split(",")[1]; // Lấy dữ liệu base64 từ chuỗi Data URL
      const payload = {
        imgname: file.name,
        data: data, // Dữ liệu base64, không phải đối tượng
      };
      console.log("vao day")
      uibuilder.send({
        topic: "upload",
        payload: payload,
      });
    };
    reader.readAsDataURL(file); // Đọc file dưới dạng base64
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const names = ["Biểu đồ 1", "Biểu đồ 2", "Biểu đồ 3","Biểu đồ 4","Biểu đồ 5"]; // Mảng chứa tên
  const arr2 = [25, 75, 50,50,25,75]; // Mảng chứa giá trị phần trăm
  const arr3 = arr2.map(value => 100 - value); // Tính phần trăm còn lại

  const container = document.getElementById('charts-container');

  names.forEach((name, index) => {
      const value = arr2[index]; // Giá trị phần trăm
      const remaining = arr3[index]; // Phần trăm còn lại

      // Tạo một div chứa tiêu đề và canvas
      const chartContainer = document.createElement('div');
      chartContainer.style.display = 'flex';
      chartContainer.style.alignItems = 'center';
      chartContainer.className = 'chart_skill_container';

      // Tạo tiêu đề
      const titleElement = document.createElement('div');
      titleElement.textContent = name;
      titleElement.className = 'ae_infor_row_skill_name';

      // Tạo canvas cho biểu đồ
      const canvasContainer = document.createElement('div');
      canvasContainer.className = 'canvas_container';
      const canvas = document.createElement('canvas');
      canvas.id = `myPieChart${index}`; // Đặt ID cho mỗi canvas
      canvas.className = 'chart_skills_matrix';
      canvasContainer.appendChild(canvas);
      chartContainer.appendChild(titleElement);
      chartContainer.appendChild(canvasContainer);
      container.appendChild(chartContainer);

      // Vẽ biểu đồ
      new Chart(canvas, {
          type: 'pie',
          data: {
              labels: [name, 'Khác'], // Đặt tên và label 'Khác'
              datasets: [{
                  data: [value, remaining], // Dữ liệu phần trăm
                  backgroundColor: ['#000000', '#ffffff'], // Màu sắc
                  borderColor: ['#000000'], // Màu viền
                  borderWidth: 1
              }]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: {
                      position: 'center',
                  },
                  tooltip: {
                      enabled: false // Tắt tooltip
                  }
              }
          }
      });
  });
});















  document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('gameBoard');
    const timerDisplay = document.getElementById('timer');
    const messageDisplay = document.getElementById('message');
    const size = 4;
    let numbers = Array.from({ length: size * size - 1 }, (_, i) => i + 1).concat(null);
    let timerInterval;
    let seconds = 0;
    let gameStarted = false;

    function createBoard() {
        // board.innerHTML = '';
        numbers.forEach((number, index) => {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            if (number === null) {
                tile.classList.add('empty');
            } else {
                tile.textContent = number.toString().padStart(2, '0');
                tile.dataset.number = number;
            }
            tile.dataset.index = index;
            tile.addEventListener('click', handleTileClick);
            // board.appendChild(tile);
        });
    }

    function handleTileClick(event) {
        if (!gameStarted) {
            startTimer();
            gameStarted = true;
        }

        const tile = event.target;
        const index = parseInt(tile.dataset.index, 10);
        const emptyIndex = numbers.indexOf(null);

        const validMoves = [
            index - 1, // Left
            index + 1, // Right
            index - size, // Up
            index + size // Down
        ];

        if (validMoves.includes(emptyIndex) && isAdjacent(index, emptyIndex)) {
            [numbers[index], numbers[emptyIndex]] = [numbers[emptyIndex], numbers[index]];
            createBoard();
            if (isSolved()) {
                stopTimer();
                messageDisplay.textContent = 'Chúc mừng! Bạn đã xếp số đúng.';
            }
        }
    }

    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / size);
        const col1 = index1 % size;
        const row2 = Math.floor(index2 / size);
        const col2 = index2 % size;
        return (Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2);
    }

    function isSolved() {
        return numbers.every((number, index) => number === null || number === index + 1);
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            seconds++;
            timerDisplay.textContent = `Thời gian: ${seconds}s`;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Xáo trộn các số và tạo bảng khi trang được tải
    numbers = shuffleArray(numbers);
    createBoard();
});



