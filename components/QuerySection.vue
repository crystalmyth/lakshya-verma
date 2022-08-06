<template>
  <div class="query-section section" :class="[popup ? '' : 'd-none']">
    <div class="container-fluid">
      <thank-you :display="display" />
      <form ref="form" class="row" @submit.prevent="checkForm">
        <i class="bx bx-x" @click="Close()"></i>
        <div class="col-sm-6">
          <div class="form-group">
            <input
              v-model="name"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.name.length }"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <input
              v-model="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors.email.length }"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="col-sm-12">
          <div class="form-group">
            <input
              v-model="subject"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.subject.length }"
              placeholder="Subject"
            />
          </div>
        </div>
        <div class="col-sm-12">
          <div class="form-group">
            <textarea
              v-model="message"
              class="form-control"
              :class="{ 'is-invalid': errors.message.length }"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div class="text-center">
            <button class="btn btn-primary">Contact Me</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import ThankYouVue from './partial/ThankYou.vue'
export default {
  props: {
    popup: Boolean,
  },
  components: {
    'thank-you': ThankYouVue,
  },
  data() {
    return {
      display: false,
      errors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      name: '',
      email: '',
      message: '',
      subject: '',
    }
  },
  mounted() {
    ;(function () {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init('4IkNR_VcYzrLhazwf')
    })()
  },
  methods: {
    Close() {
      this.$emit('changePopup', !this.popup)
    },
    checkForm: function (e) {
      if (this.email && this.name && this.subject && this.message) {
        this.sendEmail()
        return true
      }

      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }

      if (!this.name) {
        this.errors.name = 'Name required.'
      }
      if (!this.email) {
        this.errors.email = 'Email required.'
      }
      if (!this.subject) {
        this.errors.subject = 'Subject required.'
      }
      if (!this.message) {
        this.errors.message = 'Message required.'
      }

      e.preventDefault()
    },
    DisplayThanks() {
      this.display = true
      setTimeout(() => {
        this.display = false
      }, 3000)
    },
    sendEmail(e) {
      try {
        emailjs.send('service_i35fh9e', 'template_lu79f8t', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
        this.subject = ''
        this.DisplayThanks()
      } catch (error) {
        console.log({ error })
      }
    },
  },
}
</script>

<style lang="scss">
.query-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  .container-fluid {
    width: 50%;
    background-color: #fff;
    padding: 3rem;
    border-radius: 0.7rem;

    .row {
      padding: 1rem;
      .bx-x {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-size: 2rem;
        cursor: pointer;
      }

      .form-control {
        padding: 2rem 1rem;
        font-size: 1.4rem;
        margin-bottom: 2rem;
      }

      .btn {
        font-size: 1.6rem;
        padding: 1rem 2rem;
        border-radius: 3rem;
        background-color: #1f2044;
        text-transform: uppercase;
        border-color: #1f2044;
      }
    }
    .error {
      font-size: 0.7rem;
    }
  }
}
</style>