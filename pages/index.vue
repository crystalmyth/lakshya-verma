<template>
  <div>
    <Navbar />
    <hero-section />
    <service-section />
    <featured-section />
    <experience-section />
    <company-section />
    <contact-section @changePopup="PopupChange($event)" :popup="popup" />
    <bottom-section />
    <query-section :popup="popup" @changePopup="PopupChange($event)" />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '@/components/include/Navbar'
import HeroSection from '@/components/HeroSection'
import ServiceSection from '@/components/ServiceSection'
import FeaturedSection from '~/components/FeaturedSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import CompanySection from '~/components/CompanySection.vue'
import ContactSection from '~/components/ContactSection.vue'
import BottomSection from '~/components/BottomSection.vue'
import QuerySection from '~/components/QuerySection.vue'
export default {
  name: 'IndexPage',
  components: {
    Navbar,
    'hero-section': HeroSection,
    'service-section': ServiceSection,
    'featured-section': FeaturedSection,
    'experience-section': ExperienceSection,
    'company-section': CompanySection,
    'contact-section': ContactSection,
    'bottom-section': BottomSection,
    'query-section': QuerySection,
  },
  data() {
    return {
      popup: false,
    }
  },
  mounted() {
    AOS.init()
  },
  methods: {
    PopupChange(e) {
      this.popup = e
    },
  },
}
</script>