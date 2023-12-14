<template>
  <v-app-bar app flat  height="180"  >
    <v-row no-gutters class="d-flex align-start justify-center">
      <v-spacer class="d-flex flex-wrap" style="max-width: 1110px;">

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
          <v-sheet  style="background-color: #E6E6E6; border-radius: 45px;">
            <v-chip-group
              v-model="selection"
              selected-class="custom-chip"
              mandatory
            >

            <v-chip class="ml-1" text-color="black" @click="$router.push('/')" variant="text" > <span class="chips">Ana Sayfa</span></v-chip>

              <v-chip
                
                text-color="black"
                variant="text"
                @click.stop="drawer = !drawer"
                > <span class="chips"> Ürünler </span>
                <v-icon end icon="mdi mdi-chevron-down"></v-icon>
              </v-chip>
          
            <v-chip  text-color="black" href="https://shop.xenonsmart.com/" variant="text" > <span class="chips">Online Mağaza </span></v-chip>
            <v-chip  text-color="black"  variant="text" > <span class="chips">Destek </span></v-chip>
            <v-chip  text-color="black" @click="$router.push('/contact')" variant="text" > <span class="chips">İletişim </span></v-chip></v-chip-group>
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
    <v-card class="d-flex flex-wrap nav" style="overflow-y: scroll; max-width: 1280px;" variant="flat" >
      <v-col cols="12" lg="2" xl="2">
        <v-spacer class="d-flex justify-space-around">
        <v-icon size="48"> <img src="@/assets/akilli_gecis_kontrol.svg"/></v-icon><br>
      </v-spacer>
        <router-link class="link" to="/accesscontrolcategory">Akıllı Geçiş Kontrol</router-link>
        <v-spacer  v-for="(item) in smartPassControl"
            :key="item.id">
          <span class="page-link" @click="$router.push(item.url)">
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-spacer class="d-flex justify-space-around">
        <v-icon size="48"> <img src="@/assets/akilli_kontrol_grubu.svg"/></v-icon><br></v-spacer>
        <router-link class="link" to="#">Akıllı Kontrol Grubu</router-link>
        <v-spacer  v-for="(item) in smartControl"
            :key="item.id">
          <span class="page-link" @click="$router.push(item.url)">
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      
      <v-col cols="12" lg="2" xl="2">
        <v-spacer class="d-flex justify-space-around">
        <v-icon size="48"> <img src="@/assets/akilli_sensor.svg"/></v-icon><br></v-spacer>
        <router-link class="link" to="#">Akıllı Sensör</router-link>
        <v-spacer  v-for="(item) in smartSensor"
            :key="item.id">
          <span class="page-link" @click="$router.push(item.url)">
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-spacer class="d-flex justify-space-around">
        <v-icon size="48"> <img src="@/assets/akilli_aydinlatma.svg"/></v-icon><br></v-spacer>
        <router-link class="link" to="/smartlightingcategory">Akıllı Aydınlatma</router-link>
        <v-spacer  v-for="(item) in smartAydinlatma"
            :key="item.id">
          <span class="page-link" @click="$router.push(item.url)">
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
      <v-col cols="12" lg="2" xl="2">
        <v-spacer class="d-flex justify-space-around">
        <v-icon size="48"> <img src="@/assets/akilliyasam.svg"/></v-icon><br></v-spacer>
        <router-link class="link" to="">Akıllı Yaşam</router-link>
        <v-spacer  v-for="(item) in smartLife"
            :key="item.id">
          <span class="page-link" @click="$router.push(item.url)">
            {{ item.text }}
          </span>
        </v-spacer>
      </v-col>
    </v-card>
  </v-navigation-drawer>


  
  

</template>

<script >
 
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
          text: "RFID Kart Okuyucu",
          url:"/rfid"
        },
        {
          id: 1,
          text: "QR Kod Okuyucu",
          url:"/qrcode"
        },
        {
          id: 2,
          text: "Geçiş Kontrol Paneli",
          url:"/accesscontrolpanel"
        },
        {
          id: 3,
          text: "Temassız Çıkış Butonu",
          url:""
        },
        {
          id: 4,
          text: "QR + RFID Okuyucu",
          url:"/qrcoderfid"
        },
        {
          id: 5,
          text: "Doors Cloud",
          url:"/doorscloud"
        }
      ],
      smartControl: [
        {
          id: 0,
          text: "Akıllı Tekli Priz",
          url:"/singlesocket"
        },
        {
          id: 1,
          text: "Akıllı Çoklu Priz",
          url:""
        },
        {
          id: 2,
          text: "Akıllı Perde Kontrol Rolesi",
          url:"/curtainswitch"
        },
        {
          id: 3,
          text: "Akıllı Röle",
          url:""
        },
      ],
      smartSensor: [
        {
          id: 0,
          text: "Akıllı Kapı Sensörü",
          url:"/doorsensor"
        },
        {
          id: 1,
          text: "Akıllı Hareket Sensörü",
          url:"/motionsensor"
        },
        {
          id: 2,
          text: "Akıllı Duman Sensörü",
          url:""
        },
        {
          id: 3,
          text: " Akıllı Titreşim Sensörü",
          url:""
        },
        {
          id: 4,
          text: "Akıllı Su Sensörü ",
          url:""
        },
        {
          id: 5,
          text: "Akıllı El Sensörü",
          url:""
        }
      ],
      smartAydinlatma: [
        {
          id: 0,
          text: "Akıllı RGB Led Ampül ",
          url:"/rgbled"
        },
        {
          id: 1,
          text: "Akıllı Tekli Switch",
          url:""
        },
        {
          id: 2,
          text: "Akıllı İkili Switch",
          url:""
        },
        {
          id: 3,
          text: "Akıllı Dokunmatik Anahtar",
          url:"/touchtripleswitch"
        }
      ],
      smartLife: [
        {
          id: 0,
          text: "Akıllı Kameralar",
          url:""
        },
        {
          id: 1,
          text: "Akıllı Kapı Kilitleri",
          url:""
        },
        {
          id: 2,
          text: "Akıllı Basküller",
          url:""
        },
        {
          id: 3,
          text: "Akıllı Röle",
          url:""
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
    myEventHandler() {
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

.page-link:hover {
  cursor: pointer;
  font-weight: bold;
}


.link{
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.custom-chip{
background-color: white;
border-radius: 15px;
}

@media screen and (min-width: 128px) {
.nav{
  justify-content: end;
}
}


@media screen and (max-width: 600px) {
  .chips{
    font-size: 8px;
    margin: 0px;
    padding: 0px;
}

.v-chip-group .v-chip{
  margin: 0px;
}

.v-chip.v-chip--size-default{
  padding: 0px 7px;
}


}


</style>
