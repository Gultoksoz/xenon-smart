<template>
   <v-container fluid class="main" style="margin-top: 100px;">
    <v-row class="header_element">
      <v-col cols="12" md="6">
        <v-card class="left-aligned-card" variant="text">
          <v-spacer class="custom-card-title d-flex flex-column" style="font-size: 28px;">
            <span class="font-weight-bold">Akıllı ev sistemleri,</span>
            <span>
              modern yaşamı yeniden tanımlayın.
            </span>
          </v-spacer>
          <v-spacer class="mb-4 mt-2" style="font-size: 16px;">
            <span>
              Akıllı ev sistemleri, teknolojinin en son ve en etkili halini sunarak yaşam tarzınıza değer katıyor. Evdeki her cihazın birbirine bağlı olması, geleceğin konforunu bugünden deneyimlemenizi sağlar.
            </span>
          </v-spacer>
          <v-spacer>

            <v-col>
            <v-btn class="main-button" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="$router.push('/category')">
              Ürünleri incele
            </v-btn></v-col>
          </v-spacer>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-img class="img"
          max-width="650"
          aspect-ratio="4/3"
          src="@/assets/main.png"
        ></v-img>
      </v-col>
    </v-row>
  <v-row class="d-flex flex-column mt-6">
    <v-spacer>
    <v-col class="d-flex flex-wrap align-center justify-space-around">
      <v-col cols="6" md="4" lg="2" >
        <v-card
           class="d-flex align-center justify-center  custom-card" @click="$router.push('/product')">
           <v-card-title class="d-flex align-center justify-center flex-column">
           <v-icon > <img src="@/assets/akilli_gecis_kontrol.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Geçiş Kontrol</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card  
           class="d-flex align-center justify-center  custom-card" @click="">
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kontrol_grubu.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kontrol Grubu</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card  
           class="d-flex align-center justify-center  custom-card" @click="">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_kamera.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kamera</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card 
           class="d-flex align-center justify-center  custom-card " @click="">
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kapi_kilidi.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kapı Kilidi</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card  
           class="d-flex align-center justify-center  custom-card" @click="">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_sensor.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Sensör</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6" md="4" lg="2">
        <v-card
           class="d-flex align-center justify-center custom-card" @click="">
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
        <h3 style="color: gray;">Xenon Smart Hakkında</h3>
      <!-- </v-col> -->
    </v-spacer>
    <v-spacer class="text-center">
      <!-- <v-col cols="12" class="d-flex flex-column custom-text "> -->
        <p class="font-weight-bold">Mucitler, mühendisler ve tasarımcılardan oluşan ekibimiz, akıllı ev deneyimini bir üst seviyeye taşıyan ürünler yaratmak için tutkuyla çalışıyor.</p>
        <p >Yenilikçi teknolojimizle gurur duyuyor ve keyif anlarınızın benzersiz olmasını sağlamak için sürekli olarak mükemmellik için çalışıyoruz.</p>
      <!-- </v-col> -->
    </v-spacer>
  </v-row>

  <v-row class="d-flex flex-column">
    
  </v-row>
  
  <v-card variant="tonal" class="my-4 py-4">
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
            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF" @click="$router.push('/category')">
              <strong>Daha fazla</strong>
            </v-btn>
          </div>
          </v-spacer>
      </v-col>
      <v-col md="8" xl="6" class="px-0" >
        <v-spacer class="d-flex justify-center my-4">
        <v-sheet width="80%" class="d-flex justify-center align-center" elevation="0"  rounded="xl" color="#cccccc">
          <v-img
            class="product-img"
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
import router from '@/router/index.js'
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

















/* @media screen and (max-width: 2560px) {
  .custom-card {
    width: 200px;
    height: 175px;
    background-color: #efefef;
    border-radius: 20px;
    
  }

  .about-text{
  margin-left: 9em;
  margin-right: 9em;
  font-size: 2em;
  font-weight: 550;
  color: black;
}

.custom-card-text{
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-card-title{
  font-size: 2em;
  margin-top: 45px;
  padding-top: 1em;

}

.product-card-title{
  font-size: 1.8em;
  margin-top: 60px;
  margin-left: 20px;
}

.card-slide{
  width: 680px;
  height: 150px;

}
.sheet-slide{
  width: 720px;
  margin-right: 4em;
}

.kontrol_grubu_img{
  margin: 4.4em;
}

.sensor-img{
  margin: 1em 4.8em 0 6em;
  
}

.product-card{
  border-radius: 25px;
  margin: 3.1em 6.25em 3.1em 6.25em;
  padding-top: 3.1em;
  padding-right: 1em;
  padding-left: 1em;
  padding-bottom: 3.1em;
  
}



} */




