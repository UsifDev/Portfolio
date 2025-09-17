<template>
  <section class="portrait-contact" id="p_contact">
    <section class="contact" id="p_contact">
      <div class="certifcates-container">
        <h2 class="heading">Certifications</h2>
        <div class="contact-badges">
          <div class="badges-frame">
            <br />
            <div
              :data-iframe-width="200"
              :data-iframe-height="250"
              :data-share-badge-id="'3708ea5f-914b-42fc-8156-8514fe75ebe2'"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>

          <div
            class="badges-container"
            :class="`badges-count-${badgesData.length}`"
          >
            <a
              v-for="(badge, index) in badgesData"
              :key="index"
              :href="badge.link"
              target="_blank"
              class="badge"
              :title="badge.title || 'View certification'"
            >
              <img :src="badge.image.path" :alt="badge.image.alt" />
            </a>
          </div>
        </div>
      </div>
      <div class="contact-text">
        <h2>Contact</h2>
        <h4>Let's Work Together</h4>
        <div class="languages">
          <p>Languages: <strong>English | Arabic</strong> (mother tongue)</p>
        </div>
        <div class="contact-list">
          <li>
            <a href="https://maps.app.goo.gl/iLmijXHN27AoXfgK6"
              ><i class="bx bxs-map-pin"></i> : {{ contactData.address }}</a
            >
          </li>
          <li>
            <a :href="`mailto:` + contactData.email"
              ><i class="bx bxl-gmail"></i> : {{ contactData.email }}</a
            >
          </li>
          <li>
            <a href="https://wa.me/905388540195"
              ><i class="bx bxs-phone"></i> : {{ contactData.phone }}</a
            >
          </li>
          <br />
          <a :href="`mailto:` + contactData.email">
            <button class="btn">Let's connect</button>
          </a>
        </div>
        <div class="contact-icons">
          <template
            v-for="social in contactData.socialLinks"
            :key="social.icon"
          >
            <a :href="social.link" target="_blank"
              ><i :class="social.icon"></i
            ></a>
          </template>
        </div>
      </div>
    </section>
  </section>
  <section class="contact" id="contact">
    <div class="contact-text">
      <h2>Contact</h2>
      <h4>Let's Work Together</h4>
      <div class="languages">
        <p>Languages: <strong>English | Arabic</strong> (mother tongue)</p>
      </div>
      <div class="contact-list">
        <li>
          <a href="https://maps.app.goo.gl/iLmijXHN27AoXfgK6"
            ><i class="bx bxs-map-pin"></i> : {{ contactData.address }}</a
          >
        </li>
        <li>
          <a :href="`mailto:` + contactData.email"
            ><i class="bx bxl-gmail"></i> : {{ contactData.email }}</a
          >
        </li>
        <li>
          <a href="https://wa.me/905388540195"
            ><i class="bx bxs-phone"></i> : {{ contactData.phone }}</a
          >
        </li>
        <br />
        <a :href="`mailto:` + contactData.email">
          <button class="btn">Let's connect</button>
        </a>
      </div>
      <div class="contact-icons">
        <template v-for="social in contactData.socialLinks" :key="social.icon">
          <a :href="social.link" target="_blank"
            ><i :class="social.icon"></i
          ></a>
        </template>
      </div>
    </div>
    <div class="certifcates-container">
      <h2 class="heading">Certifications</h2>
      <div class="contact-badges">
        <div class="badges-frame">
          <br />
          <div
            :data-iframe-width="200"
            :data-iframe-height="250"
            :data-share-badge-id="'3708ea5f-914b-42fc-8156-8514fe75ebe2'"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </div>

        <div
          class="badges-container"
          :class="`badges-count-${badgesData.length}`"
        >
          <a
            v-for="(badge, index) in badgesData"
            :key="index"
            :href="badge.link"
            target="_blank"
            class="badge"
            :title="badge.title || 'View certification'"
          >
            <img :src="badge.image.path" :alt="badge.image.alt" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { contactData, badgesData } from "@/assets/data.js";

