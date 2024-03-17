
const {createApp} = Vue
createApp ({
  data(){

    return{

      images:[
        
        {
          img: 'img/01.webp',
          title: 'Spider-man ',
          text: 'lorem gaerfshtwsgsy5t',
        },
        {
          img: 'img/02.webp',
          title: 'Spider-man ',
          text: 'lorem gaerfshtwsgsy5t',
        },
        {
          img: 'img/03.webp',
          title: 'Spider-man ',
          text: 'lorem gaerfshtwsgsy5t',
        },
        {
          img: 'img/04.webp',
          title: 'Spider-man ',
          text: 'lorem gaerfshtwsgsy5t',
        },
        {
          img: 'img/05.webp',
          title: 'Spider-man ',
          text: 'lorem gaerfshtwsgsy5t',
        }
        
      ],

      counter: 0,


    }
  },

  methods:{
    sliderActive(isNext){
      
      isNext ? this.counter++ : this.counter--;

      // controllo della validita del counter

      if(this.counter === this.images.length ){
        this.counter = 0
      }else if(this.counter < 0){
        this.counter = this.images.length - 1;
      }
    }



  },

  mounted(){

    this.sliderActive()



  }
}).mount('#app')

