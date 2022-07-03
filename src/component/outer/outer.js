
import React from 'react';   
//import GitHubUsersHook from '../GitHubUsersHook/githubusershook';
import ParentComponent from '../parent/parent'; 
  
export const UserContext = React.createContext();
export const CompanyContext = React.createContext() ;


function Outer() {  
  return (  
    <div className="outer"> 
    <UserContext.Provider value={{"name": "Ajay Kumar", "addr": "Delhi"}} >
      <CompanyContext.Provider value={ "HUL"}>
          <ParentComponent/>
      </CompanyContext.Provider>
    </UserContext.Provider> 
      {/*<GitHubUsersHook/> */ }
    </div>  
  );  
}  
  
export default Outer;  