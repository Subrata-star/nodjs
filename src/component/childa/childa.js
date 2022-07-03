import ChildB from "../childb/childb";

  
function ChildA() {  
    return (  
        <div>           
            Child Component at level 1  
            <ChildB/> 
        </div>  
    )  
}  
  
export default ChildA ;