import {Router} from 'express'
import {createBudget,getAllContacts,getSingleBudget,updateBudget,deleteBudget} from '../Controllers/Budget.controllers.js'

const router=Router();

//create a budget
router.post('/',createBudget)

//get all contacts

router.get('/',getAllContacts)

//get a single budget
router.get('/:title',getSingleBudget)

//uddate budget
router.patch('/:title',updateBudget)



//delete a contact
router.delete('/:title',deleteBudget)

export default router;
