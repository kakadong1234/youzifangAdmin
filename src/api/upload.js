import request from '@/utils/request'

export function uploadImg(file) {
  console.log('getHouses request')
  return request({
    url: '/qiniu/image/single',
    method: 'post',
    headers: {
      ts: 1516095530285,
      token: '39FD11880BD4AB12285E0C9DD588C02B',
      platform: 'WEB',
      'Content-Type': 'multipart/form-data'
    },
    data: {
      bizType: 1,
      file
    }
  })
}
