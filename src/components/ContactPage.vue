
<template>
    <v-container fluid >
        <v-row class="d-flex header">
            <v-col cols="6" class="d-flex flex-column align-start justify-start">
                <p class="small-text left-side">Xenon Smart</p>
                <strong class="big-text left-side">İletişim</strong>
            </v-col >
            <v-divider  :thickness="3"></v-divider>
        </v-row>
  
  
 
   </v-container>
 </template>
   
 <script >
 
 export default {
   data() {
     return {
      
      
     };
   },

   methods: {
   
  },
 };
     
 </script>
 <style scoped>
 .header{
     padding-top: 10em;
  }
.main{
    padding: 3em 6em 0em 9em;
}
  .small-text{
    font-size: 1em;
    color: black;
  }
 .big-text{
    font-size: 2em;
 }
 .left-side{
    margin-left: 143px;
 }

 </style>
