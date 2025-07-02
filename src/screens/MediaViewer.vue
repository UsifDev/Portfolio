<!-- MediaViewer.vue -->
<template>
  <div class="media-viewer-overlay" @click.self="closeViewer">
    <div class="media-viewer">
      <button class="close-button" @click="closeViewer">×</button>
      <img
        :src="media.url"
        :alt="media.caption || 'Project media'"
        class="viewer-image"
      />
      <p v-if="media.caption" class="media-caption">{{ media.caption }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  media: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeViewer = () => {
  emit("close");
};
</script>

<script>
export default {
  name: "MediaViewerComp",
};
</script>

<style scoped>
.media-viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: 1rem;
}

.media-viewer {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.viewer-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
}

.media-caption {
  color: white;
  text-align: center;
  margin-top: 1rem;
}
</style>
