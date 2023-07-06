const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'astitva',
  password: 'avantnet',
  port: 5433,
});

// login validation 
// const getlogin = (request, response) => {

//   const userEmail = parseInt(request.params.email_id);
//   pool.query('SELECT * FROM sign_up WHERE email_id = ?',[email_id] ,(error, results) => {
//     if (error) {
//       response.send({err:err})
//     }
//     if(results){
//       response.send(results);
//     }
//     else{
//       response.send({message:"Invalid email"});
//     }
    
//   });
// };






// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query('DELETE FROM users WHERE chemist_id = $1', [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };


// ---Sign up table---

// ----chemist----


const createSignUp = (request, response) => {
  const {pharmacy_name, contact_name, email_id,mobile_no, door_no, street,  area, city, state_name, pincode, chemist_drug_licence_no, chemist_photo} = request.body;

  pool.query(
 'INSERT INTO chemist_registration (pharmacy_name,contact_name,email_id,mobile_no,door_no,street,area,city,state_name,pincode,chemist_drug_licence_no,chemist_photo,submitted_on) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,CURRENT_TIMESTAMP) RETURNING *',
    [ pharmacy_name,
      contact_name,
      email_id,
      mobile_no,
      door_no,
      street,
      area,
      city,
      state_name,      
      pincode,
      chemist_drug_licence_no,
      chemist_photo
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const updateRegRequestApprove = (request, response) => {
      const id = parseInt(request.params.id);
     
    const acceptquery = `
         UPDATE chemist_registration
         SET status = 'Approved'
        WHERE chemist_id = $1` ;
   
         pool.query(acceptquery,[id],(error, results) => {
           if (error) {
             throw error;
           }
           response.status(200).send(`User modified with ID: ${id}`);
         })
       };


 const updateRegRequestReject = (request, response) => {
      const id = parseInt(request.params.id);
      const {reason} = request.body;

    const rejectquery = `
         UPDATE chemist_registration
         SET status = 'Rejected'
            reason = reason
         WHERE chemist_id = $1`;
   
         pool.query(rejectquery, [id,reason], (error, results) => {
           if (error) {
             throw error;
           }
           response.status(200).send(`User modified with ID: ${id}`);
         })
       };
   

const getSignup = (request, response) => {
  pool.query('SELECT * FROM chemist_registration order by chemist_id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getSignupById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM chemist_registration WHERE chemist_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// --user login table----

const createUserTable = (request, response) => {
  const {name,email,pwd,user_type} = request.body;

  pool.query(
 'INSERT INTO users_masters (user_name,email,pwd,user_type,added_on) VALUES ($1,$2,$3,$4,current_date) RETURNING *',
    [
      name,
      email,
      pwd,
      user_type
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const getloginverify = (request, response) => {
  pool.query('SELECT * FROM users_masters', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
// --operator table----

const createOperDetails = (request, response) => {
  const {name,email,mobileNumber,pwd,status} = request.body;

  pool.query(
 'INSERT INTO operationteam_masters (operator_name,operator_email,operator_mobile,operator_pwd,operator_status,added_on) VALUES ($1,$2,$3,$4,$5,current_date) RETURNING *',
    [ name,
      email,
      mobileNumber,
      pwd,
      status,
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

const getOperatorDetails = (request, response) => {
  pool.query('SELECT * FROM operationteam_masters order by id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getOperatorDetailsByID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM operationteam_masters WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// --Product Inquiry table----

const createProdInquiry = (request, response) => {
  const {product_name,product_quantity,prod_exp_delivery,prod_photo} = request.body;

  pool.query(
 'INSERT INTO inquiry_details (product_name,product_quantity,prod_exp_delivery,prod_photo) VALUES ($1,$2,$3,$4) RETURNING *',
    [ 
      product_name,
      product_quantity,
      prod_exp_delivery,
      prod_photo,
    
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const getProdInquiryRecord = (request, response) => {
  pool.query('SELECT * FROM inquiry_details order by id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getProdInquiryRecordByID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM inquiry_details WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const createOrders = (request, response) => {
  const { product_name,product_quantity, prod_exp_delivery,prod_photo} = request.body;

  pool.query(
 'INSERT INTO orders_masters (product_name,product_quantity,prod_exp_delivery,prod_photo) VALUES ($1,$2,$3,$4) RETURNING *',
    [ product_name,
      product_quantity,
      prod_exp_delivery,
      prod_photo,
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

// --Operator ---


// const updateProdInquiryStatus = (request, response) => {
 
  
//   const id = parseInt(request.params.id);
//   const { statuscolumn } = approve;

//   pool.query(
//     'UPDATE inquiry_details SET status =$2  WHERE id = $1',
//     [ id,statuscolumn],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

module.exports = {
 
  createSignUp,
  getSignup,
  getSignupById,
  updateRegRequestApprove,
  updateRegRequestReject,


  createUserTable,
  getloginverify,


  createOperDetails,
  getOperatorDetails,
  getOperatorDetailsByID,

  createProdInquiry,
  getProdInquiryRecord,
  getProdInquiryRecordByID,


   createOrders
   //updateProdInquiryStatus,

  //deleteUser,
  // getlogin
};
