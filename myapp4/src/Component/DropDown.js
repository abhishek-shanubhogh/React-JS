import React from 'react'


 const DropDown = () =>{


    

    const drop =["india","aus","NZ","ENG","NED","WI","AFG"];
    //let item =["fruit","vegitable"]
    
    let fruits = [
        { label: "Apple", value: "🍎" },
        { label: "Banana", value: "🍌" },
        { label: "Orange", value: "🍊" }
    ]
    let veg = [
        { label: "Tomato"},
        { label: "Radish" },
        { label: "Lemon"}
    ]
   

    const [selecteditem,setSelectitem]=React.useState("");
    
    const[selectedItemValue,setSelectedItemValue]=React.useState([]);

    const [selectedValue,setSelectValue]=React.useState("");
    const [selectedCountry,setSelectCountry]=React.useState("");


    
    const fruitChanged=(h) =>
    {
      const value = h.target.value;
      console.log(value);
      setSelectValue(value);
    };
    const countryChange =(h)=>{

        const value = h.target.value;
        console.log(value);
        setSelectCountry(value);
        

    };

    const filterZ =(h) =>
    {
        
        const value= h.target.value;
        
        setSelectitem(value);

        console.log(value);

        value==="fruit" ? setSelectedItemValue(fruits): setSelectedItemValue(veg);

        

        
    };
  
  
  return(
    
    
    
      <div>
            <select onChange={countryChange} > 

            <option>---hello---</option>
            {
                    drop.map(x=> <option >{x}</option>)
            }
            </select>
            <div>
            <select onChange={fruitChanged}>
                <option>--select fruit --</option>
                {
                    fruits.map(x=> <option >{x.label}{x.value}</option>)
                }
            </select>
            </div>

            <div>{selectedCountry}</div>
            <div> {selectedValue}</div>
            

            <div>

                <select onChange={filterZ}>
                    <option>-- select Fruit or veg --</option>
                    <option>fruit</option>
                    <option>veg</option>
                    
                </select>
                

                <select>
                    <option>-- select Fruit or veg --</option>
                    {
                        selectedItemValue.map(x=> <option>{x.label}{x.value}</option>)
                    }
                </select>
                <div>you have selected {selecteditem}</div>
                <div>you have selected {selectedItemValue.label}</div>

                
            </div>







      </div>
  )
    
  };


export default DropDown