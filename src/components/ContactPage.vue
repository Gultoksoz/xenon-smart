
<template>
    <v-container fluid >
        <v-row class="d-flex header mt-4">
            <v-col cols="6" class="d-flex flex-column align-start justify-start">
                <strong class="big-text ">İletişim</strong>
            </v-col >
            <v-divider  :thickness="2"></v-divider>
        </v-row>
        <v-row >

          
          <v-col cols="12" class="mx-0 my-o px-0 py-0 position" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3006.0412900578685!2d28.9868288!3d41.1117893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab54b7efb98d5%3A0xac34d0462f5f7c92!2sBili%C5%9Fim%20Vadisi%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1700563845234!5m2!1str!2str" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
          
          <v-col cols="5"   class="d-flex card_form">
            <v-col cols="12"  variant="elevated" class="py-0">
              <v-card class="rounded-xl px-4 py-4 card_form">

              <v-card-title class="text-color">GERİ BİLDİRİM FORMU</v-card-title> 
              <v-card-text>

              <v-form>
                <v-text-field label="İsim" variant="underlined">

                </v-text-field>
                <v-text-field label="E-Posta" variant="underlined">
                  
                </v-text-field>
                <v-text-field label="Telefon" variant="underlined">
                  
                </v-text-field>
                <v-text-field label="Mesaj" variant="underlined">
                  
                </v-text-field>
              </v-form>
            </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" rounded="xl" class="button">Gönder</v-btn>
              </v-card-actions>

            </v-card>

            </v-col>
          </v-col>

          
        </v-row>

        <v-row class="main mb-4">
          <v-col cols="12" sm="6" md="3">
            <strong>HQ </strong>
            <p>Ayazağa Mah. Kemerburgaz Cad. Vadi İstanbul Park Sitesi, 7A Blok  Kat:12 No:47 Sarıyer/İstanbul
            </p>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <strong>R&D</strong>
            <p>Muallimköy Mah. Deniz Cad. No:143/5 A1 Blok K:11 No:84 
Gebze, Kocaeli Türkiye</p>
          </v-col>
          
          <v-col cols="12" sm="6" md="3">
            <strong>Telefon</strong>
            <p>+90 (850) 303 46 66</p>
          </v-col>
          
          <v-col cols="12" sm="6" md="3">
            <strong>E-Posta</strong>
            <p>info@xenonsmart.com</p>
          </v-col>
        </v-row>
  
  
 
   </v-container>
 </template>
   
 <script >
 
 export default {
   data() {
     return {
      
      
     };
   },

   methods: {
    redirectToLink() {
      // Tıklanabilir öğeye tıklandığında yönlendirme işlemi
      window.location.href = 'https://maps.app.goo.gl/ZUURzmYDmWYzUbsT6';
    },
   
  },
 };
     
 </script>
 <style scoped>
 .header{
  padding: 10em 6em 0em 9em;
  }

  /* .card_form {
    
    right: 50px;
    top: 50px;
  } */

  @media screen and (max-width: 600px) {
  .position{
    max-width: 1100px;
 }

 .card_form {
  max-width: 500px;
 
}
}

@media screen and (min-width: 600px) {
  .position{
    position: absolute;
    max-width: 1100px;
 }
 .card_form {
    
    left: 350px;
  }
}

@media screen and (min-width: 960px) {
  .position{
    position: absolute;
    max-width: 1100px;
 }
 .card_form {
    
    left: 550px;
  }
}

  .small-text{
    font-size: 1em;
    color: black;
  }
 .big-text{
    font-size: 2em;
 }

 .background-map{
  background-image: url('@/assets/map.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 1000px;
  height: 250px;
  margin-top: 2em;
 }


 .text-color{
  color: gray;
 font-size: 1em;
 }
 .button{
  font-weight: 600;
 }
 </style>
