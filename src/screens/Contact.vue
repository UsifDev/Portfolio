<template>
  <section
    class="contact"
    :class="{ 'portrait-contact': isPortrait }"
    id="contact"
  >
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
    return {
      contactData,
      badgesData,
      isPortrait: false,
    };
  },
  mounted() {
    this.loadCredlyScript();
    this.checkOrientation();
    window.addEventListener("resize", this.checkOrientation);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkOrientation);
  },
  methods: {
    loadCredlyScript() {
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
    checkOrientation() {
      this.isPortrait = window.innerHeight > window.innerWidth;
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
  display: flex;
  gap: var(--gap, 24px);
  align-items: stretch;
  min-height: 180px;
  justify-content: center;
}

.badges-frame {
  border-radius: 30px 0 0 30px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 1;
  padding: 16px 32px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.badges-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: var(--gap, 16px);
  background: var(--main-color);
  padding: 16px 32px;
  border-radius: 0 30px 30px 0px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  align-items: center;
}
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
  align-items: center;
}
.badges-count-3 .badge:first-child {
  grid-column: 1 / span 2;
  justify-self: center;
  align-self: center;
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
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
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
  padding-top: 90px;
  padding-bottom: 90px;
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
  font-size: var(--p-font);
  font-weight: 700;
  transition: all 0.4s ease;
}

.contact-text h4 {
  margin: 15px 0;
  color: var(--main-color);
  font-weight: 600;
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
  width: 2.3em;
  height: 3px;
  background: var(--accent-color);
}

.certifcates-container {
  width: 100%;
  margin: 0 auto;
}

@media (orientation: portrait) and (max-width: 900px) {
  .contact {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding: 1.8rem 0.5rem 50px 0.5rem;
    align-items: center;
  }
  .certifcates-container {
    order: 1;
    width: 100%;
    margin: 0;
  }
  .contact-text {
    order: 2;
    width: 100%;
    padding-top: 32px;
    padding-left: 6vw !important;
    padding-right: 0;
  }

  .contact-badges {
    padding-left: 6vw !important;
  }

  .badges-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 0 8px 8px;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 2px;
    padding: 8px;
  }
  .badge {
    width: 70px;
    height: 70px;
    margin: 8px;
  }
  .certifcates-container {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  .badges-frame {
    padding: 8px 8px;
  }
  .badge img {
    max-width: 60px;
    max-height: 60px;
  }
}

@media (orientation: landscape) and (max-width: 1200px) {
  .contact {
    display: flex;
    flex-direction: row;
    padding-top: 0;
    padding-bottom: 3rem;
    gap: 10rem;
  }
  .contact-text {
    width: 100%;
    left: 0;
  }
  .badges-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 0 8px 8px;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 2px;
    padding: 8px;
  }
  .badge {
    width: 70px;
    height: 70px;
    margin: 8px;
  }
  .certifcates-container {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  .badges-frame {
    padding: 8px 8px;
  }
  .badge img {
    max-width: 60px;
    max-height: 60px;
  }
}
</style>
