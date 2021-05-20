const apiKey = 'd5ad7227-de5f-46e2-8af5-d1e32afaf1ca';
// const url = 'https://api.thecatapi.com/v1/images/search';
const mainUrl = 'https://api.thecatapi.com/v1/images/search?';

class PicturesAPI {
  async fetchPictures(opts) {
    let params = new URLSearchParams({
      limit: 6,
      page: 1,
      order: 'RAND',
      ...opts,
    })
    let url = mainUrl + params.toString()
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': apiKey,
      }
    }).then((response)=>{
      let result = response.json()
      return result;
    })
  }
}
export const picturesAPI = new PicturesAPI();
