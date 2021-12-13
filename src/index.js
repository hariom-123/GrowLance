import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,data} from './App';
import reportWebVitals from './reportWebVitals';

// function to render the graph html
function re_render(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// function store the states of array  of values during sorting
var arr_data = [];
function sort_data()
{
  let N = data.length;

  for(let i=0;i<N-1;i=i+1)
  {
    for(let j=0;j<N-1;j++)
    {
      if(data[j+1] < data[j])
      {
        let temp = data[j+1];
        data[j+1]=data[j];
        data[j] = temp;
        // enter the current state to the arr_data
        arr_data.push(data.slice()); 
        
      }
    }
    
  }
}

// render graph html initially
re_render();
// then apply sorting
sort_data();

// then display swapping operations
// by rendering graph using stored stated

let k=0;
let myVar = setInterval(function() {
  
  if(k===arr_data.length)
  clearInterval(myVar)

  else
  {
    for(let i=0;i<data.length;i=i+1)
    {
      data[i]=arr_data[k][i];
    }

    k=k+1;

    re_render();
  }
  
}, 500);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
