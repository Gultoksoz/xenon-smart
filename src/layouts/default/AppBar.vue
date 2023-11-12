<template>
  <v-app-bar app flat  height="100">
    
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


      
  <v-select class="list-lang"
    v-model="selectedItem"
    :items="languageOptions"
    item-title="title"
    item-value="value"
    return-object
    variant="text"
  ></v-select>
   
  <v-icon class="icon" end icon="mdi mdi-web"></v-icon>
  </v-app-bar>
  
  <v-divider :thickness="102"></v-divider> 

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
      
    }
  },
  methods: {
   
   
    }
    
}

</script>
<style scoped>

.list-lang{
  max-width: 85px;
  margin-top: 20px;
}

.icon{
  margin-right: 35px;
}
.logo{
  margin: 30px;
  margin-left: 4rem;
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