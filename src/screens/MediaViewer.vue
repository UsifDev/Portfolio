<template>
  <div class="media-viewer-overlay" @click.self="closeViewer">
    <button class="close-button" @click="closeViewer">×</button>

    <div class="media-viewer-container">
      <button class="nav-arrow left" @click.stop="prevImage">❮</button>

      <div class="media-content">
        <img
          :src="currentMedia.url"
          :alt="currentMedia.caption"
          class="viewer-image"
        />
        <p v-if="currentMedia.caption" class="media-caption">
          {{ currentMedia.caption }}
        </p>
      </div>

      <button class="nav-arrow right" @click.stop="nextImage">❯</button>
    </div>

    <div class="image-counter">{{ currentIndex + 1 }} / {{ media.length }}</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  media: {
    type: Array,
    required: true,
    validator: (media) => media.every((m) => m.url),
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["close"]);

const currentIndex = ref(props.initialIndex);

const currentMedia = computed(() => {
  return props.media[currentIndex.value] || props.media[0];
});

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.media.length;
};

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.media.length) % props.media.length;
};

const closeViewer = () => {
  emit("close");
};

// Keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeViewer();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.close-button {
  position: absolute;
  top: 10%;
  right: 10%;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1002;
}

.media-viewer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 1200px;
  position: relative;
}

.nav-arrow {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1002;
}

.nav-arrow:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.left {
  margin-right: 1rem;
}

.right {
  margin-left: 1rem;
}

.media-content {
  max-width: calc(100% - 100px);
  text-align: center;
}

.viewer-image {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.media-caption {
  color: white;
  margin-top: 1rem;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.image-counter {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

@media screen and (orientation: landscape) and (max-width: 900px) {
  .image-counter {
    bottom: 0;
  }
}

@media screen and (orientation: portrait) {
  .image-counter {
    bottom: 10%;
  }
}
</style>
