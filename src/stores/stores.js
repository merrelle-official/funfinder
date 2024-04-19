import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useAuth = defineStore("auth", () => {
    const isAuth = ref(false)

    return { isAuth }
})

// export const useCounterStore = defineStore('counter', () => {
//   const counter = ref(0);
//   function increment(){
//     this.counter++;
//   }
//   return {counter, increment}
// })