/* 
@media screen and (max-width: 1280px) {
  .custom-card {
    width: 200px;
    height: 175px;
    background-color: #efefef;
    border-radius: 20px;
    
  }

  .about-text{
  margin-left: 9em;
  margin-right: 9em;
  font-size: 2em;
  font-weight: 550;
  color: black;
}

.custom-card-text{
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-card-title{
  font-size: 2em;
  margin-top: 45px;
  padding-top: 1em;

}

.product-card-title{
  font-size: 1.8em;
  margin-top: 60px;
  margin-left: 20px;
}

.card-slide{
  width: 560px;
  height: 200px;
  margin-top: 1em;

}
.sheet-slide{
  width: 550px;
  height: 200px;
}

.kontrol_grubu_img{
  margin: 4.4em;
}

.sensor-img{
  margin: 1em 4.8em 0 6em;
  
}

.product-card{
  border-radius: 25px;
  margin: 3.1em 6.25em 3.1em 6.25em;
  padding-top: 3.1em;
  padding-right: 1em;
  padding-left: 1em;
  padding-bottom: 3.1em;
  
}



}

@media screen and (max-width: 960px) {
  .custom-card {
    width: 160px;
    height: 145px;
    background-color: #efefef;
    border-radius: 20px;
  }

  .about-text{
  margin-left: 5em;
  margin-right: 5em;
  font-size: 2em;
 
}

.custom-card-text{
  font-size: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-card-title{
  font-size: 1.5em;
  margin-top: 45px;
  padding-top: 1em;

}
.product-card-title{
  font-size: 1.4em;
  margin-top: 60px;
  margin-left: 20px;
}

.card-slide{
  width: 450px;
  height: 200px;

}
.sheet-slide{
  width: 440px;
  height: 200px;
}
.kontrol_grubu_img{
  margin: 0.5em;
}
.sensor-img{
  margin: 1em 4.8em 0 1em;
  
}
.product-card{
  border-radius: 25px;
  margin: 3.1em 6.25em 3.1em 6.25em;
  padding-top: 3.1em;
  padding-bottom: 3.1em;
  
}


}

@media screen and (max-width: 600px) {
  .custom-card {
    width: 120px;
    height: 105px;
    background-color: #efefef;
    border-radius: 20px;
  }

  .about-text{
  margin-left: 2em;
  margin-right: 2em;
  font-size: 1.5em;
 
}

.custom-card-text{
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-card-title{
  font-size: 1em;
  margin-top: 45px;
  padding-top: 1em;

}

.main-button{
  font-size: 0.8em;
}

.product-card-title{
  font-size: 1em;
  margin-top: 60px;
  margin-left: 20px;
}

.card-slide{
  width: 350px;
  height: 200px;

}

.sheet-slide{
  width: 340px;
  height: 200px;
}

.sensor-img{
  margin: 1em 4.8em 0 0.8em;
  
}

.product-card{
  border-radius: 25px;
  margin: 3.1em 6.25em 3.1em 6.25em;
  padding-top: 3.1em;
  padding-bottom: 3.1em;
  
}

.kontrol-sheet{
  height: 25em;
  width: 23em;
}

}
 */


.main-text{
  padding-top: 100px;
  
}

.product-img{
  /* margin-top: 1.8em; */
  
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
  font-size: 1em;
  color: black;
  text-align: center;
  margin: 1em 10em 0 10em;
}

.left-aligned-card {
  margin-left: 3em;
  text-align: left;
  color: black;
}
.main{
  /* padding: 0px;
  padding-left: 6em;
  padding-right: 6em; */
  max-width: 100vw !important;
}
.img{
  /* margin-left: auto; */
  
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
  
