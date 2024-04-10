
 import { useEffect, useState } from "react";
 import {InputText } from 'primereact/inputtext';

const SearchPromo = () => {

    const [searchInput, setSearchInput] = useState("");
    useEffect(()=>{
        setSearchInput()
      },[])
      const filterPromos = (e) => {
        setSearchInput(e.target.value);
        if(e.target.value == ""){
          // dispatch(setSearchValue(e.target.value.trim()))
          // dispatch(fetchPromosAsync(e.target.value.trim()));
        }  
      };


      return(
        <>
           <form style={{marginRight:"31px"}}>

<span className="p-input-icon-right">

  <i className="pi pi-search cursor-pointer"  onClick={SearchPromo}/>

  <InputText
    placeholder="Search Promos"
    value={searchInput}
    onChange={filterPromos}
    //onKeyDown={handleKeyDown}
  />
</span>
</form>
        </>
      )
}

export default SearchPromo