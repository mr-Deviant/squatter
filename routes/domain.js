let express = require('express'),
	domain = require('../controllers/domain');
	
let router = express.Router();

router.post('/', domain.create);

/*router.get('/', complaint.list);

router.get('/:complaintId', complaint.read);

router.put('/:complaintId', user.isAdmin, complaint.update);

router.delete('/:complaintId', user.isAdmin, complaint.delete);*/

module.exports = router;
