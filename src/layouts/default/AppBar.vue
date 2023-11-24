<template>
  <v-app-bar app flat  height="180" >
    <v-row no-gutters class="d-flex align-start justify-center">
      <v-spacer class="d-flex flex-wrap" style="max-width: 2560px;">

      <v-col cols="12" md="3" class="d-flex align-center justify-center mb-3">
        <v-img
          class="logo mt-1"
          src="@/assets/Xenon-Logo.png" 
          contain
          height="auto"
          max-height="30px"
          @click="$router.push('/')"
        />
      </v-col>
    
      <v-col cols="12" md="9"  class="d-flex px-0 py-0">
        <v-col cols="9" class="d-flex align-center justify-center  py-0">
        <v-spacer class="menu d-flex">
          <v-sheet class="chips px-4" style="background-color: #E6E6E6; border-radius: 45px;">
            <v-chip-group
              v-model="selection"
              selected-class="custom-chip"
              mandatory
            >
              <v-chip
                class="mx-1"
                text-color="black"
                variant="text"
                @click.stop="drawer = !drawer"
                > Ürünler
                <v-icon end icon="mdi mdi-chevron-down"></v-icon>
              </v-chip>
          
            <v-chip class="mx-1" text-color="black" @click="" variant="text" >Online Mağaza</v-chip>
            <v-chip class="mx-1" text-color="black" @click="" variant="text" >Destek</v-chip>
            <v-chip class="mx-1" text-color="black" @click="$router.push('/contact')" variant="text" >İletişim</v-chip></v-chip-group>
          </v-sheet>
        </v-spacer>
        </v-col>
        <v-col cols="3" class=" py-0">
          <v-spacer class="d-flex align-center justify-center">

            <v-select class="list-lang mt-5"
              v-model="selectedItem"
              :items="languageOptions"
              item-title="title"
              item-value="value"
              return-object
              variant="text"
            ></v-select>
            
            <v-icon icon="mdi mdi-web" style="background-color: #E6E6E6; border-radius: 20px;"></v-icon>
          </v-spacer>
        </v-col>


      </v-col>
      
      <!-- <v-col cols="3" class="d-flex align-center justify-end">
        
      </v-col> -->

       
 
    </v-spacer>
 
    </v-row>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    :location="resize > 1280 ? 'center': 'left'"
    class="py-3"
  >
    <v-card class="d-flex flex-wrap" style="overflow-y: scroll;">
      <v-col cols="12" lg="2" xl="2">
        <v-icon size="48"> <img src="@/assets/akilli_gecis_kontrol.svg"/></v-icon><br>
        <router-link class="link" to="#">Akıllı Geçiş Kontrol</router-link>
        <v-spacer  v-for="(item) in smartPassControl"
            :key="item.id">
          <span>
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-icon size="48"> <img src="@/assets/akilli_kontrol_grubu.svg"/></v-icon><br>
        <router-link class="link" to="#">Akıllı Kontrol Grubu</router-link>
        <v-spacer  v-for="(item) in smartControl"
            :key="item.id">
          <span>
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-icon size="48" > <img src="@/assets/akilli_kamera.svg"/></v-icon><br>
        <router-link class="link" to="#">Akıllı Kamera</router-link>
        <v-spacer  v-for="(item) in smartCamera"
            :key="item.id">
          <span>
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-icon size="48"> <img src="@/assets/akilli_kapi_kilidi.svg"/></v-icon><br>
        <router-link class="link" to="#">Akıllı Kapı Kilidi</router-link>
        <v-spacer  v-for="(item) in smartDoorKey"
            :key="item.id">
          <span>
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-icon size="48"> <img src="@/assets/akilli_sensor.svg"/></v-icon><br>
        <router-link class="link" to="#">Akıllı Sensör</router-link>
        <v-spacer  v-for="(item) in smartSensor"
            :key="item.id">
          <span>
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-icon size="48"> <img src="@/assets/akilli_aydinlatma.svg"/></v-icon><br>
        <router-link class="link" to="#">Akıllı Aydınlatma</router-link>
        <v-spacer  v-for="(item) in smartAydinlatma"
            :key="item.id">
          <span>
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
    </v-card>
  </v-navigation-drawer>


  
  

