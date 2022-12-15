import React, { Component } from "react";

class Aboutme extends Component {

 
  render() {
    
    return (
      
    <div className="parentofcerts">
      <img
                src="images\dev.jpg"
                alt="avatar"
                style={{ height: "500px", marginTop: '50px' ,borderRadius:"70px" }}
              />
      <div className="wtf" style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', borderRadius:"35px", boxShadow: "10px 10px 10px rgb(83, 87, 87)" , marginRight: 'auto', marginTop: '37px', width: '60%',  padding: '20px'}}>
        
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Shreyash Tambe</h1>
        <p style={{textAlign: 'justify',fontSize: "16px", fontFamily: 'Oxygen, sans-serif'}}>
          This is Shreyash Tambe.  I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines. I liked
          to solve a new real world problem by coding.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.I
          dream to be an expert software engineer so that I can build
          professional and useful software that has business value.
        </p>
      </div> 
<div className="card">  <img
                src="images\certs\b.png"
                alt="avatar"
                style={{ height: "250px" ,width:"350px",borderRadius:"35px" }}
              />Java(Basics)</div>
<div className="card"> <img
                src="images\certs\c.png"
                alt="avatar"
                style={{ height: "250px" ,width:"350px",borderRadius:"35px" }}
              />National Twitter Strategic Planner</div>
<div className="card"> <img
                src="images\certs\d.png"
                alt="avatar"
                style={{ height: "250px" ,width:"350px",borderRadius:"35px" }}
              />IBM (Data Analysis)</div>
<div className="card"> <img
                src="images\certs\e.png"
                alt="avatar"
                style={{ height: "250px" ,width:"350px",borderRadius:"35px"}}
              />Web Development</div>
<div className="card"> <img
                src="images\certs\f.png"
                alt="avatar"
                style={{ height: "250px" ,width:"350px",borderRadius:"35px" }}
              />Persistent Internship</div>
<div className="card"> <img
                src="images\certs\g.png"
                alt="avatar"
                style={{ height: "250px" ,width:"350px",borderRadius:"35px" }}
              />COEP java Internship</div>
<div className="card"> <img
                src="images\certs\h.png"
                alt="avatar"
                style={{ height: "250px" ,width:"350px",borderRadius:"35px" }}
              />Data Structure & Algorithm</div>
<div className="card"> <img
              src="images\certs\i.png"
              alt="avatar"
              style={{ height: "250px" ,width:"350px",borderRadius:"35px" }}
            />LinkedIn React Certificate</div>

      </div>

    );
  }
}

export default Aboutme;
