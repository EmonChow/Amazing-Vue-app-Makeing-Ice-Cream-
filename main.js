const  app = Vue.createApp({
   data: function(){
     return{
         variants: [
            {id:1, name:'strawberry', price:50},

            {id:2, name:'Vanilaa', price:50},
            {id:3, name:'chocolate', price:1550},
            {id:4, name:'orange', price:3550},
            {id:5, name:'lemon', price:50}
         ],

         cart: [],
         showModel:false
     }
   },

      methods: {
        
        addToCart(variantId){
         this.cart.push(this.variants.find(variant=> variant.id ===variantId));
      },
    
      removeFromCart(variantId){
        let position = this.cart.findIndex(variant=> variant.id ===variantId);


        this.cart.splice(position, 1)
     },
     toggleModel(){
        this.showModel = !this.showModel
     },
     clearCart(){
        this.cart = [];
     
     }
       
     
    
        
    },

    computed: {
           total(){
             return this.cart.reduce((t, variant)=> t+variant.price , 0);
                
             
           }


    }
     

})