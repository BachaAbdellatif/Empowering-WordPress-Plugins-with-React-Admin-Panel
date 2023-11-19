import { useContext } from 'react';
import { dataContext } from './datacontext';

const ArDropdown = ( {name,options} ) => {
       
    const [dashOptions, setDashoptions] = useContext(dataContext)
        console.log(options)
        
    return  <select 
                    defaultValue={dashOptions[name]} 
                    onChange={ (value) => { setDashoptions( {
                        ...dashOptions,
                        [name] : value.target.value
                        })
                        }
                    }  
                    >
                     {Object.entries(options).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                        ))}
                
               
            </select>
}
export default ArDropdown