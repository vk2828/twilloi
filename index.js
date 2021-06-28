// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = "AC7c6e57d657be6b347ea6cd7b9a362cff";

// const authToken = "e3d540ee1f26a291624ad26023d4e8fb";

// const client = require('twilio')(accountSid, authToken);
// client.messages
//     .create({
//         body: 'hello from vishal',
//         from: '+16789673920',
//         to: '+917985461754'
//     })
//     .then(message => console.log(message.sid));

const express = require('express')
const app = express()

app.get('/sendsms', function(req, res) {
    const accountSid = "AC7c6e57d657be6b347ea6cd7b9a362cff";

    const authToken = "e3d540ee1f26a291624ad26023d4e8fb";

    const client = require('twilio')(accountSid, authToken);
    client.messages
        .create({
            body: 'hello from vishal',
            from: '+16789673920',
            to: '+917985461754'
        })
        .then(message => res.send(`the message with id: ${message} was send`));

})

app.listen(3000, () => {
    console.log(`listening`)
})