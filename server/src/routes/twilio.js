import {Router} from 'express';
import twilio from 'twilio';

const MODERATOR = '+15203391299';
const VoiceResponse = twilio.twiml.VoiceResponse;
const client = twilio(config.accountSid, config.authToken);
const app = new Router();

app.post('/call', function(request, response) {
    // This should be the publicly accessible URL for your application
    // Here, we just use the host for the application making the request,
    // but you can hard code it or use something different if need be
    var salesNumber = request.body.salesNumber;
    var url = 'http://' + request.headers.host + '/outbound/' + encodeURIComponent(salesNumber);

    var options = {
        to: request.body.phoneNumber,
        from: config.twilioNumber,
        url: url,
    };

    // Place an outbound call to the user, using the TwiML instructions
    // from the /outbound route
    client.calls
        .create(options)
        .then(message => {
            console.log(message.responseText);
            response.send({
                message: 'Thank you! We will be calling you shortly.',
            });
        })
        .catch(error => {
            console.log(error);
            response.status(500).send(error);
        });
});

app.post('/outbound/:salesNumber', function(request, response) {
    console.log('i get here', request.params.salesNumber);
    var salesNumber = request.params.salesNumber;
    var twimlResponse = new VoiceResponse();

    twimlResponse.say(
        'Thanks for contacting our sales department. Our ' + 'next available representative will take your call. ',
        {voice: 'alice'}
    );

    twimlResponse.dial(salesNumber);

    response.send(twimlResponse.toString());
});

app.post('/join', (request, response) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();

    // Start with a <Dial> verb
    const dial = twiml.dial();
    // If the caller is our MODERATOR, then start the conference when they
    // join and end the conference when they leave
    if (request.body.From == MODERATOR) {
        dial.conference('My conference', {
            startConferenceOnEnter: true,
            endConferenceOnExit: true,
        });
    } else {
        // Otherwise have the caller join as a regular participant
        dial.conference('My conference', {
            startConferenceOnEnter: false,
        });
    }

    // Render the response as XML in reply to the webhook request
    response.type('text/xml');
    response.send(twiml.toString());
});
