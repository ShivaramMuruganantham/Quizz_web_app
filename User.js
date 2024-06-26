// This JS code are used for User page

const div = document.getElementById("container");
        
const data = JSON.parse(localStorage.getItem("paper"));
const getTime = localStorage.getItem("duration");
let i = 0;

let scoreDisplayed = 0;

console.log(scoreDisplayed);

for(i = 0 ; i < data.length ; i++)
{
    const div1 = document.createElement('div');
    div1.setAttribute("id", "container_1");
    const qus_no = document.createElement('p');
    const question = document.createElement('p');
    const in_1 = document.createElement('input');
    const opt_1 = document.createElement('label');
    const in_2 = document.createElement('input');
    const opt_2 = document.createElement('label');
    const in_3 = document.createElement('input');
    const opt_3 = document.createElement('label');
    const in_4 = document.createElement('input');
    const opt_4 = document.createElement('label');
    
    qus_no.setAttribute("id", "ques_no");
    qus_no.innerHTML = "Question no" + " " + data[i].id + " " + ":" ;
    
    question.setAttribute("id", "questions");
    question.innerHTML = data[i].ques + " " + "?" + "<br>";
    
    const groupName = "options" + data[i].id;
    
    in_1.setAttribute("type", "radio");
    in_1.setAttribute("name", groupName);
    in_1.setAttribute("id", "opt_1_" + data[i].id);
    opt_1.setAttribute("for", "opt_1_" + data[i].id);
    opt_1.innerHTML = data[i].choice[0] + "<br>";
    in_1.setAttribute("value", data[i].choice[0]);
    
    in_2.setAttribute("type", "radio");
    in_2.setAttribute("name", groupName);
    in_2.setAttribute("id", "opt_2_" + data[i].id);
    opt_2.setAttribute("for", "opt_2_" + data[i].id);
    opt_2.innerHTML = data[i].choice[1] + "<br>";
    in_2.setAttribute("value", data[i].choice[1]);
    
    in_3.setAttribute("type", "radio");
    in_3.setAttribute("name", groupName);
    in_3.setAttribute("id", "opt_3_" + data[i].id);
    opt_3.setAttribute("for", "opt_3_" + data[i].id);
    opt_3.innerHTML = data[i].choice[2] + "<br>";
    in_3.setAttribute("value", data[i].choice[2]);
    
    in_4.setAttribute("type", "radio");
    in_4.setAttribute("name", groupName);
    in_4.setAttribute("id", "opt_4_" + data[i].id);
    opt_4.setAttribute("for", "opt_4_" + data[i].id);
    opt_4.innerHTML = data[i].choice[3] + "<br>";
    in_4.setAttribute("value", data[i].choice[3]);
    
    div1.appendChild(qus_no);
    div1.appendChild(question);
    div1.appendChild(in_1);
    div1.appendChild(opt_1);
    div1.appendChild(in_2);
    div1.appendChild(opt_2);
    div1.appendChild(in_3);
    div1.appendChild(opt_3);
    div1.appendChild(in_4);
    div1.appendChild(opt_4);
    
    div.appendChild(div1);
    
} 
    
function saveData() {
    
    if (scoreDisplayed == 0){

        let score = document.createElement('p');
        let count = 0;

        for (let i = 0 ; i < data.length ; i++) {
            const groupName = "options" + data[i].id;
            const selectedOption = document.querySelector(`input[name="${groupName}"]:checked`);
            const div1 = document.querySelector(`#container div:nth-child(${i+1})`);
            if(selectedOption && selectedOption.value === data[i].ans) {
                div1.style.backgroundColor = "#d1ffbd";  // Correct answer color
                count++
            } 
            else if (selectedOption && selectedOption.value !== data[i].ans) {
                div1.style.backgroundColor = "#ffdddd";  // Incorrect answer color
            } 
            else {
                div1.style.backgroundColor = "#ffffff";  // Default body color
            }

            const radios = document.getElementsByName(groupName);
            radios.forEach(radio => {
                radio.disabled = true;
            });
        }
        
        score.innerHTML = "score" + ":" + " " + count + "/" +data.length;
        score.setAttribute("class", "marks");
        div.appendChild(score);

    }
    scoreDisplayed = 1;

}

let startmin = getTime;
let time = startmin * 60;

const timer = document.getElementById("time");
const bg = document.getElementById("time_bg");

const countdownInterval = setInterval(countDown, 1000);
function countDown(){
    const min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? "0" + sec : sec;

    timer.innerHTML = min + ":" + sec;
    time --;

    if (time < 0) {
        clearInterval(countdownInterval);
        timer.innerHTML = "00:00";
        saveData();
    }
    if(min < 1){
        bg.style.backgroundColor = "red";
        }
    else{
        bg.style.backgroundColor = "#4ade80";
    }
}
