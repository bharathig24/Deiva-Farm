const schema = {};

// register request
schema.registerReq = {
    type: "object",
    properties: {
        data: { type: 'string' }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                data: { type: 'string' }
            }
        }
    }
};

// login request
schema.loginReq = {
    type: "object",
    properties: {
        data: { type: 'string' }
    }
}

module.exports = schema;