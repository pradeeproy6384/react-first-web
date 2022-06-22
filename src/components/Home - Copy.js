import React from "react";
import Cards from './Card';
const Home = () => {
    return(
        <>
        <div className="Home_desc">
            <div className="container-fluid"> 
            <div className="row">
            <div className="col-md-12">
            <h1>Home Page</h1>
            </div>
                
                <div className="col-md-4 col-12"> 
                <Cards imagesrc="https://www.justwatch.com/images/poster/252554442/s166/roudram-ranam-rudhiram" 
                title="RRR 2022" sname="South Indian Movies 1"
                link="https://www.justwatch.com/in/movie/roudram-ranam-rudhiram" />
                </div>
                <div className="col-md-4 col-12">
                <Cards imagesrc="https://www.justwatch.com/images/poster/249962156/s166/k-g-f-chapter-2" 
                title="KGF-2" sname="South Indian Movies 2"
                link="https://www.justwatch.com/in/movie/k-g-f-chapter-2" />
                </div>
                <div className="col-md-4 col-12">
                <Cards imagesrc="https://images.justwatch.com/poster/271180391/s166/mayday-2022" 
                title="RUNWAY-32" sname="Bollywood Movie"
                link="https://www.justwatch.com/in/movie/mayday-2022" />
                </div>
                </div>
             </div> 
            </div>
        
       </>
    )

}
export default Home;