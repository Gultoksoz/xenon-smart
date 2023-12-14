<template>
    <v-container fluid class="main" style="margin-top: 180px;">
      <v-carousel hide-delimiters cycle=true :interval=200000 :show-arrows="false" >
  <v-carousel-item
  >
  <v-spacer class="main-text d-flex">
    <v-col cols="2" sm="1"></v-col>
    <v-col cols="9" sm="6" md="5" class="d-flex justify-end">
         <v-spacer variant="text" style="color: white;">
           <v-spacer class="d-flex flex-column main-size " >
            <span class="font-weight-bold">Akıllı Tekli Switch, </span>
            <span>enerji verimliliği ve kolay kontrol  sağlayan modern çözüm.</span>
          </v-spacer>
           <v-spacer class="mb-1 mt-2 subtext-size">
            <span>
                Ev otomasyonunu zirveye taşıyan bir çözümdür. Uzaktan kontrol, zamanlayıcı, ses kontrolü gibi özelliklerle donatılmış bu modern anahtar, ev sahiplerine ışıkları akıllı bir şekilde kontrol etme imkanı sunar.
            </span>
          </v-spacer>
          <v-spacer>
            
                  <v-img
                  max-width="260"
                  src="@/assets/google_home.svg"
                ></v-img>

             <v-col cols="4" sm="6" md="4">
             <v-btn size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF" href="https://shop.xenonsmart.com/">
               Satın Al
             </v-btn></v-col>
           </v-spacer>
         </v-spacer>
     </v-col>
     <v-col cols="0" sm="4" md="5" class="d-flex justify-center align-start">
       <v-img
         max-width="160"
         aspect-ratio="4/3"
         src="@/assets/P11.png"
       ></v-img>
     </v-col>
    <v-col cols="1"></v-col>

  </v-spacer>

  </v-carousel-item>

  <v-carousel-item
    
  ></v-carousel-item>

  <v-carousel-item
    
  ></v-carousel-item>
</v-carousel>

<v-spacer class=" page d-flex justify-center">
        <v-spacer style="max-width: 1000px;">
    <v-spacer class="text-center mt-6">
      <h3 class="font-weight-bold mb-4" style="color: gray; font-size: 20px;">Akıllı Tekli Switch</h3>
      <p class=" mx-4 px-4" style="font-size: 40px; line-height: 48px;">Kolay kurulumu sayesinde mevcut altyapıya hızla entegre edilebilir. Bu ürünle eviniz, daha konforlu, enerji tasarruflu ve güvenli bir yaşam alanına dönüşür.</p>
     </v-spacer>
     <v-spacer class=" d-flex flex-wrap justify-space-around">
         <v-col sm="4" md="2" class="d-flex align-center justify-center"><v-img class="logo_image" src="@/assets/app-store.png"/></v-col> 
         <v-col sm="4" md="2" class="d-flex align-center justify-center"> <v-img class="logo_image" src="@/assets/google-play.png"/></v-col>
         <v-col sm="4" md="2" class="d-flex align-center justify-center"><v-img class="logo_image" src="@/assets/xenon-app.png"/></v-col>
         <v-col sm="6" md="2" class="d-flex align-center justify-center"> <v-img class="logo_image" src="@/assets/googlehome@4x.png"/></v-col>
         <v-col sm="6" md="2" class="d-flex align-center justify-center"> <v-img class="logo_image" src="@/assets/Google-Alexa.png"/></v-col>
     </v-spacer>
    </v-spacer>
  </v-spacer>

  <v-spacer class="d-flex align-center justify-center">
     <v-card class="d-flex flex-column align-center justify-end rgb-card"  variant="tonal">
      
      <v-card style="background: none;" >
         <v-spacer class="text-center" style="color: white; font-size: 20px;">Nerede olursan ol!</v-spacer>
         <v-spacer class="rgb-text mb-4 px-4"  style="color: white; font: 40px; line-height: 48px;" >
Xenon Smart mobil uygulası sayesinde dünyanın herhangi bir yerinden evinize erişebiliyorsunuz.</v-spacer>
         <v-spacer  class="text-center mb-4">
             <v-btn   class="rgb-button mr-4" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF" href="https://shop.xenonsmart.com/">
               Satın al
             </v-btn>
             <v-btn class="rgb-button ml-4" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF">
               Daha fazla
             </v-btn>
           </v-spacer>
          </v-card>

   </v-card>

  </v-spacer>

  <!-- </v-row> -->
   <v-spacer class="d-flex align-center justify-center py-2">

   <v-card class=" parlaklik-card " style="background-color: #FAF6FF;" variant="tonal">
     <v-row>
 
       <v-col cols="6" class="d-flex">
           <v-img
             cover
             src="@/assets/Layer72.png"
           ></v-img>
       </v-col>
       
       <v-col cols="6" class="d-flex flex-column">
         <v-spacer class="card-title">
             <span class="font-weight-bold">Kolay Kurulum</span>
           </v-spacer>
           <v-spacer class="card-text">
            <span>
              Akıllı Tekli Anahtar, basit kurulumu sayesinde herkesin kullanabileceği bir üründür. Mevcut anahtar prizinize takmanız yeterli, ardından mobil uygulama ile eşleştirme işlemini gerçekleştirin ve kontrolü elinize alın.
          </span>
          </v-spacer>
           
 
       </v-col>
       
     </v-row>
   </v-card>
  </v-spacer>


 <v-spacer class="d-flex align-center justify-center py-2">


