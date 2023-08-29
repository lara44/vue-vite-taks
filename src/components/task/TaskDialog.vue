<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../../stores/taskStore.ts';

const taskStore = useTaskStore();
const descriptionTask = ref<string>('');
const errorTaskMessages = ref<string[]>([]);

const validateTask = () => {
  let errorTask = false;
  errorTaskMessages.value = [];
  if (!descriptionTask.value)
    errorTaskMessages.value.push('Entry description task*');
  if (errorTaskMessages.value.length > 0) errorTask = true;
  return errorTask;
};

const sendTask = () => {
  if (validateTask()) {
    return;
  }

  taskStore.addTask({ id: 1, description: descriptionTask.value });
  taskStore.isDialogTask = false;
  descriptionTask.value = '';
};
</script>
<template>
  <div class="text-center">
    <v-dialog v-model="taskStore.isDialogTask" width="auto">
      <v-card class="mx-auto" max-width="500">
        <v-header>
          <h3 class="text-center">Add New Task</h3>
        </v-header>
        <v-card-text>
          <v-text-field
            label="Entry description task¨*"
            v-model="descriptionTask"
          ></v-text-field>
          <pre>{{ descriptionTask }}</pre>
          <div
            v-for="(error, index) in errorTaskMessages"
            style="color: red; text-align: center"
          >
            <span>{{ error }}</span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="taskStore.isDialogTask = false"
            >Close</v-btn
          >
          <v-btn color="success" @click="sendTask()">Save Task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
