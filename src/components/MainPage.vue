<template>
   <v-container fluid class="main">
    <v-row no-gutters class="main-text">
      <v-col cols="6" md="6" align="center" justify="center">
        <v-card class="left-aligned-card" variant="text">
          <v-card-title class="custom-card-title "><strong class="bold-text">Akıllı ev sistemleri, </strong><br>modern yaşamı yeniden tanımlayın.</v-card-title>
          <v-card-text class="mb-4 mt-2">
            Akıllı ev sistemleri, teknolojinin en son ve en etkili halini sunarak yaşam tarzınıza değer katıyor. Evdeki her cihazın birbirine bağlı olması, geleceğin konforunu bugünden deneyimlemenizi sağlar.
          </v-card-text>
          <v-card-action>

            <v-col cols="4" sm="6" md="4">
            <v-btn rounded="xl" size="small"  variant="outlined" color="#007AFF">
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
      <v-col cols="12" class="d-flex align-center justify-center mt-8">
        
        <v-card
           class="d-flex align-center justify-center mr-10 custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column">
           <v-icon > <img src="@/assets/akilli_gecis_kontrol.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Geçiş Kontrol</v-card-text></v-card-title>
        </v-card>
        
        <v-card  
           class="d-flex align-center justify-center mr-10 custom-card">
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kontrol_grubu.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kontrol Grubu</v-card-text></v-card-title>
        </v-card>
        
        <v-card  
           class="d-flex align-center justify-center mr-10 custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_kamera.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kamera</v-card-text></v-card-title>
        </v-card>
        
        <v-card 
           class="d-flex align-center justify-center mr-10 custom-card ">
           <v-card-title class="d-flex align-center justify-center  flex-column">
            <v-icon > <img src="@/assets/akilli_kapi_kilidi.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Kapı Kilidi</v-card-text></v-card-title>
        </v-card>
        
        <v-card  
           class="d-flex align-center justify-center mr-10 custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_sensor.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Sensör</v-card-text></v-card-title>
        </v-card>
        
        <v-card
           class="d-flex align-center justify-center mr-10 custom-card">
           <v-card-title class="d-flex align-center justify-center flex-column ">
            <v-icon > <img src="@/assets/akilli_aydinlatma.svg"/></v-icon>
           <v-card-text class="custom-card-text">Akıllı Aydınlatma</v-card-text></v-card-title>
        </v-card>
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
  

  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="d-flex product-card" variant="tonal">
        <!-- Sol taraftaki metin -->
        <v-col cols="12" md="6">
          <v-card-title class="product-card-title">
            <strong>Akıllı Kontrol Grubu</strong>
            <br>Lorem ipsum dolor sit amet, consectetur
          </v-card-title>
          <v-card-text class="mt-6 ml-5">
            <!-- Yazılar buraya gelecek -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-col cols="6">
            <v-card-action>
           
              <v-btn class="ml-5" block rounded="xl" size="small" variant="flat" color="primary">
              Ürünleri incele
              </v-btn>
            </v-card-action>
          </v-col>
        </v-col>

        <!-- Sağ taraftaki resim -->
        <v-col cols="12" md="6">
          <v-img
            class="product-img"
            :width="650"
            aspect-ratio="4/3"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>

          <v-sheet
            class="mx-auto mt-6"
            elevation="0"
            max-width="700"
            rounded="xl"
            color="#cccccc"
            
          >
            <v-slide-group
              v-model="model"
              class="pa-4 mb-10"
              selected-class="bg-success"
              show-arrows
            >
              <v-slide-group-item
                v-for="n in 15"
                :key="n"
              >
                <v-card
                  color="#cccccc"
                  class="ma-4"
                  height="200"
                  width="100"
                  
                >
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <v-icon
                        
                        color="white"
                        size="48"
                        icon="mdi-close-circle-outline"
                      ></v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>

        </v-col>
      </v-card>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="d-flex product-card" variant="tonal">
        <!-- Sol taraftaki metin -->
        <v-col cols="12" md="6">
          <v-img
            class="product-img"
            :width="650"
            aspect-ratio="4/3"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>

          <v-sheet
            class="mx-auto mt-6"
            elevation="0"
            max-width="700"
            rounded="xl"
            color="#cccccc"
            
          >
            <v-slide-group
              v-model="model"
              class="pa-4 mb-10"
              selected-class="bg-success"
              show-arrows
            >
              <v-slide-group-item
                v-for="n in 15"
                :key="n"
              >
                <v-card
                  color="#cccccc"
                  class="ma-4"
                  height="200"
                  width="100"
                  
                >
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <v-icon
                        
                        color="white"
                        size="48"
                        icon="mdi-close-circle-outline"
                      ></v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>

        </v-col>


        <!-- Sağ taraftaki resim -->

        <v-col cols="12" md="6">
          <v-card-title class="product-card-title">
            <strong>Akıllı Kontrol Grubu</strong>
            <br>Lorem ipsum dolor sit amet, consectetur
          </v-card-title>
          <v-card-text class="mt-6 ml-5">
            <!-- Yazılar buraya gelecek -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-col cols="6">
            <v-card-action>
            
              <v-btn class="ml-5" block rounded="xl" size="small" variant="flat" color="primary">
                Ürünleri incele
              </v-btn>
            </v-card-action>
          </v-col>
        </v-col>

        
     
      </v-card>
    </v-col>
  </v-row>


  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="d-flex product-card" variant="tonal">
        <!-- Sol taraftaki metin -->
        <v-col cols="12" md="6">
          <v-card-title class="product-card-title">
            <strong>Akıllı Kontrol Grubu</strong>
            <br>Lorem ipsum dolor sit amet, consectetur
          </v-card-title>
          <v-card-text class="mt-6 ml-5">
            <!-- Yazılar buraya gelecek -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-col cols="6">
          <v-card-action>
           
            <v-btn class="ml-5" block rounded="xl" size="small" variant="flat" color="primary">
              Ürünleri incele
            </v-btn>
          </v-card-action>
        </v-col>
        </v-col>

        <!-- Sağ taraftaki resim -->
        <v-col cols="12" md="6">
          <v-img
            class="product-img"
            :width="650"
            aspect-ratio="4/3"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>

          <v-sheet
    class="mx-auto mt-6"
    elevation="0"
    max-width="700"
    rounded="xl"
    color="#cccccc"
    
  >
    <v-slide-group
      v-model="model"
      class="pa-4 mb-10"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
      >
        <v-card
          color="#cccccc"
          class="ma-4"
          height="200"
          width="100"
          
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>

        </v-col>
      </v-card>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="d-flex product-card" variant="tonal">
        <!-- Sol taraftaki metin -->
        <v-col cols="12" md="6">
          <v-img
            class="product-img"
            :width="650"
            aspect-ratio="4/3"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>

          <v-sheet
    class="mx-auto mt-6"
    elevation="0"
    max-width="700"
    rounded="xl"
    color="#cccccc"
    
  >
    <v-slide-group
      v-model="model"
      class="pa-4 mb-10"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
      >
        <v-card
          color="#cccccc"
          class="ma-4"
          height="200"
          width="100"
          
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>

        </v-col>


        <!-- Sağ taraftaki resim -->

        <v-col cols="12" md="6">
          <v-card-title class="product-card-title">
            <strong>Akıllı Kontrol Grubu</strong>
            <br>Lorem ipsum dolor sit amet, consectetur
          </v-card-title>
          <v-card-text class="mt-6 ml-5">
            <!-- Yazılar buraya gelecek -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-col cols="6">
          <v-card-action>
           
            <v-btn class="ml-5" block rounded="xl" size="small" variant="flat" color="primary">
              Ürünleri incele
            </v-btn>
          </v-card-action>
        </v-col>
        </v-col>

        
     
      </v-card>
    </v-col>
  </v-row>


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
}



.main-text{
  padding-top: 100px;
  
}

.product-img{
  margin-right: 70px;
  margin-left: auto;
}

.product-card{
  border-radius: 25px;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 50px;
}

.about-subtext{
  font-size: 1em;
  color: black;
  text-align: center;
  margin: 1em 10em 0 10em;
}

.left-aligned-card {
  margin-left: 5em;
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

.custom-card-title{
  font-size: 1.9em;
  margin-top: 45px;
  padding-top: 1em;

}

.bold-text {
  font-weight:bolder;
  font-size: 2.4em;
}

.product-card-title{
  font-size: 1.5em;
  margin-top: 80px;
  margin-left: 20px;
}

</style>
  