import React from "react";
import './search-box.style.css';

export const SearchBox = ({placeholder,modifyOnChange}) => {
    return(
        <input className="search"
                type="search" 
                placeholder='seach for monsters'
                onChange={modifyOnChange} 
                placeholder={placeholder}
                /* onChange={e => this.setState({searchField: e.target.value})}         'e' object received from onChage, 
                                                                                     e.target returns <input> html element 
                                                                                     e.target.value we get the value inserted in the html element
                                                                                     */ 
                                                                                     
       />                                                                                                            

    )
}

