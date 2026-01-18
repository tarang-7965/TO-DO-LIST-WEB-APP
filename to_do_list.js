
let to_do_arr = [];
let real_arr = [];

let inp_bar = document.querySelector('.to_do_bar');
let inp_bar_2 = document.querySelector('.to_do_bar_2');
let show_in_div = document.querySelector('.list_show');

function store_show(){// Main logic of implementatin

    show_in_div.innerHTML = '';
    for(let i=0; i<=to_do_arr.length -1; i++){
        real_arr[i] = `<p>${to_do_arr[i].name} at ${to_do_arr[i].date} <button onclick="del_func(${i})">DELETE</button></p>`;
        show_in_div.innerHTML += real_arr[i];
    }
    inp_bar.value = '';
}

function add_show(){ // Implementing
    if(inp_bar.value === '' && inp_bar_2.value === ''){show_in_div.innerHTML = `<p>Add a correct task first.</p>`;}
    
    else {to_do_arr.push({ name: inp_bar.value, date: inp_bar_2.value }); 
        store_show(); 
        localStorage.setItem('history_to_do',JSON.stringify(to_do_arr));
        localStorage.setItem('history_real',JSON.stringify(real_arr));
        }

}

function del_func(i){ // Delete button logic
    to_do_arr.splice(i,1);
    real_arr.splice(i,1);
    store_show();
    localStorage.setItem('history_to_do',JSON.stringify(to_do_arr));
    localStorage.setItem('history_real',JSON.stringify(real_arr));
}

function js_set_history(){ // History logic


    if(localStorage.getItem('history_real').length === 2){show_in_div.innerHTML = `<p>Add a correct task first.</p>`; }
    else{
        to_do_arr = JSON.parse(localStorage.getItem('history_to_do'));
        real_arr = JSON.parse(localStorage.getItem('history_real'));

        show_in_div.innerHTML = '';
    }
    
    for(let i=0; i<=to_do_arr.length -1; i++){

        show_in_div.innerHTML += real_arr[i];
    }
    inp_bar.value = '';
}