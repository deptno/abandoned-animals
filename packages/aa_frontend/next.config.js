const [_, assetPrefix] = (process.env.GITHUB_REPOSITORY || '').split('/')
const config = {
  env: process.env.AA_GRAPHQL_URL || '/api/graphql',
  assetPrefix
}

console.log('build config:', config)

module.exports = config