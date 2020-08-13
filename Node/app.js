// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

const mySql = require('./lib/config/mysql');
// fastify.register(require('./lib/config/mysql'));

mySql.StartMysql(fastify);

fastify.ready((err) => {
    if (!err) {
        mySql.SetConnection(fastify);
    }
})


const auth = require('fastify-auth');
const router = require('./lib/routes/route');

// Enable the fastify CORS plugin
fastify.register(require('fastify-cors'), {
    origin: '*',
    credentials: true
});


// =============routes===========
fastify.register(auth)
    .after(() => {
        for (let route of router) {
            fastify.route(route);
        }
    });



// Run the server!
fastify.listen(3000, function(err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`${address}`);
    fastify.log.info(`${address}`)
})