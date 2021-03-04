import React, {createContext, useState} from 'react';
import initialStore from 'utils/initialStore.js';

// export the context so that other components can import
export const StoreContext = createContext(); 

function StoreContextProvider(props){
    const [store, setStore] = useState(initialStore);

    //helper function for creating date objects
    function createDate(day){
        return (new Date(day));
    }

    //updates item when service is marked as complete
    function completeService(buildingID, value, task){
        const today = new Date();
        
        const mod_day = today.getDate() < 10? "0"+ today.getDate():today.getDate();
        var mod_month = parseInt(today.getMonth())+1 < 10? "0"+ (parseInt(today.getMonth())+1).toString():(parseInt(today.getMonth())+1).toString();
        const day = today.getFullYear()+"-"+mod_month+"-"+mod_day+"T00:00:00";
        
        var yr = today.getFullYear()

        if (parseInt(mod_month) > 9){
            yr = yr + 1
            mod_month = "0" + ((parseInt(mod_month) + 3) % 12).toString()
        }
        else{
            mod_month = parseInt(mod_month) + 3;
            mod_month = mod_month < 10? "0"+ (mod_month).toString():(mod_month).toString();
        }

        const ndos = yr+"-"+mod_month+"-"+mod_day+"T00:00:00"
        setStore({
          ...store,
          buildings: store.buildings.map(
              building => building.name === buildingID? {
                  //locate current building in store
                  ...building,
                  data: building.data.map(
                      row => row.name === task? {
                          ...row,
                          ldos: day,
                          ndos: ndos,
                          status: (value === true? value:!value),
                }:row
                  )
              } : building
          )
        });
    }

    //modifies ndos from manual input
    function editNDOS(buildingID, newNDOS,task){
        const today = new Date();
        newNDOS = newNDOS+"T00:00:00";
        console.log("hi")
        setStore({
          ...store,
          buildings: store.buildings.map(
              building => building.name === buildingID? {
                  //locate current building in store
                  ...building,
                  data: building.data.map(
                      row => row.name === task? {
                          ...row,
                          ndos: newNDOS,
                          status: createDate(newNDOS) < today? false:true
                }:row
                  )
              } : building
          )
        });
    }

    //updates status of all items based on ndos
    function updateStatus(){
        //using the same update as above, except now we simply flip the T/F state of the selected row for the current building
        const today = new Date();
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building != null? {
                    //locate current building in store
                    ...building,
                    data: building.data.map(
                        row => createDate(row.ndos) < today? {
                            ...row,
                            status: false,
                        }:{
                            ...row,
                            status: true,
                    })
                } : building
            )
          });
    }
    
    //delete item indicated by user
    function removeRow(buildingID, name){
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building.name === buildingID? {
                    ...building,
                    data: building.data.filter(row=>!(row.name === name))
                }:building
            )
        })
    }

    //add item according to manual input
    function addRow(buildingID, name, size, quantity, rating, ldos, ndos, status){
        const newrow = {
            name: name,
            size: size,
            quantity: quantity,
            rating: rating,
            ldos: ldos+"T00:00:00",
            ndos: ndos+"T00:00:00",
            status: status
        }
        setStore({
            ...store,
            buildings: store.buildings.map(
                building => building.name === buildingID? {
                    ...building,
                    data: building.data.concat(newrow)
                }:building
            )
        })
    }
      

	return (
        <StoreContext.Provider value = {{...store, completeService, updateStatus, removeRow, addRow, editNDOS}}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider; // export this component as default