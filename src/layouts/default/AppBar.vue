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
              <v-col cols="2" >
                <v-list-item class="dropdown-menu">
                  <v-icon size="48" color="grey-darken-2" icon="mdi mdi-home-outline"></v-icon>
                  <p> Akıllı Yaşam</p>
                  
                </v-list-item>
              </v-col>
              <v-col cols="2">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48" color="grey-darken-2" icon="mdi mdi-home-outline"></v-icon>
                  <p> Akıllı Yaşam</p>
                </v-list-item>
              </v-col>
              <v-col cols="2">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48" color="grey-darken-2" icon="mdi mdi-home-outline"></v-icon>
                  <p> Akıllı Yaşam</p>
                </v-list-item>
              </v-col>
              <v-col cols="2">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48" color="grey-darken-2" icon="mdi mdi-home-outline"></v-icon>
                  <p> Akıllı Yaşam</p>
                </v-list-item>
              </v-col>
              <v-col cols="2">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48" color="grey-darken-2" icon="mdi mdi-home-outline"></v-icon>
                  <p> Akıllı Yaşam</p>
                </v-list-item>
              </v-col>
              <v-col cols="2">
                <v-list-item  class="dropdown-menu">
                  <v-icon size="48" color="grey-darken-2" icon="mdi mdi-home-outline"></v-icon>
                  <p> Akıllı Yaşam</p>
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

</style>