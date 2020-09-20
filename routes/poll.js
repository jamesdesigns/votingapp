const express = require('express')
const router = express.Router()
const Pusher = require('pusher')

var pusher = new Pusher({
    appId: '1075689',
    key: '4bc8ef10221bac6c9838',
    secret: '3bcf07edd95a059697b0',
    cluster: 'us2',
    encrypted: true
  })

router.get('/', (req, res) => {
    res.send('POLL')
})

router.post('/', (req, res) => {
    pusher.trigger('fed-poll', 'fed-vote', {
        points: 1,
        fed: req.body.fed
      });

      return res.json({ success: true, message: 'Thank you for voting' })
})

module.exports = router;