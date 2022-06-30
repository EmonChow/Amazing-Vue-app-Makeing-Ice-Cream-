app.component("order-form",{


    props:{
        cart:{
          type:Array,
          required:true
        },
        total:{
            type:Number,
            required:true
        }
     },



    template:
    /*html*/
    `<div>
    
    
     <div id="modal">
    <div class="backdrop" @click="hideOrderForm"></div>
    <div class="modalBody">
    <div class="formContainer" id="orderForm">
        <h1>Complete the form below and hit submit</h1>
        <form class="orderForm" @submit.prevent="onSubmit">
        <ul>
            <li>
            <input
                type="text"
               v-model="name"
                class="fieldStyle fieldSplit alignLeft"
                placeholder="Name"
            />
            <input
                type="text"
                v-model="phone"
                class="fieldStyle fieldSplit alignRight"
                placeholder="Phone no."
            />
            </li>
            <li>
            <input
                type="hidden"
                v-model.number="total"
                class="fieldStyle fieldSplit alignRight"
            />
            </li>
            <li>
            <textarea
            v-model="address"
                class="fieldStyle"
                placeholder="Address"
            ></textarea>
            </li>
            <li>
            <input type="submit" value="Submit" />
            </li>
        </ul>
        </form>
    </div>
    </div>
</div> 
    
    
    
    </div>`,

    data(){
        return{
            name: '',
            phone: '',
            address:''
        }
    },

    methods:{
        
       hideOrderForm(){
          this.$emit("order-form-hide");
       },
       clearCart(){
        this.$emit("clear-cart");
       },
     
       onSubmit(){
         let submitDetails = {
            name:this.name,
            phone:this.name,
            address:this.name,
            total:this.total,
         }
        
         console.log(submitDetails);
         this.hideOrderForm();
          this.clearCart();
       }


    },
   
    

},






)