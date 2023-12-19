<template>
    <v-container fluid class="main" style="margin-top: 180px;">
      <v-carousel hide-delimiters cycle=true :interval=200000 :show-arrows="false">
  <v-carousel-item
  >
  <v-spacer class="main-text d-flex">
    <v-col cols="2" sm="1"></v-col>
    <v-col cols="9" sm="6" md="5" class="d-flex justify-end">
         <v-spacer variant="text" style="color: white;">
           <v-spacer class="d-flex flex-column main-size "  style="font-size: 36px;">
            <span class="font-weight-bold" > Access Control ürünleri,</span>
            <span>  
              ihtiyaçlarınıza göre özelleştirilebilen kullanıcı dostu çözümler sunar.</span>
          </v-spacer>
           <v-spacer class="mb-1 mt-2 subtext-size">
            <span style="font-size: 18px;">
              Giriş ve çıkışların düzenlenmesi, yetkilendirilmemiş erişimlerin önlenmesi ve güvenlik protokollerinin etkin bir şekilde uygulanması için kritik öneme sahiptir.
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
       
     </v-col>
    <v-col cols="1"></v-col>

  </v-spacer>

  </v-carousel-item>

  <v-carousel-item
    
  ></v-carousel-item>

  <v-carousel-item
    
  ></v-carousel-item>
