<template>
    <v-container fluid class="main" style="margin-top: 180px;">
        <v-carousel hide-delimiters>
  <v-carousel-item
  >
  <v-spacer class="main-text d-flex">
    <v-col cols="2" sm="1"></v-col>
    <v-col cols="9" sm="6" md="5" class="d-flex justify-end">
         <v-spacer variant="text" style="color: white;">
           <v-spacer class="d-flex flex-column main-size" >
            <span class="font-weight-bold">Akıllı aydınlatma ile</span>
            <span>yaşam alanlarınız daha renkli, daha akıllı ve daha keyifli...</span>
          </v-spacer>
           <v-spacer class="mb-4 mt-2 subtext-size">
            <span>
              Estetik tasarımı ve gelişmiş özellikleriyle bu akıllı aydınlatma sistemi, evinizde veya ofisinizde aydınlatma deneyiminizi başka bir seviyeye taşıyacak.
            </span>
          </v-spacer>
          <v-spacer>
            
                  <v-img
                  max-width="260"
                  src="@/assets/google_home.svg"
                ></v-img>

             <v-col cols="4" sm="6" md="4">
             <v-btn class="main-button" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF" href="https://shop.xenonsmart.com/">
               Satın Al
             </v-btn></v-col>
           </v-spacer>
         </v-spacer>
     </v-col>
     
    <v-col cols="1"></v-col>

  </v-spacer>

  </v-carousel-item>

  <v-carousel-item
    
  ></v-carousel-item>

  <v-carousel-item
    
  ></v-carousel-item>
</v-carousel>
   

