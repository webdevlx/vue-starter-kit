<template>
  <div class="fixed inset-0 h-screen pt-14 lg:pt-16 lg:pl-16 overflow-y-auto">
    <div class="w-full min-h-full flex items-center">
      <div
        class="w-full lg:w-96 h-full mx-auto lg:shadow-lg lg:shadow-neutral-200 dark:lg:shadow-neutral-800 lg:rounded-lg overflow-y-auto"
      >
        <div
          class="p-4 pb-24 lg:p-12 lg:shadow-inner lg:shadow-neutral-200 dark:lg:shadow-neutral-800"
        >
          <div class="pb-8 flex justify-center">
            <svg
              class="w-16 h-16"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="monkey">
                <g id="main">
                  <path
                    id="Vector"
                    d="M53.7 41.2C58.284 41.2 62 37.5287 62 33C62 28.4713 58.284 24.8 53.7 24.8C49.116 24.8 45.4 28.4713 45.4 33C45.4 37.5287 49.116 41.2 53.7 41.2Z"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_2"
                    d="M53.7 38.4C56.6823 38.4 59.1 35.9823 59.1 33C59.1 30.0176 56.6823 27.6 53.7 27.6C50.7177 27.6 48.3 30.0176 48.3 33C48.3 35.9823 50.7177 38.4 53.7 38.4Z"
                    fill="#E0AC7E"
                  />
                  <path
                    id="Vector_3"
                    d="M10.2 41.2C14.7287 41.2 18.4 37.5287 18.4 33C18.4 28.4713 14.7287 24.8 10.2 24.8C5.67126 24.8 2 28.4713 2 33C2 37.5287 5.67126 41.2 10.2 41.2Z"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_4"
                    d="M10.2 38.4C13.1823 38.4 15.6 35.9823 15.6 33C15.6 30.0176 13.1823 27.6 10.2 27.6C7.21765 27.6 4.79999 30.0176 4.79999 33C4.79999 35.9823 7.21765 38.4 10.2 38.4Z"
                    fill="#E0AC7E"
                  />
                  <path
                    id="Vector_5"
                    d="M43.4 10.8C44.5 10.2 45.3 9.89998 45.3 9.89998C42.1 8.79998 39.3 8.09998 36.8 7.79998C38.1 6.79998 38.9 6.49998 38.9 6.49998C18.5 3.59998 8.80002 15.5 8.80002 26H55.2C54.5 18.6 50.4 13.6 43.4 10.8"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_6"
                    d="M55.3 27.6C55.3 17.9 44.9 10 32 10C19.1 10 8.70001 17.9 8.70001 27.6C8.70001 29.9 9.30001 32 10.3 34C9.30001 36 8.70001 38.2 8.70001 40.4C8.70001 50.1 19.1 58 32 58C44.9 58 55.3 50.1 55.3 40.4C55.3 38.1 54.7 36 53.7 34C54.7 32 55.3 29.8 55.3 27.6Z"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_7"
                    d="M52 28.2C52 11.3 32 22.1 32 22.1C32 22.1 12 11.3 12 28.2C12 32.9 14.9 37.2 19.5 39.9C18.2 41.6 17.4 43.5 17.4 45.6C17.4 51.7 24 56.6 32.1 56.6C40.2 56.6 46.8 51.7 46.8 45.6C46.8 43.5 46 41.6 44.7 39.9C49.1 37.2 52 32.9 52 28.2"
                    fill="#E0AC7E"
                  />
                </g>
                <g id="mouse-normal" v-if="normal">
                  <path
                    id="Vector_8"
                    d="M41.8 44.5C43.2 45.7 38.9 51.4 32 51.5C25.1 51.5 20.7 45.7 22.2 44.5C22.6 44.2 27.4 45.4 32 45.4C36.7 45.4 41.5 44.2 41.8 44.5Z"
                    fill="#3B302A"
                  />
                </g>
                <g id="mouse-eye-off" v-if="eyeOff">
                  <path
                    id="Vector_9"
                    d="M37.7407 50.6007C40.1286 49.9116 41.7292 48.1916 41.3158 46.7589C40.9023 45.3262 38.6315 44.7233 36.2436 45.4124C33.8558 46.1014 32.2552 47.8214 32.6686 49.2541C33.082 50.6868 35.3529 51.2897 37.7407 50.6007Z"
                    fill="#3B302A"
                  />
                </g>
                <g id="nose">
                  <path
                    id="Vector_10"
                    d="M35.1 38.7C35.1 39.8 34.7 40.8 34.1 40.8C33.5 40.8 33.1 39.9 33.1 38.7C33.1 37.6 33.5 36.6 34.1 36.6C34.7 36.7 35.1 37.6 35.1 38.7ZM30.9 38.7C30.9 39.8 30.5 40.8 29.9 40.8C29.3 40.8 28.9 39.9 28.9 38.7C28.9 37.6 29.3 36.6 29.9 36.6C30.4 36.7 30.9 37.6 30.9 38.7Z"
                    fill="#3B302A"
                  />
                </g>
                <g id="eyes-normal-eye-on">
                  <path
                    id="Vector_11"
                    d="M40.7 36.2C42.633 36.2 44.2 34.1853 44.2 31.7C44.2 29.2147 42.633 27.2 40.7 27.2C38.767 27.2 37.2 29.2147 37.2 31.7C37.2 34.1853 38.767 36.2 40.7 36.2Z"
                    fill="#3B302A"
                  />
                  <path
                    id="Vector_12"
                    d="M23.3 36.2C25.233 36.2 26.8 34.1853 26.8 31.7C26.8 29.2147 25.233 27.2 23.3 27.2C21.367 27.2 19.8 29.2147 19.8 31.7C19.8 34.1853 21.367 36.2 23.3 36.2Z"
                    fill="#3B302A"
                  />
                </g>
                <g id="hands-eye-off" v-if="eyeOff">
                  <path
                    id="Vector_13"
                    d="M9.3 32.6L2 62H13.9C12.3 54.3 17.9 41 17.9 41L9.3 32.6V32.6Z"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_14"
                    d="M15.7 24.9C15.7 24.9 20.6 20.4 25.2 21C27.5 21.3 18.1 28.6 18.1 28.6C18.1 28.6 27.8 20.4 29.8 23C31.6 25.3 20.9 32.8 20.9 32.8C20.9 32.8 30.9 24.7 30.5 28.2C30.2 32 22.6 41 18 42C11.4 43.3 6.2 39.1 9.7 24.5C11.5 17.1 13.2 25.3 15.7 24.9Z"
                    fill="#FFC29A"
                  />
                  <path
                    id="Vector_15"
                    d="M54.7 32.6L62 62H50.1C51.7 54.3 46.1 41 46.1 41L54.7 32.6Z"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_16"
                    d="M48.3 24.9C48.3 24.9 43.4 20.4 38.8 21C36.5 21.3 45.9 28.6 45.9 28.6C45.9 28.6 36.2 20.4 34.2 23C32.4 25.3 43.1 32.8 43.1 32.8C43.1 32.8 33.1 24.7 33.4 28.2C33.8 32 41.4 41 46 42C52.6 43.3 57.8 39.1 54.3 24.5C52.5 17.1 50.8 25.3 48.3 24.9Z"
                    fill="#FFC29A"
                  />
                </g>
                <g id="hands-eye-on" v-if="eyeOn">
                  <path
                    id="Vector_17"
                    d="M14.9 52L6.59998 62H19.5L23.5 58.4L14.9 52Z"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_18"
                    d="M20.2 43.3C20.2 43.3 25.1 38.8 29.7 39.4C32 39.7 22.6 47 22.6 47C22.6 47 32.3 38.8 34.3 41.4C36.1 43.7 25.4 51.2 25.4 51.2C25.4 51.2 35.4 43.1 35 46.6C34.7 50.5 27.1 59.5 22.5 60.4C15.9 61.7 10.7 57.5 14.2 42.9C16 35.6 17.8 43.7 20.2 43.3"
                    fill="#FFC29A"
                  />
                  <path
                    id="Vector_19"
                    d="M48.3 50.2L59 62H45L42.8 59.4L48.3 50.2Z"
                    fill="#89664C"
                  />
                  <path
                    id="Vector_20"
                    d="M38.2 43.7C38.2 43.7 32 41.4 27.9 43.7C25.9 44.8 37.3 48 37.3 48C37.3 48 25.2 44.1 24.3 47.2C23.5 50.1 36.3 52.9 36.3 52.9C36.3 52.9 24 49.2 25.6 52.4C27.4 55.8 37.8 61.3 42.4 60.4C49.2 59 40.6 43.1 38.2 43.7Z"
                    fill="#E0AC7E"
                  />
                  <path
                    id="Vector_21"
                    d="M39.6 43.7C39.6 43.7 33.4 41.4 29.3 43.7C27.3 44.8 38.7 48 38.7 48C38.7 48 26.6 44.1 25.7 47.2C24.9 50.1 37.7 52.9 37.7 52.9C37.7 52.9 25.4 49.2 27 52.4C28.8 55.8 39.2 61.3 43.8 60.4C50.4 59.1 53.6 53.2 44.8 41C40.5 34.9 41.9 43.1 39.6 43.7"
                    fill="#FFC29A"
                  />
                </g>
              </g>
            </svg>
          </div>
          <form class="" @submit.prevent="login()">
            <div class="relative mb-4">
              <Transition>
                <label
                  v-if="showEmailLabel"
                  class="absolute bg-brand text-xs left-2 rounded text-white py-0.5 px-2 -top-3"
                >
                  {{ $t("email") }}
                </label>
              </Transition>
              <input
                class="w-full bg-white dark:bg-neutral-900 p-2 rounded-md outline-none border border-b-4 border-neutral-400 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-700 focus:border-brand dark:focus:border-brand tracking-widest"
                type="email"
                :placeholder="$t('email')"
                v-model="email"
              />
            </div>
            <div class="relative flex items-center">
              <Transition>
                <label
                  v-if="showPasswordLabel"
                  class="absolute bg-brand text-xs left-2 rounded text-white py-0.5 px-2 -top-3"
                >
                  {{ $t("password") }}
                </label>
              </Transition>
              <input
                class="w-full bg-white dark:bg-neutral-900 p-2 rounded-md outline-none border border-b-4 border-neutral-400 dark:border-neutral-700 placeholder:text-neutral-400 dark:placeholder:text-neutral-700 focus:border-brand dark:focus:border-brand tracking-widest pr-8"
                :type="[showPassword ? 'text' : 'password']"
                :placeholder="$t('password')"
                v-model="password"
              />
              <div
                class="absolute right-2"
                @click="showPassword = !showPassword"
                v-if="password.length > 0"
              >
                <span v-if="showPassword">🙈</span>
                <span v-else>🙊</span>
              </div>
            </div>
            <button
              class="mt-8 w-full p-2 rounded-md outline-none text-brand border border-brand hover:text-white hover:bg-brand active:bg-brand/80 active:text-white font-semibold text-lg tracking-wide active:ring-1 ring-brand ring-offset-2 duration-300 ring-offset-white dark:ring-offset-neutral-900"
            >
              {{ $t("router.login") }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      normal: true,
      eyeOff: false,
      eyeOn: false,
    };
  },
  computed: {
    showEmailLabel() {
      return this.email.length > 0;
    },
    showPasswordLabel() {
      return this.password.length > 0;
    },
  },
  methods: {
    normalFunc() {
      this.normal = true;
      this.eyeOff = false;
      this.eyeOn = false;
    },
    eyeOffFunc() {
      this.normal = false;
      this.eyeOff = true;
      this.eyeOn = false;
    },
    eyeOnFunc() {
      this.normal = false;
      this.eyeOff = false;
      this.eyeOn = true;
    },
    login() {
      if (this.email !== "" && this.password !== "") {
        this.$router.push("/");
      } else {
        this.$router.push("/about");
      }
    },
  },
  watch: {
    password(newValue) {
      if (newValue == "") {
        this.normalFunc();
      } else if (newValue.length == 1) {
        if (this.showPassword) {
          this.eyeOnFunc();
        } else {
          this.eyeOffFunc();
        }
      }
    },
    showPassword(newValue) {
      if (newValue) {
        this.eyeOnFunc();
      } else {
        this.eyeOffFunc();
      }
    },
  },
};
</script>
