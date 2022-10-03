export { default as BottomSection } from '../../components/BottomSection.vue'
export { default as CompanySection } from '../../components/CompanySection.vue'
export { default as ContactSection } from '../../components/ContactSection.vue'
export { default as ExperienceSection } from '../../components/ExperienceSection.vue'
export { default as FeaturedSection } from '../../components/FeaturedSection.vue'
export { default as HeroSection } from '../../components/HeroSection.vue'
export { default as QuerySection } from '../../components/QuerySection.vue'
export { default as ServiceSection } from '../../components/ServiceSection.vue'
export { default as IncludeNavbar } from '../../components/include/Navbar.vue'
export { default as PartialLines } from '../../components/partial/Lines.vue'
export { default as PartialThankYou } from '../../components/partial/ThankYou.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
