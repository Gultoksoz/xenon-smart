<template>
   <v-container fluid class="main">
    <v-row no-gutters>
      <v-col cols="6" md="6" align="center" justify="center">
        <v-card class="left-aligned-card" variant="text">
          <v-card-title><strong>Akıllı ev sistemleri, </strong><br>modern yaşamı yeniden tanımlayın.</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
          <v-card-action>

            <v-col cols="4" sm="6" md="4">
            <v-btn block rounded="xl" size="small"  variant="outlined" color="primary">
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
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
    </v-col>
  </v-row>
  <v-row class="d-flex flex-column">
    <v-spacer>
      <v-col cols="12" class="d-flex align-center justify-center">
        
        <v-card  width="100px" height="100px" 
           class="d-flex align-center justify-center mr-4">
           <v-row class="d-flex align-center justify-center mt-4 ">
           <v-icon size="48" icon="mdi mdi-home-outline"></v-icon>
           <v-card-text class="card-font"> Akıllı Yaşam</v-card-text></v-row>
        </v-card>
        
        <v-card  width="100px" height="100px" class="d-flex align-center justify-center mr-4">
          3
        </v-card>
        
        <v-card width="100px" height="100px" class="d-flex align-center justify-center mr-4">
          6
        </v-card>
        
        <v-card width="100px" height="100px" class="d-flex align-center justify-center mr-4">
          12
        </v-card>
        
        <v-card width="100px" height="100px" class="d-flex align-center justify-center mr-4">
          6
        </v-card>
        
        <v-card width="100px" height="100px" class="d-flex align-center justify-center mr-4">
          12
        </v-card>
      </v-col>
    </v-spacer>
  </v-row>
   </v-container>
</template>
  
<script >
    
</script>

<style scoped >
.left-aligned-card {
  text-align: left;
  padding-left: 20px;
}
.main{
  padding: 0px;
}
.img{
  margin-left: auto;
}
.card-font{
  font-size: 11px;
}

</style>
  