</v-carousel>
   
   <!-- <v-row class="d-flex flex-column"> -->
    <v-spacer class="text-center py-4">
      <h3 class="font-weight-bold mb-4" style="color: gray;">Access Control Sistemleri</h3>
      <p class="font-weight-bold mx-4 px-4" style="font-size: 1.5em;"> İdeal Access Control Sisteminiz için doğru çözümleri bulun

        </p>
     </v-spacer>

     <v-spacer class=" d-flex justify-center page">
    <v-row style=" max-width: 1000px; " class="d-flex flex-column">
    <v-col class="d-flex flex-wrap align-center justify-space-around">
      <v-col cols="12" md="6" lg="6" sm="6"  >
        <v-card variant="tonal" style="border-radius: 20px;max-height: 600px; height: 550px;" class=" card my-4 py-4">
          <v-row>
            <v-col >
              <v-spacer class="d-flex justify-center my-4 mx-0 px-0">
                <v-sheet class="a d-flex justify-center align-center" elevation="0" >
                  <v-img
                    width="auto"
                    height="100px"
                    src="@/assets/qr.png"
                  ></v-img>
                </v-sheet>
              </v-spacer>
            </v-col>
            <v-col >
              <v-spacer class="card-title">
                <div>
                  <span>QR Kod Okuyucu</span>
                </div>
                </v-spacer>
                <v-spacer class="card-text">
                  <!-- <div > -->
                    <!-- <span> -->
                      <div v-if="text1.length<130">{{ text1 }}</div>
                      <div v-else>{{ text1.substring(0,127)+"..." }}</div>
                    <!-- </span> -->
                <!-- </div> -->
                </v-spacer>
                <v-spacer class="card-action">
                  <div >
                  <v-btn size="x-large" density="comfortable" rounded="xl" variant="flat" color="#007AFF">
                    <strong>Daha Fazla</strong>
                  </v-btn>
                </div>
                </v-spacer>
            </v-col>
          </v-row>
        </v-card>

        <v-card variant="tonal" style="border-radius: 20px;max-height: 600px; height: 550px;" class=" card my-4 py-4">
          <v-row>
            <v-col >
              <v-spacer class="d-flex justify-center my-4 mx-0 px-0">
                <v-sheet width="40%" class="d-flex justify-center align-center" elevation="0" >
                  <v-img
                    width="auto"
                    height="100px"
                    src="@/assets/qr.png"
                  ></v-img>
                </v-sheet>
              </v-spacer>
              
            </v-col>
            <v-col >
              <v-spacer class="card-title">
                <div>
                  <span>QR+ RFID Okuyucu</span>
                </div>
                </v-spacer>
                <v-spacer class="card-text">
                  <!-- <div> -->
                  <!-- <span> -->
                    <div v-if="text2.length<130">{{ text2 }}</div>
                      <div v-else>{{ text2.substring(0,127)+"..." }}</div>
                <!-- </span> -->
              <!-- </div> -->
                </v-spacer>
                <v-spacer class="card-action">
                  <div >
                  <v-btn size="x-large" density="comfortable" rounded="xl" variant="flat" color="#007AFF">
                    <strong>Daha Fazla</strong>
                  </v-btn>
                </div>
                </v-spacer>
            </v-col>
          </v-row>
        </v-card>

      </v-col>
      
      <v-col cols="12" md="6" lg="6" sm="6"  >
      
        <v-card variant="tonal" style="border-radius: 20px;max-height: 600px; height: 550px;" class=" card my-4 py-4">
          <v-row>
            <v-col >
              <v-spacer class="d-flex justify-center my-4 mx-0 px-0">
                <v-sheet width="40%" class="d-flex justify-center align-center" elevation="0" >
                  <v-img
                    width="auto"
                    height="100px"
                    src="@/assets/qr2.png"
                  ></v-img>
                </v-sheet>
              </v-spacer>
              
            </v-col>
            <v-col >
              <v-spacer class="card-title">
                <div>
                  <span>RFID Okuyucu</span>
                </div>
                </v-spacer>
                <v-spacer class="card-text">
                  <!-- <div > -->
                  <!-- <span> -->
                    <div v-if="text3.length<130">{{ text3 }}</div>
                      <div v-else>{{ text3.substring(0,127)+"..." }}</div>
                    

                <!-- </span> -->
              <!-- </div> -->
                </v-spacer>
                <v-spacer class="card-action ">
                  <div >
                  <v-btn size="x-large" density="comfortable" rounded="xl" variant="flat" color="#007AFF">
                    <strong>Daha Fazla</strong>
                  </v-btn>
                </div>
                </v-spacer>
            </v-col>
          </v-row>
        </v-card>
       
       
        <v-card variant="tonal" style="border-radius: 20px;max-height: 600px; height: 550px;" class="card my-4 py-4">
          <v-row>
            <v-col >
              <v-spacer class="d-flex justify-center my-4 mx-0 px-0">
                <v-sheet width="40%" class="d-flex justify-center align-center" elevation="0" >
                  <v-img
                    width="auto"
                    height="100px"
                    src="@/assets/qr4.png"
                  ></v-img>
                </v-sheet>
              </v-spacer>
              
            </v-col>
            <v-col >
              <v-spacer class="card-title">
                <div>
                  <span>Geçiş Kontrol Paneli</span>
                </div>
                </v-spacer>
                <v-spacer class="card-text">
                  <!-- <div> -->
                  <!-- <span> -->
                    <div v-if="text4.length<130">{{ text4 }}</div>
                      <div v-else>{{ text4.substring(0,127)+"..." }}</div>
                <!-- </span> -->
              <!-- </div> -->
                </v-spacer>
                <v-spacer class="card-action">
                  <div >
                  <v-btn size="x-large" density="comfortable" rounded="xl" variant="flat" color="#007AFF">
                    <strong>Daha Fazla</strong>
                  </v-btn>
                </div>
                </v-spacer>
            </v-col>
          </v-row>
        </v-card>
        
      </v-col>
    </v-col>
  </v-row>
  </v-spacer>



    <v-spacer class="d-flex align-center justify-center">
     <v-card class=" rgb-card d-flex flex-column align-center justify-end"  variant="tonal">
        
        <h1 class="font-weight-bold text-center mb-4 mt-8" >Doors Cloud Yönetim Paneli ve Doors App Mobil Uygulama</h1>
         <span class="rgb-text " >Akıllı okuyucuların kontrol ettiği kapılar Doors App kullanılarak açılabilir. Akıllı okuyucular geçiş kontrol panelinize kablo ile bağlanabilir veya geçiş kontrol paneline gerek kalmadan doğrudan geçiş kontrol sunucunuz ile ağ üzerinden haberleşebilir. Okuyucunun sunduğu web arayüzü ile ağ iletişim parametreleri özelleştirilebilir. </span>
         
         <v-sheet width="55%" class="d-flex justify-center align-center mt-4 mb-4" elevation="0" >
                  <v-img
                    width="auto"
                    src="@/assets/Group08.png"
                  ></v-img>
                </v-sheet>
         
         <v-card-actions>
             <v-btn size="x-large" density="compact" rounded="xl" variant="flat" color="#007AFF" href="https://shop.xenonsmart.com/">
               Daha Fazla
             </v-btn>
           </v-card-actions>
        
   </v-card>

  </v-spacer>

  

  
  

