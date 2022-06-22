import React from "react";
import Cards from './Card';
import Sdata from '../components/Cardarray';
// console.log(Sdata[2].sname);

 

    // const ncard = (val) => {
    //     return(
    //         <div className="col-md-4 col-12"> 
    //                 <Cards 
    //                 imagesrc={val.imagesrc}
    //                 title={val.title}  
    //                 sname={val.sname}  
    //                 link={val.link}  
    //                 />
    //                 </div> 
    //     )
    // };
   
    


const Home = () => {
    return(
        <>
        <div className="Home_desc">
            <div className="container-fluid"> 
            <div className="row">
            <div className="col-md-12">
            <h1>Home Page</h1>
            </div>
                
                
                {/* Map Method */}

                {Sdata.map((val)=>{
                    return(
            <div className="col-md-4 col-12"> 
                    <Cards 
                    imagesrc={val.imagesrc}
                    title={val.title}  
                    sname={val.sname}  
                    link={val.link}  
                    />
                    </div> 
        )
                })}
                
                {/* <div className="col-md-4 col-12"> 
                <Cards 
                imagesrc={Sdata[1].imagesrc}
                title={Sdata[1].title}  
                sname={Sdata[1].sname}  
                link={Sdata[1].link}  
                />
                </div>
                <div className="col-md-4 col-12"> 
                <Cards 
                imagesrc={Sdata[2].imagesrc}
                title={Sdata[2].title}  
                sname={Sdata[2].sname}  
                link={Sdata[2].link}  
                />
                </div> */}
            </div>
             </div> 
            </div>
        
       </>
    )

}
export default Home;