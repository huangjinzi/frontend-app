<template>
  <view class="container">
    <view id="olMap" class="olMap"></view>
  </view>
</template>

<script module="ol" lang="renderjs">
import initMap from './initMap.js'

export default {
    data () {
    },
    mounted(){
      if (typeof window.ol === 'function') {
				this.init()
			} else {
				// 动态引入较大类库避免影响页面展示
				const scriptOl = document.createElement('script')
				scriptOl.src = 'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@main/dist/en/v6.0.0/build/ol.js'
				scriptOl.onload = this.init.bind(this)
				document.head.appendChild(scriptOl)

				const scriptJweixin = document.createElement('script')
				scriptJweixin.src = 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js'
				document.head.appendChild(scriptJweixin)
			}
    },
	methods:{
		init(){
      this.map = initMap.create();
		}
	}
}
</script>

<style lang="scss">
.olMap {
  width: 100%;
  height: calc(100vh);
}
</style>
