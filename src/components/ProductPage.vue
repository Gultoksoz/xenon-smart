<template>
    <v-container fluid class="main" style="margin-top: 100px;">
      <v-carousel hide-delimiters>
  <v-carousel-item
  >
  <v-spacer class="main-text d-flex">
    <v-col cols="2" sm="1"></v-col>
    <v-col cols="9" sm="6" md="5" class="d-flex justify-end">
         <v-spacer variant="text" style="color: white;">
           <v-spacer class="d-flex flex-column " style="font-size: 28px;">
            <span class="font-weight-bold">Akıllı RGB Ampul</span>
            <span> ile yaşam alanınıza özel bir dokunuş ekleyin,</span>
          </v-spacer>
           <v-spacer class="mb-4 mt-2" style="font-size: 16px;">
            <span>
              Akıllı Ampul ile evinizi kişiselleştirin ve her anın keyfini çıkarın. İster dinlenirken ister parti yaparken, bu akıllı ampul sayesinde ortamınızı dilediğiniz gibi renklendirin!
            </span>
          </v-spacer>
          <v-spacer>
            
                  <v-img
                  max-width="260"
                  src="@/assets/google_home.svg"
                ></v-img>

             <v-col cols="4" sm="6" md="4">
             <v-btn class="main-button" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF">
               Özellikler
             </v-btn></v-col>
           </v-spacer>
         </v-spacer>
     </v-col>
     <v-col cols="0" sm="4" md="5" class="d-flex justify-center align-start">
       <v-img
         max-width="160"
         aspect-ratio="4/3"
         src="@/assets/lamp.svg"
       ></v-img>
     </v-col>
    <v-col cols="1"></v-col>

  </v-spacer>

  </v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
   <div class="pad">
   <v-row class="d-flex flex-column">
    <v-spacer class="text-center mt-6 mb-6">
       
      <h3 class="font-weight-bold" style="color: gray;">RGB Led Ampul </h3>
      
     </v-spacer>
   
 
   
     <v-spacer class="text-center mt-6 mb-6">
       <v-col cols="12" class="d-flex flex-column custom-text ">
         
         <p class="font-weight-bold" style="font-size: 1.5em;">Evinizi veya ofisinizi renklendirmenin ve atmosferinizi anında değiştirmenin mükemmel yolu! Bu akıllı ampul, kullanıcı dostu özellikleri ve geniş renk seçenekleriyle dikkat çekiyor.</p>
         <v-icon class="d-flex align-start justify-center about-icon"> <img src="@/assets/play_store.svg"/></v-icon>
       </v-col>
     </v-spacer>
   </v-row>
   
   <v-row class="d-flex flex-column">
     <v-card class="d-flex rgb-card" variant="tonal">
     
       <v-col cols="12" class="d-flex flex-column align-center justify-end">
         <v-card-title >RGB Led Ampul</v-card-title>
         <v-card-title class="rgb-text" >Parti modunda müzikle senkronize renk<br> değişimleriyle eğlenceli bir atmosfer yaratın.</v-card-title>
         <v-card-action>
             
             <v-btn  @click="" class="rgb-button mr-4" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF" href="https://shop.xenonsmart.com/">
               Satın al
             </v-btn>
             <v-btn class="rgb-button ml-4" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF">
               Daha fazla
             </v-btn>
           
           </v-card-action>
       </v-col>
     
   </v-card>
  </v-row>
   
   <v-card class=" parlaklik-card " style="background-color: #FAF6FF;" variant="tonal">
     <v-row>
 
       <v-col cols="6" class="d-flex">
           <v-img
             cover
             src="@/assets/parlaklik_background.png"
           ></v-img>
       </v-col>
       
       <v-col cols="6" class="d-flex flex-column">
         <v-spacer class="card-title">
             <span class="font-weight-bold">16 Milyon Renk Seçeneği</span>
           </v-spacer>
           <v-spacer class="card-text">
            <span>
            Geniş renk paleti sayesinde ampulünüzü istediğiniz her renge ayarlayabilirsiniz. Renk tekerleği ile kolayca favori renklerinizi seçebilirsiniz.
          </span>
          </v-spacer>
           
 
       </v-col>
       
     </v-row>
   </v-card>
 
 
   <v-card class="parlaklik-card" style="background-color: #FFF9F4 ;" variant="tonal">
     <v-row>
       <v-col cols="6" class="d-flex flex-column">
        <v-spacer class="card-title">
             <span class="font-weight-bold">Parlaklık Ayarı</span>
           </v-spacer>
           <v-spacer class="card-text ml-2">
            <span>
              Aydınlatma ihtiyacınıza uygun olarak ampulün parlaklığını artırabilir veya azaltabilirsiniz. Işığın yumuşaklığını ve yoğunluğunu kişisel tercihinize göre özelleştirebilirsiniz.
          </span>
          </v-spacer>
           
       </v-col>
       
        <v-col cols="6" class="d-flex">
           <v-img
             cover
             max-width="760"
             src="@/assets/xenonsmart-brightnes.gif"
           ></v-img>
      
       </v-col>
     </v-row>
   </v-card>

   <v-card class=" parlaklik-card " style="background-color: #F7FCFE ;" variant="tonal">
     <v-row>
 
       <v-col cols="6" class="d-flex">
           <v-img
             cover
             src="@/assets/phone.png"
           ></v-img>
       </v-col>
       
       <v-col cols="6" class="d-flex flex-column">
         <v-spacer class="card-title">
             <span class="font-weight-bold">Uzaktan Kontrol</span>
           </v-spacer>
           <v-spacer class="card-text">
            <span>
              Akıllı telefonunuz veya tabletiniz üzerinden ampulu uzaktan kontrol edebilirsiniz. Evinizde dolaşırken veya rahat bir koltuktan otururken ampulü açabilir, kapatabilir ve renkleri değiştirebilirsiniz.
          </span>
          </v-spacer>
           
 
       </v-col>
       
     </v-row>
   </v-card>


   <v-card class=" parlaklik-card" style="background-color: #FFF9F4  ;" variant="tonal">
     <v-row>
       <v-col cols="6" class="d-flex flex-column">
        <v-spacer class="card-title">
             <span class="font-weight-bold">Programlanabilir Zamanlayıcı</span>
           </v-spacer>
           <v-spacer class="card-text ml-2">
            <span>
              Ampulu belirli bir zamanda otomatik olarak açabilir veya kapatabilirsiniz. Zamanlayıcı özelliği ile güneş batışı efektleri oluşturabilir veya gece lambası olarak kullanabilirsiniz.
          </span>
          </v-spacer>
           
       </v-col>
       
        <v-col cols="6" class="d-flex">
           <v-img
             cover
             max-width="760"
             src="@/assets/Group 17.png"
           ></v-img>
      
       </v-col>
     </v-row>
   </v-card>
   
   <v-row class="d-flex flex-column">
    <v-spacer class="text-center mt-6 mb-6">
       
      <h3 class="font-weight-bold" style="color: gray;">RGB Led Ampul </h3>
      
     </v-spacer>
   
 
   
     <v-spacer class="text-center mt-6 mb-6">
       <v-col cols="12" class="d-flex flex-column custom-text ">
         
         <span class="font-weight-bold" style="font-size: 1.5em;">Google Home ve Alexa uyumluluğu ile evinizin aydınlatmasını tam anlamıyla akıllı hale getiriyor.  Ortamın atmosferini parmaklarınızın ucuyla yönetin!</span>
          <img class="mt-4" src="@/assets/Layer_1.png"/>
       </v-col>
     </v-spacer>
   </v-row>


   <v-card class=" parlaklik-card" variant="tonal">
     <v-row>
       <v-col cols="6" class="d-flex pr-0">
        <v-img
             cover
             max-width="760"
             src="@/assets/Group59.png"
           ></v-img>
           

       </v-col>
       
        <v-col cols="6" class="d-flex pl-0">
           <v-img
             cover
             max-width="760"
             src="@/assets/Group63.png"
           ></v-img>
      
       </v-col>
     </v-row>
   </v-card>

   <v-row class="d-flex flex-column">
    <v-spacer class="text-center mt-6 mb-6">
       
      <h3 class="font-weight-bold" style="color: gray;">RGB Led Ampul </h3>
      
     </v-spacer>
   
 
   
     <v-spacer class="text-center mt-6 mb-6">
       <v-col cols="12" class="d-flex flex-column custom-text ">
         
         <span class="font-weight-bold" style="font-size: 1.5em;">RGB Led Ampul ile evinizi kişiselleştirin, odalarınıza özel bir dokunuş ekleyin ve her anın keyfini çıkarın. İster dinlenirken ister parti yaparken, bu akıllı ampul sayesinde ortamınızı dilediğiniz gibi renklendirin!</span>
         <v-spacer class="card-action mt-4">
            <div >
            <v-btn size="x-large" density="compact" rounded="xl" variant="flat" color="#007AFF" href="https://shop.xenonsmart.com/">
              <strong> Satın Al </strong>
            </v-btn>
          </div>
          </v-spacer>
       </v-col>
     </v-spacer>
   </v-row>


