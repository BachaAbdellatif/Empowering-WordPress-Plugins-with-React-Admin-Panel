import { render } from "@wordpress/element"
import { Panel } from '@wordpress/components';
import  ArPanel  from "./panel/panel"
import './style.scss';

 const App = () => {
    return <>
            <Panel header="Plugin Settings V 1.0">
                <ArPanel />
            </Panel>
        
            </>
 }
  render(<App />, document.getElementById("ar_setting"))