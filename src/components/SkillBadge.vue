<template>
  <button
    class="skill-badge"
    :class="{ highlighted, 'cursor-pointer': clickable }"
    @click="handleClick"
  >
    <span class="skill-name">{{ name }}</span>
    <span v-if="highlighted" class="highlight-indicator">★</span>
  </button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  highlighted: {
    type: Boolean,
    default: false,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  if (props.clickable) {
    emit("click", props.name);
  }
};
</script>

<script>
export default {
  name: "SkillBadgeComp",
};
</script>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  margin: 0.2rem;
  border-radius: 1rem;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  border: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.skill-badge:hover {
  transform: translateY(-2px);
}

.highlighted {
  background: linear-gradient(145deg, #646cff, #535bf2);
  color: white;
  box-shadow: 0 2px 8px rgba(100, 108, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.highlighted::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 45%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: rotate(30deg) translate(-30%, -30%);
  }
  100% {
    transform: rotate(30deg) translate(30%, 30%);
  }
}

.highlight-indicator {
  margin-left: 0.3rem;
  font-size: 0.8rem;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
