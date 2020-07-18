import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

var target_dom = null;

document.addEventListener('DOMContentLoaded', () => {
  target_dom = document.querySelector('#data');
  const url = new URL(location.href);
  let f = url.searchParams.get("name");
  if (f == null){ f = ''; }
  getData(f);
});

function getData(f){
  let url = "http://localhost:3000/data/ajax";
  if (f != ''){
    url += '?name=' + f;
  }
  fetch(url)
  .then(
    res => res.json(),
    (error) => {
      const el = (
        <p>ERROR!!</p>
      );
      ReactDOM.render(el, target_dom);
    }
  )
  .then(
    (result) => {
      let arr = [];
      for(let n in result){
        let val = result[n];
        arr.push(<li class="list-group-item">{val.id}:{val.name} ({val.mail})</li>);
      }
      const el = (
        <ul class="list-group">{arr}</ul>
      );
      ReactDOM.render(el, target_dom);
    },
    (error) => {
      const el = (
        <p>ERROR!!</p>
      );
      ReactDOM.render(el, target_dom);
    }
  );
}
