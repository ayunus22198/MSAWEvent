const router = require('express').Router();

// restaurantID dynamic parameter
router.post('/:restaurantID/review', (req,res) => {
    console.log('Post request');
});

router.get('/:restaurantID/reviews', (req,res) => {
    console.log('Get request');
});

module.exports = router;