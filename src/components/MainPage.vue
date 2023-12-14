<template>
   <v-container fluid class="main " style="margin-top: 180px;">
    <v-row class="header_element">
      <v-col cols="12" md="6">
        <v-card class="left-aligned-card" variant="text">
          <v-spacer class="custom-card-title d-flex flex-column" style="font-size: 51px; line-height: 60px;">
            <span class="font-weight-bold">Akıllı ev sistemleri,</span>
            <span>
              modern yaşamı yeniden tanımlayın.
            </span>
          </v-spacer>
          <v-spacer class="mb-4 mt-2" style="font-size: 15px; ">
            <span>
              Akıllı ev sistemleri, teknolojinin en son ve en etkili halini sunarak yaşam tarzınıza değer katıyor. Evdeki her cihazın birbirine bağlı olması, geleceğin konforunu bugünden deneyimlemenizi sağlar.
            </span>
          </v-spacer>
          <v-spacer>

            <v-col>
            <v-btn class="main-button" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="$router.push()">
              Ürünleri incele
            </v-btn></v-col>
          </v-spacer>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-img 
          max-width="650"
          aspect-ratio="4/3"
          src="@/assets/main.png"
        ></v-img>
      </v-col>
    </v-row>
  <v-row class="d-flex flex-column mt-6">
    <v-spacer class="page">
    <v-col class="d-flex flex-wrap align-center justify-space-around">
      <v-col cols="6" md="4" lg="2" >
        <v-card
           class="d-flex align-center justify-center  custom-card" @click="$router.push('/RgbLed')" style=" padding-bottom: 10%; padding-top: 10%;">
           <v-card-title class="d-flex align-center justify-center flex-column">
           <v-icon > <img src="@/assets/akilli_gecis_kontrol.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Geçiş Kontrol</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card  
           class="d-flex align-center justify-center  custom-card" style=" padding-bottom: 10%; padding-top: 10%;" >
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kontrol_grubu.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kontrol Grubu</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card  
           class="d-flex align-center justify-center  custom-card" style=" padding-bottom: 10%; padding-top: 10%;" >
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_kamera.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kamera</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card 
           class="d-flex align-center justify-center  custom-card " style=" padding-bottom: 10%; padding-top: 10%;" >
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kapi_kilidi.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kapı Kilidi</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card  
           class="d-flex align-center justify-center  custom-card" style=" padding-bottom: 10%; padding-top: 10%;">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_sensor.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Sensör</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card
           class="d-flex align-center justify-center custom-card" @click="$router.push('/smartlighting')" style=" padding-bottom: 10%; padding-top: 10%;">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_aydinlatma.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Aydınlatma</v-card-text></v-card-title>
        </v-card>
      </v-col>
    </v-col>
    </v-spacer>
  </v-row>
  
  <v-row class="d-flex flex-column">
    <v-spacer class="text-center mb-3">
      <!-- <v-col cols="12" class="d-flex align-center justify-center"> -->
        <h3 style="color: gray; font-size: 20px;">Xenon Smart Hakkında</h3>
      <!-- </v-col> -->
    </v-spacer>
    <v-spacer class="d-flex justify-center">
    <v-spacer class="text-center" style="max-width: 1000px;">
      <!-- <v-col cols="12" class="d-flex flex-column custom-text "> -->
        <p class="font-weight-bold" style=" font-size: 40px; line-height: 48px;">Mucitler, mühendisler ve tasarımcılardan oluşan ekibimiz, akıllı ev deneyimini bir üst seviyeye taşıyan ürünler yaratmak için tutkuyla çalışıyor.</p>
        <p style="font-size: 20px; padding-top: 20px;">Yenilikçi teknolojimizle gurur duyuyor ve keyif anlarınızın benzersiz olmasını sağlamak için sürekli olarak mükemmellik için çalışıyoruz.</p>
      <!-- </v-col> -->
    </v-spacer></v-spacer>
  </v-row>

  <v-row class="d-flex flex-column">
    
  </v-row>

  <v-spacer class="page d-flex justify-center">
  <v-card variant="tonal" class="my-4 py-4 px-4 d-flex flex-wrap" style="border-radius: 20px; max-width: 1000px;">
    <v-col md="8" xl="6" class="px-0" >
      <v-spacer class="card-title">
        <div style=" font-size: 32px; line-height: 39px; padding-bottom: 10px;">
          <span>Akıllı Geçiş Kontrol</span>
            sistemleri daha akıllı bir yaşam tarzına geçiş yapmak için mükemmel bir seçenektir.
      </div>

        </v-spacer>
        <v-spacer class="card-text">
          <div>
          <span style=" font-size: 18px;">
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
    <v-col md="4"  xl="6" class="px-0" >
      <v-spacer class="d-flex justify-center my-4">
      <v-sheet width="100%" class="d-flex justify-center align-center" elevation="0"  rounded="xl" color="#cccccc">
        <v-img
          
          width="auto"
          aspect-ratio="4/3"
          src="@/assets/giris_kontrol.png"
        ></v-img>
      </v-sheet>
    </v-spacer>
    <v-spacer class="d-flex justify-center my-4">
        <v-sheet
          elevation="0"
          rounded="xl"
          color="#E9E9E9"
          width="100%"
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
  </v-card>
