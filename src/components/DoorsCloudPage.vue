<template>
    <v-container fluid class="main" style="margin-top: 180px;" >
      <v-carousel hide-delimiters>
  <v-carousel-item
  >
  <v-spacer class="main-text d-flex">
    <v-col cols="2" sm="1"></v-col>
    <v-col cols="9" sm="6" md="5" class="d-flex justify-end">
         <v-spacer variant="text" style="color: white;">
           <v-spacer class="d-flex flex-column main-size pt-4 mt-4 " >
            <span class="font-weight-bold"> QR + RFID Okuyucu,</span>
            <span>  
                 modern güvenlik ihtiyaçlarınızı için yenilikçi bir çözümdür.</span>
          </v-spacer>
           <v-spacer class="mb-4 mt-2 subtext-size">
            <span>
                Hem QR kod hem de RFID teknolojilerini entegre ederek, kullanıcıların tesisinize güvenli ve etkili bir şekilde erişimini kontrol etmenizi sağlar.
            </span>
          </v-spacer>
          <v-spacer >
            
                  <v-img class="mb-2"
                  max-width="260"
                  src="@/assets/ga.png"
                ></v-img>

             <v-col cols="4" sm="6" md="4">
             <v-btn size="large" density="comfortable" rounded="xl"  variant="outlined" color="#FFFFFF" href="https://shop.xenonsmart.com/">
               Satın Al
             </v-btn></v-col>
           </v-spacer>
         </v-spacer>
     </v-col>
     <v-col cols="0" sm="4" md="5" class="d-flex justify-center align-center">
        <v-img
         max-width="300"
         aspect-ratio="4/3"
         src="@/assets/Group02.png"
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
   
   <!-- <v-row class="d-flex flex-column"> -->
    <v-spacer class="d-flex justify-center">
        <v-spacer style="max-width: 1000px;">
   

    <v-spacer class="text-center" >
      <h3 class="font-weight-bold mb-4" style="color: gray;">Access Control Sistemleri</h3>
      <p class="font-weight-bold mx-4 px-4" style="font-size: 1.5em;">  Doors Cloud ile tek bir yönetim panelinden kontrolleri sağlarken, Doors App ile kullanıcılarınızın geçişlerini zahmetsizce yapmasını sağlayabilirsiniz.

        </p>
     </v-spacer>
     <v-spacer class=" d-flex flex-wrap justify-space-around pb-5" >
         <v-col sm="4" md="2" class="d-flex align-center justify-center"><v-img class="logo_image" src="@/assets/app-store.png"/></v-col> 
         <v-col sm="4" md="2" class="d-flex align-center justify-center"> <v-img class="logo_image" src="@/assets/google-play.png"/></v-col>
         <v-col sm="4" md="2" class="d-flex align-center justify-center"><v-img class="logo_image" src="@/assets/xenon-app.png"/></v-col>
        
     </v-spacer>
    </v-spacer>
    </v-spacer>

     <v-spacer class="d-flex justify-center page">
        <v-row style=" max-width: 1000px; " class=" px-4 ">
        <v-col cols="12" sm="6">
            <v-card color="#F2F6FC" style="border-radius: 20px;  max-height: 400px; height: 350px;" class="my-4 py-4 px-4 d-flex flex-column" >
                <v-col class="d-flex justify-center">
                <v-img 
                    max-width="200"
                    aspect-ratio="4/3"
                    src="@/assets/doors.png"
                ></v-img></v-col>
                <h3 class="font-weight-bold text-center">Doors Cloud</h3>
                <p class=" card-text-size text-center">Doors Cloud, Xenon Smart geçiş kontrol donanımları için sunulan ve farklı seviyelerde entegrasyon olanakları ile uçtan uca bir çözümü kapsayan bir geçiş kontrol hizmetleri platformudur.</p>
            </v-card>
        </v-col>
        
        <v-col>
            <v-card color="#F2F6FC" style="border-radius: 20px; max-height: 400px; height: 350px;" class="my-4 py-4 px-4 d-flex flex-column">
                <v-col class="d-flex justify-center">
                <v-img 
                    max-width="60"
                    aspect-ratio="4/3"
                    src="@/assets/iPhone.png"
                ></v-img></v-col>
                <h3 class="font-weight-bold text-center">Doors App</h3>
                <p  class=" card-text-size text-center">Dinamik QR kodlar ile güvenli geçiş seçeneği sunar. Doors App, mevcut geçiş kontrol sistemleri için esnek entegrasyon seçenekleri ve Doors Cloud ile uçtan uca bir geçiş kontrol çözümü sunar.</p>
         
            </v-card>
        </v-col>
    </v-row>
     </v-spacer>



    <v-spacer class="d-flex align-center justify-center">
     <v-card class=" rgb-card d-flex flex-column align-center justify-end"  variant="tonal">
        
        <h1 class="font-weight-bold text-center mb-4 mt-8" >Mobil Çağ! Doors App</h1>
         <span class="rgb-text " >
            
            Dinamik QR kodlar ile mobil geçiş seçeneği sunar. Doors App, Doors Cloud ile uçtan uca bir geçiş kontrol çözümü veya mevcut geçiş kontrol sistemleri için esnek entegrasyon seçenekleri sağlar. Doors App, kullandığınız geçiş kontrol paneli ne olursa olsun Akıllı QR okuyucularla uyumlu olarak çalışır. </span>
         
            <v-row class="d-flex flex-wrap align-center justify-between-around pt-6 mt-4">
            
                <v-col class="d-flex align-center flex-column">
                    <v-sheet width="70%" class="d-flex py-4" elevation="0" >
                        <v-img 
                            width="auto"
                            src="@/assets/Asset.png"
                        ></v-img>
          
                    </v-sheet>
                    <span class="font-weight-bold">Dinamik QR</span>
                </v-col>
                <v-col class="d-flex align-center flex-column">
                    <v-sheet width="70%" class="d-flex py-4" elevation="0" >
                        <v-img 
                            width="auto"
                            src="@/assets/Asset1.png"
                        ></v-img>
                    </v-sheet>
                    <span class="font-weight-bold">RFID Kart</span>
                </v-col>
    
             </v-row>

         <v-row class="px-4">
          <v-col>
            <v-card color="#808285" height="100%" style="border-radius: 25px;" class="px-6 py-4">
              <v-img class="py-4 ml-2"
                width="auto"
                src="@/assets/Group.png"
              ></v-img>
              <h1 class="font-weight-bold ml-2" >Dinamik QR kod ile geçiş</h1>
             <p class="ml-2 mb-2"> Dinamik QR kodlar, beş saniye süreyle geçerli olacak şekilde oluşturulur ve bu sayede paylaşılmaları imkânsız hale gelir. Yetkilendirme işlemleri uzaktan ve anlık olarak yapılır, plastik kimlik kartlarına kıyasla daha uygun maliyetli ve sürdürülebilir çözümler sunar.</p>

            </v-card>
          </v-col>
          <v-col>
            <v-card color="#808285" style="border-radius: 25px;" class="px-2 py-2">
              <v-spacer class="d-flex justify-between-around">
              <v-img class=" ml-2"
                width="auto"
                src="@/assets/wifi.png"
              ></v-img>
              <h1 class="font-weight-bold ml-4" >Çevrimdışı Uyumluluk</h1></v-spacer>
             <p class="ml-2 mb-2"> İnternet kesintilerinde okuyucular sorunsuz çalışmaya devam eder. Kullanıcı yetkilendirmeleri, okuyucular ile Doors Cloud arasında sürekli senkronize edilmektedir.</p>

            </v-card>
            <v-card color="#808285" style="border-radius: 25px;" class="mt-4 px-2 py-2">
              <v-spacer class="d-flex justify-between-around">
              <v-img class=" ml-2 py-2"
                width="auto"
                src="@/assets/gen3.png"
              ></v-img>
              <h1 class="font-weight-bold ml-4" >Uzaktan Erişim</h1></v-spacer>
             <p class="ml-2 mb-2"> Uzaktan erişim yetkisine sahip kullanıcılar kapılarını uzaktan kontrol edebilirler.</p>

            </v-card>
          </v-col>
         </v-row>
        
        
   </v-card>

  </v-spacer>

  <v-spacer class="d-flex align-center justify-center py-4 mt-4">
    <v-card class=" parlaklik-card " style="background-color: #F5F6FD;" variant="tonal">
      <v-row>

        <v-col cols="6" class="d-flex">
          <v-img
            cover
            src="@/assets/Group7.png"
          ></v-img>
        </v-col>
    
        <v-col cols="6" class="d-flex flex-column">
          <v-spacer class="card-title text-size">
            <span class="font-weight-bold">Maliyet Avantajı</span>
          </v-spacer>
        <v-spacer class="card-text mr-2 mb-2">
         <span class="subtext-size">
          Wiegand, standalone veya ağ tabanlı kullanım seçenekleri: Standalone kulanım için web tabanlı bir yönetim arayüzü sunar. Doors App ile hemen kullanmaya başlayın veya mevcut herhangi bir sisteme 5 dakikada entegre edin. Wi-Fi bağlantısı ile HTTP, TCP, MQTT, UDP protokollerini destekler.
       </span>
       </v-spacer>
        

    </v-col>
    
  </v-row>
