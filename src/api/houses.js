import request from '@/utils/request'

export function getHouses() {
  // return request({
  //   url: '/houses',
  //   method: 'get'
  // })
  return new Promise(function(reslove, reject) {
    const data = {
      data: {}
    }
    data.data.lists = [
      {
        ID: 1,
        resourceType: 'V01',
        title: '房子01',
        des: '房子01很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 2,
        resourceType: 'V02',
        title: '房子02',
        des: '房子02很好很好，非常好',
        address: '上海市金山区金沙江路 1518 弄',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png'
      },
      {
        ID: 3,
        resourceType: 'V03',
        title: '房子03',
        des: '房子03很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 4,
        resourceType: 'V03',
        title: '房子04',
        des: '房子04很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 5,
        resourceType: 'V4',
        title: '房子04',
        des: '房子04很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 6,
        resourceType: 'V4',
        title: '房子04',
        des: '房子04很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 7,
        resourceType: 'V4',
        title: '房子04',
        des: '房子04很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 8,
        resourceType: 'V4',
        title: '房子04',
        des: '房子04很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 9,
        resourceType: 'V4',
        title: '房子04',
        des: '房子04很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      },
      {
        ID: 10,
        resourceType: 'V4',
        title: '房子04',
        des: '房子04很好很好，非常好',
        address: '上海市普陀区金沙江路 1518 弄',
        thumbnailUrl: 'http://pic.ibaotu.com/00/55/70/856888piCpwt.jpg-0.jpg!ww700'
      }
    ]
    reslove(data)
  })
}

export function createHouse(house) {
  return request({
    url: '/houses',
    method: 'post',
    data: house
  })
}

export function getHouse(ID) {
  return request({
    url: '/houses/' + ID,
    method: 'get'
  })
}

export function editHouse(newHouse) {
  return request({
    url: '/houses/' + newHouse.ID,
    method: 'post',
    data: newHouse
  })
}

export function deleteHouse(ID) {
  return request({
    url: '/houses/' + ID,
    method: 'delete'
  })
}