<v-card class=" parlaklik-card " style="background-color: #F7FCFE ;" variant="tonal">
  <v-row>

    <v-col cols="6" class="d-flex">
        <v-img
          cover
          src="@/assets/Group32.png"
        ></v-img>
    </v-col>
    
    <v-col cols="6" class="d-flex flex-column">
      <v-spacer class="card-title">
          <span class="font-weight-bold">Uzaktan Kontrol</span>
        </v-spacer>
        <v-spacer class="card-text">
         <span>
          Mobil uygulama aracılığıyla kullanıcıya ev içindeki aydınlatma sistemini uzaktan kontrol etme imkanı sunar. Bu, evde olmadığınız zamanlarda bile ışıkları kontrol etme ve programlama özgürlüğü sağlar.
       </span>
       </v-spacer>
        

    </v-col>
    
  </v-row>
</v-card>
</v-spacer>



   <v-spacer class="d-flex align-center justify-center py-2">


   <v-card class=" parlaklik-card" style="background-color: #FFF9F4  ;" variant="tonal">
     <v-row>
       <v-col cols="6" class="d-flex flex-column">
        <v-spacer class="card-title text-size">
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
  </v-spacer>
   
   <v-row class="d-flex flex-column">
    <v-spacer class="text-center mt-6 mb-6">
       
      <h3 class="font-weight-bold" style="color: gray;">Akıllı Tekli Anahtar</h3>
      
     </v-spacer>
   
 
     <v-spacer class=" page d-flex justify-center">
        <v-spacer style="max-width: 1000px;">
     <v-spacer class="text-center mt-6 mb-6">
       <v-col cols="12" class="d-flex flex-column custom-text">
         
         <span class="font-weight-bold" style="font-size: 1.5em; width: 90%;">Google Home ve Alexa uyumluluğu ile evinizin aydınlatmasını tam anlamıyla akıllı hale getiriyor.  Ortamın atmosferini parmaklarınızın ucuyla yönetin!</span>
          <v-img width="90%" class="mt-4" src="@/assets/Layer_1.png"/>
       </v-col>
     </v-spacer>
    </v-spacer>
  </v-spacer>

   </v-row>

<v-spacer class="d-flex align-center justify-center">

   <v-card class=" parlaklik-card d-flex" variant="tonal">
     <!-- <v-row> -->
       <v-col cols="6" class="d-flex px-0 py-0">
        <v-img
             cover
             width="45%"
             max-width="760"
             src="@/assets/Group49.png"
           ></v-img>
           

       </v-col>
       
        <v-col cols="6" class="d-flex px-0 py-0">
           <v-img
             cover
             width="45%"
             max-width="760"
             src="@/assets/Group33.png"
           ></v-img>
      
       </v-col>
     <!-- </v-row> -->
   </v-card>
  </v-spacer>

   <v-row class="d-flex flex-column">
    <v-spacer class="text-center mt-6 mb-3">
       
      <h3 class="font-weight-bold" style="color: gray;">Akıllı Tekli Anahtar</h3>
      
     </v-spacer>
   
 
     <v-spacer class=" page d-flex justify-center">
        <v-spacer style="max-width: 1000px;">
     <v-spacer class="text-center mb-6">
       <v-col cols="12" class="d-flex flex-column custom-text">
         <v-spacer  style="width: 90%;">

         <span class="font-weight-bold" style="font-size: 1.5em;">Akıllı Tekli Switch, uzaktan kontrol, zamanlayıcı fonksiyonu, ses kontrolü, kolay kurulum ve yüksek güvenlik özellikleriyle evinizi akıllı, enerji verimli ve güvenli bir şekilde kontrol etmenizi sağlayan modern bir çözümdür.</span>
         <v-spacer class="card-action mt-4">
            <div >
            <v-btn size="x-large" density="compact" rounded="xl" variant="flat" color="#007AFF" href="https://shop.xenonsmart.com/">
              <strong> Satın Al </strong>
            </v-btn>
          </div>
          </v-spacer>
         </v-spacer>

       </v-col>
     </v-spacer>
    </v-spacer>
  </v-spacer>

   </v-row>



 
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



@media screen and (max-width: 600px) {
  .text-size{
  font-size: 1.3em;  
 }

 

.main-size{
  font-size: 0.9em;  
 }

.subtext-size{
  font-size: 0.8em;  
 }

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
   padding: 20px 0px;
   background-image: url('@/assets/bg2.png');
   background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 500px;
 }
 
 .rgb-card{
  background-image: url('@/assets/istock.png');
   background-size: cover;
  background-repeat: no-repeat;
  color: white;
  border-radius: 33px;
   margin: 10px 20px;

   height:500px ;
   max-width: 900px;
   width: 90%;
 }
 .rgb-text{
  text-align: center;
  
 }
 @media screen and (min-width: 600px) {
  .rgb-text{
  text-align: center;
  font-size: 3vw;
  
 }

 .main-size{
  font-size: 1.3em;  
 }

.subtext-size{
  font-size: 1em;  
 }

 .page{
  padding: 2em 5em;
 }



}


@media screen and (min-width: 1280px) {
  .rgb-text{
  text-align: center;
  font-size: 2vw;
  
 }
}

 .slider-text{
   font-size: 0.6em;
   font-weight: 600;
   margin-top: 1em;
 }
 
 
 .parlaklik-card{
  margin: 10px 20px;
  max-width: 900px;
   width: 90%;
   border-radius: 40px;
   
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
 
 .logo_image {
  max-width: 380px;
  min-width: 150px;
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
   