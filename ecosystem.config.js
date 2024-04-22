module.exports = {
  apps:[
    {
      port: 3000,
      name: '建站',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}