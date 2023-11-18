
<template>
    <v-container fluid >
        <v-row class="d-flex header">
            <v-col cols="6" class="d-flex flex-column align-start justify-start">
                <p class="small-text ">Xenon Smart</p>
                <strong class="big-text ">İletişim</strong>
            </v-col >
            <v-divider  :thickness="2"></v-divider>
        </v-row>
        <v-row class="d-flex main justify-space-around ml-1" >

          
          <v-col cols="8" md="8"  class="background-map " @click="redirectToLink" >
            <v-icon class="pin" > <img width="32" src="@/assets/pin.svg"/></v-icon>
          </v-col>
          
          <v-col cols="4" md="4" class="d-flex ">
            <v-spacer variant="elevated" class="card">
              <v-card-title class="text-color">GERİ BİLDİRİM FORMU</v-card-title>
              <v-form>
                <v-text-field label="İsim" variant="underlined">

                </v-text-field>
                <v-text-field label="E-Posta" variant="underlined">
                  
                </v-text-field>
                <v-text-field label="Telefon" variant="underlined">
                  
                </v-text-field>
                <v-text-field label="Mesaj" variant="underlined">
                  
                </v-text-field>
                <v-btn variant="outlined" rounded="xl" class="button">Gönder</v-btn>
              </v-form>
            </v-spacer>
          </v-col>
        </v-row>

        <v-row class="main mb-4">
          <v-col>
            <strong>HQ </strong>
            <p>Ayazağa Mah. Kemerburgaz Cad. Vadi İstanbul Park Sitesi, 7A Blok  Kat:12 No:47 Sarıyer/İstanbul
            </p>
          </v-col>

          <v-col>
            <strong>R&D</strong>
            <p>Muallimköy Mah. Deniz Cad. No:143/5 A1 Blok K:11 No:84 
Gebze, Kocaeli Türkiye</p>
          </v-col>
          
          <v-col>
            <strong>Telefon</strong>
            <p>+90 (850) 303 46 66</p>
          </v-col>
          
          <v-col>
            <strong>E-Posta</strong>
            <p>info@xenonsmart.com</p>
          </v-col>
        </v-row>
  
  
 
   </v-container>
 </template>
   
 <script >
 import router from '@/router/index.js'
 
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
.main{
    padding: 0em 6em 0em 9em;
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

 .pin{
  margin-top: 2em;
  margin-left: 5em;
 }
 .card{
  border-radius: 3em;
  padding: 0em 3em 2em 3em;
  

 }
 .text-color{
  color: gray;
 padding-left: 0em;
 font-size: 1em;
 }
 .button{
  font-weight: 600;
 }
 </style>
