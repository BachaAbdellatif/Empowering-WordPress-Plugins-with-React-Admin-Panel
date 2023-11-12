import { TextControl } from '@wordpress/components';
import { useOutletContext } from "react-router-dom";

const InputText = ( {name, handeloptions} ) => {
   // const [dashOptions, setDashoptions] = useOutletContext();
    console.log("here", handeloptions)
    return <TextControl
            label= "input test"
            value = {name}
            onChange={ e => { console.log(e)} }
    />
}
export default InputText