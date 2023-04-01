import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useMainStore = defineStore('account',{
  state:()=>{
    return {
      aaa:1,
      bbb:1,
      arr:[]
    }
  },
  getters: {
    bbb10(state){
      return state.bbb+10
    }
  },
  actions: {
    change(num:number){
      this.aaa += num
      this.bbb *= 2
      this.aaa.push(1)
      //this.$patch({})
      //this.$patch(state=>{})

    }
  }
})



