<script>
import Skill from "./Skill.vue";
import Button from "./Button.vue";

export default {
  name: "SkillSection",
  components: {
    Skill,
    Button,
  },
};
</script>

<template>
  <div class="container glass" id="skills">
    <h3 class="heading">
      <font-awesome-icon
        :icon="['fas', 'user-gear']"
        :style="{ color: '#9e00f9', marginRight: '1rem' }"
      />
      Skilled In Technologies
    </h3>
    <div class="grid-cols-3">
      <Skill
        icon="html5"
        iconColor="orangered"
        heading="HTMl and CSS"
        para="Want to build a responsive website in HTML and CSS, here I am. I can create bueatiful
      design based on your content with custom CSS."
        color="#c092f9"
      />
      <Skill
        icon="square-js"
        iconColor="rgb(233, 233, 21)"
        heading="JavaScript"
        para="Want to build a dynamic website, here I am. I can create a fully flegde front-end dynamic website in JavaScript."
        color="#EB99AF"
      />
      <Skill
        icon="php"
        heading="PHP"
        iconColor="blue"
        para="Want to build a full-stack website in php, here I am. I can create a full-stack dynamic website in PHP."
        color="#C84ED4"
      />
      <Skill
        icon="react"
        heading="React.js"
        iconColor="skyblue"
        para="Want to build front-end for your website in react, here I am. I can create a fully dynamic front-end in react."
        color="#C84ED4"
      />

      <Skill
        icon="vuejs"
        heading="Vue.js"
        iconColor="#42ad74"
        para="Want to build front-end for your website in vue, here I am. I can create a fully dynamic front-end in vue."
        color="#c092f9"
      />
      <div class="talk">
        <font-awesome-icon
          :icon="['fas', 'person-circle-question']"
          class="fa-3x"
          :style="{ color: '#ee7d7d' }"
        />
        <h3 class="heading_sure">Not sure yet!</h3>
        <p>If you are not sure about your Project, let's talk about it ...</p>
        <Button title="Let's Talk" color="#fff" bgcolor="#3C2DE8BD" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-cols-3 {
  gap: 2rem;
}

.talk {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
}

.heading_sure {
  font-weight: 600;
  margin-bottom: 0;
  text-align: center;
}
p {
  font-size: 1.6rem;
  text-align: center;
}

h3 {
  margin-bottom: 4.8rem;
}

.before_enter {
  opacity: 0;
  transform: translateY(200px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
