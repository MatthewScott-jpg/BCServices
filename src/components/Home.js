import React, { useContext, useState } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import css from './Home.module.css';
import publicUrl from 'utils/publicUrl.js';
import {
    Link, useParams
  } from "react-router-dom";

function Home(props){
    const [toggleAdder, setToggleAdder] = useState(false); // hidden initially
    const [toggleEdit, setToggleEdit] = useState({list: [false, false, false, false, false, false, false, false, false, false]}); // hidden initially
    const [newDate, setNewDate] = useState('');
    const [newRow, setNewRow] = useState({name:'', size:'', quantity:'', rating:'', ldos:'', ndos:''});
    let {
        buildings, headers, completeService, updateStatus, removeRow, addRow, editNDOS
    } = useContext(StoreContext);
    const building_names = [];
    for (const building of buildings){
        building_names.push(building.name)
    }
    let {buildingId} = useParams();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const current_building = buildingId===undefined? "Maloney":buildingId;
    let data = buildings.find(b=>b.name === current_building);
    data = data.data;

    //handler for finishing service
    function handleCheckbox(e, building, item, index){
        //only perform events if the item was checked
        if(e.target.checked){
            completeService(building, item, index);
        }
    }

    //handler for modifying NDOS
    function handleEditNDOS(row, task){    
        /* if j===row and item === true, aquire date from form, edit in store context */
        if (toggleEdit.list[row] === true && newDate !== ''){
            editNDOS(buildingId, newDate, task);
            setNewDate('');
        }
        setToggleEdit({
            ...toggleEdit,
            list: toggleEdit.list.map((item, j)=>{
                if (j === row){
                    return !item;
                }
                else{
                    return item;
                }
            })
        });
    }

    //helper for handleEditNDOS
    function handleEditChange(e){
        const value = e.target.value;
        setNewDate(value)
    }

    //helper for handlerAddRow
    function handleNRChange(e) {
        const value = e.target.value;
        setNewRow({
        ...newRow,
        [e.target.name]: value
        });
      }

    //handler for adding rows
    function handleAddRow(event){
        addRow(buildingId, newRow.name, newRow.size, newRow.quantity, newRow.rating, newRow.ldos, newRow.ndos, true);
        setNewRow({name:'', size:'', quantity:'', rating:'', ldos:'', ndos:''})
        setToggleAdder(false);
        setToggleEdit({
            ...toggleEdit,
            list: toggleEdit.list.concat(false)
        });
        event.preventDefault();
    }

    //updates status of all items
    function checkExpy(){
        updateStatus()
    }

    //handler for deleting row
    function handleTrash(e, building, row, index){
        removeRow(building, row)
        setToggleEdit({
            ...toggleEdit,
            list: toggleEdit.list.filter((item,i)=>(i !== index))
        });
    }

    //helper for building date objects
    function buildDate(date){
        const temp_day = new Date(date);
        const day = monthNames[temp_day.getMonth()] + " " + temp_day.getDate() + ", " + temp_day.getFullYear();
        return(<td>{day}</td>)
    }

    //runs checkExpy on refresh
    window.onload = function() {
        checkExpy();
    };

    /*
    CURRENTLY OBSOLETE
    //schedules checkExpy to run at midnight
    const schedule = require('node-schedule');
    const rule = new schedule.RecurrenceRule();
    rule.hour = 0;
    rule.minute = 0;
    const job = schedule.scheduleJob(rule, function(){
        checkExpy();
    });
    //dummy code to eliminate warning
    const bleg = true;
    if (bleg === false){
        job.cancel();
    }
    */

    return(
        <div>
            <div className={css.head}>
                <span>
                    <img className={css.headLogo} src={publicUrl('/assets/bcl2.png')} alt='Logo'/>
                </span>
                <h1>{current_building}</h1>
            </div>
            <div className={css.sidebar}>
                {building_names.map(building=>{
                if(building === current_building){
                    return(<Link key={building} to={"/".concat(building)} style={{ textDecoration: 'none' }}>
                        <div className={css.active}> {building}</div>
                    </Link>)
                }
                else{
                    return(<Link key={building} to={"/".concat(building)} style={{ textDecoration: 'none' }}>
                        <div>{building}</div>
                    </Link>)
                }
                })}
            </div>
            <div>
                <div className={css.maintable}>
                    <table>
                    <thead>
                        <tr>
                        {headers.map(header=>
                            <th key = {header}>{header}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.size}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.rating}</td>
                                    {buildDate(item.ldos)}
                                    {toggleEdit.list[i] ? (<td><form className={css.dateEdit}>
                                        <input type="date" name="newNDOS" placeholder="New NDOS" value={newDate!==''?newDate:item.ndos.substring(0,10)} onChange={handleEditChange}/>
                                    </form></td>)
                                    :buildDate(item.ndos)}
                                    <td className={item.status===true?css.clear:css.expired}>
                                        <label className={css.container}>
                                            <input type="checkbox" onClick={(e) => handleCheckbox(e, current_building, item.status, item.name)}/>
                                            <span className={css.checkmark}></span>
                                        </label>
                                        <button className={css.edit} style={toggleEdit.list[i]?{backgroundColor: 'yellow'}:{backgroundColor: 'inherit'}} onClick={() => handleEditNDOS(i, item.name)}>
                                            <img src={publicUrl('/assets/edit.svg')} alt='Edit'/>
                                        </button>
                                        <button className={css.trash} onClick={(e) => handleTrash(e, current_building, item.name, i)}>
                                            <img src={publicUrl('/assets/trash.png')} alt='Trash'/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
                <div className={css.plusButton}>
                    {toggleAdder && <form className={css.plus} onSubmit={handleAddRow}>
                        <input type="text" name="name" placeholder="Name…" value={newRow.name} onChange={handleNRChange}/>
                        <input type="text" name="size" placeholder="Size" value={newRow.size} onChange={handleNRChange}/>
                        <input type="text" name="quantity" placeholder="Quantity" value={newRow.quantity} onChange={handleNRChange}/>
                        <input type="text" name="rating" placeholder="Rating" value={newRow.rating} onChange={handleNRChange}/>
                        <label>Last DOS:
                        <input type="date" name="ldos" placeholder="Last Date of Service (YYYY-MM-DD)" value={newRow.ldos} onChange={handleNRChange}/>
                        </label>
                        <label>Next DOS:
                            <input type="date" name="ndos" placeholder="Next Date of Service (YYYY-MM-DD)" value={newRow.ndos} onChange={handleNRChange}/>
                        </label>
                        <button type="submit">Add Row</button>
                    </form>}
                    <button className={css.plus} onClick={(e) => setToggleAdder(!toggleAdder)}>
                        <img src={publicUrl('/assets/plus.svg')} alt='Plus'/>
                    </button>
                </div>
            </div>
            <div className={css.foot}>
                
            </div>
        </div>
    );
}

export default Home;