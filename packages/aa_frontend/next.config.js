const [_, assetPrefix] = (process.env.GITHUB_REPOSITORY || '').split('/')

module.exports = {
  env: process.env.AA_GRAPHQL_URL || '/api/graphql',
  assetPrefix
}