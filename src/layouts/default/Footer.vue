<template>
  <v-footer class="d-flex footer-color">
    <v-spacer>
      <v-spacer no-gutters class=" d-flex flex-column align-center justify-center">
        <v-col cols="12" >
            <p class="text-center mt-4">Bizden en yeni haberleri ilk siz alın!</p>
        </v-col>
        <v-col cols="12" md="8" lg="6">
            <v-text-field class="email" density="comfortable" type="email" variant="solo" single-line rounded
              label="Bizden en yeni haberleri almak için mail adresinizi girin."
              v-model="email">
                <template v-slot:append-inner>
                    <v-icon class="custom-icon" @click="iconClickHandler" >mdi mdi-chevron-right</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="8" lg="6" class="d-flex align-center justify-space-around mt-4 mb-8" >
            <v-icon @click="iconClickHandler" > <img src="@/assets/facebook.svg"/></v-icon>
            <v-icon @click="iconClickHandler" > <img src="@/assets/instagram.svg"/></v-icon>
            <v-icon @click="iconClickHandler" > <img src="@/assets/youtube.svg"/></v-icon>
            <v-icon @click="iconClickHandler" > <img src="@/assets/linkedin.svg"/></v-icon>
        </v-col>

      </v-spacer>

            <v-divider class="custom-divider"  :thickness="3"></v-divider>

      <v-spacer class="d-flex flex-wrap justify-space-around">
          <v-col cols="12" lg="2" class="text-center">
              <img src="@/assets/xenon-logo-white.svg"/>
          </v-col>
          <v-col cols="6" md="3" lg="2">
              <router-link to="/about" class="link-baslik">Hakkımızda</router-link>

              <p class="text-color">Hakkımızda</p>
              <p class="text-color">Değerlerimiz</p>
              <p class="text-color">Vizyonumuz</p>
              <p class="text-color">Neden Xenon Smart</p>
          </v-col>
          <v-col  cols="6" md="3" lg="2">
            <router-link to="#" class="link-baslik">
              Ürünler
            </router-link>
                  
              <p class="text-color">Akıllı Geçiş Kontrol</p>
              <p class="text-color">Akıllı Kontrol Grubu</p>
              <p class="text-color">Akıllı Kamera</p>
              <p class="text-color">Akıllı Kapı Kilidi</p>
              <p class="text-color">Akıllı Sensör</p>
              <p class="text-color">Akıllı Aydınlatma</p>
          </v-col>
          <v-col  cols="6" md="3" lg="2" >
            <router-link to="#" class="link-baslik">
              Destek
            </router-link>

              <p class="text-color">Kullanım Kılavuzu</p>
              <p class="text-color">Sıkça Sorulan Sorular</p>
              <p class="text-color">Kurulum Videoları</p>
              <p class="text-color">Teslimat Bilgileri</p>
              <p class="text-color">Gizlilik Politikası</p>
              <p class="text-color">Güvenli Ödeme</p>
              <p class="text-color">Garanti ve İade</p>
              <p class="text-color">Mesafeli Satış Sözleşmesi</p>
          </v-col>
          <v-col  cols="6" md="3" lg="2">
              
              <router-link to="/contact" class="link-baslik">İletişim</router-link>

              <p class="text-color"><strong>Telefon</strong></p>
              <p class="text-color">+90 (850) 303 46 66</p><br>
              <p class="text-color"><strong>E-Posta</strong> info@xenonsmart.com</p><br>
              <p class="text-color"><strong>HQ -</strong> Ayazağa Mah. Kemerburgaz Cad. Vadi İstanbul Park Sitesi, 7A Blok  Kat:12 No:47 Sarıyer/İstanbul</p><br>
              <p class="text-color"><strong>R&D -</strong> Muallimköy Mah. Deniz Cad. No:143/5 A1 Blok K:11 No:84 
      Gebze, Kocaeli Türkiye</p>
          </v-col>

      </v-spacer>
      <v-divider class="custom-divider"  :thickness="3"></v-divider>

      <v-spacer cols="12">
          <p class="text-center text-caption">Xenon Smart©  Teknoloji. Bu sitede yer alan bilgiler, görseller ve tüm içeriklerin hakları Xenon Smart Teknoloji adına saklıdır. Şirket bilgilerde değişiklik yapma hakkını saklı tutar.
          </p>
      </v-spacer >
    </v-spacer>

  </v-footer>
  </template>

<script>
  import router from '@/router/index.js'
export default {
  data: () => ({
    email: "",
  }),

  methods: {
    iconClickHandler() {
      // İkon tıklandığında yapılacak işlemler burada gerçekleştirilir.
      console.log('Icon clicked!');
    },
  },




}
</script>

<style scoped>

.footer-color{
    background-color: black;
    color: white;
}
.email{
    margin-top: 2em;
}
.custom-icon {
   /* Chevron (ok) rengi */
   color: white;
  background-color: #007AFF; /* Daire rengi */
  border-radius: 50%; /* Dairenin kenarlarını yuvarlatma */
  padding: 8px;
}

.custom-divider {
  background-color: white; /* İstediğiniz rengi seçin */
}

.page-links{
    margin-left: 10em;
    margin-top: 1.5em;
}
.text-color{
    color: #BDBDBD;
    font-size: 0.8em;
}
.link-baslik{
    margin-bottom: 1em;
  color:white;
    
}
.left-align{
    color: #BDBDBD;
    font-size: 0.8em;
    margin-left: 7em;
}
</style>
