<template>
  <v-app-bar app flat  height="100" >
    <v-row no-gutters>
      <v-col cols="3" class="d-flex align-center ">
        <v-img
          class="logo"
          src="@/assets/Xenon-Logo.png" 
          max-height="60px" 
          max-width="140px" 
          contain
        />
      </v-col>
    
      <v-col cols="6">
        <v-toolbar-title class="menu">
          <v-sheet class="chips">
            <v-chip
              text-color="black"
              variant="text"
              class="custom-chip" 
              @click.stop="drawer = !drawer"
              > Ürünler
              <v-icon end icon="mdi mdi-chevron-down"></v-icon>
            </v-chip>
          
            <v-chip text-color="black" @click="" variant="text" class="custom-chip">Online Mağaza</v-chip>
            <v-chip text-color="black" @click="" variant="text" class="custom-chip">Destek</v-chip>
            <v-chip text-color="black" @click="" variant="text" class="custom-chip">İletişim</v-chip>
          </v-sheet>
        </v-toolbar-title>
      </v-col>
      
      <v-col cols="3" class="d-flex align-center justify-end">
        <v-select class="list-lang"
          v-model="selectedItem"
          :items="languageOptions"
          item-title="title"
          item-value="value"
          return-object
          variant="text"
        ></v-select>
   
        <v-icon class="icon" icon="mdi mdi-web"></v-icon>
      </v-col>

      <v-divider  :thickness="2"></v-divider> 
 
    </v-row>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="center"
    temporary
  >
    <v-list>

      <v-row class="d-flex" >
              <v-col cols="2" class=" d-flex align-start justify-center" >
                <v-list-item class="dropdown-menu">
                  <v-icon size="48"> <img src="@/assets/akilli_gecis_kontrol.svg"/></v-icon><br>
                  <strong>Akıllı Geçiş Kontrol</strong>
                  <!--  <router-link class="custom-router-link" to="../product"></router-link> -->
                  <p> RFID Kart Okuyucu(Dış Ortam)</p>
                  <p> RFID Kart Okuyucu(İç Ortam) </p>
                  <p> QR Kod Okuyucu(Dış Ortam) </p>
                  <p> QR Kod Okuyucu(İç Ortam) </p>
                  <p> 1 Çıkış Geçiş Kontrol Paneli </p>
                  <p> 2 Çıkış Geçiş Kontrol Paneli </p>
                  <p> 8 Çıkış Geçiş Kontrol Paneli </p>
                  <p> 16 Çıkış Geçiş Kontrol Paneli </p>
                  <p> Temassız Çıkış Butonu</p>
                  
                </v-list-item>
              </v-col>
              <v-col cols="2" class=" d-flex align-start justify-center">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48"> <img src="@/assets/akilli_kontrol_grubu.svg"/></v-icon><br>
                  <strong>Akıllı Kontrol Grubu</strong>
                  <p>Akıllı Tekli Priz </p>
                  <p> Akıllı Çoklu Priz </p>
                  <p> Akıllı Tekli Anahtar </p>
                  <p> Akıllı İkili Anahtar </p>
                  <p> Akıllı Perde Kontrol Rolesi </p>
                  <p> Akıllı Röle </p>
                  <p> Akıllı Dokunmatik Anahtar</p>
                </v-list-item>
              </v-col>
              <v-col cols="2" class=" d-flex align-start justify-center">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48" > <img src="@/assets/akilli_kamera.svg"/></v-icon><br>
                  <strong>Akıllı Kamera</strong>
                  <p> Bebek Kamerası </p>
                  <p> Bebek Kamerası(Monitörlü) </p>
                  <p> Dış Ortam Kamerası </p>
                  <p> Dış Ortam Kamerası(Bataryalı) </p>
                  <p> İç Ortam Kamerası</p>
                </v-list-item>
              </v-col>
              <v-col cols="2" class=" d-flex align-start justify-center">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48"> <img src="@/assets/akilli_kapi_kilidi.svg"/></v-icon><br>
                  <strong>Akıllı Kapı Kilidi</strong>
                  <p> Akıllı Kapı Kilidi-X8051 </p>
                  <p> Akıllı Kapı Kilidi-X8052 </p>
                  <p> Akıllı Kapı Kilidi-X8056 </p>
                  <p> Akıllı Kapı Kilidi-X8057</p>
                </v-list-item>
              </v-col>
              <v-col cols="2" class=" d-flex align-start justify-center">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48"> <img src="@/assets/akilli_sensor.svg"/></v-icon><br>
                  <strong>Akıllı Sensör</strong>
                  <p> Akıllı Kapı Sensörü </p>
                  <p> Akıllı Hareket Sensörü </p>
                  <p> Akıllı Duman Sensörü </p>
                  <p> Akıllı Titreşim Sensörü </p>
                  <p> Akıllı Su Sensörü </p>
                  <p> Akıllı El Sensörü</p>
                </v-list-item>
              </v-col>
              <v-col cols="2" class=" d-flex align-start justify-center">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48"> <img src="@/assets/akilli_aydinlatma.svg"/></v-icon><br>
                  <strong>Akıllı Aydınlatma</strong>
                  <p> Akıllı RGB Led Ampül </p>
                  <p> Akıllı Tekli Anahtar </p>
                  <p>Akıllı İkili Anahtar</p>
                </v-list-item>
              </v-col> 
            </v-row>
    </v-list>
  </v-navigation-drawer>
  

</template>

<script >
  export default {
  data() {
    return {
      selectedItem:  { title: 'TR', value: 'TR' },
      languageOptions: [
          { title: 'TR', value: 'TR' },
          { title: 'EN', value: 'EN' },
         
        ],
      
      drawer: false,
      group: null,
     
    }
  },

  watch: {
      group () {
        this.drawer = false
      },
    },
 
}

</script>
<style scoped>

.logo{
  margin-left: 10em;
}

.dropdown-menu{
  text-align: left;
  margin-left: 40px;
}

.list-lang{
  max-width: max-content;
  margin-top: 1.2em;
 
  
}
.icon{
  margin-right: 4em
}

.chips{
  background-color: #e6e6e6;
  border-radius: 20px;
  padding:5px 10px 5px 10px;

}
.menu{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.custom-chip:hover {
  background-color: #fff;
 
}

.custom-chip--active {
  background-color: #fff; 
  
}
.dropdown-menu p {
  color: gray;
  font-size: 0.8em;
}

</style>