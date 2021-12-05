

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  let ApiUrlLocal = 'http://localhost:6000/';
  // let ApiUrlLive = 'http://18.215.15.95:4000/';
  // let ApiUrlLive = 'https://hollywoodsecret.node.pixelnx.com/';
  let ApiUrlLive = 'https://api.landrr.com/';

  const env = {
    API_URL: (() => {
      if (isDev) {
        return ApiUrlLocal
      } else if (isProd) {
        return ApiUrlLive
      } else if (isStaging) {
        return ApiUrlLive
      } else {
        return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      }

    })(),
    // RESTURL_SESSIONS: (() => {
    //   if (isDev) return 'http://localhost:4000/sessions'
    //   if (isProd) return 'https://www.siliconvalley-codecamp.com/rest/sessions'
    //   if (isStaging) return 'http://localhost:11639'
    //   return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    // })(),
    // tableDataPerPage: 2,
    // SalestFactoryUrl: 'https://salesfactory.landrr.com/',
    // stockFootageApiUrl: 'https://stock-footage-factory.com/api.php',
    baseUrl : isDev?'http://localhost:5000/':'https://www.landrr.com/'
  }



  return {
    env: env,
    images: {
      domains: ['s3.amazonaws.com'],
    }
  }

}





// module.exports = {
//   env: {
//     API_URL : 'http://shwetagupta:4000/',
//     tableDataPerPage: 2,
//   },
//   images: {
//     domains: ['s3.amazonaws.com'],
//   }
// }