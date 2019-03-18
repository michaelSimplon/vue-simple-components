Vue.component('message-area',{
    template:`
    <div>
        entrez un message <input v-model="newMessage" placeholder="votre message">
        <button @click="sendMessage()" class="btn btn-primary">Envoyer</button>
    </div>
    `,
    data:function (){
        return {
            newMessage:""
        }
    },
    methods:{
        sendMessage: function () {
            this.$emit("message-envoye", this.newMessage)
        }
    }
})

Vue.component('tableau',{
    template:`
    <div>
        <h2>messages de {{auteur}}</h2>
      <table id="tabDesPosts" class="table table-striped">
        <thead>
          <tr>
            <th>Messages</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="message in messages">
            <td v-for="contenu in message">
                {{contenu}}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
    `,
    props:['messages', 'auteur', 'titres']
})


var app= new Vue({
    el:'#app',
    data: {
        identite:{
            nom:"Durand",
            prenom:"fernand"
        },
        messages:[{
            contenu:"Un message simple"
        }]
    },
    computed:{
        auteur: function(){
            return this.identite.prenom + ' ' + this.identite.nom;
        }
    },
    methods:{
        majMessages: function (nouveauMessage) {
            var message = {contenu: nouveauMessage}
            this.messages.push(message)
        }
    }
});
