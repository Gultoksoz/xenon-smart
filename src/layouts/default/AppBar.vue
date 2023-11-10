<template>
  <v-app-bar app flat  height="150">
    
      <v-img
      class="logo"
        src="@/assets/Xenon-Logo.png" 
        max-height="40px" 
        max-width="120px" 
        contain
      />
    
    <v-toolbar-title class="menu">
      
      <v-sheet class="chips"> 
        <v-chip text-color="black" @click="" variant="text" class="custom-chip">Ürünler
          <v-icon end icon="mdi mdi-chevron-down"></v-icon>
        </v-chip>
        <v-chip text-color="black" @click="" variant="text" class="custom-chip">Online Mağaza</v-chip>
        <v-chip text-color="black" @click="" variant="text" class="custom-chip">Destek</v-chip>
        <v-chip text-color="black" @click="" variant="text" class="custom-chip">İletişim</v-chip>
      </v-sheet>
    </v-toolbar-title>

    

    <v-list >
        <v-list-group value="languageOptions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="TR"
              append-icon="mdi mdi-chevron-down"
            ></v-list-item>
          </template>

          <v-list-item
            
            title="TR"
            value="TR"
          ></v-list-item>

          <v-list-item
           
            title="EN"
            value="EN"
          ></v-list-item>

        </v-list-group>
      </v-list>
  <v-icon end icon="mdi mdi-web"></v-icon>
  </v-app-bar>
  
  <v-divider :thickness="151"></v-divider> 

</template>

<script >
  export default {
  data() {
    return {
      
      languageOptions: ['TR', 'EN'],
      
    }
  },
  methods: {
   
    }
    
}

</script>
<style scoped>


.logo{
  margin: 30px;
}
.chips{
  background-color: #e6e6e6;
  border-radius: 20px;
  padding:5px 10px 5px 10px;

}
.menu{
  display: flex;
  justify-content: center;
}

.custom-chip:hover {
  background-color: #fff;
 
}

.custom-chip--active {
  background-color: #fff; 
  
}

</style>