// https://cli.vuejs.org/config/
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vuejs-todo-app/'
    : '/',
  outputDir: 'docs'
  // indexPath: "../src/client_side/index.tt"
}
