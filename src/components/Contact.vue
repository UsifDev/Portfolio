<template>
  <section class="contact" id="contact">
    <div class="contact-text">
      <h2>Contact Me</h2>
      <h4>Let's Work Together</h4>
      <p>
        I will Help you in your next Project, Contact me through details given
        below.
      </p>
      <div class="contact-list">
        <li>
          <a href="#">{{ portfolioData.contact.address }}</a>
        </li>
        <li>
          <a href="#">{{ portfolioData.contact.email }}</a>
        </li>
        <li>
          <a href="#">{{ portfolioData.contact.phone }}</a>
        </li>
        <a href="mailto: {{ portfolioData.contact.email }}">
          <button class="btn">Let's Chat</button>
        </a>
      </div>
      <div class="contact-icons">
        <template
          v-for="social in portfolioData.contact.socialLinks"
          :key="social.icon"
        >
          <a :href="social.link" target="_blank"
            ><i :class="social.icon"></i
          ></a>
        </template>
      </div>
      <div class="languages">
        <h3>Languages</h3>
        <ul>
          <li v-for="(lang, i) in portfolioData.contact.languages" :key="i">
            <strong>{{ lang.language }}</strong
            >: {{ lang.proficiency }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { portfolioData } from "@/assets/data.js";

export default {
  data() {
    return { portfolioData };
  },
  name: "ContactComp",
};
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 3rem;
}

.contact-text h4 {
  margin: 15px 0;
  color: var(--main-color);
  font-size: 20px;
  font-weight: 600;
}

.contact-text h2 {
  font-size: var(--h2-font);
}

.contact-text p {
  color: var(--second-color);
  font-size: var(--p-font);
  line-height: 30px;
  margin-bottom: 2rem;
}

.contact-list {
  margin-bottom: 3rem;
}

.contact-list li {
  margin-bottom: 10px;
  display: block;
}

.contact-list li a {
  display: block;
  color: var(--second-color);
  font-size: var(--p-font);
  font-weight: 600;
  transition: all 0.4s ease;
}

.contact-list li a:hover {
  transform: scale(1.01) translateY(-5px);
  color: var(--main-color);
}

.contact-icons i {
  height: 40px;
  width: 40px;
  background: #12141c;
  border-radius: 0.5rem;
  color: var(--main-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 10px;
  transition: all 0.4s ease;
}

.contact-icons i:hover {
  transform: scale(1.01) translateY(-5px);
  color: var(--text-color);
  background: var(--main-color);
}

.languages {
  margin-top: 2rem;
}

.languages h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.languages ul {
  list-style: none;
}

.languages ul li {
  margin-bottom: 10px;
  font-size: var(--p-font);
  color: var(--second-color);
}
</style>
