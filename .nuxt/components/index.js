export const BottomSection = () => import('../../components/BottomSection.vue' /* webpackChunkName: "components/bottom-section" */).then(c => wrapFunctional(c.default || c))
export const CompanySection = () => import('../../components/CompanySection.vue' /* webpackChunkName: "components/company-section" */).then(c => wrapFunctional(c.default || c))
export const ContactSection = () => import('../../components/ContactSection.vue' /* webpackChunkName: "components/contact-section" */).then(c => wrapFunctional(c.default || c))
export const ExperienceSection = () => import('../../components/ExperienceSection.vue' /* webpackChunkName: "components/experience-section" */).then(c => wrapFunctional(c.default || c))
export const FeaturedSection = () => import('../../components/FeaturedSection.vue' /* webpackChunkName: "components/featured-section" */).then(c => wrapFunctional(c.default || c))
export const HeroSection = () => import('../../components/HeroSection.vue' /* webpackChunkName: "components/hero-section" */).then(c => wrapFunctional(c.default || c))
export const QuerySection = () => import('../../components/QuerySection.vue' /* webpackChunkName: "components/query-section" */).then(c => wrapFunctional(c.default || c))
export const ServiceSection = () => import('../../components/ServiceSection.vue' /* webpackChunkName: "components/service-section" */).then(c => wrapFunctional(c.default || c))
export const IncludeNavbar = () => import('../../components/include/Navbar.vue' /* webpackChunkName: "components/include-navbar" */).then(c => wrapFunctional(c.default || c))
export const PartialLines = () => import('../../components/partial/Lines.vue' /* webpackChunkName: "components/partial-lines" */).then(c => wrapFunctional(c.default || c))
export const PartialThankYou = () => import('../../components/partial/ThankYou.vue' /* webpackChunkName: "components/partial-thank-you" */).then(c => wrapFunctional(c.default || c))

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
