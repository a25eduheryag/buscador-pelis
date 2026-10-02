<script setup>
    import { ref } from 'vue'
    import { cercar } from '../services/communicationManager.js'
    import { id } from 'vuetify/locale'

    const cerca = ref('')
    const resultats = ref([])

    async function buscar() {
        resultats.value = await cercar(cerca.value)
        console.log(resultats)
    }

</script>

<template>
    <v-app-bar title="Cercador de pelicules"></v-app-bar>
    <v-main>
        <v-container>

        <v-text-field
            v-model="cerca"
            label="Què vols cercar?"
        />

        <v-btn @click="buscar">
            Cercar
        </v-btn>


        <v-row>
            <v-col v-for= "element in resultats" cols="12" md="3">
                <v-card>
                    {{ element.Title }}
                    <img width="300" :src="element.Poster" alt="Imatge poster">
                    {{ element.Year }}
                    <v-dialog>
                        
                    </v-dialog>
                </v-card> 
                
            </v-col>
        </v-row>

    </v-container>
    </v-main>
</template>