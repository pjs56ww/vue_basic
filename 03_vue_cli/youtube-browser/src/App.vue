<template>  
  <!-- 모든 component는 하나의 div 안에 작성되어야 한다. -->
  <div class="container">
    <!-- step no.3 -->
    <!-- @ ==> '어떠한 event가 발생했을 때' 를 의미 -->
    <SearchBar @inputChange="onInputChange" />
    <VideoDetail :video="selectedVideo" />
    <VideoList v-bind:videos="videos" @selectVideo="onSelectVideo"/>
  </div>
</template>

<script>
import axios from 'axios'
// step no.1
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY  // YOUTUBE
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

// Vue
export default {  // Vue

  name: 'App', // Component 의 이름을 지정
  // step no.2
  data() {
    return {
      videos: [],
      selectedVideo: null,
    }
  }, 
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  methods: {
    // inputChange 라는 이벤트가 발생할 때 마다 실행하라!
    onInputChange: function(inputValue) {
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: inputValue
        }
      })
      .then(response => {
        this.videos = response.data.items
      })
      .catch(error => {
        console.error(error)
      })
    },
    onSelectVideo: function(video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style>

</style>