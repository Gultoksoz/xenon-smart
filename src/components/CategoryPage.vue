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
            <span class="font-weight-bold">Akıllı aydınlatma ile</span>
            <span> yaşam alanlarınız daha renkli, daha akıllı ve daha keyifli...</span>
          </v-spacer>
           <v-spacer class="mb-4 mt-2" style="font-size: 16px;">
            <span>
            Estetik tasarımı ve gelişmiş özellikleriyle bu akıllı aydınlatma sistemi, evinizde veya ofisinizde aydınlatma deneyiminizi başka bir seviyeye taşıyacak.
            </span>
          </v-spacer>
          <v-spacer>
 
             <v-col cols="4" sm="6" md="4">
             <v-btn class="main-button" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF">
               Ürünleri incele
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
    
  ></v-carousel-item>

  <v-carousel-item
    
  ></v-carousel-item>
</v-carousel>

<!-- 
     <v-row class="main-text">
       <v-col cols="6" md="6" align="center" justify="center">
         <v-card class="left-aligned-card" variant="text" color="white">
           <v-card-title class="custom-card-title "><strong>Akıllı aydınlatma ile</strong> yaşam <br>alanlarınız daha renkli, daha<br> akıllı ve daha keyifli...</v-card-title>
           <v-card-text class="mb-4 mt-2">
            Estetik tasarımı ve gelişmiş özellikleriyle bu akıllı aydınlatma sistemi,<br> evinizde veya ofisinizde aydınlatma deneyiminizi başka bir seviyeye<br> taşıyacak.
           </v-card-text>
           <v-card-action>
 
             <v-col cols="4" sm="6" md="4">
             <v-btn class="main-button" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF">
               Ürünleri incele
             </v-btn></v-col>
           </v-card-action>
         </v-card>
     </v-col>
     <v-col cols="6" md="6">
       <v-img class="img"
         :width="160"
         aspect-ratio="4/3"
         cover
         src="@/assets/lamp.svg"
       ></v-img>
     </v-col>
   </v-row> -->
   
    <v-row class="d-flex flex-column">
     <v-spacer class="text-center mt-6 mb-6">
       
          <h3 style="color: gray;"> Akıllı Aydınlatma </h3>
       
     </v-spacer>
   
 
   
     <v-spacer class="text-center mt-6 mb-6">
       
         
         <span class="font-weight-bold" >Akıllı aydınlatma, konfor, enerji tasarrufu ve estetik tasarımı bir araya getirerek aydınlatma deneyiminizi dönüştürüyor. </span>
         <p class="about-subtext">Yenilikçi teknolojimizle gurur duyuyor ve keyif anlarınızın benzersiz olmasını sağlamak için sürekli olarak mükemmellik için çalışıyoruz.</p>
       
     </v-spacer>
   </v-row>
   
   
   <v-card variant="tonal" class="my-4 py-4" style="border-radius: 25px;">
    <v-row>
      <v-col md="4" xl="6" class="px-0" >
        <v-spacer class="card-title">
          <div>
            <span>Akıllı Geçiş Kontrol</span>
              sistemleri daha akıllı bir yaşam tarzına geçiş yapmak için mükemmel bir seçenektir.
        </div>

          </v-spacer>
          <v-spacer class="card-text">
            <div>
            <span>
            Gelişmiş teknoloji ve kullanıcı dostu tasarımı ile bu sistem, günlük işlerinizi kolaylaştırırken güvende hissetmenizi sağlar. İşletmeler, kamu binaları, apartmanlar ve diğer birçok yer için ideal bir güvenlik çözümü sunar. QR Kod ve RFID okuyucu sistemler ile hem güvenlik hem de erişim kontrolünü optimize edebilirsiniz.
          </span>
        </div>
          </v-spacer>
         
            <v-spacer class="card-action">
             <div >
            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" href="https://shop.xenonsmart.com/">
              <strong>Satın Al</strong>
            </v-btn>
            <v-btn class="ml-4" size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="$router.push('/category')">
              <strong>Daha fazla</strong>
            </v-btn>
          </div>
          </v-spacer>
      </v-col>
      <v-col md="8" xl="6" class="px-0" >
        <v-spacer class="d-flex justify-center my-4">
        <v-sheet width="80%" class="d-flex justify-center align-center" elevation="0"  rounded="xl" color="#cccccc">
          <v-img
            
          max-width="160"
            aspect-ratio="4/3"
            src="@/assets/lamp.svg"
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
              class="d-flex align-center"
            >
              <v-slide-group-item
                v-for="n in 15"
                :key="n"
              >
                <v-scale-transition class="my-4">
                  <v-spacer style="max-width: 100px;" class="text-center mx-2">
                    <v-img max-height="80" src="@/assets/rfid_kart.svg"></v-img>
                    <span class="mt-2">
                      RFID Kart Okuyucu
                    </span>
                  </v-spacer>
                </v-scale-transition>
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
          <v-sheet width="80%" class="d-flex justify-center align-center" elevation="0" rounded="xl" color="#B0C7BC">
            <v-img
              class="kontrol_grubu_img"
              width="auto"
              aspect-ratio="4/3"
              src="@/assets/kontrol_grubu.png"
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
                v-for="n in 15"
                :key="n"
              >
                <v-scale-transition class="my-4">
                  <v-spacer style="max-width: 100px;" class="text-center mx-2">
                    <v-img max-height="80" src="@/assets/priz.svg"></v-img>
                    <span class="mt-2">
                      Akıllı Priz Tekli 
                    </span>
                  </v-spacer>
                </v-scale-transition>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-spacer>
      </v-col>
      <v-col md="4" xl="6" class="px-0">
        <v-spacer class="card-title">
          <div>
            <span>Akıllı Kontrol Grubu</span> Evinizin kontrolünü parmak uçlarınızda tutun.
          </div>
          </v-spacer>
          <v-spacer class="card-text">
            <div>
            <span>
            Akıllı Kameralar, evinizin, işyerinizin veya herhangi bir mekanın güvenliğini ve gözetimini en üst düzeye çıkarmak için tasarlanmış üstün bir teknoloji ürünüdür. Bu kameralar, gelişmiş özelliklerle donatılmış, yüksek çözünürlüklü video kaydı, hareket algılama, uzaktan erişim ve daha fazlası sunarak size sakinlik ve güvenlik sağlar.
          </span>
        </div>
          </v-spacer>
          <v-spacer class="card-action">
            <div >
            <v-btn size="x-large" density="comfortable" rounded="xl" variant="outlined" color="#007AFF">
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
            <span>Akıllı Sensörler</span> Ev otomasyonunuza veya işyerinizin güvenliğine entegre edilebilecek çok yönlü cihazlardır.
          </div>
        </v-spacer>
        <v-spacer class="card-text">
            <div>
              <span>
              Gelişmiş teknoloji ve kullanıcı dostu tasarımı ile bu sistem, günlük işlerinizi kolaylaştırırken güvende hissetmenizi sağlar. İşletmeler, kamu binaları, apartmanlar ve diğer birçok yer için ideal bir güvenlik çözümü sunar. QR Kod ve RFID okuyucu sistemler ile hem güvenlik hem de erişim kontrolünü optimize edebilirsiniz.
            </span>
          </div>
        </v-spacer>
        <v-spacer class="card-action">
            <div >
          <v-btn size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="$router.push('/category')">
            <strong>Daha fazla</strong>
          </v-btn>
        </div>
        </v-spacer>
      </v-col>
      <v-col md="8" xl="6" class="px-0" >
        <v-spacer class="d-flex justify-center my-4">
        <v-sheet width="80%" class="d-flex justify-center align-center" elevation="0"  rounded="xl" color="#97A9B7">
          <v-img
            class="sensor-img"
            width="auto"
            aspect-ratio="4/3"
            src="@/assets/sensor.png"
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
                v-for="n in 15"
                :key="n"
              >
                
                  
                    <v-scale-transition class="my-4">
                      <v-spacer style="max-width: 100px;" class="text-center mx-2">
                        <v-img max-height="80" src="@/assets/perde_rolesi.svg"></v-img>
                        <span class="mt-2">
                        Akıllı Priz Rolesi 
                      </span>
                      </v-spacer>
                    </v-scale-transition>
                  
                
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-spacer>
      </v-col>
    </v-row>
  </v-card>

 
   </v-container>
 </template>
   
 <script >
 
 export default {
   data() {
     return {
      
     };
   },
 };
     
 </script>
 
 <style scoped >
 
 

 
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



 .custom-text{
   align-items :center;
   justify-content :center;
   text-align: center;
 }
 


 
 .main-text{
   padding-top: 130px;
   background-image: url('@/assets/product_background.png');
   background-size: cover;
    background-repeat: no-repeat;
 }
 
 
 
 .slider-text{
   font-size: 0.6em;
   font-weight: 600;
   margin-top: 1em;
 }
 
 
 
 
 .kontrol-card-color{
   background-color: #EBF7F1;
 }
 
 .sensor-card-color{
   background-color: #F0F6FB ;
 }
 
 .product-button{
   padding-bottom: 18em;
   padding-left: 1.8em;
 }
 
 .about-subtext{
   
   color: black;
   
   
 }
 
 .left-aligned-card {
   margin-left: 9em;
   text-align: left;
   color: black;
 }
 .main{
  max-width: 100vw !important;
 }
 
 
 .about{
   color: gray;
   font-size: 1em;
   display: flex;
   align-items: center;
   justify-content: center;
   padding-top: 20px;
 }
 
 
 .product-card-text{
   font-size: 1em;
   margin-top: 2em;
   margin-left: 1.2em;
 }
 
 </style>
   