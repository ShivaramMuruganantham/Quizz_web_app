
   // This JS code are used in admin page 


const div_0 = document.getElementById('demo0');
const div_2 = document.getElementById('demo2');
const btn = document.getElementById('btn');
let paper = []; 
function click_hand() {
    const ques_no = document.getElementById('qus_no').value;
    const question = document.getElementById('question').value;
    const opt_1 = document.getElementById('opt_1').value;
    const opt_2 = document.getElementById('opt_2').value;
    const opt_3 = document.getElementById('opt_3').value;
    const opt_4 = document.getElementById('opt_4').value;
    const ans = document.getElementById('ans').value;
    const div = document.getElementById('demo');
    const div_1 = document.getElementById('demo1');
    
    if((ques_no != "")&&(question != "")&&(opt_1 != "")&&(opt_2 != "")&&(opt_3 != "")&&(opt_4 != "")&&(ans != "")){

        let newobj = {
                id : Number(ques_no),
                ques : question,
                choice : [opt_1,opt_2,opt_3,opt_4],
                ans : ans,
            }
            paper.push(newobj);
            
            let id = document.createElement('p');
            id.style.margin = "20px"; 
            let query = document.createElement('p');
            query.style.margin = "10px"; 
            let a = document.createElement('p');
            a.style.margin = "10px"; 
            let b = document.createElement('p');
            b.style.margin = "10px"; 
            let c = document.createElement('p');
            c.style.margin = "10px"; 
            let d = document.createElement('p');
            d.style.margin = "10px"; 
            let answer = document.createElement('p');
            answer.style.margin = "10px"; 
            answer.style.padding = "5px"; 
            answer.style.backgroundColor = "#d1ffbd";
            let timer = document.createElement('p');
            timer.style.margin = "10px"; 
            
            id.innerHTML = "Question no" + " " + newobj.id + ":";
            query.innerHTML = newobj.ques + "?";
            a.innerHTML = "A" + "." + newobj.choice[0];
            b.innerHTML = "B" + "." + newobj.choice[1];
            c.innerHTML = "C" + "." + newobj.choice[2];
            d.innerHTML = "D" + "." + newobj.choice[3];
            answer.innerHTML = "Ans" + ":" + " " + newobj.ans;
            
            div_1.appendChild(id);
            div_1.appendChild(query);
            div_1.appendChild(a);
            div_1.appendChild(b);
            div_1.appendChild(c);
            div_1.appendChild(d);
            div_1.appendChild(answer);
            
            div.appendChild(div_1);
            
            if(paper != ""){
                div_2.style.display = "flex";
                div_2.style.justifyContent = "center";
            }

            document.getElementById('qus_no').value = "";
            document.getElementById('question').value = "";
            document.getElementById('opt_1').value = "";
            document.getElementById('opt_2').value = "";
            document.getElementById('opt_3').value = "";
            document.getElementById('opt_4').value = "";
            document.getElementById('ans').value = "";
        }
    }

    function setTime(){
        const time = document.getElementById('time').value;
        let timeDuration = Number(time); 
        localStorage.setItem("duration", timeDuration);
    }
                
    function saveData(){
        let qus_paper = JSON.stringify(paper);
        localStorage.setItem("paper", qus_paper);
    }

    btn.addEventListener('click', function() {
        saveData();
    });


    