<template>
  <ul class="list-group">
    <VideoListItem 
    v-for="video in videos" 
    :key="video.id.videoId" 
    @selectVideo="onSelectVideo"
    v-bind:video="video" 
     />
    <!-- selectVideo 이벤트가 발생하면 onVideoSelect가 실행된다. -->
    
  </ul>
  
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',

  props: {
    videos: {
      type: Array,
      required: true,
      }
  }, 
  methods: {
    onSelectVideo: function(video) {
      this.$emit('selectVideo', video)
    }
  },
  
  components: {
    VideoListItem
  }
}



</script>

<style>

</style>