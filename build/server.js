const fs = require('fs')
const path = require('path')
const rollup = require('rollup')
const Koa = require('koa')
const KoaRouter = require('koa-router')

const rolluprc = require('../rollup.config')
rolluprc.input = './example/main.js'

const app = new Koa()
const router = new KoaRouter()

async function build () {
  const bundle = await rollup.rollup(rolluprc)

  const { code } = await bundle.generate(rolluprc.output)
  return code
}

router
  .get('/', (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve(__dirname, './index.html')).toString()
  })
  .get('/example.js', async (ctx, next) => {
    ctx.body = await build()
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log(`\nListening at http://localhost:8080`)
})