export default {
  data() {
    return { contactData, badgesData };
  },
  mounted() {
    this.loadCredlyScript();
  },
  methods: {
    loadCredlyScript() {
      // Check if script is already loaded
      if (
        document.querySelector(
          'script[src="//cdn.credly.com/assets/utilities/embed.js"]'
        )
      ) {
        return;
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      document.body.appendChild(script);
    },
  },
  name: "ContactComp",
};
</script>

<style scoped>
.portrait-contact {
  display: none;
}

.contact-badges {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 180px;
  height: 100%;
  width: 100%;
}

.badges-frame {
  flex: 2 1 0;
  border-radius: 30px 0 0 30px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 1;
  padding: 12px 32px 12px 32px;
  min-height: 180px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.badges-container {
  flex: 1 1 0;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  background: var(--main-color);
  padding: 24px 16px;
  border-radius: 0 30px 30px 0px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-height: 180px;
  min-width: 120px;
  max-width: 320px;
  box-sizing: border-box;
}

/* Responsive layouts */
.badges-count-1 {
  grid-template-columns: 1fr;
  min-width: 180px;
}
.badges-count-2 {
  grid-template-columns: repeat(2, 1fr);
}
.badges-count-3 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.badges-count-3 .badge:first-child {
  grid-column: 1 / span 2;
  justify-self: center;
}
.badges-count-4 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.badge {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  margin: 0 4px;
}

.badge:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.badge img {
  max-width: 90%;
  max-height: 90%;
  object-fit: fill;
  transition: all 0.3s ease;
}

.badge:hover img {
  transform: scale(1.05);
}

.badge-hover {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  background: rgba(110, 72, 170, 0.9);
  color: white;
  text-align: center;
  padding: 5px;
  transition: all 0.3s ease;
}

.badge:hover .badge-hover {
  bottom: 0;
}

.contact {
  background: var(--bg-color);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 3rem;
  padding-top: 70px;
  padding-bottom: 70px;
}

.contact-list {
  margin-bottom: 3rem;
}

.contact-list i {
  color: var(--main-color);
}

.contact-list li {
  margin-bottom: 10px;
  display: block;
}

.contact-list li a {
  display: block;
  color: var(--second-color);
  font-weight: 700;
  transition: all 0.4s ease;
}

.contact-text h4 {
  margin: 15px 0;
  color: var(--main-color);
}

.contact-text p {
  color: var(--second-color);
  margin-bottom: 2rem;
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

.heading {
  align-self: center;
  justify-self: center;

  text-align: center;
  margin-bottom: 2.5rem;
  color: white;
  position: relative;
  padding-bottom: 1rem;
}

.heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--accent-color);
}

.certifcates-container {
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 600px) and (orientation: portrait) {
  .portrait-contact {
    display: contents;
  }

  #contact {
    display: none;
  }

  .contact {
    background: var(--bg-color);
    display: list-item;
    align-items: center;
    gap: 3rem;
    padding-top: 40px;
    padding-bottom: 50px;
  }

  .contact-text {
    padding-top: 50px;
  }

  .certifcates-container {
    box-sizing: border-box;
    padding: 0 0.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: none;
    transform: none;
  }

  .badges-frame {
    padding-left: 15px;
    padding-right: 15px;
    min-width: unset;
  }

  .badges-container {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: var(--main-color);
    padding: 0.5rem;
    border-radius: 8px;
    box-sizing: border-box;
    max-width: 100vw;
    min-width: unset;
  }

  .badge {
    width: 80px;
    height: 90px;
    padding: 6px;
    margin: 0 auto;
  }

  .badge img {
    max-width: 70px;
    max-height: 70px;
  }
}

@media screen and (orientation: landscape) and (max-width: 900px) {
  .certifcates-container {
    box-sizing: border-box;
    padding: 0.5rem;
    margin: 0 auto;
    max-height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: none;
  }
  .contact-badges {
    max-height: 50vh;
    transform: none;
    width: 100%;
    gap: 1rem;
  }
  .badges-frame,
  .badges-container {
    min-height: 80px;
    padding: 1rem;
    gap: 0.5rem;
  }
  .badge {
    width: 60px;
    height: 60px;
    padding: 0px;
  }
  .badge img {
    max-width: 50px;
    max-height: 50px;
  }
}
</style>
