const { Router } = require('express')
const router = Router()
const { getLists, getSingleList, createList, updateList, deleteList } = require('../controllers/lists')

router.route('/').get(getLists).post(createList)
router.route('/:id').get(getSingleList).put(updateList).delete(deleteList)

module.exports = router
