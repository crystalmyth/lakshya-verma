import FullPage from './FullPage'

const options = JSON.parse(`{}`)

export default (app) => {
  app.component('FullPage', {
    extends: FullPage,
    props: {
      _customOptions: {
        type: Object,
        default: () => ({...options})
      }
    }
  })
}
