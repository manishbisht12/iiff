// // import express from 'express';
// // import { adminRegister, adminLogin } from '../controllers/adminController.js';

// // const router = express.Router();

// // router.post('/register', adminRegister);  // <-- Register endpoint
// // router.post('/login', adminLogin);        // <-- Login endpoint

// // export default router;




// import express from 'express';
// import { adminRegister, adminLogin } from '../controllers/adminController.js';
// import { getAllUsersForAdmin } from '../controllers/getAllUsersForAdmin.js'; 
// import { verifyAdminToken } from '../middleware/verifyAdminToken.js';

// const router = express.Router();

// router.post('/register', adminRegister);  // Register route stays as-is
// router.post('/login', adminLogin);        // Login + token verify combined

// router.get('/users', verifyAdminToken, getAllUsersForAdmin);

// export default router;





import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { getAllUsersForAdmin } from '../controllers/getAllUsersForAdmin.js'; 
import { verifyAdminToken } from '../middleware/verifyAdminToken.js';

const router = express.Router();

//router.post('/register', adminRegister);  // Register route stays as-is
router.post('/login', adminLogin);        // Login + token verify combined

router.get('/users', verifyAdminToken, getAllUsersForAdmin);

export default router;
