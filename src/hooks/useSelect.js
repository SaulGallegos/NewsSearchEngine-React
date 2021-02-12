import {useState} from 'react';
import PropTypes from 'prop-types';


const useSelect = (initialState, options) => {

     const [state, setstate] = useState(initialState);

     const SelectNews = () => (
          <select
               className="browser-default"
               onChange={e => setstate(e.target.value)}
          >

               {options.map(option => (
                    <option
                         key={option.value}
                         value={option.value}
                    >
                         {option.label}
                    </option>
               ))}
          </select>
     );

     return [state, SelectNews];
}
 
export default useSelect;

