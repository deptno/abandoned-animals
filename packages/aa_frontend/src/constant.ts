export const const_graphql_url = process.env.AA_GRAPHQL_URL!
export const const_site_url = 'https://deptno.github.io/abandoned-animals'
export const const_site_title = '유기견 찾기, 입양'
export const const_site_description = `유기견 찾기, 유기견 입양`
export const seo = {
  title      : const_site_title,
  description: const_site_description,
  canonical  : const_site_url,
  openGraph  : {
    url        : const_site_url,
    title      : const_site_title,
    description: const_site_description,
    site_name  : const_site_title,
  }
}
export const const_google_analytics_id = process.env.GOOGLE_ANALYTICS_ID!
