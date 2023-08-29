<script setup lang="ts">
const dialog = true;
</script>
<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-text>
          <input type="text" placeholder="Entry description task¨*" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false"
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