</div>
 
   </v-container>
 </template>
   
 <script >
 
 export default {
   data() {
     return {
      
      button:""
     };
   },

   methods: {
   
  },
 };
     
 </script>
 
 <style scoped >
 

 .card-title{
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 16px;
  font-size: 32px;
  padding:8px;
}
.card-title div {
  width: 80%;
}

.card-title div span {
  font-weight: bold;
}
.card-text{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:20px;
  padding:2px;
}
.card-text div {
  width: 80%;
}

.card-action{
display:flex;
justify-content:center;
padding:4px;
}
.card-action div{
  width: 80%;
  margin-top:8px
}

 .custom-text{
   align-items :center;
   justify-content :center;
   text-align: center;
 }
 
 .pad{
    padding-left: 6em;
    padding-right: 6em;
 }
 
 .main-text{
   padding-top: 130px;
   background-image: url('@/assets/product_background.png');
   background-size: cover;
  background-repeat: no-repeat;
 }
 
 .rgb-card{
  background-image: url('@/assets/rgb_background.png');
   background-size: cover;
  background-repeat: no-repeat;
  color: white;
  border-radius: 33px;
   margin: 3.1em 6.25em 3.1em 6.25em;
   padding-top: 3.1em;
   padding-bottom: 3.1em;
   height:45em ;
 }
 .rgb-text{
  text-align: center;
  font-size: 2em;
  
  margin-bottom: 1em;
 }


 .slider-text{
   font-size: 0.6em;
   font-weight: 600;
   margin-top: 1em;
 }
 
 
 .parlaklik-card{
   
   border-radius: 40px;
   margin: 3.1em 6.25em 3.1em 6.25em;
 }
 
 
 
 .left-aligned-card {
   margin-left: 9em;
   text-align: left;
   color: black;
 }
 .main{
   padding: 0px;
   margin-top: 100px;
 }
 .img{
   margin-left: 9em;
   margin-top: 1em;
   
 }
 
 
 .about{
   color: gray;
   font-size: 1em;
   display: flex;
   align-items: center;
   justify-content: center;
   padding-top: 80px;
 }
 
 
 .product-card-text{
   font-size: 1.5em;
   margin-top: 2em;
   margin-left: 1.2em;
 }
 
 .about-icon{
  margin: 1em 0.5em 4em 0.5em ;
 }

 </style>
   