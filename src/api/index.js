// 导入封装好的网络请求类工具
// import Network from './network';

// 封装各种接口请求(使用例子)
/*
export const getBanner = () => Network.get('/banner?type=2');
export const getPlayList = (data) => Network.get('playlist/detail', data);
export const getLetterArtists = (letter) => {
  return new Promise(function(resolve, reject) {
    const letterArtists = [];
    Network.all([
      Network.get(`artist/list?offset=0&limit=5&cat=1001&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=1002&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=1003&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=2001&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=2002&initial=${letter}`),
      Network.get(`artist/list?offset=0&limit=5&cat=2003&initial=${letter}`)
    ])
      .then(function(result) {
        // console.log(result)
        result.forEach(function(item) {
          letterArtists.push(...item.artists);
        });
        // console.log(letterArtists)
        resolve(letterArtists);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};
*/

// 组件内使用
/*
import { getBanner } from '../api/index';

created() {
  getBanner().then((data) => {
    console.log(data);
    this.banners = data.banners;
  }).catch(function(err) {
    console.log(err);
  });
}
*/