<v-row class="d-flex flex-column align-center justify-center">
 <v-spacer class=" mt-8 mb-6">
    
  <v-img
    width="auto"
    src="@/assets/cevre.png"
  ></v-img>
   
  </v-spacer>



  <v-spacer class="text-center mt-6 mb-6">
    <v-col cols="12" class="d-flex flex-column custom-text">
      
      <span class="font-weight-bold" style="font-size: 1.5em; width: 90%;">Plastik atık ve karbon ayak izinizi azaltıyoruz. Mobil geçiş çözümleri, plastik kart taşımama özgürlüğü sunar ve karbon ayak izinizi azaltmanıza yardımcı olur.</span>
       <v-img width="20%" class="mt-4" src="@/assets/cevre2.png"/>
    </v-col>
  </v-spacer>
</v-row>



 
   </v-container>
 </template>
   
 <script >
 
 export default {
   data() {
     return {
      
      button:"",
      text1:" Doors Cloud ile tam entegre çalışan QR Kod Okuyucular, bulut üzerinden kullanıcı ve misafir yönetimi özellikleri sunarken Doors App ile mobil geçiş teknolojileri sağlar.",
      text2:"Doors Cloud ile tam entegre çalışan QR Kod Okuyucular, bulut üzerinden kullanıcı ve misafir yönetimi özellikleri sunarken Doors App ile mobil geçiş teknolojileri sağlar.",
      text3:"Doors Cloud ile tam entegre çalışan RFID okuyucular, bulut tabanlı yetki yönetimi ve Doors App ile mobil geçiş özellikleri sunar.",
      text4:"Okuyuculara ihtiyaç duymadan mobil geçiş imkanı sağlayarak uygun maliyetli geçiş kontrol çözümleri sunar. Doors App ile kullanıma hazır.",
      
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



 .page{
padding: 3em;}

}


.card-title div span {
  font-weight: bold;
  font-size: 0.8em;
}
.card-text{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:0.9em;
  
}

.card-text div {
  width: 80%;
  margin-right: 2.8em;
  height: 150px; 
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* display: -webkit-box; 
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 3; 
  overflow: hidden; 
  text-overflow: ellipsis;  */
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
   padding: 20px 0px;
   background-image: url('@/assets/bg21.png');
   background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 500px;
  width: 100%;
 }
 
 .rgb-card{
  
  border-radius: 33px;
   margin: 10px 20px;
   padding-top: 3.1em;
   padding-bottom: 10em;
   height:auto ;
   max-width: 900px;
   width: 90%;
 }
 .rgb-text{
  text-align: center;
  padding: 0px 16px;
  
 }
 @media screen and (min-width: 600px) {
  .rgb-text{
  text-align: center;
  font-size: 2vw;
  
 }

 .main-size{
  font-size: 1.3em;  
 }

.subtext-size{
  font-size: 1em;  
 }

 .page{
padding: 3em;
}




}

@media screen and (min-width: 600px) {
  .page{
padding: 3em;
}


}


@media screen and (min-width: 1280px) {
  .rgb-text{
  text-align: center;
  font-size: 22px;
  
 }

 .page{
padding: 3em;
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
   