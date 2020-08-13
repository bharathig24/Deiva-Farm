const fastify = require('fastify')();
const mySql = require('../config/mysql');
const query = require('../queries/query');

const handler = {};

handler.register = async(request, reply) => {
    try {
        // console.log("mySql");
        const connection = await mySql.GetConnection();
        let [result, fields] = await connection.query(
            query.register, [request.body.userName, request.body.eMail, request.body.password]
        );
        // console.log(result);
        await connection.release();
        reply.send({ data: "true" });
    } catch (e) {
        console.log(e);
        reply.code(500);
        reply.send("ER_DUP_ENTRY");
    }
};

handler.login = async(request, reply) => {
    try {
        console.log("check handler");

        console.log(request.body);
        // fastify.log.info(`${request}`)

        const connection = await mySql.GetConnection(fastify);

        let [result, fields] = await connection.query(
            query.login, [request.body.eMail]
        );
        await connection.release();
        console.log(result);
        // console.log(fields);

        if (request.body.password === result[0].Password) {
            return reply.send({ data: "true", userName: result[0].UserName, eMail: result[0].MailId })
        } else {
            reply.send("false");
        }
    } catch (e) {
        console.log(e)
        reply.code(500);
        reply.send("Internal Error");
    }
}

module.exports = handler;