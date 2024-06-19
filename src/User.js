import React from 'react';
import './User.css';

const User = ({ first_name, last_name, email, avatar }) => {
  return (
    <div className="user">
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      <h2>{first_name} {last_name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default User;



// import React from "react";

// function Services(){
//     let message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur nemo, perspiciatis rerum impedit, error totam aliquam dolorem quibusdam voluptate, id iste? Tenetur a officia maiores debitis in aspernatur voluptatum?";
//     return(

//         <section className="section-white">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12 text-center">
//                         <h2 className="section-title">
//                             The Team
//                         </h2>
//                         <p className="section-subtitle">{message}</p>
//                     </div>
//                     <div className="col-sm-6 col-md-4">
//                         <div className="team-item">
//                             <img src="https://www.e-arc.co.uk/wp-content/themes/earcuk/assets/lib/theme/media/user-demo.png" className="team-img" alt="photo" />
//                             <h3>Priyanshi Joshi</h3>
//                             <div className="team-info">
//                                 <p>abc@gmail.com</p>
//                                 <ul className="team-icon">
//                                     <li><a href="#" className="twitter">
//                                         <i className="fa fa-twitter"></i>
//                                     </a> </li>
//                                     <li><a href="#" className="facebook">
//                                         <i className="fa fa-facebook"></i>
//                                     </a> </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Services;