<template>
  <div class="modal-overlay" @click.self="closeAll">
    <transition name="modal-swap" mode="out-in">
      <ProjectDetailsModalComp
        v-if="currentObject && currentObject.type === 'project'"
        :key="'project-' + currentObject.data.id"
        :project="currentObject.data"
        @close="closeAll"
        @open-skill="openSkill"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  initialObject: {
    type: Object,
    required: true,
    validator: (value) => ["skill", "project"].includes(value?.type),
  },
});

const emit = defineEmits(["close"]);

const currentObject = ref(props.initialObject);

const openSkill = () => {};

const closeAll = () => {
  emit("close");
};

// Handle external changes to initialObject
watch(
  () => props.initialObject,
  (newVal) => {
    currentObject.value = newVal;
  }
);
</script>

<script>
import ProjectDetailsModalComp from "./ProjectDetailsModal.vue";
export default {
  name: "DynamicModalComp",
  components: {
    ProjectDetailsModalComp,
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-swap-enter-active,
.modal-swap-leave-active {
  transition: all 0.3s ease;
}

.modal-swap-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.modal-swap-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