<v-spacer class="text-center mt-2">
      <h3 class="font-weight-bold mb-4" style="color: gray;">Akıllı Aydınlatma</h3>
      <p class="font-weight-bold mx-4 px-4" style="font-size: 1.5em;">Enerji verimliliğini artırmak için tasarlanmış modern ve kullanıcı dostu olan akıllı aydınlatma sistemleri , hem kullanım kolaylığı hem de çevresel sürdürülebilirlik sunar.</p>
     </v-spacer>
     <v-spacer class=" d-flex flex-wrap justify-space-around">
         <v-col sm="4" md="2" class="d-flex align-center justify-center"><v-img class="logo_image" src="@/assets/app-store.png"/></v-col> 
         <v-col sm="4" md="2" class="d-flex align-center justify-center"> <v-img class="logo_image" src="@/assets/google-play.png"/></v-col>
         <v-col sm="4" md="2" class="d-flex align-center justify-center"><v-img class="logo_image" src="@/assets/xenon-app.png"/></v-col>
         <v-col sm="6" md="2" class="d-flex align-center justify-center"> <v-img class="logo_image" src="@/assets/googlehome@4x.png"/></v-col>
         <v-col sm="6" md="2" class="d-flex align-center justify-center"> <v-img class="logo_image" src="@/assets/Google-Alexa.png"/></v-col>
     </v-spacer>

   
   
   <v-card variant="tonal" class="my-4 py-4" style="border-radius: 25px; background-color: #F1FBFF;">
    <v-row>
      <v-col md="4" xl="6" class="px-0" >
        <v-spacer class="card-title">
          <div>
            <span>Akıllı RGB Ampul</span>
             ile yaşam alanınıza  özel bir dokunuş ekleyin.
        </div>

          </v-spacer>
          <v-spacer class="card-text">
            <div>
            <span>
                Akıllı Ampul ile evinizi kişiselleştirin ve her anın keyfini çıkarın. İster dinlenirken ister parti yaparken, bu akıllı ampul sayesinde ortamınızı dilediğiniz gibi renklendirin!
          </span>
        </div>
          </v-spacer>
         
            <v-spacer class="card-action">
             <div >
            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="flat" color="#007AFF" href="https://shop.xenonsmart.com/">
              <strong>Satın Al</strong>
            </v-btn>
            <v-btn class="ml-4" size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="">
              <strong>Daha fazla</strong>
            </v-btn>
          </div>
          </v-spacer>
      </v-col>
      <v-col md="8" xl="6" class="px-0" >
        <v-spacer class="d-flex justify-center my-4">
        <v-sheet width="80%" class="d-flex justify-center align-center key-card" elevation="0"  color="#cccccc">
          <v-img
          width="auto"
          
            aspect-ratio="4/3"
            src="@/assets/Rectangle12.png"
          ></v-img>
        </v-sheet>
      </v-spacer>
      <v-spacer class="d-flex justify-center my-4">
          <v-sheet
            elevation="0"
            rounded="xl"
            color="#E9E9E9"
            width="80%"
          >
            <v-slide-group
              v-model="model"
              selected-class="bg-success"
              show-arrows
              class="d-flex align-center "
            >
              <v-slide-group-item
                v-for="item in rgbLamp"
                :key="item.id"
              >
              <v-spacer class="d-flex justify-center">
                <v-scale-transition class="my-4">
                  <v-spacer style="max-width: 100px;" class=" mx-2 ">
                    <v-img aspect-ratio="1" max-height="80" :src="item.url" ></v-img>
                    
                  </v-spacer>
                </v-scale-transition>
              </v-spacer>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-spacer>
      </v-col>
    </v-row>
  </v-card>
   
  <v-card variant="tonal" class=" kontrol-card-color my-4 py-4">
    <v-row>
      <v-col md="8" xl="6" class="px-0">
        <v-spacer class="d-flex justify-center my-4">
          <v-sheet width="80%" class="d-flex justify-center align-center key-card" elevation="0"  color="#B0C7BC">
            <v-img
              class="kontrol_grubu_img"
              width="auto"
              aspect-ratio="4/3"
              src="@/assets/Layer24.png"
            ></v-img>
          </v-sheet>
        </v-spacer>
        <v-spacer class="d-flex justify-center my-4">
          <v-sheet
            elevation="0"
            width="80%"
            rounded="xl"
            color="#BBC6C1"
          >
            <v-slide-group
              v-model="model"
              class="d-flex align-center"
              selected-class="bg-success"
              show-arrows
            >
              <v-slide-group-item 
                v-for="item in rgbLamp"
                :key="item.id"
              >
              <v-spacer class="d-flex justify-center">
                <v-scale-transition class="my-4">
                  <v-spacer style="max-width: 100px;" class=" mx-2">
                    <v-img max-height="80" :src="item.url"></v-img>
                    
                  </v-spacer>
                </v-scale-transition>
              </v-spacer>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-spacer>
      </v-col>
      <v-col md="4" xl="6" class="px-0">
        <v-spacer class="card-title">
          <div>
            <span>Dokunmatik Üçlü  Anahtar,</span> 
             
            enerji verimliliği ve kolay kontrol  sağlayan modern çözüm.
          </div>
          </v-spacer>
          <v-spacer class="card-text">
            <div>
            <span>
              Ev otomasyonunu zirveye taşıyan bir çözümdür. Uzaktan kontrol, zamanlayıcı, ses kontrolü gibi özelliklerle donatılmış bu modern anahtar, ev sahiplerine ışıkları akıllı bir şekilde kontrol etme imkanı sunar. Kolay kurulumu sayesinde mevcut altyapıya hızla entegre edilebilir ve yüksek güvenlik önlemleriyle evinizi korur. Bu ürünle eviniz, daha konforlu, enerji tasarruflu ve güvenli bir yaşam alanına dönüşür.
          </span>
        </div>
          </v-spacer>
          <v-spacer class="card-action">
             <div >
            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="flat" color="#007AFF" href="https://shop.xenonsmart.com/">
              <strong>Satın Al</strong>
            </v-btn>
            <v-btn class="ml-4" size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="">
              <strong>Daha fazla</strong>
            </v-btn>
          </div>
          </v-spacer>
      </v-col>
    </v-row>
  </v-card>


  <v-card variant="tonal" class="my-4 py-4 sensor-card-color">
    <v-row>
      <v-col md="4" xl="6" class="px-0" >
        <v-spacer class="card-title">
          <div>
            <span>Akıllı İkili Anahtar,</span>  
                enerji verimliliği ve kolay kontrol  sağlayan modern bir çözümdür.
          </div>
        </v-spacer>
        <v-spacer class="card-text">
            <div>
              <span>
                Uzaktan kontrol, zamanlayıcı, ses kontrolü gibi özelliklerle donatılmış bu modern anahtar, ev sahiplerine ışıkları akıllı bir şekilde kontrol etme imkanı sunar. Kolay kurulumu sayesinde mevcut altyapıya hızla entegre edilebilir ve yüksek güvenlik önlemleriyle evinizi korur. Bu ürünle eviniz, daha konforlu, enerji tasarruflu ve güvenli bir yaşam alanına dönüşür.
            </span>
          </div>
        </v-spacer>
        <v-spacer class="card-action">
             <div >
            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="flat" color="#007AFF" href="https://shop.xenonsmart.com/">
              <strong>Satın Al</strong>
            </v-btn>
            <v-btn class="ml-4" size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="">
              <strong>Daha fazla</strong>
            </v-btn>
          </div>
          </v-spacer>
      </v-col>
      <v-col md="8" xl="6" class="px-0" >
        <v-spacer class="d-flex justify-center my-4">
        <v-sheet width="80%" class="d-flex justify-center align-center key-card" elevation="0" color="#97A9B7">
          <v-img
            class="sensor-img"
            width="auto"
            aspect-ratio="4/3"
            src="@/assets/Layer12.png"
          ></v-img>
        </v-sheet>
      </v-spacer>
      <v-spacer class="d-flex justify-center my-4">
          <v-sheet
            width="80%"
            elevation="0"
            
            rounded="xl"
            color="#BFCFDC"
            
          >
            <v-slide-group
              v-model="model"
              class="d-flex align-center"
              selected-class="bg-success"
              show-arrows
            >
              <v-slide-group-item
                v-for="item in rgbLamp"
                :key="item.id"
              >
              <v-spacer class="d-flex justify-center">
                  
                    <v-scale-transition class="my-4">
                      <v-spacer style="max-width: 100px;" class=" mx-2">
                        <v-img max-height="80" :src="item.url"></v-img>
                        
                      </v-spacer>
                    </v-scale-transition>
                  
                  </v-spacer>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-spacer>
      </v-col>
    </v-row>
  </v-card>

 
  
    <v-spacer class="d-flex align-center justify-center mt-6 mb-3">
       
      <h3 class="font-weight-bold" style="color: gray;">Akıllı Aydınlatma </h3>
      
     </v-spacer>
   
 
   
     <v-spacer class="d-flex mt-4 mb-6">
       <v-col cols="12" class="d-flex align-center justify-center flex-column">
         <v-spacer  style="width: 90%;" class="d-flex align-center justify-center flex-column">

         <span class="font-weight-bold text-center" style="font-size: 1.5em;">Akıllı aydınlatma teknolojileri aydınlatma konusunda tam kontrol sahibi olmanızı ve yaşam alanlarınızı kendi zevkinize göre şekillendirmenizi mümkün kılar.</span>
         <v-spacer class=" mt-4">
            <div >
            <v-btn size="x-large" density="compact" rounded="xl" variant="flat" color="#007AFF" href="https://shop.xenonsmart.com/">
              <strong> Satın Al </strong>
            </v-btn>
          </div>
          </v-spacer>
         </v-spacer>

       </v-col>
     </v-spacer>
   


   </v-container>
 </template>
   
 <script >
 
 export default {
   data() {
     return {
      rgbLamp:[
        {
          id: 0,
          url: "/assets/Layer0.png",
        },
        {
          id: 1,
          url: "/assets/Layer1.png",
        },
        {
          id: 2,
          url: "/assets/Layer2.png",
        },
        {
          id: 3,
          url: "/assets/Layer3.png",
        }
      ],
     };
   },
 };
     
 </script>
 
 <style scoped >
 
 
@media screen and (max-width: 1280px) {
  .product-btn{
    font-size: 0.8em;
}
}

@media screen and (max-width: 600px) {
  .product-btn{
    font-size: 0.6em;
}

.main-size{
  font-size: 0.9em;  
 }

.subtext-size{
  font-size: 0.8em;  
 }

}


@media screen and (min-width: 600px) {

.main-size{
  font-size: 1.3em;  
 }

.subtext-size{
  font-size: 1em;  
 }

}
 
.card-title{
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding:8px;
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

 
 .main-text{
  padding: 20px 0px;
   background-image: url('@/assets/bg.png');
   background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 250px;
 }
 
.background{
    background-image: url('@/assets/Rec.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 47px;
}



 .kontrol-card-color{
   background-color: #F9F9F9;
 }

 .key-card{
    border-radius: 70px;
 }
 
 .sensor-card-color{
   background-color: #FFFBE8 ;
 }
 

 .about-subtext{
   
   color: black;
   
 }

 .main{
  padding: 0px;
   margin-top: 100px;
 }
 
 
 
 
 </style>
   