</v-spacer>

<v-spacer class="page d-flex justify-center">
  <v-card variant="tonal" style="border-radius: 20px;  max-width: 1000px;" class=" kontrol-card-color my-4 py-4 px-4 d-flex flex-wrap">
      <v-col md="4" xl="6" class="px-0">
        <v-spacer class="d-flex justify-center my-4 ">
          <v-sheet width="100%" class="d-flex justify-center align-center" elevation="0" rounded="xl" color="#B0C7BC">
            <v-img
              
              width="auto"
              aspect-ratio="4/3"
              src="@/assets/kontrol_grubu.png"
            ></v-img>
          </v-sheet>
        </v-spacer>
        <v-spacer class="d-flex justify-center my-4">
          <v-sheet
            elevation="0"
            width="100%"
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
      <v-col md="8" xl="6" class="px-0">
        <v-spacer class="card-title">
          <div style=" font-size: 32px; line-height: 39px; padding-bottom: 10px">
            <span>Akıllı Kontrol Grubu</span> Evinizin kontrolünü parmak uçlarınızda tutun.
          </div>
          </v-spacer>
          <v-spacer class="card-text">
            <div>
            <span style=" font-size: 18px;">
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
  </v-card>
</v-spacer>


<v-spacer class="page d-flex justify-center">
  <v-card variant="tonal" style="border-radius: 20px;  max-width: 1000px;" class="my-4 py-4 sensor-card-color px-4 d-flex flex-wrap">
      <v-col md="8" xl="6" class="px-0" >
        <v-spacer class="card-title">
          <div style=" font-size: 32px; line-height: 39px; padding-bottom: 10px;">
            <span>Akıllı Sensörler</span> Ev otomasyonunuza veya işyerinizin güvenliğine entegre edilebilecek çok yönlü cihazlardır.
          </div>
        </v-spacer>
        <v-spacer class="card-text">
            <div>
              <span style=" font-size: 18px;">
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
      <v-col md="4" xl="6" class="px-0" >
        <v-spacer class="d-flex justify-center my-4">
        <v-sheet width="100%" class="d-flex justify-center align-center" elevation="0"  rounded="xl" color="#97A9B7">
          <v-img
            width="auto"
            aspect-ratio="4/3"
            src="@/assets/sensor.png"
          ></v-img>
        </v-sheet>
      </v-spacer>
      <v-spacer class="d-flex justify-center my-4">
          <v-sheet
            width="100%"
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
  </v-card>
</v-spacer>

  </v-container>
</template>
  
<script >
export default {
  data() {
    return {
     
    };
  },

  methods: {
    
  }
};
    
</script>

<style scoped >


@media screen and (max-width: 960px) {
  .header_element {
    display: flex;
    flex-wrap: wrap-reverse;
  }
}


@media screen and (min-width: 600px) {

  .page{
  padding: 5em;
}
}



.card-title{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-size: 32px;
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



.kontrol-card-color{
  background-color: #EBF7F1;
}

.sensor-card-color{
  background-color: #F0F6FB ;
}



.left-aligned-card {
  margin-left: 3em;
  text-align: left;
  color: black;
}
/* .main{
   padding: 0px;
  padding-left: 6em;
  padding-right: 6em; 
  max-width: 100vw !important;
} */


</style>
  
