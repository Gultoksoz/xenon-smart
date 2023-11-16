<template>
   <v-container fluid class="main">
    <v-row class="main-text">
      <v-col cols="6" md="6" align="center" justify="center">
        <v-card class="left-aligned-card" variant="text">
          <v-card-title class="custom-card-title "><strong>Akıllı ev sistemleri, </strong><br>modern yaşamı yeniden tanımlayın.</v-card-title>
          <v-card-text class="mb-4 mt-2">
            Akıllı ev sistemleri, teknolojinin en son ve en etkili halini sunarak yaşam tarzınıza<br> değer katıyor. Evdeki her cihazın birbirine bağlı olması, geleceğin konforunu<br> bugünden deneyimlemenizi sağlar.
          </v-card-text>
          <v-card-action>

            <v-col cols="4" sm="6" md="4">
            <v-btn class="main-button" size="large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF">
              Ürünleri incele
            </v-btn></v-col>
          </v-card-action>
        </v-card>
    </v-col>
    <v-col cols="6" md="6">
      <v-img class="img"
        :width="650"
        aspect-ratio="4/3"
        cover
        src="@/assets/main.png"
      ></v-img>
    </v-col>
  </v-row>
  <v-row class="d-flex flex-column mt-6">
    <v-spacer>
      <v-col cols="12" class="d-flex align-center justify-space-around ml-6 mt-8">
        <v-col>
        <v-card
           class="d-flex align-center justify-center  custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column">
           <v-icon > <img src="@/assets/akilli_gecis_kontrol.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Geçiş Kontrol</v-card-text></v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card  
           class="d-flex align-center justify-center  custom-card">
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kontrol_grubu.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kontrol Grubu</v-card-text></v-card-title>
        </v-card>
      </v-col><v-col>
        <v-card  
           class="d-flex align-center justify-center  custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_kamera.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kamera</v-card-text></v-card-title>
        </v-card>
      </v-col><v-col>
        <v-card 
           class="d-flex align-center justify-center  custom-card ">
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kapi_kilidi.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kapı Kilidi</v-card-text></v-card-title>
        </v-card>
      </v-col><v-col>
        <v-card  
           class="d-flex align-center justify-center  custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_sensor.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Sensör</v-card-text></v-card-title>
        </v-card>
      </v-col><v-col>
        <v-card
           class="d-flex align-center justify-center custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_aydinlatma.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Aydınlatma</v-card-text></v-card-title>
        </v-card></v-col>
      </v-col>
    </v-spacer>
  </v-row>
  
  <v-row class="d-flex flex-column">
    <v-spacer>
      <v-col cols="12" class="d-flex align-center justify-center">
        <p class="about"> <strong> Xenon Smart Hakkında </strong> </p>
      </v-col>
    </v-spacer>
  </v-row>

  <v-row class="d-flex flex-column">
    <v-spacer>
      <v-col cols="12" class="d-flex flex-column custom-text ">
        
        <p class="about-text">Mucitler, mühendisler ve tasarımcılardan oluşan ekibimiz, akıllı ev deneyimini bir üst seviyeye taşıyan ürünler yaratmak için tutkuyla çalışıyor.</p>
        <p class="about-subtext">Yenilikçi teknolojimizle gurur duyuyor ve keyif anlarınızın benzersiz olmasını sağlamak için sürekli olarak mükemmellik için çalışıyoruz.</p>
      </v-col>
    </v-spacer>
  </v-row>
  
  
    <v-card class="d-flex product-card" variant="tonal">
    <v-row>
      <v-col cols="6" class="d-flex flex-column">
        <v-card-title class="product-card-title">
            <strong>Akıllı Geçiş Kontrol</strong> sistemleri daha <br> akıllı bir yaşam tarzına geçiş yapmak <br>için mükemmel bir seçenektir.
          </v-card-title>
          <v-card-text class="product-card-text">
            
            Gelişmiş teknoloji ve kullanıcı dostu tasarımı ile bu sistem, günlük işlerinizi <br>kolaylaştırırken güvende hissetmenizi sağlar. İşletmeler, kamu binaları,<br> apartmanlar ve diğer birçok yer için ideal bir güvenlik çözümü sunar. <br>QR Kod ve RFID okuyucu sistemler ile hem güvenlik hem de erişim kontrolünü<br> optimize edebilirsiniz.
          </v-card-text>
          <v-card-action class="product-button">

            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF">
              <strong>Daha fazla</strong>
            </v-btn>
          </v-card-action>

      </v-col>
      <v-col cols="6" class="d-flex flex-column">
        <v-sheet class="mx-auto mt-2" elevation="0" max-width="100%" max-height="100%" rounded="xl" color="#cccccc">
          <v-img
            class="product-img"
            :width="680"
            aspect-ratio="4/3"
            src="@/assets/giris_kontrol.png"
          ></v-img>
        </v-sheet>

          <v-sheet
            class="mt-6 ml-4 sheet-slide"
            elevation="0"
            max-width="680"
            rounded="xl"
            color="#E9E9E9"
            
          >
            <v-slide-group
              v-model="model"
              class="pa-4 mb-10 card-slide"
              selected-class="bg-success"
              show-arrows
            >
              <v-slide-group-item
                v-for="n in 6"
                :key="n"
              >
                <v-spacer
                  class="ma-4"
                  height="200"
                  width="105"
                  
                >
                  <div class="d-flex  align-center justify-center">
                    <v-scale-transition>
                      <v-spacer class="slider-text">
                      <v-icon size="62" class="mb-4 ml-4">  <img src="@/assets/rfid_kart.svg"/></v-icon><br>
                      RFID Kart Okuyucu</v-spacer>
                    </v-scale-transition>
                  </div>
                </v-spacer>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        
      </v-col>
    </v-row>
  </v-card>
  
  <v-card class="d-flex product-card kontrol-card-color" variant="tonal">
    <v-row>

      <v-col cols="6" class="d-flex flex-column">
        <v-sheet class=" mt-2 kontrol-sheet" elevation="0" rounded="xl" color="#B0C7BC">
          <v-img
            class="kontrol_grubu_img"
            :width="500"
            :height="490"
            aspect-ratio="4/3"
            
            src="@/assets/kontrol_grubu.png"
          ></v-img>
        </v-sheet>

          <v-sheet
            class=" mt-6"
            elevation="0"
            max-width="710"
            rounded="xl"
            color="#BBC6C1"
            
          >
            <v-slide-group
              v-model="model"
              class="pa-4 mb-10 card-slide"
              selected-class="bg-success"
              show-arrows
            >
              <v-slide-group-item
                v-for="n in 15"
                :key="n"
              >
                <v-spacer
                 
                  class="ma-4"
                  height="200"
                  width="100"
                  
                  
                >
                  <div class="d-flex fill-height align-start justify-center">
                    <v-scale-transition>
                      <v-spacer class="slider-text">
                      <v-icon size="62" class="mb-4 ml-1">  <img src="@/assets/priz.svg"/></v-icon><br>
                      Akıllı Priz Tekli </v-spacer>
                    </v-scale-transition>
                  </div>
                </v-spacer>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        
      </v-col>




      <v-col cols="6" class="d-flex flex-column">
        <v-card-title class="product-card-title">
            <strong>Akıllı Kontrol Grubu</strong><br>Evinizin kontrolünü parmak<br>uçlarınızda tutun.
          </v-card-title>
          <v-card-text class="product-card-text">
            
            Akıllı Kameralar, evinizin, işyerinizin veya herhangi bir mekanın güvenliğini ve<br>gözetimini en üst düzeye çıkarmak için tasarlanmış üstün bir teknoloji<br>ürünüdür. Bu kameralar, gelişmiş özelliklerle donatılmış, yüksek çözünürlüklü<br>video kaydı, hareket algılama, uzaktan erişim ve daha fazlası sunarak size<br>sakinlik ve güvenlik sağlar.
          </v-card-text>
          <v-card-action class="product-button">

            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF">
              <strong>Daha fazla</strong>
            </v-btn>
          </v-card-action>

      </v-col>
      
    </v-row>
  </v-card>


  <v-card class="d-flex product-card sensor-card-color" variant="tonal">
    <v-row>
      <v-col cols="6" class="d-flex flex-column">
        <v-card-title class="product-card-title">
            <strong>Akıllı Sensörler</strong><br>Ev otomasyonunuza veya işyerinizin<br>güvenliğine entegre edilebilecek çok<br>yönlü cihazlardır.
          </v-card-title>
          <v-card-text class="product-card-text">
            
            Gelişmiş teknoloji ve kullanıcı dostu tasarımı ile bu sistem, günlük işlerinizi <br>kolaylaştırırken güvende hissetmenizi sağlar. İşletmeler, kamu binaları,<br> apartmanlar ve diğer birçok yer için ideal bir güvenlik çözümü sunar. <br>QR Kod ve RFID okuyucu sistemler ile hem güvenlik hem de erişim kontrolünü<br> optimize edebilirsiniz.
          </v-card-text>
          <v-card-action class="product-button">

            <v-btn size="x-large" density="comfortable" rounded="xl"  variant="outlined" color="#007AFF">
              <strong>Daha fazla</strong>
            </v-btn>
          </v-card-action>

      </v-col>
      <v-col cols="6" class="d-flex flex-column">
        <v-sheet class="mx-auto mt-2" elevation="0" max-width="100%" max-height="100%" rounded="xl" color="#97A9B7">
          <v-img
            class="sensor-img"
            :width="500"
            aspect-ratio="4/3"
            src="@/assets/sensor.png"
          ></v-img>
        </v-sheet>

          <v-sheet
            class=" ml-5 mt-6 sheet-slide"
            elevation="0"
            max-width="680"
            rounded="xl"
            color="#BFCFDC"
            
          >
            <v-slide-group
              v-model="model"
              class="pa-4 mb-10 card-slide"
              selected-class="bg-success"
              show-arrows
            >
              <v-slide-group-item
                v-for="n in 6"
                :key="n"
              >
                <v-spacer
                  class="ma-4"
                  height="200"
                  width="100"

                  
                >
                  <div class="d-flex fill-height align-start justify-center">
                    <v-scale-transition>
                      <v-spacer class="slider-text">
                      <v-icon size="62" class="mb-4 ml-1">  <img src="@/assets/perde_rolesi.svg"/></v-icon><br>
                      Akıllı Priz Rolesi </v-spacer>
                    </v-scale-transition>
                  </div>
                </v-spacer>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        
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


.custom-text{
  align-items :center;
  justify-content :center;
  text-align: center;
}


@media screen and (max-width: 1920px) {
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
  width: 590px;
  height: 200px;

}
.sheet-slide{
  width: 500;
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



.main-text{
  padding-top: 100px;
  
}

.product-img{
  margin-top: 1.8em;
  
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
  padding: 0px;
}
.img{
  margin-left: auto;
  
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
  