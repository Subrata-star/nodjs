

import ChildC from '../childc/childc';
import {CompanyContext} from '../outer/outer' ;
  
function ChildB() {  
    return (  
        <div>  
            Child Component at level 2  
            <CompanyContext.Consumer>  
                { (co) => <div><em>Co. name: {co}</em></div> }  
            </CompanyContext.Consumer>

            <ChildC/>  
        </div>  
    )  
}  
  
export default ChildB ;
