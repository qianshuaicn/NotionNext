/**
 * 广告播放插件
 */
module.exports = {
  // 谷歌广告
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || null,  // 'ca-pub-7974805171826429', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || null,  //  'ca-pub-4083908175', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW ||  null,  // 'ca-pub-7371550521', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || null,  //  'ca-pub-6091825115', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || null,  // 'ca-pub-2164321848', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads
}
