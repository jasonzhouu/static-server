const express = require('express')
const app = express()
app.listen(80, ()=>{console.log('static file server listening on http://zhouys.xyz')})
app.use(express.static('/root/blog/_site', {
    extensions: ['html']
}))
app.use('/public', express.static('/root/blog/public'))
app.use('/assets', express.static('/root/blog/assets'))