</template>

<script >
  import router from '@/router/index.js'
  export default {
  data() {
    return {
      selection: '',
      selectedItem:  { title: 'TR', value: 'TR' },
      languageOptions: [
          { title: 'TR', value: 'TR' },
          { title: 'EN', value: 'EN' },
        ],
      
      drawer: false,
      group: null,
      resize: window.innerWidth,
      smartPassControl: [
        {
          id: 0,
          text: "RFID Kart Okuyucu(Dış Ortam)",
        },
        {
          id: 1,
          text: "RFID Kart Okuyucu(İç Ortam)",
        },
        {
          id: 2,
          text: "QR Kod Okuyucu(Dış Ortam)",
        },
        {
          id: 3,
          text: "QR Kod Okuyucu(İç Ortam)",
        },
        {
          id: 4,
          text: "1 Çıkış Geçiş Kontrol Paneli",
        },
        {
          id: 5,
          text: "2 Çıkış Geçiş Kontrol Paneli",
        },
        {
          id: 6,
          text: "8 Çıkış Geçiş Kontrol Paneli"
        },
        {
          id: 7,
          text: "16 Çıkış Geçiş Kontrol Paneli",
        },
        {
          id: 8,
          text: "Temassız Çıkış Butonu"
        }
      ],
      smartControl: [
        {
          id: 0,
          text: "Akıllı Tekli Priz",
        },
        {
          id: 1,
          text: "Akıllı Çoklu Priz",
        },
        {
          id: 2,
          text: "Akıllı Tekli Anahtar",
        },
        {
          id: 3,
          text: "Akıllı İkili Anahtar",
        },
        {
          id: 4,
          text: "Akıllı Perde Kontrol Rolesi",
        },
        {
          id: 5,
          text: "Akıllı Röle",
        },
        {
          id: 6,
          text: "Akıllı Dokunmatik Anahtar"
        }
      ],
      smartCamera: [
        {
          id: 0,
          text: " Bebek Kamerası",
        },
        {
          id: 1,
          text: "Bebek Kamerası(Monitörlü)",
        },
        {
          id: 2,
          text: "Dış Ortam Kamerası",
        },
        {
          id: 3,
          text: "Dış Ortam Kamerası(Bataryalı)",
        },
        {
          id: 4,
          text: "İç Ortam Kamerası",
        }
      ],
      smartDoorKey: [
        {
          id: 0,
          text: "Akıllı Kapı Kilidi-X8051",
        },
        {
          id: 1,
          text: "Akıllı Kapı Kilidi-X8052",
        },
        {
          id: 2,
          text: "Akıllı Kapı Kilidi-X8056",
        },
        {
          id: 3,
          text: "Akıllı Kapı Kilidi-X8057",
        }
      ],
      smartSensor: [
        {
          id: 0,
          text: "Akıllı Kapı Sensörü",
        },
        {
          id: 1,
          text: "Akıllı Hareket Sensörü",
        },
        {
          id: 2,
          text: "Akıllı Duman Sensörü",
        },
        {
          id: 3,
          text: " Akıllı Titreşim Sensörü",
        },
        {
          id: 4,
          text: "Akıllı Su Sensörü ",
        },
        {
          id: 5,
          text: "Akıllı El Sensörü",
        }
      ],
      smartAydinlatma: [
        {
          id: 0,
          text: "Akıllı RGB Led Ampül ",
        },
        {
          id: 1,
          text: "Akıllı Tekli Anahtar",
        },
        {
          id: 2,
          text: "Akıllı İkili Anahtar",
        }
      ],
    }
  },

  watch: {
      group () {
        this.drawer = false
      },
      drawer(val) {
        if(!val)
          this.selection = ""
      }
    },
  methods: {
    myEventHandler(e) {
      this.resize = window.innerWidth;
      }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
}

</script>
<style scoped>

@media screen and (max-width: 960px) {
  .logo{
    top: 20px;
  }
}

.logo:hover {
  cursor: pointer;
}

.link{
  font-weight: bold;
  color: black;
}

.custom-chip{
background-color: white;
border-radius: 15px;
}

</style>