</v-card>
</v-spacer>


<v-spacer class="d-flex align-center justify-center py-4">


<v-card class=" parlaklik-card" style="background-color: #F5F6FD  ;" variant="tonal">
<v-row>
 <v-col cols="6" class="d-flex flex-column">
  <v-spacer class="card-title text-size">
       <span class="font-weight-bold">Kolay Entegrasyon</span>
     </v-spacer>
     <v-spacer class="card-text ml-2 mb-2">
      <span class="subtext-size">
        Akıllı okuyucuların kontrol ettiği kapılar Doors App kullanılarak açılabilir. Akıllı okuyucular geçiş kontrol panelinize kablo ile bağlanabilir veya geçiş kontrol paneline gerek kalmadan doğrudan geçiş kontrol sunucunuz ile ağ üzerinden haberleşebilir. Okuyucunun sunduğu web arayüzü ile ağ iletişim parametreleri özelleştirilebilir.
    </span>
    </v-spacer>
     
 </v-col>
 
  <v-col cols="6" class="d-flex">
     <v-img
       cover
       max-width="760"
       src="@/assets/Layer4.png"
     ></v-img>

 </v-col>
</v-row>
</v-card>
</v-spacer>



<v-spacer class="d-flex align-center justify-center py-4 mb-4">


<v-card class=" parlaklik-card " style="background-color: #F5F6FD;" variant="tonal">
<v-row>

 <v-col cols="6" class="d-flex">
     <v-img
       cover
       src="@/assets/Group1.png"
     ></v-img>
 </v-col>
 
 <v-col cols="6" class="d-flex flex-column">
   <v-spacer class="card-title text-size">
       <span class="font-weight-bold">Ziyaretçileriniz için dinamik QR </span>
     </v-spacer>
     <v-spacer class="card-text mb-3" >
      <span class="subtext-size mr-3">
        Geçişi erişim yetkisi verdiğiniz ziyaretçi için bir dinamik QR kod oluşturma bağlantısı oluşturulur. Ziyaretçiniz, geçiş işlemleri için bu bağlantıyı kullanarak dinamik QR kodlar oluşturabilir. Resepsiyon ihtiyacını ve teması ortadan kaldırır.
    </span>
    </v-spacer>
     

 </v-col>
 
</v-row>
</v-card>
</v-spacer>

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
   background-image: url('@/assets/Rec8.png');
   background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 450px;
  width: 100%;
 }
 
 .rgb-card{
  
  border-radius: 33px;
   margin: 10px 20px;
   padding-top: 3.1em;
   padding-bottom: 2em;
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
 .page{
padding: 3em;
}

 .main-size{
  font-size: 1.3em;  
 }

.subtext-size{
  font-size: 1em;  
 }

}

@media screen and (max-width: 960px) {
    .card-text-size{
  
  font-size: 0.8em;
  
 }
}



@media screen and (min-width: 960px) {
    .rgb-text{
  text-align: center;
  font-size: 1.5vw;
  
 }

 .card-text-size{
  
  font-size: 14px;
  
 }

}


@media screen and (min-width: 1280px) {
  .rgb-text{
  text-align: center;
  font-size: 18px;
  
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
   