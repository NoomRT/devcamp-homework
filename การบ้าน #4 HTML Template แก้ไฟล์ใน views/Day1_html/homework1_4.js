const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const Router = require('koa-router');
const router = new Router();

app.use(views(__dirname + '/views', { 
    map: {
        html: 'pug'
    },
    extension: 'pug' 
}));

router.get('/', async (ctx, next) => {
    await ctx.render('index');
});

router.get('/skill', async (ctx, next) => {
    await ctx.render('skill');
});

router.get('/contact', async (ctx, next) => {
    await ctx.render('contact');
});

router.get('/portfolio', async (ctx, next) => {
    await ctx.render('portfolio');
});

app.use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);