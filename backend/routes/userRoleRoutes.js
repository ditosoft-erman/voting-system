const express = require('express');
const router = express.Router();
const userRoleController = require('../controller/UserRoleController');

// User role routes
router.get('/', userRoleController.getAllRoles);
router.get('/:id', userRoleController.getRoleById);
router.post('/', userRoleController.createRole);
router.put('/:id', userRoleController.updateRole);
router.delete('/:id', userRoleController.deleteRole);

module.exports = router;
