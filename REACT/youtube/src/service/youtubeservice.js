class Youtube {
  constructor (key){
    this.key = key;

    const getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

    mostPopular() {
      return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items);
    };

    search(query) {
      return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoID})))
    };
  }

export default Youtube;