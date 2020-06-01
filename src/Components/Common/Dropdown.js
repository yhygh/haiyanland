import React, {useState} from 'react';
import onClickOutside from 'react-onclickoutside';
import './Dropdown.css';

//TODO: make this component generic 

function Dropdown( {title, items, parentFunc, multiSelect=false} ) {
  const [open, setOpen]= useState(false);
  const [selection, setSelection] = useState([]);

  const toggle = () => setOpen(!open);

  Dropdown.handleClickOutside = () => setOpen(false);

  function handleItemClick(item) {

  	if (! selection.some( (elem) => elem.city === item.city  ) ) {
  		if (!multiSelect) {
  			setSelection([item]);
  			parentFunc(item.id);
  		} else if (multiSelect) {
  			setSelection([...selection, item]);
  		}
  	} else {
  		let prevSelection = selection;
  		let afterRemovalSelection = prevSelection.filter( elem => elem.city !== item.city );

      if (afterRemovalSelection.length >= 1) {
			   setSelection([...afterRemovalSelection]);        	
      	 parentFunc(afterRemovalSelection[0].id);
      } 
  	}
  }

  function isSelected(item){
  	return selection.find( elem => elem.city === item.city );
  }

  return (
  	<div className="dropdown-wrapper">
  	  <div 
  	    className="dropdown-header"
  	    tabIndex={0}
 	    role="button"
  	  	onKeyPress={() => toggle()} 
  	  	onClick={() => toggle()}>
	  	  <div>{title}</div>
	  	  <div>{open ? 'Close' : 'Open'}</div>
	  </div>
  	  {open && (
  	  	<ul className="dropdown-list">
	  	  	{items.map( (item, id) => (
	  	  		<li className="dropdown-list-item" key={id}>
	  	  		  <button onClick={() => handleItemClick(item)}>
	  	  			<span>{item.city}</span>
	  	  			<span>{isSelected(item) && 'Selected'}</span>
	  	  		  </button>
	  	  		</li>
	  	  	) )}
	  	</ul>
  	  )}

  	</div>

  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}
//  or 
//   handleClickOutside: function(instance) { return Dropdown.handleClickOutside; }
// https://github.com/Pomax/react-onclickoutside/issues/307

export default onClickOutside(Dropdown, clickOutsideConfig);