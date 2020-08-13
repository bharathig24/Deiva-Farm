const handler = require('../handlers/callback');
const schema = require('../schema/schema');

module.exports = [

    // register
    {
        method: 'POST',
        url: '/register',
        // auth: true,
        schema: {
            data: schema.registerReq
        },
        handler: handler.register
    },

    //   login
    {
        method: 'POST',
        url: '/login',
        // auth: true,
        // preHandler: 
        schema: {
            data: schema.loginReq
        },
        handler: handler.login
    }

];