import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { AddBox } from '@material-ui/icons';

const Tdata = () => {

const [cv,uv] = useState();
const [item,newitem] = useState([]);

const omg =(val)=>{
const data = val.target.value;
uv(data);
}

const omg1 = ()=>{
 newitem((olditem)=>{
   return [...olditem,cv]
 })
 uv("");
}

  return (
    <div className="border border-warning card text-center position-absolute top-50 start-50 translate-middle ">
    <div className="card-header bg-success text-white">
     ToDo App
    </div>
    <div className="input-group mb-3">
    <input value={cv} type="text" onChange={omg} className="form-control" placeholder="Add Something" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button onClick={omg1} className="btn btn-success" type="button"><AddBox/></button>
    </div>
<div className='modal-dialog modal-dialog-scrollable'>
    <ol className="list-group list-group-numbered overflow-scroll">
  {item.map((itemvalue)=>{
return <li>{itemvalue}</li>
  })}
</ol>

</div>
  </div>
  )
}

export default Tdata;