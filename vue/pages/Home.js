export default {
    inheritAttrs: false,
    template: `
    <div class="bg-green-200 w-full h-full min-h-screen" >
    <h1 class="bg-red-200 my-5 mx-1 ">Test Home 123</h1> 
      <div class="w-full bg-blue-200 items-center align-center">
        <span class="bg-yellow-300 w-full text-center">{{uuid}}</span>
      </div>
    </div>
    `,
    mixins: [],
    props:["value"],
    data() {
      return {
          theme: 'AdminLte',
          name: 'Home',
          uuid: '',
      };
    },
    created() {
      console.log( this.name + 'component is created');
      this.uuid ='idx'+Math.random().toString(36).slice(-6);
    },
    methods: {
       updateValue(value){
         this.$emit('input',value)
       }
    },
    computed: {},
    mounted() {},
    components:{}
};