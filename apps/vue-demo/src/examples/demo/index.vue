<template>
  <img 
    ref="imgRef" 
    src="../../assets/walker.gif" 
    class="img-gif" 
    @mouseover="handleHoverOver" 
    @mouseleave="handleHoverLeave"
  />
  {{hover}}
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const imgRef = ref(null);
    const hover = ref(false);

    let imgSrc = null;
    let staticImgSrc = null;

    onMounted(() => {
      imgSrc = imgRef.value.src;
      console.log("🚀 ~ file: index.vue:25 ~ onMounted ~ imgSrc", imgSrc)
      const canvas = document.createElement('canvas');
      canvas.src = imgSrc;
      canvas.width = 200;
      canvas.height = 200;
      canvas.getContext('2d').drawImage(imgRef.value, 0, 0, 200, 200);
      staticImgSrc = canvas.toDataURL("image/png");
    })

    const handleHoverOver = () => {
      hover.value = !hover.value;
      imgRef.value.style.width = '220px';
      imgRef.value.style.height = '220px';
      imgRef.value.src = imgSrc;
    }

    const handleHoverLeave = () => {
      hover.value = !hover.value;
      imgRef.value.style.width = '200px';
      imgRef.value.style.height = '200px';
      imgRef.value.src = staticImgSrc;
    }

    return {
      imgRef,
      hover,
      handleHoverOver,
      handleHoverLeave
    }
  },
})
</script>

<style>
.img-gif {
  width: 200px;
  height: 200px;
}
/* .img-gif:hover {
  transform: scale(1.1);
} */
</style>