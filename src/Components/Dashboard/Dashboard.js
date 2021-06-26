import React from 'react';
import SideBar from '../SideBar/SideBar'

const Dashboard = () => {
    return (
        <div className="mt-3">
           <div className="row">
               <div className="col-md-2">
               <SideBar></SideBar>
               </div>
               <div className="col-md-8">
                  <div className="p-5">
                  <h2 style={{color: '#0bff96'}} className="text-center mt-5 mb-4">DashBoard</h2>
                  <h5 className="text-center lh-base text-secondary">Open Side Bar And Select Your <br /> Desired Option <br />Provided As Your Role!</h5>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Dashboard;