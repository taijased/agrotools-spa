<template>
    <div class="text-xs-center">
        <v-container>
            <v-layout justify-center>
                <v-flex xs8>
                    <v-pagination
                        v-model="page"
                        :length="15"
                        circle
                    ></v-pagination>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1
    };
  }
};
</script>
