<script>
export default {
  name: "Skill",

  props: {
    icon: String,
    iconColor: String,
    heading: String,
    para: String,
    color: String,
  },
};
</script>

<template>
  <div
    class="skill"
    :style="{ background: color }"
    v-motion-slide-visible-bottom
  >
    <div class="icons">
      <font-awesome-icon
        :icon="['fab', icon]"
        class="fa-3x"
        :style="{ color: iconColor }"
      />
      <!-- <font-awesome-icon :icon="['fab', 'css3']" /> -->
    </div>
    <h3 class="heading">{{ heading }}</h3>
    <p>{{ para }}</p>
  </div>
</template>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  /* background-color: #adf992; */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  cursor: pointer;
}

.skill:hover {
  transform: translateY(-0.5rem);
}

.icons {
  display: flex;
  gap: 1rem;
}

p {
  font-size: 2rem;
}

h3 {
  margin-top: 2rem;
}
</style>
